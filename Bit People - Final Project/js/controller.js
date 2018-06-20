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

    const onLoad = () => {
        if (data.getUsers().length === 0) {
            ui.renderOnLoad()
        }
    }

    const showMessage = () => {
        if (data.filterUsers().length === 0) {
            ui.ifNoResults();
        }
    }

    const onSearch = (event) => {
        const searchTerm = event.target.value
        if (data.filterUsers(searchTerm).length === 0) {
            console.log(data.filterUsers());

            ui.ifNoResults();
        } else {
            const users = data.filterUsers(searchTerm);
            ui.renderUsersPage(users);
        }

    }

    const registerEventListeners = () => {
        $searchBar.on('keyup', onSearch);
        $refreshButton.on('click', onRefresh);
        $viewButton.on('click', onChangeLayout)
    }

    const init = () => {
        onLoad();
        registerEventListeners();
        loadUsersList();
        showMessage();

    }




    return {
        init
    }


})(dataModule, uiModule);


