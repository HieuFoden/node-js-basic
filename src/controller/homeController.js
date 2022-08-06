import pool from '../configs/connectDB';

let getHomepage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render('index.ejs', { dataUser: rows, test: 'abc string test' });
};

let getDetailPage = async (req, res) => {
    let userId = req.params.id;
    let user = await pool.execute('SELECT * FROM `USERS` WHERE ID = ?', [userId]);

    return res.send(JSON.stringify(user[0]));
};

let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('INSERT INTO users(firstname, lastname, email, address) VALUES (?, ?, ?, ?)', [firstName, lastName, email, address])
    return res.redirect('/');
};

module.exports = {
    getHomepage, getDetailPage, createNewUser
};