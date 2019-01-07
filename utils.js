
class BB {
    constructor() { }
    run() {
        console.log("run")
    }
}

console.log(1)

export default class AA extends BB {
    constructor() {
        super()
    }
    do() {
        console.log("do it")
    }

}