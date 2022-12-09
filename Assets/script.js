$(function dynamicPage() {

  var saveButton = $('.saveBtn');
  var currentTime = dayjs().hour();
  $(saveButton).click(function() {
    var textInput = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(textInput, time);
  })
  
  $('.description').each(function(){
    var hourBlock = parseInt($(this).parent().attr('id').replace('hour-', ''));
    if (hourBlock < currentTime){
    $(this).parent().addClass('past')
  } else if(hourBlock === currentTime) {
    $(this).parent().addClass('present')
  } else {
    $(this).addClass('future');
  }
  
  var text = localStorage.getItem($(this).attr('id'));
  $(this).find('.description').val(text);
});

  var currDate = $('#currentDay');
  currDate.text(new Date());
})
