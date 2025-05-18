document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll('[include-html]');
  includes.forEach(el => {
    const file = el.getAttribute("include-html");
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error(`Missing file: ${file}`);
        return response.text();
      })
      .then(data => {
        el.innerHTML = data;
        el.removeAttribute("include-html");
      })
      .catch(err => {
        el.innerHTML = `<div style="color: red;">Failed to load ${file}</div>`;
        console.error(err);
      });
  });
});
