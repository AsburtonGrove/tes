const fileInput = document.getElementById("fileInput");
const uploadedImage = document.getElementById("uploadedImage");

fileInput.addEventListener("change", function () {
    const file = fileInput.files[0];
    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        fetch('/upload', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.text())
        .then(data => {
            console.log(data); // Pesan dari server
        })
        .catch(error => {
            console.error('Error:', error);
        });

        const reader = new FileReader();
        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
