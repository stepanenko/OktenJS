create database Movies
  default char set utf8;
use Movies;
create table actors (
  id      int auto_increment primary key,
  name    varchar(30) not null,
  surname varchar(30) not null
);
create table movies (
  id    int primary key auto_increment,
  title varchar(50) not null,
  year  year
);

insert into actors (name, surname)
value ('Chris', 'Hamsworth'),
      ('Chris', 'Evans'),
      ('Scarlett', 'Hohanson'),
      ('Tom', 'Hidleston');
insert into movies (title, year)
values ('Avengers: Infinity war', 2018),
       ('Thor: Ragnarok', 2017),
       ('Doctor Strange', 2016);

create table relation (
  id       int auto_increment primary key,
  id_movie int not null,
  id_actor int not null,
  constraint con1
  foreign key (id_movie) references movies (id),
  constraint con2
  foreign key (id_actor) references actors (id)
);
insert into actors (name, surname)
value ('Benedict', 'Camberbech');
use Movies;
insert into relation (id_movie, id_actor)
values (1, 1),
       (1, 2),
       (1, 3),
       (1, 4),
       (2, 1),
       (2, 4),
       (3, 5);

select name, surname, title
from relation
 join actors a on relation.id_actor = a.id
 join movies m on relation.id_movie = m.id