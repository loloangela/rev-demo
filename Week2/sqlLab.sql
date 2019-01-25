-- Select all records from the Employee table.
SELECT * FROM Employee;

-- Select all records from the Employee table where last name is King.
SELECT * FROM Employee WHERE lastname='King';

-- Select all records from the Employee table where first name is Andrew and REPORTSTO is NULL.
 SELECT * FROM Employee WHERE firstname='Andrew' AND reportsto IS NULL;

-- Select all albums in Album table and sort result set in descending order by title.
SELECT * FROM album ORDER BY title DESC;

-- Select first name from Customer and sort result set in ascending order by city
SELECT firstname FROM customer ORDER BY city ASC;

-- Insert two new records into Genre table
INSERT INTO genre VALUES (26, 'Country'), (27, 'Neo-Soul');

-- Insert two new records into Employee table
INSERT INTO Employee VALUES 
(9, 'Oliver', 'Lori', 'IT Manager', 1, '1987-09-03',  '2002-05-01 00:00:00', '483 Packard St. ', 'Ann Arbor', 'MI', 'United States of America', '48108', '(323) 529-3420', 'lolo@chinook.corp' ),
(10, 'Direaux', 'Lauren', 'Sales Support Agent', 2, '1987-03-31', '2002-05-01 00:00:00', '2665 Victoria Ave.', 'Los Angeles', 'CA', 'United States of America', '90043', '(323) 772-5801', 'lauren@chinok.corp');

-- Insert two new records into Customer table
INSERT INTO customer(customerid, firstname, lastname, email) VALUES
(60, 'Alex', 'Tribal', 'at@messenger.com'),
(61, 'Shelly', 'Gotcha', 'she-g@gmail.com');

-- Update Aaron Mitchell in Customer table to Robert Walter
UPDATE customer SET firstname='Robert', lastname='Walter' WHERE firstname='Aaron' AND lastname='Mitchell';

-- Update name of artist in the Artist table “Creedence Clearwater Revival” to “CCR”
UPDATE artist SET name='CCR' WHERE name='Creedence Clearwater Revival';

-- Select all invoices with a billing address like “T%”
SELECT * FROM invoice where billingaddress LIKE 'T%';

-- Select all invoices that have a total between 15 and 50
SELECT * FROM invoice WHERE total BETWEEN 15 AND 50;

-- Select all employees hired between 1st of June 2003 and 1st of March 2004
SELECT * FROM employee WHERE hiredate BETWEEN '2003-06-01' AND '2004-03-01';

-- Delete a record in Customer table where the name is Robert Walter (There may be constraints that rely on this, find out how to resolve them).
DELETE FROM customer WHERE firstname='Robert' AND lastname='Walter';

-- You will need to first add ON DELETE CASCADE
ALTER TABLE customer ADD CONSTRAINT fk_invoicecustomerid