const mysql = require('mysql2/promise');
const fs = require('fs');
const csv = require('csv-parser');

async function insertData() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1010',
        database: 'scalesandslumbers'
    });

    const insertPromises = [];

    fs.createReadStream('products.csv')
        .pipe(csv())
        .on('data', (row) => {
            const promise = (async () => {
                try {
                    const { product_name, product_description, product_image, product_price } = row;
                    const query = 'INSERT INTO Products (product_name, product_description, product_image, product_price) VALUES (?, ?, ?, ?)';
                    await connection.execute(query, [product_name, product_description, product_image, product_price]);
                } catch (err) {
                    console.error('Error inserting data:', err, 'Row:', row);
                }
            })();
            insertPromises.push(promise);
        })
        .on('end', async () => {
            await Promise.all(insertPromises);
            console.log('CSV file successfully processed');
            connection.end();
        });
}

insertData();
