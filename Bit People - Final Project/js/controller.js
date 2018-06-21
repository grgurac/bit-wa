const controller = ((data, ui) => {


    const $viewButton = $("#viewBtn");
    const $searchBar = $('#search');
    const $refreshButton = $('#refresh');
    const $aboutPage = $("#aboutPage");
    const $homePage = $("#homePage");


    

    const onRefresh = (event) => {
        ui.resetSearch();
        loadUsersList();
    }

    const loadUsersList = () => {
        data.fetchUsers(users => {
            ui.renderUsersPage(users)
            const statsText = data.getGenderStatus(users)
            ui.showGenderStats(statsText);
        });
    }

    const onChangeLayout = () => {
        const users = data.getUsers();
        const layout = ui.changeLayout();
        ui.renderUsersPage(users);
        localStorage.setItem("listView", layout);

    }

    const onLoad = () => {
        if (data.getUsers().length === 0) {
            ui.renderOnLoad()
        }
    }



    const onSearch = (event) => {
        const searchTerm = event.target.value
        if (data.filterUsers(searchTerm).length === 0) {
            ui.ifNoResults();
        } else {
            const users = data.filterUsers(searchTerm);
            ui.renderUsersPage(users);
        }
    }

    const onAbout = () => {
        ui.showAboutPage();
        ui.hideElements();
    }

    const onBitPeople = () => {
        const users = data.getUsers();
        ui.showElements();
        ui.renderUsersPage(users);
    }

    const registerEventListeners = () => {
        $searchBar.on('keyup', onSearch);
        $refreshButton.on('click', onRefresh);
        $viewButton.on('click', onChangeLayout);
        $aboutPage.on('click', onAbout)
        $homePage.on('click', onBitPeople)
    }

    const init = () => {
        loadUsersList();
        onLoad();
        registerEventListeners();
        onBitPeople();
    }




    return {
        init
    }


})(dataModule, uiModule);


