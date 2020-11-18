function assignEvent(nj) {
    var element = document.getElementById("element");
    console.log("nj", nj)

    switch (nj) {
        case 0:
            document.addEventListener("click", function (e) {
                console.log('kliknięcie myszki')
            });
            break;
        case 1:
            document.addEventListener("contextmenu", function (e) {
                console.log('otwarcie menu kontekstowego')
            });
            break;
        case 2:
            document.addEventListener("dblclick", function (e) {
                console.log('podwójne kliknięcie myszki')
            });
            break;
        case 3:
            document.addEventListener("mousedown", function (e) {
                if (e.which === 1) {
                    console.log('wciśnięcie lewego przycisku')
                }
            });
            break;
        case 4:
            element.addEventListener("mouseover", function (e) {
                console.log('najechanie kursorem') // na element
            });
            break;
        case 5:
            document.addEventListener("mouseleave", function (e) {
                console.log('opuszczenie kursora')
            });
            break;
        case 6:
            document.addEventListener("mousemove", function (e) {
                console.log('poruszanie kursorem')
            });
            break;
        case 7:
            document.addEventListener("mouseover", function (e) {
                console.log('najechanie kursora') // na cały dokument html
            });
            break;

        case 8:
            document.addEventListener("mouseup", function (e) {
                if (e.which === 1) {
                    console.log('puszczenie lewego przycisku myszy', e)
                }
            });
            break;
    }
};

window.onload = function () {
    var nj = 0;
    assignEvent(nj);
}

