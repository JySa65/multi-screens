import Database from 'better-sqlite3'

const db: Database = new Database('../db.db', { verbose: console.log, version: '1' })

// db.table('devices', {
//   columns: ['id', 'name', 'width', 'height']
// })

export default db
