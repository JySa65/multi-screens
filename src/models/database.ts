import fs from 'fs'
import Database from 'better-sqlite3'
import type { Database as IDataBase, Statement } from 'better-sqlite3'

class DB {
  private db: IDataBase
  public static instance: DB = new DB()

  constructor() {
    // this.db = new Database('./db.db', { verbose: console.log })
    this.db = new Database('./db.db')
  }

  public exec(sql: string): void {
    this.db.exec(sql)
  }

  public prepare(sql: string): Statement {
    return this.db.prepare(sql)
  }

  public transaction(fn: () => void): void {
    this.db.transaction(fn)()
  }

  public close(): void {
    this.db.close()
  }

  public execInitMigration(): void {
    const migration = fs.readFileSync('./migrate-schema.sql', 'utf8')
    this.db.exec(migration)
  }
}

export default DB
