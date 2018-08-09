DROP TABLE IF EXISTS judges CASCADE;
DROP TABLE IF EXISTS skater CASCADE;
DROP TABLE IF EXISTS score CASCADE;

CREATE TABLE judges(
 id SERIAL PRIMARY KEY,
 name VARCHAR (255),
 country VARCHAR (255),
 reputation INTEGER
);

CREATE TABLE skater(
 id SERIAL PRIMARY KEY,
 name VARCHAR (255),
 age INTEGER,
 country VARCHAR (255)
);

CREATE TABLE score(
 id SERIAL PRIMARY KEY,
 judge_id INTEGER REFERENCES judges(id),
 skater_id INTEGER REFERENCES skater(id),
 score INTEGER
);

--    -- Omit serial column
--    INSERT INTO teams (name) VALUES ('Aston Villa');
 
--    -- Specify DEFAULT
--    INSERT INTO teams VALUES (DEFAULT, 'Manchester City');


INSERT INTO judges VALUES (DEFAULT,'David', 'VAT', 6);
INSERT INTO judges VALUES (DEFAULT,'Orlando', 'BRA', 10);
INSERT INTO judges VALUES (DEFAULT,'Sam', 'USA', 7);

INSERT INTO skater VALUES (DEFAULT,'Imani', 10, 'USA');
INSERT INTO skater VALUES (DEFAULT,'Lillian', 15, 'USA');
INSERT INTO skater VALUES (DEFAULT,'Milly', 20, 'USA');


INSERT INTO score VALUES (DEFAULT,1,1,6);
INSERT INTO score VALUES (DEFAULT,2,2,7);
INSERT INTO score VALUES (DEFAULT,3,3,8);

