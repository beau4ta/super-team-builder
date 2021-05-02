const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    it("should return the github username", () => {
        const github = "github"
        const engineer = new Engineer("beau", 1, "beau@cool.com", github)

        expect(engineer.github).toEqual(github)
    })

    describe("getGithub", () => {
        it("should return the github username", () => {
            const github = "github"
            const newGit = new Engineer("beau", 1, "beau@cool.com", github)

            expect(newGit.getGithub()).toEqual(github)
        })
    })

    describe("getRole", () => {
        it("should return the role", () => {
            const role = "Engineer"
            const newRole = new Engineer(role)

            expect(newRole.getRole()).toEqual(role)
        })
    })
})