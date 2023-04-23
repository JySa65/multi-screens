import db from '../database'

export interface IDevices {
  name: string
  width: number
  height: number
}

export default class Devices implements IDevices {
  name: string
  width: number
  height: number

  constructor(device: IDevices) {
    this.name = device.name
    this.height = device.height
    this.width = device.width
  }

  static async getDevices(): Promise<IDevices[]> {
    try {
      const sql = 'SELECT * FROM devices'
      const data = db.prepare(sql).get()
      // db.
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    return []
  }
}
