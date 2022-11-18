const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector("ul[class=gallery]");
// console.log(galleryEl);
galleryEl.classList.add("gallery-task03");

// const makeGallery = images => {
// return images.map(image => {
//   const imageLi = document.createElement("li");
//   const imageEl = document.createElement("img");
//   imageLi.appendChild(imageEl);
//   imageEl.src = image.url;
//   imageEl.alt = image.alt;
//   imageEl.width = 320;
//   imageEl.classList.add(".img-gallery");

//   // console.log(imageEl);
//   return imageLi;
// });
// };

// const elements = makeGallery(images);

// // console.log(elements);


// galleryEl.append(...elements);

// // console.log(galleryEl);

const imageLi = images
.map(({url, alt}) => 
`<li class="image-gallery-task03"><img src="${url}" 
alt="${alt}" width="320"/></li>`)
.join("");

galleryEl.insertAdjacentHTML("afterbegin", imageLi)