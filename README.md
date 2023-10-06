# Cart-It-API

Cart-It is a web application API for handeling products listing and purchases.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)


## Getting Started

To get started with Cart-It-API, follow these steps:

1. Clone the repository:
    ```bash
    $ git clone https://github.com/Kalyanasundaram-J/cart-it-api.git
    $ cd cart-it-api
    ```

3. Install dependencies:
    ```bash
    $ npm install
    ```

4. Initialize the project:
    - Development (Auto restart if there is an change in file.):
        ```bash
        $ npm run dev
        ```
    OR
    - Normal:
        ```bash
        $ npm start
        ```

5. Open your web browser and navigate to http://localhost:3000 to access the API.

## Usage
1. Products API:
    - `/products` :
        - Get all the Products as JSON.
    - `/products?name=productName` :
        - Filter the product by name. Query param is `name=value`.
    - `/products/add` :
        - Add Product to the Product Data JSON.
        - Body params : `name`, `price`, `image`.
2. Purchases API:
    - `/purchases/place-order` :
        - Place the order with the product ID.
        - Body params : `productId`

## Contributing
We welcome contributions from the community! To contribute to Cart-It-API:

1. Fork the repository.

2. Create a new branch: git checkout -b feature/new-feature

3. Commit your changes: git commit -m "Add a new feature"

4. Push to the branch: git push origin feature/new-feature

5. Create a pull request.

## DB Schema
<a href="https://imgur.com/rQbr1wZ"><img src="https://i.imgur.com/rQbr1wZ.png" title="source: imgur.com" alt="DB Schema" /></a>


## License
This project is Not licensed.

## Support
For any questions or support, contact us at cdab256@gmail.com.

