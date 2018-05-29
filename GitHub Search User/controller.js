import { fetchGitHubUsers } from "./data.js"
import * as ui from './ui.js'



const init = () => {
    ui.showLoading()
    fetchGitHubUsers()
        .then((users) => {
            console.log("users", users);
            ui.displayUsers(users)
            ui.showLoading(false)
        })
        .catch((error) => {
            ui.displayError(error)
            ui.showLoading(false)
        })
}

export { init }
