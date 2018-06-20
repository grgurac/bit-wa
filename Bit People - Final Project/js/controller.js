const controller = ((data, ui) => {
    const listLayout = true;

    const renderUsersPage = (users) => {
        listLayout
            ? ui.renderUsersList(users)
            : ui.renderUsersGrid(users)
    }

    const onRefresh = (event) => {
        ui.resetSearch();
        loadUsersList();
    }

    const loadUsersList = () => {
        data.fetchUsers(users => {
            renderUsersPage(users)
        });
    }

    const onSearch = (event) => {
        const searchTerm = event.target.value
        const users = data.filterUsers(searchTerm);
        renderUsersPage(users);
    }

    const registerEventListeners = () => {
        $('#search').on('keyup', onSearch);
        $('#refresh').on('click', onRefresh);
    }

    const init = () => {
        registerEventListeners();
        loadUsersList();
    }

    return {
        init
    }


})(dataModule, uiModule);


