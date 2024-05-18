
document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("reklama");
  
    // Get the overlay
    var overlay = document.getElementById("overlay");
  
    // Get the button that closes the modal
    var closeBtn = document.getElementById("close");
  
    // Function to open the modal
    function openModal() {
        overlay.style.display = "block";
        modal.style.display = "block";
        // Disable scrolling on the body
        document.body.style.overflow = "hidden";
    }
  
    // Function to close the modal
    function closeModal() {
        overlay.style.display = "none";
        modal.style.display = "none";
        // Enable scrolling on the body
        document.body.style.overflow = "auto";
    }
  
    // When the user clicks on the button, open the modal
    closeBtn.onclick = function() {
        closeModal();
    }
  
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == overlay) {
            closeModal();
        }
    }
  
    // Set timeouts for showing and hiding the modal
    setTimeout(openModal, 5000);
  
    setTimeout(function() {
        closeBtn.style.display = 'flex';
    }, 10000);
  });
  
    
    