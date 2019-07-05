-- Lori Oliver 
-- Sql Homework
-- Revature

-- 2.1 Select all records from the Employee table.
SELECT * FROM Employee;
-- 2.1 Select all records from the Employee table where last name is King.
SELECT * FROM Employee WHERE lastname='King';
-- 2.1 Select all records from the Employee table where first name is Andrew and REPORTSTO is NULL.
 SELECT * FROM Employee WHERE firstname='Andrew' AND reportsto IS NULL;

-- 2.2 Select all albums in Album table and sort result set in descending order by title.
SELECT * FROM album ORDER BY title DESC;
-- 2.2 Select first name from Customer and sort result set in ascending order by city
SELECT firstname FROM customer ORDER BY city ASC;

-- 2.3 Insert two new records into Genre table
INSERT INTO genre VALUES (26, 'Country'), (27, 'Neo-Soul');
-- 2.3 Insert two new records into Employee table
INSERT INTO Employee VALUES 
(9, 'Oliver', 'Lori', 'IT Manager', 1, '1987-09-03',  '2002-05-01 00:00:00', '483 Packard St. ', 'Ann Arbor', 'MI', 'United States of America', '48108', '(323) 529-3420', 'lolo@chinook.corp' ),
(10, 'Direaux', 'Lauren', 'Sales Support Agent', 2, '1987-03-31', '2002-05-01 00:00:00', '2665 Victoria Ave.', 'Los Angeles', 'CA', 'United States of America', '90043', '(323) 772-5801', 'lauren@chinok.corp');
-- 2.3 Insert two new records into Customer table
INSERT INTO customer(customerid, firstname, lastname, email) VALUES
(60, 'Alex', 'Tribal', 'at@messenger.com'),
(61, 'Shelly', 'Gotcha', 'she-g@gmail.com');

-- 2.4 Update Aaron Mitchell in Customer table to Robert Walter
UPDATE customer SET firstname='Robert', lastname='Walter' WHERE firstname='Aaron' AND lastname='Mitchell';
-- 2.4 Update name of artist in the Artist table “Creedence Clearwater Revival” to “CCR”
UPDATE artist SET name='CCR' WHERE name='Creedence Clearwater Revival';

-- 2.5 Select all invoices with a billing address like “T%”
SELECT * FROM invoice where billingaddress LIKE 'T%';

-- 2.6 Select all invoices that have a total between 15 and 50
SELECT * FROM invoice WHERE total BETWEEN 15 AND 50;
-- 2.6 Select all employees hired between 1st of June 2003 and 1st of March 2004
SELECT * FROM employee WHERE hiredate BETWEEN '2003-06-01' AND '2004-03-01';

-- 2.7 Delete a record in Customer table where the name is Robert Walter (There may be constraints that rely on this, find out how to resolve them).
ALTER TABLE invoice DROP CONSTRAINT fk_invoicecustomerid;
DELETE FROM customer WHERE firstname='Robert' AND lastname='Walter';

-- 3.1 Create a function that returns the current time
CREATE FUNCTION currentTime() RETURNS TIMESTAMPTZ AS 'select NOW();'
language plpgsql;
SELECT currentTime();
-- 3.1 Create a function that returns the length of a mediatype from the mediatype table
CREATE FUNCTION mediaTypeLength(TEXT) RETURNS INTEGER AS $$
    SELECT char_length($1);
$$ language plpgsql;
SELECT mediaTypeLength(3);

-- 3.2 Create a function that returns the average total of all invoices
CREATE FUNCTION totalInvoices() RETURNS NUMERIC(10,10) AS $$
    SELECT AVG(total) FROM invoice;
$$ language plpgsql;
SELECT totalInvoices();
-- 3.2 Create a function that returns the most expensive track
CREATE FUNCTION mostExpensiveTrack() RETURNS NUMERIC(10,10) AS $$
    SELECT MAX(unitprice) FROM track;
$$ language plpgsql;
SELECT mostExpensiveTrack();

-- 3.3 Create a function that returns the average price of invoiceline items in the invoiceline table
CREATE FUNCTION avgInvoiceLinePrice() RETURNS NUMERIC(10,10) AS $$ 
    SELECT AVG(unitprice) FROM invoiceline;
$$ language plpgsql;
SELECT avgInvoiceLinePrice();

-- 4.1 Create a stored procedure that selects the first and last names of all the employees.
CREATE FUNCTION employeeNames() RETURNS TABLE(firstname TEXT, lastname TEXT) AS $$
    SELECT firstname, lastname FROM employee 
