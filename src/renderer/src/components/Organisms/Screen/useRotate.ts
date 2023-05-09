import { IDevice } from 'src/models/devices/devices'
import useBoundStore from '@renderer/store'

export default function useRotate(device: IDevice): Array<number> {
  const isRotated = useBoundStore((state) => state.isRotated)
  return isRotated ? [device.height, device.width] : [device.width, device.height]
}
