'use strict';

document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}
menuButton.addEventListener('click', () => {
  const opening = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(opening));
  navigation.classList.toggle('open', opening);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

// Anchor links remain usable when JavaScript is unavailable.
const choices = [...document.querySelectorAll('[data-project]')];
const panels = [...document.querySelectorAll('.project-panel')];
function selectProject(id) {
  if (!panels.some((panel) => panel.id === id)) return;
  panels.forEach((panel) => { panel.hidden = panel.id !== id; });
  choices.forEach((choice) => {
    const selected = choice.dataset.project === id;
    choice.classList.toggle('active', selected);
    if (selected) choice.setAttribute('aria-current', 'true');
    else choice.removeAttribute('aria-current');
    choice.setAttribute('aria-controls', choice.dataset.project);
  });
}
choices.forEach((choice) => {
  choice.addEventListener('click', (event) => {
    event.preventDefault();
    selectProject(choice.dataset.project);
  });
});
selectProject(location.hash.startsWith('#project-') ? location.hash.slice(1) : 'project-worry');
window.addEventListener('hashchange', () => {
  if (location.hash.startsWith('#project-')) selectProject(location.hash.slice(1));
});

if ('IntersectionObserver' in window) {
  const links = [...navigation.querySelectorAll('a')];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  links.forEach((link) => observer.observe(document.querySelector(link.hash)));
}
