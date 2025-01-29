USE starwarslegion_database;

RENAME TABLE units TO separatist_units;

Select * from separatist_units;

ALTER TABLE separatist_units
ADD upgrade_slots varchar(255);

ALTER TABLE separatist_units
ADD toy_image varchar(255);

UPDATE separatist_units
SET upgrade_slots = 'command,command,command,comms,gear'
WHERE id = 4;

UPDATE separatist_units
SET toy_image = 'Pictures/CountDookuToy.jpg'
WHERE name = 'Count Dooku';

INSERT INTO separatist_units (name, description, points, military_rank, unitcard_image, toy_image)
VALUES ('Super Tactical Droid', 'Kalani', 85, 'Commander', 'Pictures/KalaniUnitCard.jpg', 'Pictures/KalaniToy.jpg');