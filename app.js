
// EXERCISE 1:

$(function() {
   $('#toggleButton').on('click', function() {
    $('#myParagraph').toggle();
  })
})

// EXERCISE 2:

$(function () {
  $('#colorButton').on('click', function() {
    $('#colorDiv').css('background-color', 'yellow');
  })
})

// EXERCISE 3:

$(function () {
  $('#addClassButton').on('click', function() {
    $('#classDiv').addClass('newClass');
  })
})

$(function () {
  $('#removeClassButton').on('click', function() {
    $('#classDiv').removeClass('newClass');
  })
})

// EXERCISE 4:

$(function () {
  $('#fadeInButton').on('click', function() {
    $('#fadeDiv').fadeIn(500);
  })
})

$(function () {
  $('#fadeOutButton').on('click', function() {
    $('#fadeDiv').fadeOut(500);
  })
})

// EXERCISE 5:

$(function () {
  $('#slideUpButton').on('click', function() {
    $('#slideDiv').slideUp(500);
  })
})

$(function () {
  $('#slideDownButton').on('click', function() {
    $('#slideDiv').slideDown(500);
  })
})