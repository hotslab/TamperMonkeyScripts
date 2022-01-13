// ==UserScript=
// @name Page Navigation Buttons
// @author Joseph Nyahuye
// @description Buttons to go to the top and bottom of the opened page.
// ==/UserScript==

let Dtotn = document.createElement("div");
Dtotn.innerHTML = "△";
Dtotn.setAttribute("style", "font-size:5vw !important;width:10vw !important;height:10vw !important;line-height:10vw !important;text-align:center !important;background-color:rgba(250,250,250,0.5) !important;box-shadow:0px 0px 1px rgba(0,0,0,0.5) !important;position:fixed !important;bottom:15vh !important;right:3.3vw !important;z-index:99999 !important;border-radius:100% !important;");
Dtotn.onclick = () => { window.scrollTo({ top: 0 }); }
document.getElementsByTagName("html").item(0).appendChild(Dtotn);
let uptotn = document.createElement("div");
uptotn.innerHTML = "▽";
uptotn.setAttribute("style", "font-size:5vw !important;width:10vw !important;height:10vw !important;line-height:10vw !important;text-align:center !important;background-color:rgba(250,250,250,0.5) !important;box-shadow:0px 0px 1px rgba(0,0,0,0.5) !important;position:fixed !important;bottom:7vh !important;right:3.3vw !important;z-index:99999 !important;border-radius:100% !important;");
uptotn.onclick = () => { window.scrollTo({ top: document.body.scrollHeight || document.documentElement.scrollHeight }); }
document.getElementsByTagName("html").item(0).appendChild(uptotn);