import ZeroMd, { STYLES } from 'https://cdn.jsdelivr.net/npm/zero-md@3';

customElements.define('zero-md', class extends ZeroMd {
  async load() {
    await super.load();
    this.template = STYLES.preset('dark');
  };
});

document.addEventListener('DOMContentLoaded', function () {
  const sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  const scrollspy = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(scrollspy, { scrollOffset: 50 });
});

var options = {
  strings: ["Welcome to my website!"],
  typeSpeed: 40,
  showCursor: false
};

var typed = new Typed("#welcome", options);