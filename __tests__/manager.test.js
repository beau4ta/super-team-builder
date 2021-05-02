const Manager = require('../lib/manager');

describe("Manager", () => {
    it("should return the office number", () => {
        const number = 1
        const manager = new Manager("beau", 1, "beau@cool.com", number)

        expect(manager.number).toEqual(number)
    })
    describe("getNumber", () => {
        it("should return the number", () => {
            const number = 1
            const newNumber = new Manager("beau", 1, "beau@cool.com", number)

            expect(newNumber.getNumber()).toEqual(number)
        })
    })

    describe("getRole", () => {
        it("should return the role", () => {
            const role = "Manager"
            const newRole = new Manager(role)

            expect(newRole.getRole()).toEqual(role)
        })
    })
})
