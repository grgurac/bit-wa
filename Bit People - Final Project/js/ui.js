

const uiModule = (($) => {

    let listLayout = true;

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
            if (user.gender === "female"){
                $card.addClass ("red lighten-5")
            }
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
            if (user.gender === "female"){
                $card.addClass("red lighten-5")
            }
        })

        $container.append($row);
    }


    const renderOnLoad = () => {
        $container.html("");
        const $animation = $(`<div class="sk-cube-grid">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
      </div>`);
      $container.append($animation);
    }


  

    const resetSearch = () => {
        $search.val('');
    }

    const changeLayout = () =>{
        listLayout = !listLayout;
    }

    const renderUsersPage = (users) => {
        toggleLayoutButton()
        if (listLayout) {
            renderUsersList(users);
        } else {
            renderUsersGrid(users);
        }  
    }

    const toggleLayoutButton = () => {
        if (listLayout) {
            $("#viewBtn").text("view_list");
        } else {
            $("#viewBtn").text("view_module");
        }         
    }

    return {
        renderUsersList, 
        changeLayout, 
        renderUsersGrid, 
        resetSearch, 
        renderUsersPage,
        renderOnLoad
    }

})($);
