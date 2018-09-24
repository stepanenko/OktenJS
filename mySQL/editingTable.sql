create table pets (
  id int auto_increment primary key
);

create table persons (
  id int auto_increment primary key
);

alter table pets
    add column name varchar(30) not null;

insert into pets (name)
values ('Doger');

# ==== MODIFYING COLUMN ====
alter table pets
    modify column name varchar(11) default 'pet name';

# ==== CHANGING COLUMN =====
alter table pets
    change column name calling varchar(20) not null;

# ===== DELETING COLUMN =====
alter table pets
    drop column calling;


alter table pets
    add column idPerson int not null;

# ==== ADDING CONSTRAINT ===== doesn't work!!!!
alter table pets
    add constraint fk_person
foreign key pets(idPerson) references persons(id);