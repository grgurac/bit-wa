const uiModule = (($) => {

    const displayUsers = (users) => {
        const listOfUsers = $(".collection");
        listOfUsers.text("")
        users.forEach(user => {
            const $card = $(`
            <li class="collection-item avatar">
                    <img src="${user.avatar}" alt="" class="circle">
                    <p>${user.name} ${user.surname}</p>
                    <p>${user.email}</p>
                    <p>${user.dob}</p>
             </li>
             `)
            listOfUsers.append($card);
        })
    }
    return {
        displayUsers
    }
})($);
