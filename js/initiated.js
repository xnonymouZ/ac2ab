/* ------------------------ *\
|* GLOBAL VARIABLES SETTING *|
\* ------------------------ */

var aux, isTRus;

  document.getElementById('mail').addEventListener('click', function () {
    document.getElementById('hand').setAttribute("class", "fadeOutRight");
    document.getElementById('mail').setAttribute("class", "mail fadeOutRight");
    document.getElementById('body').className = 'bg';
    player =document.querySelector('audio');
    player.src = '/assets/audio/efa.mp4';
    player.type = 'audio/mp3';
    player.volume = 1;
    player.play();
    player.load = auxLoaded();
  })

function auxLoaded() {
  // {{buffered, playing audio}}  

    document.getElementById('hand').setAttribute("class", "bounceInUp");
    isTRus = setInterval(msgTiming, 250);

  function msgTiming() {
      document.body.style.backgroundColor = '#35895d';
      document.getElementById('oisofhs').setAttribute("class", "box start");
      document.getElementById('hand').setAttribute("class", "bounceInUp shake");

      var twrite = document.querySelectorAll('[typewrite]');
      var tout = 4500;
      var add = 2000;
     
      for (var i = 0; i < twrite.length; i++) {
          var act = tout + ( add * i );
          typeMsg(twrite[i],  act ,  2,  18);
      }
    
    }
    if (Boolean(aux.paused) == true) {
      clearInterval(isTRus);
    }
  }

  function typeMsg(docx, delay, time, step) {
    attr = 'animation-duration: ' + time + 's; steps: (6, end);';
    docx.setAttribute('style', attr);

    setTimeout(function () {
      docx.setAttribute('class', 'msg typing');
    }, delay)
  }
