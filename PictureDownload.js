// ==UserScript=
// @name Picture Download
// @author Joseph Nyahuye
// @description Download picture with external downloader
// @include   *
// @match     *
// @grant     GM_registerMenuCommand
// @grant     GM_download
// @run-at    document-end
// ==/UserScript==

document.addEventListener('touchend', (e) => window.sessionStorage.setItem("coordinates", JSON.stringify({ x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY })), false);
GM_registerMenuCommand("Download Picture", () => {
  const coordinates = JSON.parse(window.sessionStorage.getItem("coordinates"));
  elementMouseIsOver = document.elementFromPoint(coordinates.x, coordinates.y);
  elementMouseIsOver && elementMouseIsOver.tagName === "IMG" ? GM_download(elementMouseIsOver.src, "pic") : alert("No downloadable image found.");
});
