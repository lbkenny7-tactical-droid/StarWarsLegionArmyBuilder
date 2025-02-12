CREATE TABLE [dbo].[separatist_units](
	[id] [int] NOT NULL,
	[name] [varchar](200) NOT NULL,
	[description] [varchar](200) NOT NULL,
	[military_rank] [varchar](200) NOT NULL,
	[points] [int] NOT NULL,
	[toy_image] [varchar](200) NOT NULL,
	[unitcard_image] [varchar](200) NOT NULL,
	[upgrade_slots] [varchar](200) NOT NULL)

Select * from dbo.separatist_units;

INSERT [dbo].[separatist_units] ([id], [name], [description], [military_rank], [points], [toy_image], [unitcard_image], [upgrade_slots]) VALUES (1, N'Count Dooku', N'Darth Tyranus', N'Commander', 165, N'Pictures/CountDookuToy.jpg', N'Pictures/CountDookuUnitCard.jpg', N'force,force,force,command')
INSERT [dbo].[separatist_units] ([id], [name], [description], [military_rank], [points], [toy_image], [unitcard_image], [upgrade_slots]) VALUES (2, N'General Grievous', N'Sinister Cyborg', N'Commander', 130, N'Pictures/GeneralGrievousToy.jpg', N'Pictures/GeneralGrievousUnitCard.jpg', N'command,command,training,gear')
INSERT [dbo].[separatist_units] ([id], [name], [description], [military_rank], [points], [toy_image], [unitcard_image], [upgrade_slots]) VALUES (3, N'Poggle the Lesser', N'Public Leader of Geonocians', N'Commander', 80, N'Pictures/PoggleToy.jpg', N'Pictures/PoggleUnitCard.jpg', N'command,command,comms,gear')
INSERT [dbo].[separatist_units] ([id], [name], [description], [military_rank], [points], [toy_image], [unitcard_image], [upgrade_slots]) VALUES (4, N'Super Tactical Droid', N'Kalani', N'Commander', 85, N'Pictures/KalaniToy.jpg', N'Pictures/KalaniUnitCard.jpg', N'command,command,command,comms,gear')

