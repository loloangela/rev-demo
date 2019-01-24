create table users(
	user_id int primary key,
	username varchar not null,
	user_pass varchar not null
);

insert into users(user_id, username, user_pass)
values (1, 'lolo', 'ask'), (2, 'blake', 'password'), (3, 'lala', 'love');