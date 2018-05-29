class User {
    constructor(id, username, avatar) {
        this.id = id
        this.username = username
        this.avatar = avatar
    }

    getData() {
        const { id, username } = this
        return `ID: ${id}, UN: ${username}`
    }
}

export default User
