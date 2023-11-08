mod upload_files;

use actix_web::web;
use upload_files::upload_handler;
pub fn api_config (cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/api")
            .route("/uploadfiles", web::post().to(upload_handler))
    );
}