function togolBut() {
    const manuBtn = document.querySelector('.manu-icone');
    manuBtn.addEventListener('click', function () {
        document.querySelector('.laft-manu').classList.toggle('show')
    })


}

togolBut()