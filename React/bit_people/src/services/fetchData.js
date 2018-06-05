import { dataURL } from './urls';
import { User } from '../entities/User'

export const fetchData = () => {
   return fetch(dataURL.url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                return data.results.map((user) => {
                    const {gender, name, email, picture, dob} = user;
                    return new User(name, gender, picture, email, dob);
                })
            })
}

