import { MyDefaultIterator } from './my-default-iterator';
import { MyIteratorProtocol } from './my-iterator-protocol';

export class MyDataStructure {
  private _items: string[] = [];
  private iterator: MyIteratorProtocol<string> = new MyDefaultIterator(this);

  addItem(...itens: string[]): void {
    itens.forEach((item) => this.items.push(item));
  }

  get items(): string[] {
    return this._items;
  }

  size(): number {
    return this._items.length;
  }

  changeIterator(iterator: MyIteratorProtocol<string>): void {
    this.iterator = iterator;
  }

  [Symbol.iterator](): MyIteratorProtocol<string> {
    return this.iterator;
  }

  resetIterator(): void {
    this.iterator.reset();
  }
}
