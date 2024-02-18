
function check() {
    let emailInput = document.querySelector(".email-input");
    let passwordInput = document.querySelector(".password-input");

    // Remove any existing error messages
    removeErrorMessage(emailInput);
    removeErrorMessage(passwordInput);

    // Check if the email input is a valid email format
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
       
        displayErrorMessage(emailInput, "Email is Required");
    } else {
        emailInput.style.border = "1px solid green";
        emailInput.style.background = "#0080002e";
    }

    // Check if the password input has a value
    if (passwordInput.value.trim() === "") {
        
        displayErrorMessage(passwordInput, "Password is Required");
    } else {
        passwordInput.style.border = "1px solid green";
        passwordInput.style.background = "#0080002e";
    }
}

function displayErrorMessage(inputElement, errorMessage) {
    let errorElement = document.createElement("p");
    let errorText = document.createTextNode(errorMessage);
    errorElement.appendChild(errorText);

    errorElement.style.color = "red";
    errorElement.style.marginTop = "5px";
    errorElement.style.background = "#ff000017";
    errorElement.style.padding = "15px";
    errorElement.style.margin = "0 1px";
    errorElement.style.width = "100%";
    errorElement.style.borderRadius = "5PX";
    inputElement.parentNode.insertBefore(errorElement, inputElement.nextSibling);
}

function removeErrorMessage(inputElement) {
    let sibling = inputElement.nextSibling;

    while (sibling) {
        if (sibling.nodeType === 1 && sibling.tagName.toLowerCase() === "p") {
            sibling.parentNode.removeChild(sibling);
        }

        sibling = sibling.nextSibling;
    }
}

function toggleCheckbox() {
    var checkbox = document.getElementById("toggle");
    
    checkbox.checked = !checkbox.checked;
   
}

function myFunction() {
let div = document.getElementsByClassName("left");
    let ptn = document.getElementById("ptn");
    let color = document.getElementById("color");
    let right = document.getElementById("right");
    let left = document.getElementById("left");
    let happening = document.getElementById("happening");
    let textarea = document.getElementById("textarea");
    let card = document.getElementById("card");
    let cardTow = document.getElementById("cardTow");
    let cardThree = document.getElementById("cardThree");
    // let home = document.getElementById("home");
    let container = document.getElementById("bgContainer");

    // let footer = document.getElementById("footer")
    // let footer = document.getElementsByTagName("footer")
    let footer = document.getElementsByTagName("footer")
    ptn = document.body;
    ptn.classList.toggle("dark-mode");
    color = document.body
    color.classList.toggle("color");
    
    right.classList.toggle("bg-happ");
    left.classList.toggle("bg-happ");
    happening.classList.toggle("bg-happ");
    textarea.classList.toggle("bg-happ")
    card.classList.toggle("bg-happ")
    cardTow.classList.toggle("bg-happ")
    cardThree.classList.toggle("bg-happ")
    // home.classList.toggle("bg-happ")
    container.classList.toggle("bg-container")
    // footer.classList.toggle("bg-profile")
    // footer.classList.toggle("dark")
  }

  span = document.querySelector(".up");

window.onscroll = function () {
    // console.log(this.scrollY)
if (this.scrollY >= 216) {
    span.classList.add("show");
} else {
    span.classList.remove("show");
}
}
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    }
        
    )
}

function showBar() {
    let left= document.getElementById("left");
    let marg = document.getElementsByClassName("li");
    left.classList.toggle("showbar");
    
}
let profilePic = document.getElementById("profile-pic");
let inputFile =  document.getElementById("input-file");

inputFile.onchange = function () {
    profilePic.src = URL.createObjectURL(inputFile.files[0])
}
