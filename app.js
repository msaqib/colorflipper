function rand255() {
    return Math.floor(Math.random()*256)
}

function setBG() {
    document.body.style.backgroundColor = 'rgb(' + rand255() + ', ' + rand255() + ', ' + rand255() + ')'
}

setBG()