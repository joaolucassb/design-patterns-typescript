import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';
import { VeganDishBuilder } from '../../creational/builder/classes/vegan-dish-builder';

export class BuilderFacade {
  // Essa é a fachada para a pasta src/creational/builder/index.ts
  private mainDishBuilder = new MainDishBuilder();
  private veganDishBuilder = new VeganDishBuilder();

  makeMeal1(): void {
    this.mainDishBuilder.makeMeal().makeDessert();
    console.log(this.mainDishBuilder.getMeal());
    console.log(this.mainDishBuilder.getPrice());
  }

  makeMeal2(): void {
    this.mainDishBuilder.reset();
    const meal2 = this.mainDishBuilder.makeBeverage().getMeal();
    console.log(meal2);
    console.log(meal2.getPrice());
  }

  mekeMeal3(): void {
    const vaganMeal = this.veganDishBuilder.makeMeal().getMeal();
    console.log(vaganMeal);
    console.log(vaganMeal.getPrice());
  }
}
