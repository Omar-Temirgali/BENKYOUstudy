function check() {
    var c = 0;
    var words = [document.exercise.word1.value, document.exercise.word2.value, document.exercise.word3.value, 
        document.exercise.word4.value, document.exercise.word5.value, document.exercise.word6.value];
    var answers = ["つなみ", "さむらい", "ふじやま", "さくら", "たたみ", "せんせい"];
    var result = document.getElementById('result');
    
    for (var i = 0; i < words.length; i++) {
        if (words[i] == answers[i]) c++;
    }
    if (words[0] == '' || words[1] == '' || words[2] == '' || words[3] == '' || words[4] == '' || words[5] == '') {
        result.textContent = 'Please, fill the answers.';
    } else {
        result.textContent = 'Correct: ' + c + '/' + words.length;
    }
};

function show_ans_2() {
    var x = document.getElementById("ans-2");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function show_ans_3() {
    var x = document.getElementById("ans-3");
    var y = document.getElementById("ans-3-1");

    if (x.style.display == "none" && y.style.display == "none") {
      x.style.display = "block";
      y.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display = "none";
    }
}