/* LE MONTADÉ — scripts communs (menu mobile, scroll, apparitions, accès admin discret) */
(() => {
    document.documentElement.classList.add('js');

    const header = document.querySelector('.site-header');
    const burger = document.getElementById('burger');
    const nav = document.getElementById('mainNav');

    function setNav(open) {
        if (!header || !burger) return;
        header.classList.toggle('nav-open', open);
        burger.setAttribute('aria-expanded', String(open));
        burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
        document.body.classList.toggle('no-scroll', open);
    }
    if (burger) burger.addEventListener('click', () => setNav(!header.classList.contains('nav-open')));
    if (nav) nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setNav(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setNav(false); });
    window.addEventListener('resize', () => { if (window.innerWidth > 900) setNav(false); });

    const top = document.getElementById('backToTop');
    const onScroll = () => {
        const y = window.scrollY;
        if (header) header.classList.toggle('scrolled', y > 30);
        if (top) top.classList.toggle('show', y > 600);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    if (top) top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Apparition douce des blocs
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
        }, { threshold: 0.12 });
        reveals.forEach((el) => io.observe(el));
    } else {
        reveals.forEach((el) => el.classList.add('in'));
    }

    // Accès admin discret : double-clic (ou double-tap) sur le logo du pied de page.
    // Aucune infobulle, aucun curseur particulier : rien ne signale cette fonction.
    const secret = document.getElementById('secretLogo');
    if (secret) {
        secret.addEventListener('dragstart', (e) => e.preventDefault());
        let taps = 0, timer;
        secret.addEventListener('pointerup', () => {
            taps++;
            clearTimeout(timer);
            if (taps >= 2) { taps = 0; window.location.href = 'admin.html'; }
            else timer = setTimeout(() => { taps = 0; }, 450);
        });
    }
})();
