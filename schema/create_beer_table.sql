-- drop table to create a new one
DROP TABLE beer_winners;

-- create a new one
CREATE TABLE beer_winners
(
	medal VARCHAR,
	beer_name VARCHAR,
	brewery VARCHAR,
	city VARCHAR,
	county VARCHAR,
	state VARCHAR,
	category VARCHAR,
	year INT,
	total_category_entries VARCHAR
);

-- see if table was created
SELECT * FROM beer_winners;

-- import csv