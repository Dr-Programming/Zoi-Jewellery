const slides = document.querySelectorAll(".header-slide-show-item");
var slide_counter = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
);

const slideImage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${slide_counter*100}%)`
        }
    )
}

const goPrevItem = () => {
    if(slide_counter == 0){
        slide_counter = slides.length - 1;
        slideImage();

    }else{
        slide_counter --;
        slideImage();
    }
}


const goNextItem = () => {
    if(slide_counter == slides.length - 1){
        slide_counter = 0;
        slideImage();
    } else{
        slide_counter++;
        slideImage();
    }
}

const panels = document.querySelectorAll('.holding');
var panel_counter = 0;

panels.forEach(
    (panel, index) => {
        panel.style.left = `${index*100}%`;
    }
);

const slidePanel = () => {
    panels.forEach(
        (panel) => {
            panel.style.transform = `translateX(-${panel_counter*100}%)`;
        }
    )
}

const goPrevPanel = () => {
    if(panel_counter == 0){
        panel_counter = panels.length - 1;
        slidePanel();
    }else{
        panel_counter--;
        slidePanel();
    }
}

const goNextPanel =() => {
    if(panel_counter == panels.length - 1){
        panel_counter = 0;
        slidePanel();
    }else{
        panel_counter++;
        slidePanel();
    }
}
