# 🏡 Real-Estate Project

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/renaldyjohan/real-estate/blob/main/LICENSE)  
[![Node.js CI](https://github.com/renaldyjohan/real-estate/actions/workflows/nodejs.yml/badge.svg)](https://github.com/renaldyjohan/real-estate/actions/workflows/nodejs.yml)

---

## 🚀 Overview

A **modern and scalable real estate web application template** powered by **Payload CMS**, designed for efficient property listings, user authentication, and media management. This project is a great starting point for building real estate marketplaces or agency websites with ease and flexibility.

---

## ✨ Key Features

- 🔐 **User Authentication & Authorization** with secure session management
- 🖼️ **Media Management** to handle property images and documents effortlessly
- 📄 **Flexible CMS Schema** built on Payload CMS for customization
- 🐳 **Docker Compose** setup for simplified local development and deployment
- ⚙️ **Easy Environment Configuration** with straightforward .env management

---

## 🛠️ Technologies Used

- **Node.js** & **Express.js** (Backend server)
- **Payload CMS** (Headless CMS for content and media management)
- **MongoDB** (Database)
- **Docker & Docker Compose** (Containerization and environment setup)
- React-powered **Payload Admin Panel**

---

## 📥 Getting Started

### Prerequisites

- [Docker](https://docker.com) & [Docker Compose](https://docs.docker.com/compose/) installed
- [Git](https://git-scm.com/) installed

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/renaldyjohan/real-estate.git
   cd real-estate
   ```

2. **Configure Environment Variables**  
   Copy the example environment file and update as needed:

   ```bash
   cp .env.example .env
   ```

   Edit `.env` with the following vital details:

   ```env
   # MongoDB connection string - replace with your own DB URI
   MONGODB_URI=mongodb://localhost:27017/realestate

   # Payload CMS secret key for authentication - use a strong and secure key
   PAYLOAD_SECRET=supersecretkey123
   ```

### Running Locally

Start the application with Docker Compose:

```bash
docker-compose up
```

Open your browser and visit:  
[http://localhost:3000/admin](http://localhost:3000/admin)  
Login with your credentials to manage real estate listings and media.

---

## ☁️ Deployment

This project is deployable on any Docker-compatible cloud provider such as AWS, Azure, Heroku, or DigitalOcean. Ensure the environment variables on your production server mirror those in your `.env` file.

---

## 🤝 Contributing

Contributions are **warmly welcomed**!

- Fork the repository
- Add features or fixes
- Submit a pull request with a clear description of changes

---
