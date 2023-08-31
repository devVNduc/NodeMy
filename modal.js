// sự kiện ấn và nổi lên modal
// var openBtn = document.querySelector(".open-modal-btn");
// var modal = document.querySelector(".modal");
// var btnModalCloseH = document.querySelector(".btn-close-modalH");
// var btnModalCloseF = document.querySelector(".btn-close-modalF");
// openBtn.addEventListener("click", function (e) {
//     if (modal.classList.contains("hideModal")) {
//         modal.classList.remove("hideModal");
//     }
// })
// function hideModal(e) {
//     modal.classList.toggle("hideModal");
// }
// btnModalCloseH.addEventListener("click", hideModal)
// btnModalCloseF.addEventListener("click", hideModal)
// modal.addEventListener("click", function (e){
//     if (e.target == e.currentTarget) {
//         hideModal(e);
//     }
// })


// // Bài 2

var imgArr = [
    "imageGalerry/img1.jpeg",
    "imageGalerry/img2.jpeg",
    "imageGalerry/img3.jpeg",
    "imageGalerry/img4.jpeg",
    "imageGalerry/img5.jpeg",
    "imageGalerry/img6.jpeg",
    "imageGalerry/img7.jpeg",
    "imageGalerry/img8.jpeg"
    
]
var image = document.querySelectorAll(".image img")
var gallery = document.querySelector(".gallery")
var imageGallery = document.querySelector(".gallery-inner img")
var prevImg = document.querySelector(".prev")
var nextImg = document.querySelector(".next")
var closegallery = document.querySelector(".close")

let currentIndex = 0


function showGallery() {
    currentIndex == image.length - 1 ? nextImg.classList.add('hide') : nextImg.classList.remove('hide')
    currentIndex == 0 ? prevImg.classList.add('hide') : prevImg.classList.remove('hide')
    gallery.classList.add('show')
    imageGallery.src = imgArr[currentIndex]
}
image.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index
        showGallery()
    })
})
nextImg.addEventListener('click', () => {
    currentIndex != image.length - 1 ? currentIndex++ : undefined
    showGallery()
})
prevImg.addEventListener('click', () => {
    currentIndex != 0 ? currentIndex-- : undefined
    showGallery()
})
closegallery.addEventListener('click', () => {
    gallery.classList.remove('show')
})
document.addEventListener("keydown", () => {
    if (e.keycode == 27) {
        gallery.classList.remove("show")
    }
})
