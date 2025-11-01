 (function(){
      const btn = document.querySelector('.hamburger');
      const nav = document.querySelector('.navbar');
      if (!btn || !nav) return;

      btn.addEventListener('click', () => {
        const opened = nav.classList.toggle('open');
        btn.setAttribute('aria-expanded', opened);
      });

      // Ferme le menu quand on clique sur un lien (utile mobile)
      nav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
          nav.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        }
      });

      // Ferme au clavier (Échap)
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          nav.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    })();