const p1 = new Promise((resolve, reject) => {
    $.get('http://thecatapi.com/api/images/get?format=xml')
        .done((res) => {
            const response = $(res).find('url').text();
            resolve(response);
            console.log(response)

        })
})

const p2 = new Promise((resolve, reject) => {
    $.get('http://thecatapi.com/api/images/get?format=xml')
        .done((res) => {
            const response = $(res).find('url').text();
            resolve(response);
        })
})

const p3 = new Promise((resolve, reject) => {
    $.get('http://thecatapi.com/api/images/get?format=xml')
        .done((res) => {
            const response = $(res).find('url').text();
            resolve(response);
        })
})



Promise.all([p1, p2, p3])
    .then((response) => {
        response.forEach((img) => {
            const $div = $('.photos');
            const $img = $(`<img src='${img}' width='300px'>`);
            $div.append($img);
        })
    })
a to sto nas dvoje nismo submitovali
true