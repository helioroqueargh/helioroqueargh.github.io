const aboutMe = document.querySelector("#aboutme")
const contact = document.querySelector("#contact")
const pastWork = document.querySelector("#pastwork")
const games = document.querySelector("#games")

function scrollHome() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function scrollToElem(elem) {
    window.scrollTo({
        top: elem.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth"
    })
}

function scrollAboutMe() {
    scrollToElem(aboutMe)
}

function scrollContact() {
    scrollToElem(contact)
}

function scrollPastWork() {
    scrollToElem(pastWork)
}
function scrollGames() {
    scrollToElem(games)
}

function changeImage(targetId, thumbElement) {
    const mainImg = document.getElementById(targetId);
    if (mainImg) {
        mainImg.src = thumbElement.src;
        const thumbRow = thumbElement.parentElement;
        const allThumbs = thumbRow.querySelectorAll('.thumb');
        allThumbs.forEach(t => t.classList.remove('active'));
        thumbElement.classList.add('active');
    }
}

function prevImage(galleryId) {
    const gallery = document.getElementById(galleryId);
    let activeThumb = gallery.querySelector('.thumb.active');
    let prevThumb = activeThumb.previousElementSibling;
    if (!prevThumb) prevThumb = gallery.lastElementChild;
    const mainImgId = galleryId.replace('-gallery', '-main-img');
    changeImage(mainImgId, prevThumb);
}

function nextImage(galleryId) {
    const gallery = document.getElementById(galleryId);
    let activeThumb = gallery.querySelector('.thumb.active');
    let nextThumb = activeThumb.nextElementSibling;
    if (!nextThumb) nextThumb = gallery.firstElementChild;
    const mainImgId = galleryId.replace('-gallery', '-main-img');
    changeImage(mainImgId, nextThumb);
}
