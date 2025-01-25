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

