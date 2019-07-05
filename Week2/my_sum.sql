-- Sum function
create or replace function my_sum(val_a bigint, val_b bigint)
returns integer as $$
begin
	return val_a + val_b;
end;
$$ language plpgsql;
select my_sum(5, 10);

-- Count function with variable
create or replace function employeeCount()
returns integer as $$
declare 
	total integer;
begin
	select count(employeeid) into total from employee;
	return total;
end
$$ language plpgsql;

select employeeCount();

-- Create a stored procedure
create or replace function new_stored_proc(out ret_val bigint) as $$
	begin
		select count(*) into ret_val from employee;
	end;
$$ language plpgsql;

/*do $$
declare
out_val bigint;
begin
	select new_stored_proc(out_val) into out_val;
	insert into test_table values('It Worked!', out_val)
end;
$$ language plpgsql;

-- Anonymous plsql block
create table test_table(
	key text,
	val integer); */

create or replace function change_employee(e_id int, fname varchar, lname varchar)
returns void as $$
begin
	update employee set firstname = fname, lastname = lname
		where employeeid = e_id;
end;
$$ language plpgsql;

select * from employee;



create or replace function get_emps(e_id)
returns refcursor as $$
declare
	curs refcursor;
begin
	open curs for select lastname, firstname from employee
	where employeeid < e_id;
	return curs;
end;
$$ language plpgsql;

do $$ 
declare
curs refcursor
emp record;
begin
	select get_emps into curs;
	loop
		fetch curs into emp;
		exit when not found;
		insert into employee (lastname,  firstname, employeeid)
		values((select lastname from emp), 
			(select firstname from emp)
			(select max(employeeid) from employee) + 1));
	end loop;
end;
$$ language plpgsql;

create sequence employee_id_seq start 9;
select curval('emplyee_id_seq');
select nextval('employee_id_seq');
insert into employee lastname, firstname, employeeid)
values ('smith', 'james', (select nextval('employee_id_seq')));

create or replace function insert_into_employee)
returns trigger as $$
begin
	if(TG_OP = 'Imsert') then
		new.employeeid = (select nextVal ('employee_id_seq'));
	end if;
	return new;
end;
$$ language plpgsql;
Create trigger employee_insert
	before insert on employee
	for each row
	execute procedure insert insert_into_employee();
	end if;
	