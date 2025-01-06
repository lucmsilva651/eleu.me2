import ZeroMd, { STYLES } from 'https://cdn.jsdelivr.net/npm/zero-md@3';

export async function loadZeroMd() {
  customElements.define('zero-md', class extends ZeroMd {
    async load() {
      await super.load();
      this.template = STYLES.preset('dark');
    };
  });
};