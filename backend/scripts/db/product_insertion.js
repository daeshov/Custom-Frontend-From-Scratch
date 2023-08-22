const mysql = require('mysql2/promise');
const fs = require('fs');
const csv = require('csv-parser');

async function insertData() {
    // Create MySQL connection
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1010',
        database: 'scalesandslumbers'
    });

    // Read and parse the CSV
    fs.createReadStream('products.csv')
        .pipe(csv())
        .on('data', async (row) => {
            try {
                const { product_name, product_description, product_image, product_price } = row;
                const query = 'INSERT INTO Products (product_name, product_description, product_image, product_price) VALUES (?, ?, ?, ?)';
                await connection.execute(query, [product_name, product_description, product_image, product_price]);
            } catch (err) {
                console.error('Error inserting data:', err);
            }
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
            connection.end();
        });
}

insertData();
