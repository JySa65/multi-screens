import { ipcMain } from 'electron'
import Devices from './devices'

// Main process
ipcMain.handle('get-devices', async () => {
  console.log('get-devices')
  return Devices.getDevices()
})
