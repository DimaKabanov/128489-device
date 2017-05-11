'use strict';

(function () {
  var btnWriteUs = document.querySelector('.btn-write-us');
  var indexInfoMap = document.querySelector('.index-info-map');
  var KEY_CODE_ENTER = 13;
  var KEY_CODE_ESCAPE = 27;
  var openModal = null;
  var modalCloseButton = null;

  var isPressEnter = function (evt) {
    return evt.keyCode && evt.keyCode === KEY_CODE_ENTER;
  }

  var isPressEscape = function (evt) {
    return evt.keyCode && evt.keyCode === KEY_CODE_ESCAPE;
  }

  var onModalActivationClose = function (evt) {
    if (isPressEscape(evt)) {
      closeModal();
    }
  };

  var closeModal = function () {
    openModal.setAttribute('hidden', '');
    openModal.classList.remove('modal-show');
    modalCloseButton.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', onModalActivationClose);
  }

  var openModal = function (evt) {
    evt.preventDefault();
    var modalName =  evt.target.dataset['modal'];
    openModal = document.querySelector('.' + modalName + '-modal');
    openModal.removeAttribute('hidden');
    openModal.classList.add('modal-show');

    modalCloseButton = openModal.querySelector('.modal-close');
    modalCloseButton.focus();
    modalCloseButton.addEventListener('click', closeModal);
    document.addEventListener('keydown', onModalActivationClose);
  }

  btnWriteUs.addEventListener('click', openModal);
  btnWriteUs.addEventListener('keydown', function(evt) {
    if(isPressEnter(evt)) {
      openModal(evt);
    }
  })

  indexInfoMap.addEventListener('click', openModal);
  indexInfoMap.addEventListener('keydown', function(evt) {
    if(isPressEnter(evt)) {
      openModal(evt);
    }
  })
})();
