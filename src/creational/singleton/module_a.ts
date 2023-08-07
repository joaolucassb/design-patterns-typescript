import { MyDataBaseFunction } from './db/my-database-function';

const myDataBaseClassic = MyDataBaseFunction;
myDataBaseClassic.add({ name: 'Lucas', age: 25 });
myDataBaseClassic.add({ name: 'Ana', age: 26 });
myDataBaseClassic.add({ name: 'Eduardo', age: 40 });

export { myDataBaseClassic };
