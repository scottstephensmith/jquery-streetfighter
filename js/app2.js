$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken(); 
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate({'left': '300px'}, 
      500, 
      function() {
        $(this).hide();
        $(this).css('left', '-195px');
      });
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
  // my custom keydown work starts here!!!!!!!!

  var keysdown = {};
  $(document).keydown(function(e) {
      // So that the computer doesn't register multiple keypresses on keydown
      if (e.keyCode == 88) {
      if (keysdown[e.keyCode]) {
        return;
      }
      keysdown[e.keyCode] = true;

      // here's where we log and play things
      console.log("X was pressed");	
      playLoop();
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
      $('.ryu-cool').show();
    }
    })
  
  .keyup(function(e) {
    if (e.keyCode == 88) {
        // Part of not registering multiple key presses  
        delete keysdown[e.keyCode];

        // stopping the music on keyup, argh!
        $('#loop-sound')[0].pause();
        $('#loop-sound')[0].load();
        $('.ryu-cool').hide();
        $('.ryu-ready').show();
      }
    })

  $('.bottomtext').mouseenter(function(){
        $(this).effect("bounce", "slow");
        $(this).css('color', 'purple');
  })
  $('.bottomtext').mouseleave(function(){
        $(this).css('color', 'black');
  })
});


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playLoop () {
  $('#loop-sound')[0].volume = 1;
  $('#loop-sound')[0].load();
  $('#loop-sound')[0].play();
}