"use strict"

import MobileMenuToggle from './mobileMenuToggle.js';
import Carousel from './carousel.js';

new MobileMenuToggle();
new Carousel(document.querySelector('[data-carousel="0"]'), './js/imgs.json');
new Carousel(document.querySelector('[data-carousel="1"]'), './js/imgs.json');