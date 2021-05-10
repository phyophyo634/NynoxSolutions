var modal = document.getElementById("myModal");

function displayModal(title){
    var modal_header = document.getElementById("modal_header");
    modal_header.innerText = title;

    var modal_body = document.getElementById("modal_body");

    switch(title){
        case 'Reporting Dashboard Design': modal_body.innerHTML ='<strong><p>Strong P</p></strong><p>normal</p>'  ; break;
        case 'Analytics': modal_body.innerText = 'Analytics '; break;
        case 'Analysis Architecture': modal_body.innerHTML = 'Analysis Architecture'; break;
        case 'Data Governance': modal_body.innerHTML = 'Data Governance '; break;
        case 'Best Fit For Your Business': modal_body.innerHTML = 'Best Fit For Your Business'; break;
        case 'Change Management': modal_body.innerHTML = 'Change Management'; break;
    }

    modal.style.display = "block";
  
  }
  
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

