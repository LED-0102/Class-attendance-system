# Class Attendance System with Facial Recognition

## Overview

Welcome to the Class Attendance System with Facial Recognition project! This innovative solution automates the process of marking attendance in a classroom by utilizing facial recognition technology. The system is designed to analyze a photo of the class, detect the faces of students, and automatically mark their attendance.

## Key Features

- **Facial Recognition:** The system employs advanced facial recognition algorithms to identify and match the faces of students in the uploaded class photo.

- **Automatic Attendance Marking:** Once the faces are recognized, the system automatically updates the attendance records for each student, eliminating the need for manual attendance taking.

- **User-Friendly Interface:** The project includes a simple and intuitive interface for both professors and students. Professors can easily upload class photos, and students can view their attendance records.

## How to Use

### 1. Professor's Dashboard

- **Login:** Professors can log in with their credentials to access the dashboard.

- **Upload Class Photo:** Professors can upload a photo of the class to the system.

- **Review and Confirm:** After the system processes the photo, professors can review the detected faces and confirm the attendance.

### 2. Student's Portal

- **Login:** Students can log in to view their attendance records.

- **Attendance History:** Students can check their attendance history, helping them stay informed about their class attendance.

## Technologies Used

- **Facial Recognition Library:** Python/Insightface.

- **Web Development Framework:** React.js, Actix web, Postgresql

## Installation Guide

This project is a web-based attendance taking website developed using Rust, Python, and Node.js. It allows you to track and manage attendance for various events or classes.

## Prerequisites

Before you can run this application, ensure that you have the following dependencies installed on your device:

- Rust
- Python
- Node.js

## Getting Started

1. Fork this repository to your own GitHub account.

2. Switch to the master branch of your forked repository.

3. Navigate to the frontend directory of the project and install the required Node.js packages by running:
4. ```npm start```


5. Switch to the backend directory of the project and build the Rust application by running:

```shell
cd backend
cargo build
cargo run


Switch back to the frontend directory and start the frontend application by running:
npm start


cd frontend/src (or .src if you are on frontend)
uvicorn --reload main:app --port 8000


