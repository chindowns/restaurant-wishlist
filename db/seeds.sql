USE Database mjbvgr3xjaymu1p3;

CREATE TABLE lists
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    beenThere BOOLEAN DEFAULT false
);

INSERT INTO lists (name, beenThere)
VALUES 
    ("Benu", false),
    ("Mourad", true),
    ("Roy's", true),
    ("Chez TJ", false),
    ("Manresa", false),
    ("Adega", false),
    ("French Laundry", true),
    ("China Cafe", true),
    ("New Indian", true)