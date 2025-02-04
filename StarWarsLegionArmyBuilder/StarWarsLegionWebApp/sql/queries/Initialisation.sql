use starwarsarmybuilder_database;

INSERT INTO separatist_units (id, name, description, points, military_rank, unitcard_image, toy_image, upgrade_slots)
VALUES
(1, 'Count Dooku', 'Darth Tyranus', 165, 'Commander', 'Pictures/CountDookuUnitCard.jpg', 'Pictures/CountDookuToy.jpg', 'force,force,force,command'),
(2, 'General Grievous', 'Sinister Cyborg', 130, 'Commander', 'Pictures/GeneralGrievousUnitCard.jpg', 'Pictures/GeneralGrievousToy.jpg', 'command,command,training,gear'),
(3, 'Poggle the Lesser', 'Public Leader of Geonocians', 80, 'Commander', 'Pictures/PoggleUnitCard.jpg', 'Pictures/PoggleToy.jpg', 'command,command,comms,gear'),
(4, 'Super Tactical Droid', 'Kalani', 85, 'Commander', 'Pictures/KalaniUnitCard.jpg', 'Pictures/KalaniToy.jpg', 'command,command,command,comms,gear');

select * from separatist_units;