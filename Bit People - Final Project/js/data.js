const dataModule = (($) => {

    const store = {
        users: []
    }

    class User {
        constructor (name, surname, dob, email, avatar, gender){
            const dateObj = new Date(dob);
            this.name = name,
            this.surname = surname,
            this.dob = `${dateObj.getDate()}.${dateObj.getMonth()}.${dateObj.getFullYear()}`
            this.email = email,
            this.avatar = avatar
            this.gender = gender
        }
    }

    fetchUsers = (successHandler) => {
        const request = $.ajax ({
            url: "https://randomuser.me/api/?results=15",
            method: "GET",
        });

        request.done((data) => {
            let usersData = data.results;
            let users = usersData.map(user => {
                return new User(user.name.first, user.name.last, user.dob.date, user.email, user.picture.thumbnail, user.gender);
            })

            store.users = users
            successHandler(users);
        });
    }

    const filterUsers = (searchValue) => {
        const userList = store.users
        const filteredUsers = [];
        for (let i = 0; i < userList.length; i++) {
            let liTitle = `${userList[i].name}`
            if (liTitle.indexOf(searchValue) > -1) {
                filteredUsers.push(userList[i]);
            }
        }   
        return filteredUsers;

    }
    return { fetchUsers, filterUsers }
})($);