DROP DATABASE IF EXISTS placeslist;
CREATE DATABASE placeslist;
USE placeslist;

CREATE TABLE places (
  id INT NOT NULL AUTO_INCREMENT,
  imageUrl VARCHAR(250),
  price CHAR(10),
  description VARCHAR(250),
  favorite BOOLEAN DEFAULT 0,
  PRIMARY KEY (id)
);


