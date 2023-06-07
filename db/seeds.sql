INSERT INTO department (name)
VALUES ("HR"),
        ("IT"),
        ("Design");

INSERT INTO role (id, name, salary, department_id)
VALUES  (1, "VP of HR", 175000, 1),
        (2, "Recruitment Manager", 120000, 1),
        (3, "Recruiter", 60000, 1),
        (4, "Compensation Manager", 100000, 1),
        (5, "Compensation Specialst", 50000, 1),
        (6, "IT Director", 200000, 2),
        (7, "IT Manager", 150000, 2),
        (8, "IT Specialist", 80000, 2),
        (9, "Senior Product Designer", 130000, 3),
        (10, "Product Designer", 70000, 3),
        (11, "Assistant Product Designer", 50000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (1, "Paul", "Bozinsky", 1, 1),
        (2, "Tara", "Sqwumbus", 2, 1),
        (3, "Bob", "Debo", 3, 2),
        (4, "Noah", "Bloam", 4, 1),
        (5, "Cassie", "Guad", 5, 3),
        (6, "Heather", "Chub", 6, 1),
        (7, "Liam", "Shleem", 7, 6),
        (8, "Kyle", "Munster", 8, 7),
        (9, "Jenelle", "Loplan", 9, 1),
        (10, "Brad", "Glump", 10, 9),
        (11, "Jenelle", "Loplan", 11, 10),
