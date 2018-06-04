import User from "./entities/User"
import {usersData} from "../data/users";

export const getUserData = () => {
    return usersData.map((user) => {
        const {name, email, dob, picture} = user;
        return new User(name, email, dob, picture);
    })
}

