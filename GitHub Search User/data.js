import User from './user.js';
import { BASE_URL } from './consts.js';

const fetchGitHubUsers = () => {
    return fetch(BASE_URL)
        .then((response) => {
            console.log("response", response);
            return response.json()
        })
        .then((responseUsersData) => {
            const searchedUsers = responseUsersData.items
            const myUsers = adaptData(searchedUsers)
            return myUsers
        })
}

const adaptData = (users) => {
    return users.map((user) => {
        const { id, login, avatar_url } = user
        return new User(id, login, avatar_url)
    })
}

export {
    fetchGitHubUsers
}
