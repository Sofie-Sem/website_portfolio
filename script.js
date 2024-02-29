const initSlider = (container) => {
    const imageList = document.querySelector("." + container + " .slider-wrapper .image-list");
    
    const slideButtons = document.querySelectorAll("." + container + " .slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector("." + container + " .slider-scrollbar");
    const scrollbarThumb = document.querySelector("." + container + " .scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth - 5; // max scroll length

    console.log(scrollbarThumb)

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



window.addEventListener("load", () => {
    const photosContainer = document.querySelectorAll("#photos");

    photosContainer.forEach(container => {
        initSlider(container.className);
    });
})

