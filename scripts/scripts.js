let content = document.querySelector('.main');
let editButton = content.querySelector('.profile__button-edit');
let profileName = content.querySelector('.profile__name');
let profileAbout = content.querySelector('.profile__about');
let popupSection = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');
let closeButton = document.querySelector('.popup__button-close');
let nameInput = document.querySelector('#name');
let aboutInput = document.querySelector('#about');

let newName;
let newAbout;

function popupVisible () {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    popupSection.classList.toggle('popup_opened')
}

function popupClose () {
    popupSection.classList.toggle('popup_opened')   
}

function handleProfileFormSubmit (evt) {
    evt.preventDefault();

    newName = nameInput.value;
    newAbout = aboutInput.value;

    profileName.textContent = newName;
    profileAbout.textContent = newAbout;

    popupClose ();
}

editButton.addEventListener('click', popupVisible);
closeButton.addEventListener('click', popupClose);
popupForm.addEventListener('submit', handleProfileFormSubmit);
