const mysql = require('mysql2');
const inquirer = require('inquirer');
//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: '',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

function prompt() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
            {
                type: 'checkbox',
                message: 'What languages do you know?',
                name: 'stack',
                choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
            },
            {
                type: 'list',
                message: 'What is your preferred method of communication?',
                name: 'contact',
                choices: ['email', 'phone', 'telekinesis'],
            },
        ])
        .then((data) => {
            viewDepartment()
            console.log(data);
        });
};

function viewDepartment() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, result) => {
        if (err) {
            //   res.status(400).json({ error: err.message });
            console.log(err)
            return;
        }
        console.table(result)
        prompt();
    });
}

prompt();