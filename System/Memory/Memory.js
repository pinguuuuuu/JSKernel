export class Memory {

    static address = 0;

    constructor() {
        this.address = ++Memory.address;
        this.data = [];
    }

    charge(data) {
        this.data = data;
    }

    flash() {
        this.data = [];
    }

    get() {
        return this.data;
    }
        
}