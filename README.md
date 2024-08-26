# eCommerce Site

## Description

This is an eCommerce site built with Node.js and MongoDB. It supports basic functionalities such as product management, user authentication, and order processing. This project is designed to demonstrate a full-stack eCommerce application with RESTful APIs.

## Features

- User authentication (registration and login)
- Product management (CRUD operations)
- Order placement and management
- Integration with Stripe for payment processing
- Basic validation and error handling

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas instance)
- [Stripe](https://stripe.com/) account (for payment integration)

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/your-ecommerce-repo.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd your-ecommerce-repo
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Create a `.env` file** in the root directory and add your environment variables. Example:

    ```env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/ecommerce
    STRIPE_SECRET_KEY=your_stripe_secret_key
    JWT_SECRET=your_jwt_secret
    ```

5. **Run the application:**

    ```bash
    npm start
    ```

   By default, the application will run on `http://localhost:5000`.

## API Endpoints

### User Endpoints

- **POST** `/api/users/register` - Register a new user
- **POST** `/api/users/login` - Authenticate and log in a user

### Product Endpoints

- **GET** `/api/products/list` - Retrieve all products
- **GET** `/api/products/:id` - Retrieve a single product by ID
- **POST** `/api/products/add` - Create a new product
- **PUT** `/api/products/update/:id` - Update a product by ID
- **DELETE** `/api/products/delete/:id` - Delete a product by ID

### Order Endpoints

- **GET** `/api/orders/list` - Retrieve all orders
- **GET** `/api/orders/:id` - Retrieve an order by ID
- **POST** `/api/orders/add` - Place a new order
- **PUT** `/api/orders/update/:id` - Update a order by ID
- **DELETE** `/api/orders/delete/:id` - Delete a order by ID



## Node APIS Documentation:
https://documenter.getpostman.com/view/33552511/2sAXjGbtCB
