$(document).ready(function(){
  $('#form').submit(function(event){
    event.preventDefault();

    //insert show responses

    $('input:checkbox[name=work-transport]:checked').each(function(){
      var checkedTemp = $(this).val();
      $('#workOutput').append(checkedTemp + '<br>');
    });
    $('input:checkbox[name=other-transport]:checked').each(function(){
      var checkedTemp = $(this).val();
      $('#otherOutput').append(checkedTemp + '<br>');
    });
    //insert hide survey

  });
});
