import { SmartHouseCommand } from './smarth-house-command';
import { SmartHouseLight } from './smart-house-light';

export class LightIntensityCommand implements SmartHouseCommand {
  constructor(private readonly Light: SmartHouseLight) {}

  execute(): void {
    const intensity = this.Light.increaseIntensity();
    console.log(`Intensidade de ${this.Light.name} é ${intensity}`);
  }
  undo(): void {
    const intensity = this.Light.decreaseIntensity();
    console.log(`Intensidade de ${this.Light.name} é ${intensity}`);
  }
}
