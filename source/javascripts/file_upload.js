// window.addEventListener("DOMContentLoaded", () => {
//   //   console.log("loaded");
//   //   const storageService = firebase.storage();
//   //   const storageRef = storageService.ref();

//   //   let selectedFile;
//   //   function handleFileUploadChange(e) {
//   //     console.log("selected");
//   //     selectedFile = e.target.files[0];
//   //   }

//   //   function handleFileUploadSubmit(e) {
//   //     console.log("submitting");

//   //     const uploadTask = storageRef
//   //       .child(`plattegronden/${selectedFile.name}`)
//   //       .put(selectedFile); //create a child directory called images, and place the file inside this directory
//   //     uploadTask.on(
//   //       "state_changed",
//   //       snapshot => {
//   //         // Observe state change events such as progress, pause, and resume
//   //       },
//   //       error => {
//   //         // Handle unsuccessful uploads
//   //         console.log(error);
//   //       },
//   //       () => {
//   //         // Do something once upload is complete
//   //         console.log("success");
//   //       }
//   //     );
//   //   }

//   document
//     .querySelector("#file-select")
//     .addEventListener("change", handleFileUploadChange(e));
//   document
//     .querySelector("#file-submit")
//     .addEventListener("click", handleFileUploadSubmit(e));
// });

var fileInput = document.getElementById("file-input");
var fileSubmit = document.getElementById("file-submit");

const storageService = firebase.storage();
const storageRef = storageService.ref();

fileInput.onchange = function(e) {
  selectedFile = e.target.files[0];
};

fileSubmit.onclick = function(e) {
  const uploadTask = storageRef
    .child(`plattegronden/${selectedFile.name}`)
    .put(selectedFile); //create a child directory called images, and place the file inside this directory
  uploadTask.on(
    "state_changed",
    snapshot => {
      // Observe state change events such as progress, pause, and resume
    },
    error => {
      // Handle unsuccessful uploads
      //   console.log(error);
    },
    () => {
      // Do something once upload is complete
      console.log("success");
    }
  );
};
