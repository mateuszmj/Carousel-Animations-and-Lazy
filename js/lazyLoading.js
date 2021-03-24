export default class LazyLoading {
    constructor() {
        this.pictures = document.querySelectorAll('picture.lazy');
        if ('loading' in HTMLImageElement.prototype) {
            this.pictures.forEach(picture => this.loadPicture(picture));
        } else {
            const pictureObserver = new IntersectionObserver((entries, observer) => {
                if(entries[0].isIntersecting) {
                    this.loadPicture(entries[0].target);
                    observer.unobserve(entries[0].target);
                }
            });
            this.pictures.forEach(picture => pictureObserver.observe(picture));
        }
    }
    loadPicture(picture) {
        const sources = picture.querySelectorAll('source');
        const img = picture.querySelector('img');
        sources.forEach(source => source.srcset = source.dataset.srcset);
        img.src = img.dataset.src;
    }
}