# Employee Management System

![License Badge](https://img.shields.io/badge/license-MIT-green)

## Description
This project is a command-line application that interacts with user input to manage an employee database. The application allows users to view all departments, roles, and employees, add a new department, role or employee, and update an existing employee's role. This is all managed using a MySQL database to store and retrieve data.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
1. Clone the repository or download the project files.
2. Open a terminal or command prompt and navigate to the project directory.
3. Install the project dependencies by running the following command:
   ```
   npm install
   ```
4. Set up the database using the provided schema in your MySQL client.

## Usage
To start the application, open a terminal in the project directory and run the following command:
```
node index.js
```
The command-line interface will prompt you with several options:
- View all departments: Display a formatted table showing department names and department IDs.
- View all roles: Display a formatted table showing the job title, role ID, the department that the role belongs to, and the salary for that role.
- View all employees: Display a formatted table showing employee data, including employee IDs, first names, last names, job titles, departments, salaries, and the managers that the employees report to.
- Add a department: Prompt to enter the name of the department and add the department to the database.
- Add a role: Prompt to enter the name, salary, and department ID for the role and add the role to the database.
- Add an employee: Prompt to enter the employee’s first name, last name, role ID, and manager ID, and add the employee to the database.
- Update an employee role: Prompt to select an employee to update and their new role, and update this information in the database.

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code for personal or commercial purposes.

## Contributing
For contributions, please create a new issue or make a pull request in the GitHub repository.

## Questions
If you have any questions about the application, open an issue or want to discuss further, please reach out via email or through my GitHub profile.

- GitHub: [@bantonneau](https://github.com/bantonneau)
- Email: [benantonn@gmail.com](mailto:benantonn@gmail.com)
