{
    // do functionality on screens smaller than 768px
    const menuElem = document.getElementById("menu-tab");
    const titleElem = document.getElementById("drop");

    menuElem.onclick = function (e) {
        e.preventDefault();
        if (window.matchMedia("(max-width: 992px)").matches) {
          this.classList.toggle("active");
          if (titleElem.style.maxHeight) {
            titleElem.style.maxHeight = null;
          } else {
            titleElem.style.maxHeight = titleElem.scrollHeight + "px";
          } 
        }
    };
}
