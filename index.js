// Get all the tag links and articles
const tagLinks = document.querySelectorAll('.tag-link');
const articles = document.querySelectorAll('.article');

// Loop through all tag links and add a click event listener
tagLinks.forEach(tagLink => {
  tagLink.addEventListener('click', () => {
    // Remove the active class from all tag links
    tagLinks.forEach(link => link.classList.remove('active'));
    // Add the active class to the clicked tag link
    tagLink.classList.add('active');
    
    // Get the tag value for the clicked link
    const tagValue = tagLink.dataset.tag;
    
    // Loop through all articles and hide those that do not match the selected tag
    articles.forEach(article => {
      if (tagValue === 'all') {
        article.style.display = 'block';
      } else if (article.dataset.tag === tagValue) {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    });
  });
});
