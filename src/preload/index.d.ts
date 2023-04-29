import { ElectronAPI } from '@electron-toolkit/preload'
import Devices, { IDevice } from '../models/devices/devices'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      devices: {
        get: () => Devices[]
      }
      getDevices(): Devices[]
      createDevice(device: IDevice): Devices[]
      updateDevice(device: IDevice): Devices[]
      deleteDevice(device: IDevice): Devices[]
    }
  }
}
