var a = 8;
function add(a,b) {
    return a + b;
}

// export default {
//     a,
//     add
// }

export default class person {
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    run() {
        return this.name
    }
}
