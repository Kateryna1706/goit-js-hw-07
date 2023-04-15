import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

function makeElements(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
    )
    .join("");
}

const newElements = makeElements(galleryItems);

gallery.insertAdjacentHTML("afterbegin", newElements);

let instance;

gallery.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  instance = basicLightbox.create(
    `
<img src="${event.target.dataset.source}">
`,
    {
      onShow: (instance) => document.addEventListener("keydown", handleKeydown),
      onClose: (instance) =>
        document.removeEventListener("keydown", handleKeydown),
    }
  );

  instance.show();
}

function handleKeydown(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
