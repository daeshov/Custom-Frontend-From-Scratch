-- Initialization script for the database
-- This script will create the database and tables if they do not exist
CREATE DATABASE IF NOT EXISTS scalesandslumbers;

-- This makes sure that a wider range of characters can be used such as emojis or different languages
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE scalesandslumbers;

CREATE TABLE IF NOT EXISTS Products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    product_description TEXT,
    product_image VARCHAR(512),
    product_price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE IF NOT EXISTS Reviews (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    review_text TEXT,
    review_rating INT CHECK (review_rating >= 1 AND review_rating <= 5),
    review_date DATE,
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);
