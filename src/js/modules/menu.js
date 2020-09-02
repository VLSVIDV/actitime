{
    // do functionality on screens smaller than 768px
    const menuBtn = document.getElementById("btn__menu");
    const nav = document.getElementById("nav");
    const titleElem = document.getElementById("drop");

    menuBtn.onclick = function (e) {
        e.preventDefault();
        if (window.matchMedia("(max-width: 992px)").matches) {
          this.classList.toggle("active");
          if (nav.style.maxHeight) {
            nav.style.maxHeight = null;
          } else {
            nav.style.maxHeight = nav.scrollHeight + titleElem.scrollHeight + "px";
          } 
        }
    };
}
