(function () {
  $("#add-choice").on("click", addChoice);
  $("#pick-random").on("click", pickRandom);
  function addChoice(event) {
    var newChoice = $('<div class="choice-container"><input class="choice" type="text"></div>')

    $("form.choices").append(newChoice);
  }

  function pickRandom(event) {
    var choices = $("input.choice");
    var choice = randomElement(choices);
    $("h2.chosen").html(choice.value);
  }

  function randomElement(choices) {
    var num = Math.random();
    num = Math.floor(num * choices.length);
    return choices[num];
  }

})();
