import { DeviceImplemetation } from '../device/device-implemetation';

export class RemoteControl {
  constructor(protected device: DeviceImplemetation) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());
    console.log(
      `${this.device.getName()} power status: ${this.device.getPower()}`,
    );
  }
}
