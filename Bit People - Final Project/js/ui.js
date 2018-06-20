const uiModule = (($) => {

    const $search = $('#search');
    const $container = $("#container");

    const renderUsersList = (users) => {
        $container.html("");
        
        $listOfUsers = $('<ul class="collection"></ul>');
        users.forEach(user => {
            const $card = $(`
                <li class="collection-item avatar">
                        <img src="${user.avatar}" alt="" class="circle">
                        <p>${user.name}</p>
                        <div><i class="material-icons" id="refresh">mail</i><span>${user.email}</span></div>
                        <div><i class="material-icons" id="refresh">cake</i><span>${user.dob}</span></div>
                </li>
            `);
            $listOfUsers.append($card);
        })

        $container.append($listOfUsers);
    }


    const renderUsersGrid = (users) => {
        $container.html("");

        $row = $('<div class="row"></div>');
        users.forEach(user => {
            const $card = $(`
                <div class="col m4">
                    <div class="card">
                        <div class="card-image">
                            <img src="${user.avatarLarge}">
                            <span class="card-title">${user.firstName}</span>
                        </div>
                        <div class="card-content">
                            <p>${user.email}</p> 
                            <p>Birth date: ${user.dob}</p>
                        </div>
                    </div>
                </div>
             `);

            $row.append($card);
        })

        $container.append($row);
    }

    const resetSearch = () => {
        $search.val('');
    }

    return {
        renderUsersList, renderUsersGrid, resetSearch
    }

})($);
