export default class MobileMenuToggle {
    constructor() {
        this.menuMobile = document.querySelector('#navMobile');
        this.menuMobileBtn = document.querySelector('#navMobileBtn');
        this.menuMobileClose = document.querySelector('#navMobileBtnClose');
        this.menuMobileBtn.addEventListener('click', () => {
            this.itemToggle(this.menuMobile);
            this.itemToggle(this.menuMobileClose);
        });
        this.menuMobileClose.addEventListener('click', () => {
            this.itemToggle(this.menuMobile);
            this.itemToggle(this.menuMobileClose);
        });
    }
    itemToggle(item) {
        item.classList.toggle('active');
    }
}