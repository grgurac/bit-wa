const controller = ((data, ui) => {

    const $viewButton = $("#viewBtn");
    const $searchBar = $('#search');
    const $refreshButton = $('#refresh');
    const $aboutPage = $("#aboutPage");
    const $homePage = $("#homePage");

    const onRefresh = (event) => {
        ui.resetSearch();
        data.lastDate();
        data.fetchUsers(users => {
            loadUsersList();
        });
    }

    const loadUsersList = () => {
        const users = data.getUsers();
        if (users) {
            ui.renderUsersPage(users);
            const statsText = data.getGenderStatus(users);
            ui.showGenderStats(statsText);
            const visitsText = (`Last visited ${data.getLastUpdate()} seconds ago`);
            ui.showLastVisit(visitsText);
            data.getLastUpdate();

        } else {
            data.fetchUsers(users => {
                ui.renderUsersPage(users);
                const statsText = data.getGenderStatus(users);
                const visitsText = (`Last visited ${data.getLastUpdate()} seconds ago`);
                ui.showGenderStats(statsText);
                ui.showLastVisit(visitsText);
                data.getLastUpdate();
            });
        }
    }

    const onChangeLayout = () => {
        const users = data.getUsers();
        const layout = ui.changeLayout();
        ui.renderUsersPage(users);
        localStorage.setItem("listView", layout);

    }

    const showLoading = () => {
        ui.renderOnLoad()
    }

    const onSearch = (event) => {
        const users = data.filterUsers(event.target.value);
        ui.renderUsersPage(users);
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
        registerEventListeners();
        
        showLoading();
        
        loadUsersList();
    }

    return {
        init
    }


})(dataModule, uiModule);


