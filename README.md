# VidTube Backend

VidTube is a backend project inspired by YouTube, built using Node.js, Express, and MongoDB. It provides essential functionalities like user authentication, video uploads, likes, comments, playlists, and subscriptions.

## Features
- User authentication (JWT-based)
- Video upload and management
- Like and comment system
- Playlist creation and management
- Subscription functionality
- API routes for testing and health checks
- Middleware for authentication and error handling

## Tech Stack
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB & Mongoose** - NoSQL database and ORM
- **JWT (jsonwebtoken)** - Authentication
- **Multer** - File upload middleware
- **Cloudinary** - Cloud storage for videos/images
- **Cors** - Cross-Origin Resource Sharing
- **Dotenv** - Environment variable management

## Project Structure
```
vidtube-backend/
├── src/
│   ├── controllers/         # Route controllers
│   ├── db/                  # Database connection
│   ├── middlewares/         # Authentication & error handling
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   ├── utils/               # Utility functions
│   ├── app.js               # Express app setup
│   ├── constants.js         # Constants and configs
│   ├── index.js             # Entry point
├── node_modules/            # Dependencies
├── .env                     # Environment variables (not committed to Git)
├── .env.sample              # Sample environment variables
├── .gitignore               # Files to ignore in Git
├── .prettierrc              # Prettier configuration
├── package.json             # Dependencies and scripts
├── README.md                # Project documentation
```

## Installation
1. **Clone the repository**
   ```sh
   git clone https://github.com/HarishVijendiran1997/vidtube-backend.git
   cd vidtube-backend
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables**
   - Copy the `.env.sample` file and rename it to `.env`
   - Fill in the required environment variables as shown below:

   **Example `.env` file:**
   ```env
   PORT=8000
   CORS_ORIGIN=*
   MONGODB_URI=mongodb+srv://youtubeuser:youtubeuser1234@cluster0.3xmj8.mongodb.net
   
   ACCESS_TOKEN_SECRET=2e572896fa81e878a312a22c39e93d3939cf653f4e4fbf5149c2591b3588a8ebe21c2dd5f44b216c9124daa4a1f19abc3d8cb73e47a8e66cef3965204bd7c5da
   ACCESS_TOKEN_EXPIRY=4h
   
   REFRESH_TOKEN_SECRET=9ad75b883d788a0a597951a473c6554ff6dbb6440bfdd1835fc4158697871db04d9548ba778e83cd49e0ebe13dff128450b10d3f69c8f62c0174d1b692c7916b
   REFRESH_TOKEN_EXPIRY=10d
   
   CLOUDINARY_CLOUD_NAME=vidtube123
   CLOUDINARY_API_KEY=962956556884912
   CLOUDINARY_API_SECRET=ftZdkuF43PHHKVVH0rFK0Hm2b9o
   
   NODE_ENV=development
   ```

4. **Start the server**
   ```sh
   npm run dev   # Start in development mode with nodemon
   npm start     # Start in production mode
   ```

## API Endpoints
| Method | Endpoint              | Description          |
|--------|----------------------|----------------------|
| GET    | /healthcheck         | Check server status |
| POST   | /users/signup        | Register user       |
| POST   | /users/login         | Login user          |
| GET    | /videos              | Get all videos      |
| POST   | /videos/upload       | Upload a video      |

(More endpoints coming soon...)

## Contributing
1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License
This project is licensed under the **ISC License**.

## Author
Developed by **Harish Vijendiran** 🚀
