CREATE TABLE IF NOT EXISTS devices(
    id INTEGER PRIMARY KEY,
    name VARCHAR UNIQUE,
    width INTEGER,
    height INTEGER
);

INSERT OR IGNORE INTO devices (name, width, height) VALUES ('IPhone SE', 375, 667);
INSERT OR IGNORE INTO devices (name, width, height) VALUES ('IPhone XR', 414, 896);
INSERT OR IGNORE INTO devices (name, width, height) VALUES ('Samsung Galaxy A51/71', 412, 914);