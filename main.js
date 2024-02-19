function check() {
    let emailInput = document.querySelector(".email-input");
    let passwordInput = document.querySelector(".password-input");
    removeErrorMessage(emailInput);
    removeErrorMessage(passwordInput);

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        displayErrorMessage(emailInput, "Email is Required");
    }

    if (passwordInput.value.trim() === "") {
        displayErrorMessage(passwordInput, "Password is Required");
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
function showBar() {
    let left = document.getElementById("left");
    let marg = document.getElementsByClassName("li");
    left.classList.toggle("showbar");
}

function displayImage(input) {
    let file = input.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let imageIcon = document.getElementById('image-icon');
            imageIcon.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
    console.log(file)
    let card = document.createElement("img");
    console.log(card);
    card.appendChild(file)
}

function displayImage(input) {
    let file = input.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let imageIcon = document.getElementById('image-icon');
            imageIcon.src = e.target.result;
            let card = document.createElement("img");
            card.src = e.target.result;
            document.body.appendChild(card);
        };
        reader.readAsDataURL(file);
        console.log(file)
        console.log(typeof file)
        let x = document.createElement("IMG");
        console.log(x)
        // x.appendChild(file)
        let textareaElement = document.getElementById("textarea");
        let textValue = textareaElement.value
        console.log(typeof textValue)
        console.log(x + file)
    }
}

window.onload = function(){ 
    span = document.querySelector(".up");
    if (span != null) {
        window.onscroll = function() {
            // console.log(this.scrollY)
            if (this.scrollY >= 216) {
                span.classList.add("show");
            } else {
                span.classList.remove("show");
            }
        }
        span.onclick = function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }

    }
};
function post() {
    var happening = document.getElementById('happening');
    var text = document.getElementById("textarea");
     var original = document.getElementById('card');
    var clone = original.cloneNode(true);
    happening.after(clone);
    var sp = clone.querySelector("span");
    sp.innerText = text.value;
    text.value = "";
}
