$(document).ready(function() {

console.log("heloqq");


$(".datepicker-default").datepicker({dateFormat: 'yy-mm-dd',firstDay: 1}); 
$(".datepicker-default" ).on( "change", function() {
  $.ajax({
    type: "GET",
    dataType: "script",
    url: "/tasks?selected_date="+$("#start_date_time").val(),
    success: function(data){}
  });
});


})