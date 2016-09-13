$(document).ready(init)

function init() {
  $('#add').click(addButtonClicked);

}

function addButtonClicked() {
  console.log('Clicked!');

  var $input = $('#name');

  var color = $('#color').val();

  console.log('color:', color)

  var name = $input.val();
  $input.val('');

  var $li = $('<li>');

  $li.text(name).css('color', color);

  var $list = $('#list');

  $list.append($li);
}
