const uiModule = (($) => {

    let listLayoutString = localStorage.getItem("listView");
    let listLayout = ( listLayoutString === "true") ? true : false;

    const $search = $('#search');
    const $container = $("#container");
    const $viewButton = $("#viewBtn");
    const $refreshButton = $('#refresh');
    const $stats = $("#show-stats");
    const $statsDiv = $('#statsDiv');
    const $visits = $('#visits');

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
                    <div class=" col m4 card">
                        <div class="card-image">
                            <img src="${user.avatarLarge}">
                            <span class="card-title">${user.firstName}</span>
                        </div>
                        <div class="card-content">
                            <p>${user.email}</p> 
                            <p>Birth date: ${user.dob}</p>
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

    const ifNoResults = () => {
        $container.html("");
        const $messageOnEmptySearchBar = $(`<div class="no-result"> <i class="large material-icons" id="refresh">face</i><h3>We couldn't find any people matching your search</h3>
      </div>`);
      $container.append($messageOnEmptySearchBar);
    }

    const showAboutPage = () => {
        $container.html("");
        const $aboutPage = $(`
        <div class="container">
        <div class = "row">
        <div class = "col m">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum lacinia velit, in posuere mi pretium pretium. Donec pretium mauris ante, non tempor turpis finibus accumsan. Curabitur in venenatis orci. Maecenas vel enim orci. Morbi maximus pharetra scelerisque. Duis a semper purus. Nullam elementum massa at porta varius. Nullam pharetra ex a eros lacinia blandit. Sed tempor consectetur convallis. Phasellus rutrum facilisis est. Integer euismod, est at suscipit laoreet, nibh metus aliquet quam, et vulputate orci felis sit amet leo. Integer malesuada nunc non erat faucibus mattis. Phasellus et lacus eget tellus ornare ultrices. Mauris et vulputate dui, sit amet placerat risus.
        <h3>What we do</h3>
        <p>Donec sodales euismod eros, vel interdum quam luctus nec. Aenean et lorem vel turpis ornare facilisis eu et urna. Cras aliquet orci vel dui ullamcorper ultricies. Maecenas venenatis, nunc sit amet suscipit vestibulum, est augue fringilla diam, in sollicitudin sem eros vitae nibh. Ut hendrerit urna aliquet, fringilla dolor eu, venenatis justo. Nullam feugiat dolor quis metus elementum sagittis. Aliquam bibendum magna nulla, in elementum magna molestie eget. Vivamus tristique turpis eu venenatis interdum. Proin eu venenatis felis, sit amet fermentum orci. Aliquam pulvinar id tellus non gravida. Vivamus ante lacus, vulputate id tempus vitae, cursus iaculis mauris. Suspendisse potenti.<p>
        </div>
        </div>
        </div>
        `);
        $container.append($aboutPage);
    }  

    const showGenderStats = (stats) => {
       $stats.text(stats);
    }


    const resetSearch = () => {
        $search.val('');
    }

    const changeLayout = () =>{
        listLayout = !listLayout;
        return listLayout;
    }

    const renderUsersPage = (users) => {
        toggleLayoutButton();

        if (!users.length) {
            return ifNoResults();
        }

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

    const hideElements = () => {
            $viewButton.hide();
            $refreshButton.hide();
    }

    const showElements = () => {
        $viewButton.show();
        $refreshButton.show();
}

    const showLastVisit = (visits) => {
        $visits.text(visits)
    }

    return {
        renderUsersList, 
        changeLayout, 
        renderUsersGrid, 
        resetSearch, 
        renderUsersPage,
        renderOnLoad,
        ifNoResults,
        showAboutPage,
        hideElements,
        showElements,
        showGenderStats,
        showLastVisit 
    }

})($);
