import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

function makeElements(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>`
    )
    .join("");
}

const newElements = makeElements(galleryItems);

gallery.insertAdjacentHTML("afterbegin", newElements);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
