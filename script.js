function toogleNavbar() {
    // Select the desktop and mobile headers
    const desktopHeader = document.querySelector('.desktop');
    const mobileHeader = document.querySelector('.mobile');

    // Check the current display state of the mobile header
    if (mobileHeader.style.display === 'block') {
        // If mobile is visible, hide it and show the desktop
        mobileHeader.style.display = 'none';
        desktopHeader.style.display = 'flex'; // Assuming desktop uses flexbox
    } else {
        // If mobile is hidden, show it and hide the desktop
        mobileHeader.style.display = 'block';
        desktopHeader.style.display = 'none';
    }
}


const components = {
    1: `
      <div class="component">
        <div class="image-box">
          <img src="images/illustration-features-tab-1.svg" alt="Bookmark Icon 1">
        </div>
        <div class="text-box">
          <h3>Bookmark in one click</h3>
          <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
        </div>
      </div>
    `,
    2: `
      <div class="component">
        <div class="image-box">
          <img src="images/illustration-features-tab-2.svg" alt="Bookmark Icon 2">
        </div>
        <div class="text-box">
          <h3>More Info</h3>
          <p>Intelligent search. Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
        </div>
      </div>
    `,
    3: `
      <div class="component">
        <div class="image-box">
          <img src="images/illustration-features-tab-3.svg" alt="Bookmark Icon 3">
        </div>
        <div class="text-box">
          <h3>Intelligent search</h3>
          <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
        </div>
      </div>
    `
  };
  

  // Function to display the corresponding component
//   function showComponent(id) {
//     const displayArea = document.getElementById('display-area');
//     displayArea.innerHTML = components[id];
//   }
  
function showComponent(id) {
    const displayArea = document.getElementById('display-area');
    
    // Remove any existing fade-in class to reset the animation
    displayArea.classList.remove('fade-in');
    
    // Set the new content
    displayArea.innerHTML = components[id];
    
    // Trigger reflow to restart the animation
    void displayArea.offsetWidth;
    
    // Add the fade-in class for the smooth effect
    displayArea.classList.add('fade-in');
  }
  function initializeDisplay() {
    const displayArea = document.getElementById('display-area');
    displayArea.innerHTML = components[1]; // Display Component 1 by default
  }
  window.onload = initializeDisplay;