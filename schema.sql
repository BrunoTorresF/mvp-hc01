DROP DATABASE IF EXISTS beerList;

CREATE DATABASE beerList;

USE beerList;

CREATE TABLE beers (
  id int NOT NULL AUTO_INCREMENT,
  style varchar(50) NOT NULL,
  beer varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

INSERT INTO beers (style, beer) VALUES ('American Lager', "Bud Light");
INSERT INTO beers (style, beer) VALUES ('Czech pilsner', "Pilsner Urqell");
INSERT INTO beers (style, beer) VALUES ('Pale Lager', "Estella Damm");
INSERT INTO beers (style, beer) VALUES ('Brown Ale', "Black Sheep Ale");
