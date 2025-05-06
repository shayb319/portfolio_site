// js/loader.js
function loadMarkdown(mdPath, targetId) {
    fetch(mdPath)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.text();
      })
      .then(md => {
        document.getElementById(targetId).innerHTML = marked(md);
      })
      .catch(err => {
        console.error(`Failed to load ${mdPath}`, err);
        document.getElementById(targetId).innerHTML = "<p>Content failed to load.</p>";
      });
  }
  