const aboutMe = document.querySelector("#aboutme")
const contact = document.querySelector("#contact")
const pastWork = document.querySelector("#pastwork")

function scrollHome() {
    window.scrollTo(0, 0)
}

function scrollToElem(elem) {
    window.scrollTo(0, elem.getBoundingClientRect().top + window.scrollY - 100)
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