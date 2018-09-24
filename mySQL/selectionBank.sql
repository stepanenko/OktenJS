use bank;

# ======= ORDER BY =======
select *
from client
       join application a on idClient = a.Client_idClient
       join department d on Department_idDepartment = d.idDepartment
order by a.sum desc;
# order by __ asc (ascending) / order by __ desc (descending)


# ======== LIMIT and OFFSET ======
select idClient,
       FirstName,
       LastName,
       City,
       sum,
       Currency,
       CreditState,
       DepartmentCity
from client
       join application a on idClient = a.Client_idClient
       join department d on Department_idDepartment = d.idDepartment
order by idClient
limit 5 offset 5;
# limit: how many items are shown, offset: move to next N items

# ====== AGGREGATE FUNCTION - COUNT(column) - amount of rows/items ======
select idClient, FirstName, LastName, sum, count(idClient)
from client
       join application a on idClient = a.Client_idClient
       join department d on Department_idDepartment = d.idDepartment
group by idClient
order by idClient;

# ====== AGGREGATE FUNCTION - SUM(column) ======
select idClient, FirstName, LastName, sum(sum)
from client
       join application a on idClient = a.Client_idClient
       join department d on Department_idDepartment = d.idDepartment
group by idClient
order by idClient;

# ====== AGGREGATE FUNCTION - AVG(column) ======
select idClient, FirstName, LastName, avg(sum)
from client
       join application a on idClient = a.Client_idClient
       join department d on Department_idDepartment = d.idDepartment
group by idClient
order by sum;

# ====== AGGREGATE FUNCTION - MIN / MAX (column) ======
select idClient, FirstName, LastName, min(sum)
from client
       join application a on idClient = a.Client_idClient
       join department d on Department_idDepartment = d.idDepartment
group by idClient
order by sum;

# ==== Select only SUM() ======
select count(sum) # max / min / avg / count
from client
       join application a on idClient = a.Client_idClient;

# ======= SUBQUERY (Select in Select) ===========
select *
from application
where Client_idClient
        in (select idClient from client where age > 25);
# the same with JOIN:
select *
from application
       join client c on Client_idClient = c.idClient
where Age > 25;

# one more example on select in select (SUBQUERY)
select *
from application
where idApplication = (select idClient from client where idClient = 1);