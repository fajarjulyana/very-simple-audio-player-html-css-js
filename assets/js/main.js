/* ========= Music Player ========= */
function init()
{
    document.addEventListener('click', function(evt) { if (evt.target.tagName.toLowerCase() == 'li') { play(evt.target); } }, false);
}

function skip()
{
}

function play(elem)
{
    var audio = document.getElementById('audio');
    audio.src = 'audio/' + elem.textContent + '.mp3'; /* directory file name */
    audio.play();
    elem.className = 'playing';
    skip = function()
    {
            elem.className = '';
            if (elem.nextElementSibling)
            {
                play(elem.nextElementSibling);
            }
    }
}
/* ========= Full Screen Event ========= */
var elem = document.getElementById("appin");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}