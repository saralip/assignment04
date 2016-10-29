var main = function() {
  //console.log("client jquery OK");

  var $paragraph = $('<p>');
  $.get('http://localhost:3000/question', function(response) {

    console.log(response);
    response = JSON.parse(response);
    console.log(response);

    var question = response.question;
    var answer = response.answer;
    var qID = response.questionId;

    console.log(question + " " + answer + " " + qID)

    $paragraph.text(question);
    $('#questionBox').append($paragraph);
  });



  $('#enterButton').on('click', function () {

    var userAnswer = $('#userAnswer').val();
    console.log(typeof(userAnswer));

    var ans = {'userResponse' : userAnswer};
    var data = {'data': JSON.stringify(ans)};
    console.log(data);

    $.post('http://localhost:3000/question', data, function(response) {

      console.log(response);

    });
  });



  $('#userAnswer').focus(function() {
    if(this.value === 'Enter Answer Here') {
      this.value = '';
    }
  });
};

$(document).ready(main);
