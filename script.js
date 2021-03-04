

// POPUPS

//  Det her er Javascript til vintønde DESKTOP

$(document).ready(function() {
   $('#vintoende_trigger').click(function() {
      $('.vintoende_overlay').fadeIn(300);
   });

   $('.close').click(function() {
      $('.vintoende_overlay').fadeOut(300);
   });
});

//  Det her er Javascript til vintønde MOBILE

$(document).ready(function() {
   $('#mobile_vintoende_trigger').click(function() {
      $('.vintoende_overlay').fadeIn(300);
   });

   $('.close').click(function() {
      $('.vintoende_overlay').fadeOut(300);
   });
});

//  Det her er Javascript til globus DESKTOP

$(document).ready(function() {
   $('#globus_trigger').click(function() {
      $('.globus_overlay').fadeIn(300);
   });

   $('.close').click(function() {
      $('.globus_overlay').fadeOut(300);
   });
});

//  Det her er Javascript til globus MOBILE

$(document).ready(function() {
   $('#mobile_globus_trigger').click(function() {
      $('.globus_overlay').fadeIn(300);
   });

   $('.close').click(function() {
      $('.globus_overlay').fadeOut(300);
   });
});

//  Det her er Javascript til Mathias DESKTOP

$(document).ready(function() {
   $('#mathias_trigger').click(function() {
      $('.mathias_overlay').fadeIn(300);
   });

   $('.close').click(function() {
      $('.mathias_overlay').fadeOut(300);
   });
});

//  Det her er Javascript til Mathias MOBILE

$(document).ready(function() {
   $('#mobile_mathias_trigger').click(function() {
      $('.mathias_overlay').fadeIn(300);
   });

   $('.close').click(function() {
      $('.mathias_overlay').fadeOut(300);
   });
});


//  Det her er Javascript til kasse DESKTOP

$(document).ready(function() {
   $('#kasse_trigger').click(function() {
      $('.kasse_overlay').fadeIn(300);
   });

   $('.close').click(function() {
      $('.kasse_overlay').fadeOut(300);
   });
});

//  Det her er Javascript til kasse MOBILE

$(document).ready(function() {
   $('#mobile_kasse_trigger').click(function() {
      $('.kasse_overlay').fadeIn(300);
   });

   $('.close').click(function() {
      $('.kasse_overlay').fadeOut(300);
   });
});




// LYDFILER

// Det her er JavaScript til kundeservice

function playAudio() {
   var a = document.getElementById('kundeservice_lyd');
   a.currentTime=0;
   a.play();
}

function stopAudio() {
   var a = document.getElementById('kundeservice_lyd');
   a.pause();
}

document.getElementById('kundeservice_lyd').addEventListener("mouseover",playAudio());
document.getElementById('kundeservice_lyd').addEventListener("mouseout",stopAudio());



// Det her er JavaScript til vinflasken

function playAudioVin() {
   var a = document.getElementById('vin_lyd');
   a.currentTime=0;
   a.play();
}

function stopAudioVin() {
   var a = document.getElementById('vin_lyd');
   a.pause();
}

document.getElementById('vin_lyd').addEventListener("mouseover",playAudio());
document.getElementById('vin_lyd').addEventListener("mouseout",stopAudio());





// VIDEOER DESKTOP

// Det her er JavaScript til vin-videoen

function stopVideoVin() {
   var v = document.getElementById('vin_video');
   v.pause();
}

document.getElementById('vin_close').addEventListener("onclick",stopVideoVin());


// Det her er JavaScript til interview-videoen

function stopVideoInt() {
   var i = document.getElementById('interview_video');
   i.pause();
}

document.getElementById('interview_close').addEventListener("onclick",stopVideoInt());


// Det her er JavaScript til -videoen

function stopVideoKas() {
   var k = document.getElementById('kasse_video');
   k.pause();
}

document.getElementById('kasse_close').addEventListener("onclick",stopVideoKas());




// VIDEOER MOBILE

// Det her er JavaScript til vin-videoen

function stopVideoVinM() {
   var vm = document.getElementById('vin_video_mobile');
   vm.pause();
}

document.getElementById('vin_close_m').addEventListener("onclick",stopVideoVin());


// Det her er JavaScript til interview-videoen

function stopVideoIntM() {
   var im = document.getElementById('interview_video_mobile');
   im.pause();
}

document.getElementById('interview_close_m').addEventListener("onclick",stopVideoVin());


// Det her er JavaScript til -videoen

function stopVideoKasM() {
   var km = document.getElementById('kasse_video_mobile');
   km.pause();
}

document.getElementById('kasse_close_m').addEventListener("onclick",stopVideoVin());