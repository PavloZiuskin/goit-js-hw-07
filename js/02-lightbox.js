import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
};

const newGallaryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li>
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
    </li>`;
  })
  .join("");

refs.gallery.insertAdjacentHTML("beforeend", newGallaryMarkup);
new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
