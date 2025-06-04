# Stock Management API

A RESTful API for managing stock inventory built with Node.js, Express, and MongoDB.

## Features

- **Complete CRUD Operations**: Create, read, update, and delete operations for categories, units, items, and users
- **Authentication**: JWT-based authentication system
- **Protected Routes**: API endpoints protected with authentication middleware
- **Data Validation**: Input validation for all models
- **Error Handling**: Consistent error responses

## Models

### Category
- name: String (required, unique)

### Unit
- name: String (required, unique)

### Item
- name: String (required)
- amount: Number (required, between 1 and 100)
- unit: ObjectId (ref to Unit, required)
- category: ObjectId (ref to Category, required)

### User
- name: String (required)
- email: String (required, unique)
- password: String (required, minimum 8 characters)
- role: String (enum: ['user', 'admin'], default: 'user')
- active: Boolean (default: true)

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user and get token
- `PUT /api/auth/updatePassword` - Update password (protected)

### Users
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get user by ID (admin only)
- `PUT /api/users/:id` - Update user (admin only)
- `DELETE /api/users/:id` - Delete user (admin only)
- `GET /api/users/me` - Get current user profile (protected)
- `PUT /api/users/updateMe` - Update current user profile (protected)

### Categories
- `GET /api/categories` - Get all categories (protected)
- `POST /api/categories` - Create new category (protected)
- `GET /api/categories/:id` - Get category by ID (protected)
- `PUT /api/categories/:id` - Update category (protected)
- `DELETE /api/categories/:id` - Delete category (protected)

### Units
- `GET /api/units` - Get all units (protected)
- `POST /api/units` - Create new unit (protected)
- `GET /api/units/:id` - Get unit by ID (protected)
- `PUT /api/units/:id` - Update unit (protected)
- `DELETE /api/units/:id` - Delete unit (protected)

### Items
- `GET /api/items` - Get all items (protected)
- `POST /api/items` - Create new item (protected)
- `GET /api/items/:id` - Get item by ID (protected)
- `PUT /api/items/:id` - Update item (protected)
- `DELETE /api/items/:id` - Delete item (protected)

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/stock_management
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRES_IN=30d
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Authentication

All protected routes require a JWT token sent in the Authorization header:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

To get a token, register a new user or login with existing credentials.