# Backend Template

A robust Node.js backend template built with TypeScript and Express. This template is designed for scalability and comes pre-configured with a range of essential features like authentication, file uploads, email handling, caching, and MongoDB integration. Save time by cloning this template and jump-starting your backend development.

## Features

- **Authentication**: Secure user authentication using `bcrypt` and `jsonwebtoken`.
- **File Uploads**: Integrated file upload functionality using `multer` and `cloudinary`.
- **Email Sending**: Easily send emails using `nodemailer`.
- **Caching**: Use `node-cache` for efficient caching.
- **MongoDB Integration**: Database operations simplified with `mongoose`.
- **Security**: Enhanced with `helmet` and `cors`.
- **Rate Limiting**: Protect APIs with `express-rate-limit`.
- **Input Validation**: Validate requests using `joi`.
- **Logging**: Use tools like `winston` and `morgan` for better monitoring and debugging.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Uneebbhat/backend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install or npm i
   ```

## Usage

### Development Mode

Run the application in development mode with hot-reloading:

```bash
npm run dev
```

### Build

Compile TypeScript to JavaScript:

```bash
npm run build
```

### Production Mode

Run the application in production mode:

```bash
npm run start
```

## 📁 Project Structure

```
backend/
│-- node_modules/
│-- src/
│   │-- config/
│   │-- controllers/
│   │-- dto/
│   │-- helpers/
│   │-- middlewares/
│   │-- models/
│   │-- routes/
│   │-- schemas/
│   │-- services/
│   │-- shared/
│   │-- utils/
│   │-- app.ts
│   │-- index.ts
│-- .env
│-- .env.sample
│-- .gitignore
│-- package-lock.json
│-- package.json
│-- README.md
│-- tsconfig.json
```

## Environment Variables

Create a `.env` file in the root of your project and configure the following variables:

```env
PORT=
# MongoDB connection string
MONGODB_CONNECTION_STRING=""
# JWT authentication token
JWT_SECRET=
# Cloudinary configurations
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
DEFAULT_IMAGE=""
# Nodemailer configurations
NODEMAILER_PORT=
NODEMAILER_HOST=""
NODEMAILER_SERVICE=""
NODEMAILER_USER=""
NODEMAILER_PASS=""
# Stripe Configurations
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
```

## Dependencies

### Production

- **bcrypt**: Password hashing.
- **body-parser**: Parsing incoming request bodies.
- **cloudinary**: File uploads.
- **cookie-parser**: Parse cookies in requests.
- **cors**: Enable Cross-Origin Resource Sharing.
- **dotenv**: Load environment variables.
- **express**: Web framework.
- **express-rate-limit**: API rate limiting.
- **helmet**: Security middleware.
- **joi**: Data validation.
- **jsonwebtoken**: Token-based authentication.
- **mongoose**: MongoDB object modeling.
- **multer**: File uploading.
- **node-cache**: In-memory caching.
- **nodemailer**: Email sending.

### Development

- **@types/...**: Type definitions for TypeScript.
- **nodemon**: Hot-reloading during development.
- **ts-node**: Execute TypeScript files directly.
- **typescript**: TypeScript compiler.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [ISC License](LICENSE).

## Author

Created by [Uneeb Bhatti](https://github.com/Uneebbhat).
