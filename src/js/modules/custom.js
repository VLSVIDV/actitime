

if(window.matchMedia('(max-width: 992px)').matches){
//     // do functionality on screens smaller than 768px

    var menuElem = document.getElementById('menu-tab');

    var titleElem = document.getElementById('drop');

    menuElem.onclick = function() {
      titleElem.classList.toggle('open');
    };
    
}