import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'João', '942A', 'Av. Pinheiros', 'Recife');
deliveryContext(factory, 'Ana', '942A', 'Av. Pinheiros', 'Recife');
deliveryContext(factory, 'Helena', '502', 'Av. Pinheiros', 'Recife');
deliveryContext(factory, 'Lucas', '12', 'Rua Qualquer', 'São Paulo');
deliveryContext(factory, 'Otavio', '401', 'Rua B', 'Rio de Janeiro');

console.log();
console.log(factory.getLocations());
