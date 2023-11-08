
use actix_web::{HttpRequest, HttpResponse, web};
use actix_multipart::Multipart;
use futures::StreamExt;
use std::fs::{File, self};
use std::io::{Write, self};
use crate::auth::jwt::JwToken;

pub async fn upload_handler(mut images: Multipart, token: JwToken, req: HttpRequest) -> Result<HttpResponse, actix_web::Error> {
    println!("Request {:?}",  req.headers().get("date").unwrap());
    let date: String = req.headers().get("date").unwrap().to_str().unwrap().to_string();
    let user_name = token.username;

    let user_directory = format!("images/{}", user_name);
    if !user_directory_exists(&user_directory) {
        create_directory(&user_directory)?;
    }

    // Check if date directory exists within the user's directory, create if not
    let date_directory = format!("{}/{}", user_directory, date);
    if !date_directory_exists(&date_directory) {
        create_directory(&date_directory)?;
    }

    while let Some(item) = images.next().await {
        let mut field = item?;
        println!("{}", field.name());
        let cond = field.content_disposition();
        println!("{:?}", cond.get_filename());
        // Generate a random filename for the image (or use a meaningful filename based on your requirements)
        let file_name_op = cond.get_filename();
        let mut file_name: &str = "";
        match file_name_op {
            None => {continue;}
            Some(t) => {file_name = t}
        }
        // Create a new file on the server to save the image
        let mut file = File::create(format!("images/{}/{}/{}", user_name, date, file_name))
            .map_err(|_| actix_web::error::ErrorInternalServerError("Error creating file"))?;

        // Write the binary data (chunk) directly to the file
        while let Some(chunk) = field.next().await {
            file.write_all(&chunk?)
                .map_err(|_| actix_web::error::ErrorInternalServerError("Error writing to file"))?;
        }
    }

    Ok(HttpResponse::Ok().into())
}

fn user_directory_exists(path: &str) -> bool {
    fs::metadata(path).is_ok()
}

fn date_directory_exists(path: &str) -> bool {
    fs::metadata(path).is_ok()
}

fn create_directory(path: &str) -> io::Result<()> {
    fs::create_dir_all(path)
}
