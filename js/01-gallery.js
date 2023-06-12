import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createGalleryItems() {
  const galleryHTML = galleryItems
    .map(
      (item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>
  `
    )
    .join("");

  gallery.innerHTML = galleryHTML;
  // console.log(galleryHTML);

  gallery.insertAdjacentHTML("beforeend", galleryHTML);
  console.log(gallery);

  gallery.addEventListener("click", (event) => openModal(event, galleryItems));
}
function openModal(event) {
  event.preventDefault();

  const originalImageSrc = event.target.dataset.source;
  const instance = basicLightbox.create(`
  <img src="${originalImageSrc}" width="800" height="600">`);
  instance.show();

  window.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(event) {
    const ESC_KEY_CODE = "Escape";
    if (event.code === ESC_KEY_CODE) {
      instance.close();
      window.removeEventListener("keydown", onEscKeyPress);
    }
  }
}

createGalleryItems();
openModal();
