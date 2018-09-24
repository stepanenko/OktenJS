set sql_mode = '';

create bank
default character set utf8;

use bank;

# ==== TABLE DEPARTMENT ======

create table Department (
  idDepartment   int auto_increment primary key,
  DepartmentCity varchar(45) null,
  CountOfWorkers int         null
);

# ==== TABLE CLIENT ======

create table client (
  idClient                int auto_increment primary key,
  FirstName               varchar(45) null,
  LastName                varchar(45) null,
  Education               varchar(45) null,
  Passport                int(20)     null,
  City                    varchar(45) null,
  Age                     int(2)      null,
  Department_idDepartment int         not null,
  constraint fk_Client_Department
  foreign key (Department_idDepartment) references bank.department (idDepartment)
);

# ===== TABLE APPLICATION =====

create table application (
  idApplication   int primary key auto_increment,
  Sum             int         null,
  CreditState     varchar(45) null,
  Currency        varchar(45) null,
  Client_idClient int         not null,
  constraint fk_Application_Client
  foreign key (Client_idClient) references client (idClient)
);














