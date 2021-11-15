// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require semantic-ui
//= require_tree .

scroll_bottom = function(){
  if($('#messages').length > 0){
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  };
  $("#new_message").get(0).reset();
}
//scrolls to the bottom of the message display and resets the content of the text box

submit_message = function(){
  $('#message_body').on('keydown', function(e){
    if (e.keyCode == 13){
      $('button').click();      
    };
  });
};

//not actually needed, think semantic has been updated since to do this automatically
//would otherwise allow submission on pressing enter instead of clicking button
//also kinda fucks everything up if called

$('#new_message').on('ajax:send',function(){
  $('#message_body').val("").focus();
});

$(document).on("turbolinks:load", function () {
  $(".ui.dropdown").dropdown();
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  scroll_bottom();  
});
//not a clue

