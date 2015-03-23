// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery.cookie
//= require jquery_ujs
//= require turbolinks
//= require_tree .



$('document').ready(function () {
  
 

  if ($.cookie('myCookieName') == 'isComplete') {
      $('td').addClass('complete');    
  } else {
      $('td').removeClass('complete');
  }






  $('td').on('click', function(e){
    e.preventDefault();
    function setMyCookie() {
        myCookieVal = $('td').hasClass('complete') ? 'isComplete' : 'notComplete';
        $.cookie('myCookieName', myCookieVal, { path: '/' });    
    }
    $(this).toggleClass('complete');
    setMyCookie();
  })

  $('form#new_item.new_item').on('submit', function (ev) {
    ev.preventDefault();
    form = this
    var textBox = $('input#item_name').val();

    $path = window.location.pathname
    path_array = $path.split('/')
    id_string = path_array[2]

    var dataString = {"item" : {"name" : textBox, "list_id" : id_string, "status" : true}}

         $.ajax({
             url: '/items',
             type: "POST",
             data: JSON.stringify(dataString),
             contentType: "application/json",
             dataType: "json",
             success: function (json) { 
               document.getElementById('entries').innerHTML += "<tr><td class = 'item_name'>"+textBox+'</td></tr>';
               $('form#new_item.new_item')[0].reset();
               
               $('td').on('click', function(e){
                 e.preventDefault();
                 $(this).toggleClass('complete');
                 
                  console.debug($.cookie("status"));
               });

          },
          error : function () {
            alert("ajax error");}
          });
  });

  








 
  



});