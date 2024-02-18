function myFunction() {
    let div = document.getElementsByClassName("left");
        let ptn = document.getElementById("ptn");
        let color = document.getElementById("color");
        let left = document.getElementById("left");
      
        let container = document.getElementById("bgContainer");
        let myMedia = document.getElementById("myMedia")
        let footer = document.getElementById("footer")
        let FooterProfile = document.getElementsByClassName("bgFooterProfile")

        ptn = document.body;
        ptn.classList.toggle("dark-mode");
        color = document.body
        color.classList.toggle("color");
    
        left.classList.toggle("bg-happ");
        happening.classList.toggle("bg-happ");
        textarea.classList.toggle("bg-happ")
        card.classList.toggle("bg-happ")
        cardTow.classList.toggle("bg-happ")
        cardThree.classList.toggle("bg-happ")
        // footer.classList.toggle("bg-happ")
        container.classList.toggle("bg-container")
        myMedia.classList.toggle("bg-container")
        // footer.classList.toggle("bg-container")
        // FooterProfile.classList.toggle("bg-container")
      }