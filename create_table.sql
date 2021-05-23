CREATE TABLE json_landmark(
	id serial NOT NULL PRIMARY KEY,
	info json NOT NULL
);

CREATE TABLE json_classification(
	id serial NOT NULL PRIMARY KEY,
	info json NOT NULL
);

CREATE TABLE fine(
	id serial NOT NULL PRIMARY KEY,
	info json NOT NULL
);

CREATE TABLE json_sites(
	id serial NOT NULL PRIMARY KEY,
	info json NOT NULL
);


CREATE TABLE json_syring(
	id serial NOT NULL PRIMARY KEY,
	info json NOT NULL
);


CREATE TABLE json_traps(
	id serial NOT NULL PRIMARY KEY,
	info json NOT NULL
);


CREATE TABLE json_tweet(
	id serial NOT NULL PRIMARY KEY,
	info json NOT NULL
);
