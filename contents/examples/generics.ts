class Map<T> {
  private map: { [name: string]: T } = {};

  public add(name: string, item: T): void {
    this.map[name] = item;
  }

  public get(name): T {
    return this.map[name];
  }

  public remove(name: string): void {
    delete this.map[name];
  }
}

const instanceA = new Map<boolean>();
instanceA.add('foo', true);
console.log(instanceA.get('foo'));