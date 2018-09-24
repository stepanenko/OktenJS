use bank;

insert into department (DepartmentCity, CountOfWorkers)
values ('Lviv', 15),
       ('Rivne', 8),
       ('Kyiv', 16),
       ('Lviv', 10);

insert into client (FirstName, LastName, Education, Passport, City, Age, Department_idDepartment)
values ('Volodymyr', 'Gryniv', 'high', 'KC849153', 'Skvyra', 35, 4),
       ('Oleg', 'Fedyshyn', 'high', 'KC012412', 'Lviv', 42, 5),
       ('Taras', 'Sobko', 'middle', 'KC249504', 'Rivne', 20, 3),
       ('Viktor', 'Spas', 'technic', 'KC823412', 'Kyiv', 22, 2),
       ('Julia', 'Mokina', 'technic', 'KC908295', 'Kuiv', 21, 1),
       ('Oksana', 'Indusiva', 'high', 'KC723532', 'Sanbir', 32, 1);

update client set Department_idDepartment = 1 where idClient = '3';

insert into application (Sum, CreditState, Currency, Client_idClient)
values (7500, 'Returned', 'Euro', 6),
       (3200, 'Not Returned', 'Gryvnia', 2),
       (3700, 'Returned', 'Gryvnia', 3),
       (4100, 'Returned', 'Dollar', 1),
       (15100, 'Not Returned', 'Gryvnia', 9),
       (25600, 'Not Returned', 'Dollar', 10),
       (12300, 'Not Returned', 'Gryvnia', 8),
       (9700, 'Returned', 'Dollar', 5),
       (9000, 'Not Returned', 'Gryvnia', 7),
       (8100, 'Not Returned', 'Dollar', 3);

insert into application (Sum, CreditState, Currency, Client_idClient)
values (4400, 'Not Returned', 'Euro', 4),
       (2700, 'Returned', 'Dollar', 10),
       (6600, 'Not Returned', 'Euro', 3);
