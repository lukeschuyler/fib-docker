const Fib = require("./Fib")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new Fib.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("fetchIndexes", () => {
    let inst

    beforeEach(() => {
        inst = new Fib.default()
    })

    test("0", async () => {
        await inst.fetchIndexes()
    })
})

// @ponicode
describe("renderSeenIndexes", () => {
    let inst

    beforeEach(() => {
        inst = new Fib.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.renderSeenIndexes()
        }
    
        expect(callFunction).not.toThrow()
    })
})
