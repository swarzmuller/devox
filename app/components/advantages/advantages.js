let tab = document.querySelectorAll('.advantages__tab');
let item = document.querySelector('.advantages__descr');

for(let i = 0; i<tab.length;i++) {
    tab[i].onclick = function () {
        if (tab[i].classList.contains('active-tab')){
            this.classList.remove('active-tab');

        }
        else{
            for (let i = 0; i < tab.length; i++){
                tab[i].classList.remove('active-tab');
            }
            this.classList.add('active-tab');
            item.innerHTML = this.lastElementChild.innerHTML;

        }
    } 
}