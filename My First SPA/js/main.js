import { cats, mice } from "./data.js";
import { displayImage } from "./ui.js";

const toggleTemplate = (arr, name, id) => {
    $(".content").remove();
    displayImage(arr, name, id);
}

const eventHandler = (event) => {
    if (event.target.id === "cats") {
        toggleTemplate(mice, "mice", "mice")

    } else if (event.target.id === "mice") {
        toggleTemplate(cats, "cats", "cats")
    }
}


export const init = () => {
    const name = "cats";
    displayImage(cats, name, name)
    $("body").on("click", eventHandler)
}