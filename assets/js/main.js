window.addEventListener('DOMContentLoaded', (event) => {
  window.onscroll = function() {fixedScrollableMenu()};
  var menu = document.querySelector('.menu-wrapper');
  var fixedMenu = menu.offsetTop;
  function fixedScrollableMenu() {
    if (window.pageYOffset > fixedMenu) {
      menu.classList.add("jsStickyMenu");
    } else {
      menu.classList.remove("jsStickyMenu");
    }
  }
});

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetHeight = 150;
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop + offsetHeight,
    behavior: "smooth"
  });
}
document.addEventListener('click', function (e) {
	if (!e.target.classList.contains('card')) return;
	e.target.classList.toggle('isFlipped');
	var links = document.querySelectorAll('.card');
	for (var i = 0; i < links.length; i++) {
		if (links[i] === e.target) continue;
		links[i].classList.remove('isFlipped');
	}
}, false);

