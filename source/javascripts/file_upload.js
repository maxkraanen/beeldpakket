var fileInput = document.getElementById("file-input");
var fileSubmit = document.getElementById("file-submit");

const storageService = firebase.storage();
const storageRef = storageService.ref();

fileInput.onchange = function(e) {
  selectedFile = e.target.files[0];
};

fileSubmit.onclick = function(e) {
  const successMessage = document.getElementById("success_message");
  const errorMessage = document.getElementById("error_message");
  //   message for uploading and disable button
  const button = document.getElementById("file-submit");
  button.disabled = true;
  const uploadingMessage = document.getElementById("upload_message");
  uploadingMessage.classList.remove("hidden");
  //   remove error messages
  errorMessage.classList.add("hidden");
  successMessage.classList.add("hidden");

  const uploadTask = storageRef
    .child(`plattegronden/${selectedFile.name}`)
    .put(selectedFile); //create a child directory called images, and place the file inside this directory
  uploadTask.on(
    "state_changed",
    snapshot => {
      // Observe state change events such as progress, pause, and resume
    },
    error => {
      uploadingMessage.classList.add("hidden");
      errorMessage.classList.remove("hidden");
      button.disabled = false;

      // Handle unsuccessful uploads
      //   console.log(error);
    },
    () => {
      // Do something once upload is complete
      uploadingMessage.classList.add("hidden");
      successMessage.classList.remove("hidden");
      button.disabled = true;
    }
  );
};

async function pageTokenExample() {
  // Create a reference under which you want to list
  var listRef = storageRef.child("plattegronden/");
  console.log(listRef);
  // Fetch the first page of 100.
  var results = await listRef.list({ maxResults: 100 });
  console.log(results);
  // Use the result.
  // processItems(results.items)
}

pageTokenExample();
