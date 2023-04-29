import fs from 'fs'
import Database from 'better-sqlite3'
import type { Database as IDataBase } from 'better-sqlite3'

const migration = fs.readFileSync('./migrate-schema.sql', 'utf8')
const db: IDataBase = new Database('./db.db', { verbose: console.log })
db.exec(migration)

export default db
