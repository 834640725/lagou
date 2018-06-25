function vierport () {
  let html = document.documentElement;
  let htmlWidth = html.getBoundingClientRect().width;

  html.style.fontSize = htmlWidth / 10 + 'px';
}
vierport();

/**
 * 1rem = 37.5px
 */

window.onresize = vierport;
