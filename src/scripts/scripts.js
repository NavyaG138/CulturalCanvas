var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 8) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  // audio controls

  document.addEventListener("DOMContentLoaded", function() {

    // Function to handle audio playback on hover
    function handleAudioHover(imageSelector, audioSelector) {
        const imageElement = document.querySelector(imageSelector);
        const audioElement = document.querySelector(audioSelector);

        if (!imageElement || !audioElement) {
            console.error('Image or audio element not found for:', imageSelector, audioSelector);
            return;
        }

        imageElement.addEventListener('mouseover', () => {
            try {
                audioElement.play();
            } catch (error) {
                console.error('Error playing audio:', error);
            }
        });

        imageElement.addEventListener('mouseout', () => {
            audioElement.pause();
            audioElement.currentTime = 0;
        });
    }

    // Apply the function for sitar, veena, shehnai, and harmonium
    handleAudioHover('.sitar-image', '.sitar-audio');
    handleAudioHover('.veena-image', '.veena-audio');
    handleAudioHover('.shehnai-image', '.shehnai-audio');
    handleAudioHover('.harmonium-image', '.harmonium-audio');
    handleAudioHover('.trumpet-image', '.trumpet-audio');
    handleAudioHover('.tabla-image', '.tabla-audio');
    handleAudioHover('.mridangam-image', '.mridangam-audio');
});


imageElement.addEventListener('click', () => {
  try {
      audioElement.play();
  } catch (error) {
      console.error('Error playing audio:', error);
  }
});