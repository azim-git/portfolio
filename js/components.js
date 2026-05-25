(function () {
  const isSubpage = !!document.querySelector('link[href*="case-study.css"]');
  const prefix = isSubpage ? '../index.html' : '';

  // NAV
  const navEl = document.getElementById('site-nav');
  if (navEl) {
    navEl.innerHTML = `
    <nav class="nav">
      <a href="${prefix || '#'}" class="nav-brand">Azim Said</a>
      <ul class="nav-links">
        <li><a href="${prefix}#work">Work</a></li>
        <li><a href="${prefix}#about">About</a></li>
        <li><a href="${prefix}#skills">Skills</a></li>
      </ul>
      <a href="mailto:azimsaid212@gmail.com" class="nav-contact">Get in touch
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6">
          <path d="M5 12h14M13 6l6 6-6 6"/>
        </svg>
      </a>
    </nav>`;
  }

  // FOOTER
  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    const bottomBar = `
      <div class="footer-bottom">
        <div>&copy; Azim Said &middot; Singapore &middot; 2026</div>
        <div class="footer-socials">
          <a href="https://github.com/azim-git" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/azimsaid-/" target="_blank">LinkedIn</a>
          <a href="mailto:azimsaid212@gmail.com">Email</a>
        </div>
      </div>`;

    if (isSubpage) {
      footerEl.innerHTML = `
      <footer class="footer cs-footer">
        <div class="footer-inner">
          ${bottomBar}
        </div>
      </footer>`;
    } else {
      footerEl.innerHTML = `
      <footer class="footer">
        <div class="footer-ribbons" aria-hidden="true">
          <svg viewBox="0 0 1440 560" preserveAspectRatio="none">
            <defs>
              <linearGradient id="fr-clay" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stop-color="var(--r1)" stop-opacity="0"/>
                <stop offset="20%" stop-color="var(--r1)" stop-opacity="0.95"/>
                <stop offset="80%" stop-color="var(--r1)" stop-opacity="0.95"/>
                <stop offset="100%" stop-color="var(--r1)" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="fr-butter" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stop-color="var(--r3)" stop-opacity="0"/>
                <stop offset="20%" stop-color="var(--r3)" stop-opacity="0.9"/>
                <stop offset="80%" stop-color="var(--r3)" stop-opacity="0.9"/>
                <stop offset="100%" stop-color="var(--r3)" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="fr-rose" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stop-color="var(--r5)" stop-opacity="0"/>
                <stop offset="20%" stop-color="var(--r5)" stop-opacity="0.9"/>
                <stop offset="80%" stop-color="var(--r5)" stop-opacity="0.9"/>
                <stop offset="100%" stop-color="var(--r5)" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <path d="M -100,80 C 350,20 760,160 1100,80 C 1300,40 1500,80 1600,60 L 1600,160 C 1500,150 1300,200 1100,180 C 760,220 350,100 -100,160 Z"
                  fill="url(#fr-clay)" opacity="0.55"/>
            <path d="M -100,200 C 350,140 760,280 1100,200"
                  stroke="var(--r4)" stroke-width="2" fill="none" opacity="0.45"/>
            <path d="M -100,340 C 350,280 760,420 1100,340 C 1300,300 1500,330 1600,320 L 1600,420 C 1500,410 1300,450 1100,430 C 760,470 350,360 -100,420 Z"
                  fill="url(#fr-butter)" opacity="0.55"/>
            <path d="M -100,500 C 350,440 760,580 1100,500 C 1300,460 1500,490 1600,480 L 1600,580 L -100,580 Z"
                  fill="url(#fr-rose)" opacity="0.65"/>
          </svg>
        </div>
        <div class="footer-inner">
          <h2>Let's build<br/><em>something great,</em><br/>together.</h2>
          <a href="mailto:azimsaid212@gmail.com" class="footer-email">azimsaid212@gmail.com</a>
          ${bottomBar}
        </div>
      </footer>`;
    }
  }
})();
