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
                type: 'list',
                message: 'What would you like to do?',
                name: 'choosefunc',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
            },
        ])
        .then((answers) => {
            switch (answers.choosefunc) {
                case "View all departments":
                    viewDepartment()
                    break;
                case "View all roles":
                    viewRoles()
                    break;
                case "View all employees":
                    viewEmployees()
                    break;
            }
            console.log(answers);
        });
};

function viewDepartment() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        console.table(result)
        prompt();
    });
}

function viewRoles() {
    const sql = `SELECT * FROM role`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        console.table(result)
        prompt();
    });
}

function viewEmployees() {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        console.table(result)
        prompt();
    });
}

prompt();