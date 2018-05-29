const $dataElement = $(".data")

const displayUsers = (users) => {
    users.forEach(user => {
        const $userCard = createUserCard(user);
        $dataElement.append($userCard);
    });
}

const createUserCard = (user) => {
    return $(`
            <div>
                <h5>${user.getData()}</h5>
                <hr>
            </div>
        `)
}

const showLoading = (isLoading = true) => {
    $dataElement.innerHTML = isLoading ? "<h3>Loading...</h3>" : ""
}

const displayError = (error) => {
    $dataElement.innerHTML = "<h3>Error!</h3>"
}

export {
    displayUsers,
    displayError,
    showLoading
}