$$ language plpgsql;
SELECT employeeNames();

-- 4.2 Create a stored procedure that updates the personal information of an employee.
CREATE FUNCTION changeInfo(fname TEXT, lname TEXT, address TEXT, city TEXT,state TEXT,country TEXT, postalcode INTEGER, phone INTEGER, fax INTEGER, email TEXT) 
    returns void AS $$
    	UPDATE employee SET firstname=$1, lastname=$2, address=$3, city=$4, state=$5, country=$6, postalcode=$7, phone=$8, fax=$9, email=$10;
$$ language plpgsql;
-- 4.2 Create a stored procedure that returns the managers of an employee.
CREATE FUNCTION employeeManager(empid INTEGER) RETURNS INTEGER AS $$
	SELECT reportsto FROM employee WHERE employeeid=$1;
$$ language plpgsql;

-- 4.3 Create a stored procedure that returns the name and company of a customer.
CREATE FUNCTION custInfo(custid INTEGER) RETURNS TABLE(firstname TEXT, lastname TEXT, company TEXT) AS $$
	SELECT firstname, lastname, company FROM customer;
$$ language plpgsql;

-- 5.0 Create a transaction that given a invoiceId will delete that invoice (There may be constraints that rely on this, find out how to resolve them).
BEGIN
    ALTER TABLE invoice drop CONSTRAINT fk_invoicecustomerid;
    ALTER TABLE invoiceline drop CONSTRAINT fk_invoicelineinvoiceid;
    DELETE FROM invoice WHERE invoiceid=2;
    ALTER TABLE invoice add CONSTRAINT fk_invoicecustomerid
    FOREIGN KEY (customerid)
    REFERENCES customer(customerid);
    ALTER TABLE invoiceline add CONSTRAINT fk_invoicelineinvoiceid
    FOREIGN KEY (invoiceid)
    REFERENCES invoice(invoiceid);
END;
-- 5.0 Create a transaction nested within a stored procedure that inserts a new record in the Customer table
CREATE OR REPLACE FUNCTION insertCustomer(idnum INTEGER, fname TEXT, lname TEXT, comp TEXT, addr TEXT, city TEXT, state TEXT, country TEXT, postalcode INTEGER, phone INTEGER,fax INTEGER, email TEXT, supprepid INTEGER) 
    RETURNS VOID AS $$
        BEGIN
            INSERT INTO customer VALUES(idnum, fname, lname, comp, addr, city, state, country, postalcode, phone, fax, email, supprepid);
        END;
    $$ language plpgplpgsql;

-- 6.1 Create an after insert trigger on the employee table fired after a new record is inserted into the table.
CREATE TRIGGER after_insert
    AFTER INSERT ON employee
    FOR EACH ROW
EXECUTE PROCEDURE insertTrig();
-- 6.1 Create an after update trigger on the album table that fires after a row is inserted in the table
CREATE TRIGGER after_album_update
    AFTER UPDATE ON album
    FOR EACH ROW
EXECUTE PROCEDURE afterTrig();
-- 6.1 Create an after delete trigger on the customer table that fires after a row is deleted from the table.
CREATE TRIGGER after_customer_delete 
    AFTER UPDATE ON customer
    FOR EACH ROW
EXECUTE PROCEDURE afterDelete();

-- 7.1 Create an inner join that joins customers and orders and specifies the name of the customer and the invoiceId.
SELECT invoiceid AS "invoiceid", firstname AS "fname", lastname AS "lname" FROM customer C 
	INNER JOIN invoice I ON C.customerid = I.customerid;
-- 7.2 Create an outer join that joins the customer and invoice table, specifying the CustomerId, firstname, lastname, invoiceId, and total.
SELECT c.customerid AS "customerid", firstname AS "firstname", lastname AS "lastname", invoiceid AS "invoiceid", total AS "total"
    FROM invoice I full JOIN customer C ON C.customerid = I.customerid;
-- 7.3 Create a right join that joins album and artist specifying artist name and title.
SELECT name AS "artistname", title AS "title" FROM album A RIGHT JOIN artist Art ON A.artistid = Art.artistid;
-- 7.4 Create a cross join that joins album and artist and sorts by artist name in ascending order.
SELECT name AS "artistname" FROM album A CROSS JOIN artist ORDER BY name ASC;
-- 7.5 Perform a self-join on the employee table, joining on the reportsto column.
SELECT E.firstname, E.lastname, E.reportsto FROM employee E INNER JOIN employee M ON true;