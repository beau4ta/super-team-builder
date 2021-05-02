const Intern = require('../lib/intern');

describe("Intern", () => {
    it("should return the school", () => {
        const school = "school"
        const intern = new Intern("beau", 1, "beau@cool.com", school)

        expect(intern.school).toEqual(school)
    })

    describe("getSchool", () => {
        it("should return the input value", () => {
            const school = "school"
            const newSchool = new Intern("beau", 1, "beau@cool.com", school)

            expect(newSchool.getSchool()).toEqual(school)
        })
    })

    describe("getRole", () => {
        it("should return the input value", () => {
            const role = "Intern"
            const newRole = new Intern(role)

            expect(newRole.getRole()).toEqual(role)
        })
    })
})