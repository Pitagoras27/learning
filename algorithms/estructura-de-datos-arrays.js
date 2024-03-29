// Estructura de datos arrays!

class arrayStructure {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length += 1;
    return this.data;
  }

  pop() {
    const itemDelete = this.data[this.length - 1];
    delete this.data[this.length - 1];
    return itemDelete;
  }

  delete(index) {
    const item = this.data[index];
    this.deleteIndex(index);
    return item;
  }

  deleteIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length -= 1;
  }

  shift() {
    return this.delete(0);
  }

  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = item;
    this.length += 1;

    return this.data;
  }
}

const arrayStructureInstance = new arrayStructure();

arrayStructureInstance.push("A");
arrayStructureInstance.push("B");
arrayStructureInstance.push("C");
arrayStructureInstance.push("D");
arrayStructureInstance.push("E");

arrayStructureInstance.delete(2);
console.log("Delete index two", arrayStructureInstance);

arrayStructureInstance.shift("E");
console.log("Delete initial index", arrayStructureInstance);

arrayStructureInstance.unshift("AA");
console.log("Add item to index 0", arrayStructureInstance);
