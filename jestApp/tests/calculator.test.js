const mathOperations = require('../index')

describe("Calculator Test Sum", () => {

    test("Addition of 2 numbers", () => {
        let result = mathOperations.sum(10, 10)

        expect(result).toBe(20)
    })

    test("Addition of 2 numbers with error", () => {
        let result = mathOperations.sum(5, 5)
        expect(result).toBe(8);
    })
})
