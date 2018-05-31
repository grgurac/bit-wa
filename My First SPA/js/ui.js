export const displayImage = (url, name, id) => {
 
    const template = $(`
        <div class="content">
            <img src="${url[Math.floor(Math.random() * 4)]}" >
        
            <button type="button" id=${id}>${name}</button>
        </div>
    `)
    $(".image").append(template);
}