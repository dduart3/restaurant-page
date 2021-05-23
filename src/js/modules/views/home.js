import Element from '../util/ElementFactory.js';
import sliderOne from '../components/slider_one.js';
import sliderTwo from '../components/slider_two.js';
import Splide from '@splidejs/splide';


const mountSliders = () =>{
    new Splide( '#image-slider', {
        type   : 'loop',
        direction: 'ttb',
        height: '40rem',
        width: '20rem',
        perPage: 3,
        autoplay: true,
        focus  : 'center',
        interval: 3000,
        classes: {
            arrows: 'hidden'
        },
    }).mount();
    
    new Splide( '#image-slider-1', {
        type   : 'loop',
        direction: 'ttb',
        height: '40rem',
        width: '20rem',
        perPage: 3,
        autoplay: true,
        focus  : 'center',
        interval: 5000,
        classes: {
            arrows: 'hidden'
        },
    }).mount();
}


const home = () =>{

const main = Element({
    elementType:'main',
    elementClass:'main-home'
});

const leftSection = Element({
    elementType: 'div',
    elementClass:'section'
});


const leftSlider = sliderOne();


const middleSection = Element({
    elementType: 'div',
    elementClass: 'section,middle'
});

const middleSectionMainParaph = Element({
    elementType: 'p',
    elementClass: 'main__paraph',
    elementContent: 'El Verdadero Sabor Zuliano'
});

const middleSectionButton = Element({
    elementType: 'button',
    elementClass: 'button',
    elementContent: 'Explora el menú'
});

const rightSection = Element({
    elementType: 'div',
    elementClass: 'section'
});

const rightSlider = sliderTwo();

leftSection.appendChild(leftSlider)

middleSection.appendChild(middleSectionMainParaph);
middleSection.appendChild(middleSectionButton);

rightSection.appendChild(rightSlider);

main.appendChild(leftSection);
main.appendChild(middleSection);
main.appendChild(rightSection);

return main;
}

document.addEventListener( 'DOMContentLoaded', mountSliders);


export {home, mountSliders}
