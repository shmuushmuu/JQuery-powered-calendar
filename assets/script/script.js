// this function wraps the whole of the script, so the variables and functions all relate to each other
$(function dynamicPage() {

  // calling my variables that aren't explicitly named in my functions:
  // the save button from the html, what time and day it is via dayjs,
  // what the current date is for comparing later, and having the date 
  // display in the header
  var saveButton = $('.saveBtn');
  var currentTime = dayjs().hour();
  var currDate = $('#currentDay');
  currDate.text(new Date());
  
  // when a user types in the text area and click the save icon, the text and the hour's id are logged in local storage
  $(saveButton).click(function() {
    var textInput = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, textInput);
  })
  
  // rather than have mutiple lines of html, I locked onto the class .description,
  // which was the only part I wanted to have changing background colors. This
  // function compares the time of day to the hours in the hour block, and
  // changes the background color to match (gray-past), (red-present), and (green-future).

  $('.description').each(function(){
    var hourBlock = parseInt($(this).parent().attr('id').replace('hour-', ''));
    if (hourBlock < currentTime){
    $(this).parent().addClass('past')
  } else if(hourBlock === currentTime) {
    $(this).parent().addClass('present')
  } else {
    $(this).addClass('future');
  }
  
  // this calls back the value saved into local storage and keeps it in the text area, even after
  // the page is refreshed
  var text = localStorage.getItem($(this).parent().attr('id'));
  $(this).val(text);
});
})
