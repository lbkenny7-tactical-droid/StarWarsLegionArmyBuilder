CREATE DATABASE starwarslegion_database;

SHOW DATABASES;

USE starwarslegion_database;

CREATE TABLE Units (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(100),
    points INT
);

ALTER TABLE units
ADD military_rank varchar(255);

ALTER TABLE units
DROP COLUMN Military_Rank;

INSERT INTO starwarslegion_database.units (name, description, points)
VALUES ("General Grievous", "Sinister Cyborg", 130), ("Poggle the Lesser", "Public Leader of Geonocians", 80);

UPDATE units 
SET Military_Rank = 'Commander' 
WHERE Military_Rank IS NULL; 

Select * from Units;
