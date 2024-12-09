export class OS {
    constructor(name, main) {
        this.name = name;
        this.main = main;
    }


    boot() {
        this.main();
    }
}
