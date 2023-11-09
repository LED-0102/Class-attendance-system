mod upload_files;
mod classes;

use actix_web::web;
use upload_files::upload_handler;
use classes::fetch_class;
pub fn api_config (cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/api")
            .route("/uploadfiles", web::post().to(upload_handler))
            .route("/classes", web::get().to(fetch_class))
    );
}