import { MyDataBaseFunction } from './db/my-database-function';
import { myDataBaseClassic as myDataBaseFromModuleA } from './module_a';

const myDataBaseClassic = MyDataBaseFunction;
myDataBaseClassic.add({ name: 'Luiz', age: 25 });
myDataBaseClassic.add({ name: 'Beatriz', age: 26 });
myDataBaseClassic.add({ name: 'Jéssica', age: 40 });
myDataBaseClassic.show();

console.log(myDataBaseClassic === myDataBaseFromModuleA);
