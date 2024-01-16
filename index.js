
function addingEventListener() {
    const input = document.getElementById('input');
  
    function clickAlert() {
      alert('I was clicked!');
    }
  
    input.addEventListener('click', clickAlert);
  }
  
  // Calling the outer function to activate the event listener
  addingEventListener();
  