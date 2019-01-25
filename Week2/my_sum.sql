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