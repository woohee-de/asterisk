export function scrollAppToTop() {
  const app = document.querySelector('.app');
  if (app) {
    app.scrollTop = 0;
  }
}