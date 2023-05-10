import fs from 'fs'
import Database from 'better-sqlite3'
import type { Database as IDataBase, Statement } from 'better-sqlite3'
import { app } from 'electron'
import { resolve } from 'path'

class DB {
  private db: IDataBase
  public static instance: DB = new DB()

  constructor() {
    // this.db = new Database('./db.db')
    // console.log(app.getPath('userData'))
    // // console.log(app.getPath('userData'))
    // // app?.whenReady().then(async () => {
    const dir = app.getPath('userData')
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, '0777')
    }
    console.log(dir)
    this.db = new Database(`${dir}/db.db`)
    // this.execInitMigration()
    // })
    // this.db = new Database('./db.db', { verbose: console.log })
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
    const dir = resolve(__dirname, '..', '..', 'resources', 'migrate-schema.sql')
    const migration = fs.readFileSync(dir, 'utf8')
    this.db.exec(migration)
  }
}

export default DB
