import Database from 'better-sqlite3'
import type { Database as IDataBase } from 'better-sqlite3'

const db: IDataBase = new Database('./db.db', { verbose: console.log })

const initialData = [
  {
    id: 1,
    name: 'IPhone SE',
    width: 375,
    height: 667
  },
  {
    id: 2,
    name: 'IPhone XR',
    width: 414,
    height: 896
  },
  {
    id: 3,
    name: 'Samsung Galaxy A51/71',
    width: 412,
    height: 914
  }
]

const createTable = `CREATE TABLE IF NOT EXISTS devices(
        id INTEGER PRIMARY KEY,
        name VARCHAR UNIQUE,
        width INTEGER,
        height INTEGER
    );`

db.exec(createTable)

const insert = db.prepare(
  'INSERT OR IGNORE INTO devices (name, width, height) VALUES (LOWER(@name),@width,@height)'
)
db.transaction((devices) => {
  for (const device of devices) insert.run(device)
})(initialData)

export default db
