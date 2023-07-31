(function () {
    $("#add-choice").on("click", addChoice);
    $("#pick-random").on("click", pickRandom);
    $("#list").on("click", ".remove-choice", removeChoice);
    console.log('this gets loaded')
    function addChoice(event) {
        var newChoice = $(
            '<div class="choice-container">' +
            '<input class="choice" name="list[choices][]" type="text">' +
            '<button class="remove-choice">-</button>' +
            '</div>')

        $("form#list").append(newChoice);
    }

    function pickRandom(event) {
        if (event) event.preventDefault();
        var choices = getChoices();
        var choice = randomElement(choices);
        console.log("this");
        $("h2.chosen").html(choice);
    }



    function getChoices() {
        var choices = $("input.choice");
        Array.prototype.flatten = function () {
            return [].concat.apply([], this)
        }
        choices = choices.map(function (){return this.value.split(' or ');})
        choices = [].concat.apply([], choices).map(function (line) {return line.split(',');})
        return [].concat.apply([], choices).map(function(choice){return choice.trim();})
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

    pickRandom();
})();
