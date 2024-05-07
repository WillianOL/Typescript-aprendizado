"use strict";
// mesmo o elemento sendo um video, ao selecionar com um id o typescript não sabe que tipo elemento é esse.
// por isso, temos que fazer a verificação
const video = document.querySelector('#videoP');
if (video instanceof HTMLVideoElement) {
    console.log(video.volume);
}
const links = document.querySelectorAll('.link');
console.log(links instanceof NodeList);
links.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        console.log(link.href);
    }
    else {
        console.log(typeof link);
    }
});
const arrayLinks = Array.from(links);
const anchorLinks = arrayLinks.filter((link) => link instanceof HTMLAnchorElement);
console.log(anchorLinks);
