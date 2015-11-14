(function () {
  $("#add-choice").on("click", addChoice);
  $("#pick-random").on("click", pickRandom);
  $("#list").on("click", ".remove-choice", removeChoice);

  function addChoice(event) {
    var newChoice = $(
      '<div class="choice-container">' +
        '<input class="choice" name="list[choices][]" type="text">' +
        '<button class="remove-choice">-</button>' +
      '</div>')

    $("form#list").append(newChoice);
  }

  function pickRandom(event) {
    event.preventDefault();
    var choices = $("input.choice");
    var choice = randomElement(choices);
    $("h2.chosen").html(choice.value);
  }

  function removeChoice(event) {
    event.preventDefault();
    event.currentTarget.parentElement.remove();
  }

  function randomElement(choices) {
    var num = Math.random();
    num = Math.floor(num * choices.length);
    return choices[num];
  }

})();
