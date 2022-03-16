$(document).ready(function(){
    $("#devIcon").click(function(){
      $("#devIcon").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#devIcon").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").hide('1000');
      $("#para").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('150');






$(document).ready(function($) { 
    window.fnames = new Array(); 
    window.ftypes = new Array();
    fnames[0]='EMAIL';
    ftypes[0]='email';
    fnames[1]='FNAME';
    ftypes[1]='text';
    fnames[2]='LNAME';
    ftypes[2]='text';
    fnames[3]='MSG';
    ftypes[3]='text'; 
}  (jQuery));var $mcj = jQuery.noConflict(true);
