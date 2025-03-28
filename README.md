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
   npm install
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

## Dependencies & Usage

### Production Dependencies

| Package            | Usage                                          |
| ------------------ | ---------------------------------------------- |
| bcrypt             | Password hashing for authentication            |
| body-parser        | Parsing incoming request bodies                |
| cloudinary         | File storage and image processing              |
| cookie-parser      | Parse cookies in incoming requests             |
| cors               | Enable Cross-Origin Resource Sharing           |
| dotenv             | Load environment variables from `.env`         |
| express            | Web framework for building APIs                |
| express-rate-limit | Prevent API abuse with rate limiting           |
| helmet             | Secure Express apps with HTTP headers          |
| joi                | Schema validation for request data             |
| jsonwebtoken       | Token-based authentication system              |
| mongoose           | MongoDB object modeling library                |
| multer             | Middleware for handling file uploads           |
| node-cache         | In-memory caching for performance optimization |
| nodemailer         | Send emails programmatically                   |
| stripe             | Payment processing with Stripe API             |

### Development Dependencies

| Package    | Usage                                              |
| ---------- | -------------------------------------------------- |
| @types/... | TypeScript definitions for better type safety      |
| nodemon    | Auto-restart server on file changes in development |
| ts-node    | Run TypeScript files without compiling             |
| typescript | TypeScript compiler for static type checking       |

## Contribution Guidelines

This project is open source, and contributions are welcome! Follow these steps to contribute:

1. **Fork the repository** on GitHub.
2. **Clone the repository** to your local machine:
   ```bash
   git clone https://github.com/your-username/backend.git
   ```
3. **Create a new branch** based on the type of change:
   - **Feature**: `feature/branch-name`
   - **Bug Fix**: `fix/branch-name`
   - **Refactoring**: `refactor/branch-name`
   - **Documentation Updates**: `docs/branch-name`
   - **Chores (e.g., dependency updates)**: `chore/branch-name`
   ```bash
   git checkout -b feature/new-feature
   ```
4. **Make your changes and commit**:
   ```bash
   git add .
   git commit -m "Add new feature"
   ```
5. **Push your changes**:
   ```bash
   git push origin feature/new-feature
   ```
6. **Open a Pull Request**: Go to GitHub and create a pull request from your branch to the `main` branch.

## License

This project is licensed under the [ISC License](LICENSE).

## Author

Created by [Uneeb Bhatti](https://github.com/Uneebbhat).
