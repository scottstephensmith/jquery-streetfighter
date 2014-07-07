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
  })
  // my custom keydown work starts here
  $(document).keydown(function(event) {
        if ( event.which == 88 ) {
        console.log("X was pressed");	
  		playLoop();
  		$('.ryu-ready').hide();
  		$('.ryu-cool').show();
  	}
  })
  .keyup(function(key) {
        if ( event.which == 88 ) {	
        $('#loop-sound')[0].pause();
      	$('#loop-sound')[0].load();
  		$('.ryu-cool').hide();
  		$('.ryu-still').show();
  	}
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