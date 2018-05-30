const figlet = require('figlet')

const text = figlet.textSync('Misa Haker', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
});


module.exports = {
    text
};