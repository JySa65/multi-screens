import DB from '../database'
import { getErrorMessage, staticImplements } from '../../utils'

export interface IDevice {
  name: string
  width: number
  height: number
  id?: number
}

interface IDevicesStatic {
  getDevices: () => Devices[]
  createDevice: (device: Devices) => Devices[]
}

@staticImplements<IDevicesStatic>()
export default class Devices implements IDevice {
  name: string
  width: number
  height: number
  id?: number

  private static table = 'devices'

  constructor(device: IDevice) {
    this.name = device.name
    this.height = device.height
    this.width = device.width
    this.id = device?.id
  }

  public create(): Devices[] {
    return Devices.createDevice(this)
  }

  public update(): Devices[] {
    return Devices.updateDevice(this)
  }

  public delete(): Devices[] {
    return Devices.deleteDevice(this.id)
  }

  public static getDevices(): Devices[] {
    try {
      const sql = 'SELECT * FROM devices'
      const data = <Devices[]>DB.instance.prepare(sql).all()
      return data
    } catch (error) {
      alert(`No se pudieron obtener los dispositivos: ${getErrorMessage(error)}`)
      return []
    }
  }

  public static createDevice(device: IDevice): Devices[] {
    try {
      const sql = `INSERT INTO ${Devices.table} (name, width, height) VALUES (LOWER(@name),@width,@height)`
      const result = DB.instance.prepare(sql).run(device)
      if (result.changes === 0) {
        alert('No se pudo registrar')
      }
      return this.getDevices()
    } catch (error) {
      alert(`Error al registrar el dispositvo: ${getErrorMessage(error)}`)
      return []
    }
  }

  public static updateDevice(device: IDevice): Devices[] {
    try {
      const sql = `UPDATE ${Devices.table} SET name=LOWER(@name), width=@width, height=@height WHERE id=@id`
      const result = DB.instance.prepare(sql).run(device)
      if (result.changes === 0) {
        alert('No se pudo actualizar, verifica el ID')
      }
      return this.getDevices()
    } catch (error) {
      alert(`Error al actualizar el dispositvo ${error}`)
      return []
    }
  }
  public static deleteDevice(deviceId: IDevice['id']): Devices[] {
    try {
      const sql = `DELETE FROM ${Devices.table} WHERE id=?`
      const result = DB.instance.prepare(sql).run(deviceId)
      if (result.changes === 0) {
        alert('No se pudo eliminar, verifica el ID')
      }
      return this.getDevices()
    } catch (error) {
      alert(`Error al actualizar el dispositvo ${error}`)
      return []
    }
  }
}
