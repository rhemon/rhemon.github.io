const releaseManifest = {
  latest: "0.1.0",
  releases: [
    {
      version: "0.1.0",
      date: "15 Mar 2026",
      fileName: "EMGChallanRegistrarSetup.exe",
      sizeLabel: "11.7 MB",
      downloadUrl: "downloads/v0.1.0/EMGChallanRegistrarSetup.exe",
      notesUrl: "https://github.com/rhemon/emg_challan_registrar/releases/tag/v0.1.0",
      notesSummary: "Initial public release with entry, import, overview, reporting, and export workflows."
    }
  ]
};

function getLatestRelease() {
  return releaseManifest.releases.find((release) => release.version === releaseManifest.latest)
    || releaseManifest.releases[0];
}

function applyLatestRelease(release) {
  if (!release) {
    return;
  }

  const versionTag = `v${release.version}`;
  document.getElementById("latest-version-pill").textContent = `Latest: ${versionTag}`;
  document.getElementById("latest-version-heading").textContent = versionTag;
  document.getElementById("latest-date").textContent = release.date;
  document.getElementById("latest-file-name").textContent = release.fileName;
  document.getElementById("latest-size").textContent = release.sizeLabel;
  document.getElementById("latest-badge").textContent = versionTag;
  document.getElementById("latest-summary").textContent = `Version ${release.version} is the current public Windows installer release.`;
  document.getElementById("latest-inline-file").textContent = release.fileName;
  document.getElementById("latest-inline-date").textContent = release.date;
  document.getElementById("latest-inline-size").textContent = release.sizeLabel;
  document.getElementById("latest-release-notes").href = release.notesUrl;
  document.getElementById("hero-release-link").href = release.notesUrl;

  const latestLinks = [
    document.getElementById("latest-download-button"),
    document.getElementById("latest-download-inline")
  ];

  latestLinks.forEach((link) => {
    link.href = release.downloadUrl;
    link.textContent = `Download ${versionTag}`;
  });
}

function renderReleaseHistory() {
  const body = document.getElementById("release-history-body");
  body.innerHTML = "";

  releaseManifest.releases.forEach((release) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><strong>v${release.version}</strong></td>
      <td>${release.date}</td>
      <td>
        <a class="download-link" href="${release.downloadUrl}">${release.fileName}</a><br>
        <span>${release.sizeLabel}</span>
      </td>
      <td>
        <div>${release.notesSummary}</div>
        <div><a class="download-link" href="${release.notesUrl}" target="_blank" rel="noopener noreferrer">Release notes</a></div>
      </td>
    `;
    body.appendChild(row);
  });
}

applyLatestRelease(getLatestRelease());
renderReleaseHistory();
