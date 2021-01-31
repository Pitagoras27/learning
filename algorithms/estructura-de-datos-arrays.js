class arrayStructure {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    
    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length +=1
        return this.data
    }
    
    pop() {
        const itemDelete = this.data[this.lenght -1];
        delete this.data[this.lenght -1];
        return itemDelete;
    }
    
    delete(index) {
        const item = this.data[index];
        this.deleteIndex(index);
        return item;
    }
    
    deleteIndex(index) {
        for(let i = index; i < this.length -1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length -1];
        this.length -= 1;
    }
}

const arrayStructureInstance = new arrayStructure();

arrayStructureInstance.push("A");
arrayStructureInstance.push("B");
arrayStructureInstance.push("C");
arrayStructureInstance.push("D");
arrayStructureInstance.push("E");

arrayStructureInstance.delete(2);
console.log(arrayStructureInstance);
