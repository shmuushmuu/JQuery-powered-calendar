$(function dynamicPage() {

  var saveButton = $('.saveBtn');
  var currentTime = dayjs().hour();
  
$('.description').each(function(){

  
  var hourBlock = parseInt($(this).parent().attr('id').replace('hour-', ''));
  if (hourBlock < currentTime){
    $(this).parent().addClass('past')
  } else if(hourBlock === currentTime) {
    $(this).parent().addClass('present')
  } else {
    $(this).addClass('future');
  }
  
  var currDate = $('#currentDay');
  currDate.text(new Date());
});

$(saveButton).click(function() {
  var textInput = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id').split('-')[1];
  localStorage.setItem(textInput, time);
})
})
