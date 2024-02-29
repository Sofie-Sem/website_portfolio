const initSlider1 = () => {
    const imageList = document.querySelector(".p1 .slider-wrapper .image-list");
    
    const slideButtons = document.querySelectorAll(".p1 .slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".p1 .slider-scrollbar");
    const scrollbarThumb = document.querySelector(".p1 .scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth - 5; // max scroll length

    scrollbarThumb.addEventListener("mousedown", (e) => { //clicked on scrollbar_thumb
        const startX = e.clientX; //horizontal location mouse
        const thumbPosition = scrollbarThumb.offsetLeft; //Left distance of the scrollbar_thumb compared to scrollbar_track

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX; // new mouse location - old mouse location = distance mouse traveled 
            const newThumbPosition = thumbPosition + deltaX; //new location for the scrollbar_thumb
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth; //max relocation = length of scrollbar - length of scrollbar_thumb

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition)); //make sure new location is not smaller than 0 and not bigger than the max position
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft; //check how much the images must scroll

            scrollbarThumb.style.left = `${boundedPosition}px`; //move scrollbar_thumb on screen
            imageList.scrollLeft = scrollPosition; //scroll the images on screen
        }

        const handleMouseUp = (  ) => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove); //move mouse
        document.addEventListener("mouseup", handleMouseUp); //unclick scrollbar_thumb

    })

    slideButtons.forEach(button => {
        button.addEventListener("click", () => { //when button clicked
            const direction = button.id === "prev-slide" ? -1 : 1; //check which button is clicked and set location direction
            const scrollAmount = imageList.clientWidth * direction; //visible width to the left or right
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" }) //scroll images
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block"; //make button invisible if all to the left
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block"; // make button invisible if all to the right
    }

    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft; //get how much imageList has scrolled
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth); //make new position for scrollbar_thumb
        scrollbarThumb.style.left = `${thumbPosition}px`; //move scrollbar_thumb on screen
    }

    imageList.addEventListener("scroll", () => { //when images scroll
        handleSlideButtons();
        updateScrollThumbPosition();
    })
}

const initSlider2 = () => {
    const imageList = document.querySelector(".p2 .slider-wrapper .image-list");
    
    const slideButtons = document.querySelectorAll(".p2 .slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".p2 .slider-scrollbar");
    const scrollbarThumb = document.querySelector(".p2 .scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth - 5;

    console.log("de" + scrollbarThumb)

    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        const handleMouseUp = (  ) => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

    })

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" })
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";  
    }

    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        // console.log(thumbPosition)
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    })
}

const initSlider3 = () => {
    const imageList = document.querySelector(".p3 .slider-wrapper .image-list");
    
    const slideButtons = document.querySelectorAll(".p3 .slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".p3 .slider-scrollbar");
    const scrollbarThumb = document.querySelector(".p3 .scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth - 5;

    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        const handleMouseUp = (  ) => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

    })

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" })
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";  
    }

    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        // console.log(thumbPosition)
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    })
}

window.addEventListener("load", () => {
    initSlider1(); 
    initSlider2();
    initSlider3();
})
