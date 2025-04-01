//alert('Su balandžio pirma!')



function toEnglish() {
document.querySelector('#title').innerHTML='Friendship and care for everyone – both purring and wagging!'
}

function toLithuanian() {
document.querySelector('#title').innerHTML='Draugystė ir rūpestis kiekvienam – tiek murkiančiam, tiek vizginančiam!'
}

function show_p() {
    document.querySelector('.pastraipa').style.display = 'flex'
    document.querySelector('.tekstas').style.display = 'none'
}

function hide_p() {
    document.querySelector('.pastraipa').style.display = 'none'
    document.querySelector('.tekstas').style.display = 'flex'
}