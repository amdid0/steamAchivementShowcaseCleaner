document.querySelectorAll('.achievement_showcase *').forEach(el => {
  if (el.hasAttribute('value')) {
    el.setAttribute('value', '0');
  }
});

//content.js