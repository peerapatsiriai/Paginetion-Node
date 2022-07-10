const condb = require('./condb')

// Pagination
const Pagination = (page, size) => {
    let max = page * size;
    let min = max - size;
    // const sql = `SELECT * FROM customer ORDER BY id DESC LIMIT ${min}, ${size}`
    const sql = `SELECT * FROM customer LIMIT ${min}, ${size}`
    condb.connection.query(sql).then(result => {
        console.log(result[0]);
    })
}


Pagination(2,10);



