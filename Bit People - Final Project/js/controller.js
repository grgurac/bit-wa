const controller = ((data, ui) => {
   

    const $viewButton = $("#viewBtn");
    const $searchBar = $('#search');
    const $refreshButton = $('#refresh');

    const onRefresh = (event) => {
        ui.resetSearch();
        loadUsersList();
    }

    const loadUsersList = () => {
        data.fetchUsers(users => {
            ui.renderUsersPage(users)
        });
    }

    const onChangeLayout = () => {
        const users = data.getUsers();
        ui.changeLayout();
        ui.renderUsersPage(users);

    }

    const onSearch = (event) => {
        const searchTerm = event.target.value
        const users = data.filterUsers(searchTerm);
        ui.renderUsersPage(users);
    }

    const registerEventListeners = () => {
        $searchBar.on('keyup', onSearch);
        $refreshButton.on('click', onRefresh);
        $viewButton.on('click', onChangeLayout)
    }

    const init = () => {
        registerEventListeners();
        loadUsersList();
    }

    return {
        init
    }


})(dataModule, uiModule);


