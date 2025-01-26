const headers = document.querySelectorAll('.accordion-header');

headers.forEach((header) => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    // Close all open accordions
    document.querySelectorAll('.accordion-content').forEach((item) => {
      if (item !== content) {
        item.style.maxHeight = null;
      }
    });

    // Toggle current accordion
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
