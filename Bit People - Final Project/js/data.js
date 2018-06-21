const dataModule = (($) => {

    const store = {
        users: [],
    }
    
    class User {
        constructor (first, name, dob, email, avatar, avatarLarge, gender){
            const dateObj = new Date(dob);
            this.firstName = first.toLowerCase(),
            this.name = name,
            this.dob = `${dateObj.getDate()}.${dateObj.getMonth()}.${dateObj.getFullYear()}`
            this.email = email,
            this.avatar = avatar
            this.avatarLarge = avatarLarge
            this.gender = gender
        }
    }

    fetchUsers = successHandler => {
        const request = $.ajax ({
            url: "https://randomuser.me/api/?results=15",
            method: "GET",
        });

        request.done((data) => {
            let usersData = data.results;
            let users = usersData.map(user => {
                const first =` ${user.name.first[0].toUpperCase()}${user.name.first.slice(1)}`
                const last =` ${user.name.last[0].toUpperCase()}${user.name.last.slice(1)}`
                const name = `${first} ${last}`;
                const email = user.email;
                const splitEmail = email.split("@");
                const lastThree = splitEmail[0].slice(splitEmail[0].length - 3);
                const shortEmail = `${splitEmail[0].slice(0, 3)}...${lastThree}@${splitEmail[1]}`
                return new User(first, name, user.dob.date, shortEmail, user.picture.thumbnail, user.picture.large, user.gender);
            })

            store.users = users
                        
            successHandler(users);
           
        });
        
    }
    

    const getUsers = () => {
        return store.users;
    }
    
    
    const filterUsers = (searchValue) => {
        const userList = store.users
        
        const filteredUsers = [];
        for (let i = 0; i < userList.length; i++) {
            let liTitle = `${userList[i].name.toLowerCase()}`
            if (liTitle.indexOf(searchValue) > -1) {
                filteredUsers.push(userList[i]);
            }
        }   
        return filteredUsers;

    }


    const getGenderStatus = (users) => {
        let male = 0;
        let female = 0;
        users.forEach(user => {
            if (user.gender === "male"){
                male ++                
            }else {
                female ++
            }
        })
        
        return `Male:${male} Female:${female}`;
    }
    



    return { fetchUsers, filterUsers, getUsers, getGenderStatus }
})($);