const projects = ["projekt1", "projekt2"];

const container = document.getElementById("projects");

projects.forEach(projekt => {
  fetch(`data/${projekt}/data.md`)
    .then(res => res.text())
    .then(text => {
      const div = document.createElement("div");
      div.className = "project";

      div.innerHTML = marked.parse(text);

      // Installationslinks anzeigen
      const installDiv = document.createElement("div");
      installDiv.innerHTML = `
        <h3>Installation</h3>
        <ul>
          <li><a href="data/${projekt}/installation/windows.md" target="_blank">Windows</a></li>
          <li><a href="data/${projekt}/installation/linux.md" target="_blank">Linux</a></li>
          <li><a href="data/${projekt}/installation/mac.md" target="_blank">Mac</a></li>
        </ul>
      `;

      div.appendChild(installDiv);
      container.appendChild(div);
    })
    .catch(() => {
      console.error(`Fehler bei ${projekt}`);
    });
});
