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

CREATE TABLE Upgrades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    points INT,
    card_image VARCHAR(100)
);

ALTER TABLE Upgrades
ADD type varchar(255);

Select * from Upgrades;

INSERT INTO Upgrades (name, type, points)
VALUES ('Force Push', 'force', 40), ('Force Choke', 'force', 10), ('Burst of Speed', 'force', 10), ('Force Reflexes', 'force', 5),
('Aggressive Tactics', 'command', 15), ('Vigilance', 'command', 12), ('Improvised Orders', 'command', 5), ('Esteemed Leader', 'command', 5);
