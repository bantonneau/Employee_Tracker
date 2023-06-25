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

// function prompt() {
//     inquirer
//         .prompt([
//             {
//                 type: 'list',
//                 message: 'What would you like to do?',
//                 name: 'choosefunc',
//                 choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
//             },
//         ])
//         .then((answers) => {
//             switch (answers.choosefunc) {
//                 case "View all departments":
//                     viewDepartment()
//                     break;
//                 case "View all roles":
//                     viewRoles()
//                     break;
//                 case "View all employees":
//                     viewEmployees()
//                     break;
//             }
//             console.log(answers);
//         });
// };

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


function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the new department?',
                name: 'departmentName',
            },
        ])
        .then((answers) => {
            const sql = `INSERT INTO department (name) VALUES (?)`;
            db.query(sql, answers.departmentName, (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log("Department added successfully!")
                prompt();
            });
        });
}

function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of the new role?',
                name: 'roleName',
            },
            {
                type: 'input',
                message: 'What is the salary of the new role?',
                name: 'roleSalary',
            },
            {
                type: 'input',
                message: 'What is the department ID of the new role?',
                name: 'roleDepartmentId',
            },
        ])
        .then((answers) => {
            const sql = `INSERT INTO role (name, salary, department_id) VALUES (?, ?, ?)`;
            db.query(sql, [answers.roleName, answers.roleSalary, answers.roleDepartmentId], (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log("Role added successfully!")
                prompt();
            });
        });
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the first name of the new employee?',
                name: 'employeeFirstName',
            },
            {
                type: 'input',
                message: 'What is the last name of the new employee?',
                name: 'employeeLastName',
            },
            {
                type: 'input',
                message: 'What is the role ID of the new employee?',
                name: 'employeeRoleId',
            },
            {
                type: 'input',
                message: 'What is the manager ID of the new employee?',
                name: 'employeeManagerId',
            },
        ])
        .then((answers) => {
            const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
            db.query(sql, [answers.employeeFirstName, answers.employeeLastName, answers.employeeRoleId, answers.employeeManagerId], (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log("Employee added successfully!")
                prompt();
            });
        });
}

function updateEmployeeRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the ID of the employee you want to update?',
                name: 'employeeId',
            },
            {
                type: 'input',
                message: 'What is the new role ID for the employee?',
                name: 'employeeNewRoleId',
            },
        ])
        .then((answers) => {
            const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
            db.query(sql, [answers.employeeNewRoleId, answers.employeeId], (err, result) => {
                if (err) {
                    console.log(err)
                    return;
                }
                console.log("Employee's role updated successfully!")
                prompt();
            });
        });
}

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
                case "Add a department":
                    addDepartment()
                    break;
                case "Add a role":
                    addRole()
                    break;
                case "Add an employee":
                    addEmployee()
                    break;
                case "Update an employee role":
                    updateEmployeeRole()
                    break;
            }
        });
};

prompt();
