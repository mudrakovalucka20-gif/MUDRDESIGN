/* mudr.design — drobná interaktivita */

(function () {
  // mobilní menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Zavřít menu' : 'Otevřít menu');
    });

    // po kliknutí na odkaz menu zavřít
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // rok v patičce
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
