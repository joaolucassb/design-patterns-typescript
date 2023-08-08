import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);
console.log(meal2.getPrice());

const veganDishBuilder = new VeganDishBuilder();
const vaganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(vaganMeal);
console.log(vaganMeal.getPrice());
