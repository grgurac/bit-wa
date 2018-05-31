import * as ui from './ui_module.js';
import * as data from './data_module.js';

function showInfoHandler(event) {
  if (event.target.parentElement.tagName === "A" || event.target.tagName === "A") {
    event.preventDefault();
    data.setLocalStorage(event.target.id);
    location.href = './show_info.html';
  }
}

function searchHandler(event) {
  const searchValue = $(`.search-box`).val();
  data.fetchSearchShows(searchValue)
    .then(ui.displaySearchList);
}

function setupSearchHandler(params) {
  $(`.search-box`).on("keyup", searchHandler);
  $(`body`).on("click", showInfoHandler);
}

export const initSinglePage = () => {
  setupSearchHandler()
  const id = localStorage.getItem("id");
  data.fetchSeasonsAndCast(id)
    .then(ui.displayOnShowInfo);
}


export const initHomepage = () => {
  setupSearchHandler();
  data.fetchShow()
  .then(ui.displayTop50)
  .catch(ui.failed); 
}


