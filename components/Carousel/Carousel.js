class Carousel {
  constructor(element) {
    this.element = element;
    this.images = this.element.querySelectorAll('img');
    this.currentIndex = 0;
    this.leftButton = this.element.querySelector('.left-button');
    this.rightButton = this.element.querySelector('.right-button');

    this.leftButton.addEventListener('click', () => this.showImage(this.currentIndex, --this.currentIndex));
    this.rightButton.addEventListener('click', () => this.showImage(this.currentIndex, ++this.currentIndex));
  }
  showImage(prevIndex, currentIndex) {
    if (currentIndex == -1) {
      this.currentIndex = this.images.length -1;
    }
    else if (currentIndex > this.images.length -1) {
      this.currentIndex = 0;
    }
    this.images.forEach(img => img.classList.remove('active-img'));
    this.images[this.currentIndex].classList.add('active-img');
  }
}

let carousels = document.querySelectorAll('.carousel').forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
