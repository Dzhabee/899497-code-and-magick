'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardLastName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColar = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var getRndValue = function (arrayname) {
  var rendomIndex = Math.floor(Math.random() * arrayname.length);
  var rendomValue = arrayname[rendomIndex];
  return rendomValue;
};

var wizardAttribut = [
  {
    name: getRndValue(wizardName) + ' ' + getRndValue(wizardLastName),
    coatColor: getRndValue(wizardCoatColar),
    eyesColor: getRndValue(wizardEyesColor)
  },
  {
    name: getRndValue(wizardName) + ' ' + getRndValue(wizardLastName),
    coatColor: getRndValue(wizardCoatColar),
    eyesColor: getRndValue(wizardEyesColor)
  },
  {
    name: getRndValue(wizardName) + ' ' + getRndValue(wizardLastName),
    coatColor: getRndValue(wizardCoatColar),
    eyesColor: getRndValue(wizardEyesColor)
  },
  {
    name: getRndValue(wizardName) + ' ' + getRndValue(wizardLastName),
    coatColor: getRndValue(wizardCoatColar),
    eyesColor: getRndValue(wizardEyesColor)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizards = function (wizards) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

renderWizards(wizardAttribut);
document.querySelector('.setup-similar').classList.remove('hidden');
