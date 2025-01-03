const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

function activateTab(tabId) {
  tabButtons.forEach(btn => btn.classList.remove('active'));
  tabContents.forEach(content => content.classList.remove('active'));

  const button = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
  const content = document.getElementById(tabId);

  if (button && content) {
    button.classList.add('active');
    content.classList.add('active');
    window.location.hash = tabId;
  }
}

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    activateTab(tabId);
  });
});

function checkHash() {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    activateTab(hash);
  } else {
    const firstTabId = tabButtons[0].getAttribute('data-tab');
    activateTab(firstTabId);
  }
}

window.addEventListener('hashchange', checkHash);

checkHash();