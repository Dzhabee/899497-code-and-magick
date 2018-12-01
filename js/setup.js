'use strict';
var WIZARD_COUNT = 4;
var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardName = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var wizardLastName = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var wizardCoatColar = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var wizardEyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var getRndValue = function (arrayname) {
  var rendomIndex = Math.floor(Math.random() * arrayname.length);
  return arrayname[rendomIndex];
};

// конструктор для создания объектов (для цикла добавления данных в массив фогорафий пользователей)
function CreateObject(name, coat, eyes) {
  this.name = name;
  this.coatColor = coat;
  this.eyesColor = eyes;
}

var getWizardsTamplate = function () {
  var wizards = [];
  for (var i = 0; i < WIZARD_COUNT; i++) {
    wizards.push(new CreateObject(getRndValue(wizardName) + ' ' + getRndValue(wizardLastName), getRndValue(wizardCoatColar), getRndValue(wizardEyesColor)));
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  var count = wizards.length;
  for (var i = 0; i < count; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

renderWizards(getWizardsTamplate());
document.querySelector('.setup-similar').classList.remove('hidden');

// Лекция 4. Задание 1, 2
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && !document.querySelector('.setup-user-name').focused) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
};

setupOpen.addEventListener('click', function (evt) {
  evt.preventDefault();
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

// Задание 3, 4, 5, 6
var myWizard = document.querySelector('.setup-wizard');
var myFireball = document.querySelector('.setup-fireball-wrap');
var myWizardCoat = myWizard.querySelector('.wizard-coat');
var myWizardEyes = myWizard.querySelector('.wizard-eyes');


myWizardCoat.addEventListener('click', function () {
  myWizardCoat.style.fill = getRndValue(wizardCoatColar);
});

myWizardEyes.addEventListener('click', function () {
  myWizardEyes.style.fill = getRndValue(wizardEyesColor);
});

myFireball.addEventListener('click', function () {
  myFireball.style.background = getRndValue(fireballColors);
});

