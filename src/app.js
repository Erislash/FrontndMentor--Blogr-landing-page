document.addEventListener('DOMContentLoaded', function () {
    StartApp();
});
function StartApp() {
    let menuActive = false;

    const dropdownItem = document.querySelectorAll('.dropdownItem');
    dropdownItem.forEach(function(drop) {
        drop.querySelector('.dropdownItem__header').addEventListener('click', function(e) {
            const unactive = drop.classList.contains('dropdownItem--unactive');
            dropdownItem.forEach(drops => {
                drops.classList.add('dropdownItem--unactive');
            });

            if(unactive) drop.classList.remove('dropdownItem--unactive');
        });
    });


    const hamburguerBtn = document.querySelector('.nav__hamburguer');
    const navMenu = document.querySelector('.nav__menu');
    let canUseHamburguer = true;
    hamburguerBtn.addEventListener('click', function() {
        menuActive = !menuActive;
        if (menuActive && canUseHamburguer) {
            this.querySelector('.nav__hamburguerIcon').style.display = 'none';
            this.querySelector('.nav__hamburguerClose').style.display = 'block';
            navMenu.style.display = 'flex';
            canUseHamburguer = false;

            setTimeout(() => {
                navMenu.style.opacity = '1';
                canUseHamburguer = true;
            }, 100);
        }else if (!menuActive && canUseHamburguer) {
            this.querySelector('.nav__hamburguerIcon').style.display = 'block';
            this.querySelector('.nav__hamburguerClose').style.display = 'none';
            navMenu.style.opacity = '0';
            canUseHamburguer = false;
            setTimeout(() => {
                navMenu.style.display = 'none';
                canUseHamburguer = true;
            }, 400);
        }
    });
}
