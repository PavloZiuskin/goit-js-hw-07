import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// 2.Реалізація делегування на div.gallery і отримання url великого зображення.
// 3.Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// 4.Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// 5.Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>; */
const refs = {
  gallery: document.querySelector(".gallery"),
};
const newGallaryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
    </div>`;
  })
  .join("");

refs.gallery.insertAdjacentHTML("beforeend", newGallaryMarkup);
refs.gallery.addEventListener("click", onGalarryImgClick);

function onGalarryImgClick(e) {
  e.preventDefault();
  console.dir(e.target);
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const urlLargeImg = e.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${urlLargeImg}" alt="">`, {
    onShow: () => {
      document.addEventListener("keydown", onWhenOpenLargeImgEscPress);
    },
    onClose: () => {
      document.removeEventListener("keydown", onWhenOpenLargeImgEscPress);
    },
  });
  instance.show();
  function onWhenOpenLargeImgEscPress(e) {
    if (e.code !== "Escape") {
      return;
    }
    instance.close();
  }
}
