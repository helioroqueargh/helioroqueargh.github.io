const aboutMe = document.querySelector("#aboutme")
const contact = document.querySelector("#contact")
const pastWork = document.querySelector("#pastwork")

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