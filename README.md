# E-commerce API with Express, TypeScript, Mongoose, and Zod

This repository contains an E-commerce API built with Express, TypeScript, Mongoose, and Zod validation. It provides basic CRUD operations for managing products and orders. The project is configured with ESLint and Prettier for code quality and consistency.

## Features

- Express.js for handling HTTP requests and routing
- TypeScript for type-safe JavaScript
- Mongoose for MongoDB object modeling
- Zod for schema validation
- Basic CRUD operations for products and orders
- ESLint and Prettier for code linting and formatting

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>=14.x)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   https://github.com/justJubair/express-server-phero.git
   cd express-server-phero
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:

   ```env
   MONGO_URI=mongodb://localhost:27017/your-database-name
   PORT=5000
   ```

### Running the Server

Start the development server:

```bash
npm run start:dev
# or
yarn start:dev
```

The server will be running on `http://localhost:5000`.

### Running ESLint and Prettier

To lint your code:

```bash
npm run lint
# or
yarn lint
```

To format your code:

```bash
npm run lint:fix
# or
yarn lint:fix
```

## API Endpoints

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:productId` - Get a single product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/:productId` - Update a product by ID
- `DELETE /api/products/:productId` - Delete a product by ID
- `SEARCH /api/products?searchTerm=iphone` - Delete a product by ID

### Orders

- `GET /api/orders` - Get all orders
- `GET By User Email api/orders?email=jubair@gmail.com` - Get a single order by ID
- `POST /api/orders` - Create a new order

## Project Structure

```
ecommerce-api/
│
├── src/
│   ├── app/
│   │   ├── config/
│   │   │   └── index.ts
│   │   ├── modules/
│   │   │   ├── order/
│   │   │   │   ├── order.controller.ts
│   │   │   │   ├── order.interface.ts
│   │   │   │   ├── order.model.ts
│   │   │   │   ├── order.route.ts
│   │   │   │   ├── order.service.ts
│   │   │   │   └── order.validation.ts
│   │   │   ├── product/
│   │   │   │   ├── product.controller.ts
│   │   │   │   ├── product.interface.ts
│   │   │   │   ├── product.model.ts
│   │   │   │   ├── product.route.ts
│   │   │   │   ├── product.service.ts
│   │   │   │   └── product.validation.ts
│   ├── app.ts
│   └── server.ts
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or improvements.

---

## Contact

If you have any questions, feel free to reach out:

- Email: jubair.ahmed2838@gmail.com
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/jubairdev/)

Happy coding! 🚀
