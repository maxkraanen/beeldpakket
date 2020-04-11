"use strict";

var fileInput = document.getElementById("file-input");
var fileSubmit = document.getElementById("file-submit");
var storageService = firebase.storage();
var storageRef = storageService.ref();

fileInput.onchange = function(e) {
  selectedFile = e.target.files[0];
};

fileSubmit.onclick = function(e) {
  var successMessage = document.getElementById("success_message");
  var errorMessage = document.getElementById("error_message"); //   message for uploading and disable button

  var button = document.getElementById("file-submit");
  button.disabled = true;
  var uploadingMessage = document.getElementById("upload_message");
  uploadingMessage.classList.remove("hidden"); //   remove error messages

  errorMessage.classList.add("hidden");
  successMessage.classList.add("hidden");
  var uploadTask = storageRef
    .child("plattegronden/".concat(selectedFile.name))
    .put(selectedFile); //create a child directory called images, and place the file inside this directory

  uploadTask.on(
    "state_changed",
    function(snapshot) {
      // Observe state change events such as progress, pause, and resume
    },
    function(error) {
      uploadingMessage.classList.add("hidden");
      errorMessage.classList.remove("hidden");
      button.disabled = false; // Handle unsuccessful uploads
      //   console.log(error);
    },
    function() {
      // Do something once upload is complete
      uploadingMessage.classList.add("hidden");
      successMessage.classList.remove("hidden");
      button.disabled = true;
    }
  );
};
