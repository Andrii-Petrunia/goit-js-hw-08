import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line

import { galleryItems } from './gallery-items';

// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.style.listStyle = 'none';

function createGalleryItem({ preview, original, description }) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `;
}

function renderGallery() {
  const galleryMarkup = galleryItems.map(createGalleryItem).join("");
  gallery.insertAdjacentHTML("beforeend", galleryMarkup);
}

renderGallery();

// Initialize SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// Optional: Close lightbox on overlay click
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("sl-overlay")) {
    lightbox.close();
  }
});




 document.addEventListener("keydown", onKeyPress);
  function onKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onKeyPress);
    }
  }





console.log(galleryItems);
