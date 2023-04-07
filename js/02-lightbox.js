import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const imageList = galleryItems
  .map(({ preview, original, description }) => {
    return `<ul class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
    />
    </a>
    </ul>`;
  })
  .join("");
gallery.insertAdjacentHTML("afterbegin", imageList);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
