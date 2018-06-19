const controller = ((data, ui) => {
    
    function loadData() {
        data.fetchUsers(users => {
            ui.displayUsers(users)
        });
    }

    function setupSearchHandler() {    
        $('#search').on('keyup', function (event) {
            const searchTerm = event.target.value
            const filteredUsers = data.filterUsers(searchTerm);     
            ui.displayUsers(filteredUsers)
        })
    }

    function init() {
        // fetch initial data
        loadData()
        // Setup event handlers
        setupSearchHandler()
    }
    
    return {
        init
    }


})(dataModule, uiModule);


