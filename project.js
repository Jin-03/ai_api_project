var OPENAI_API_KEY = "";

let word1
let word2
let words

function Send(){
  var sQuestion = txtMsg.value + " 연관 단어를 번호를 매겨서 출력해줘";
  var data = {
        model: "text-davinci-003",
        prompt: sQuestion,
        max_tokens: 100,
        temperature: 0
  }
  $.ajax({
    type: "POST",
    url: 'https://api.openai.com/v1/completions',
    headers:{
        "Accept" : "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + OPENAI_API_KEY },
        data: JSON.stringify(data),

  }).done(function(response) {
    
    var sanswer = response.choices[0].text;
    word1 = sanswer.substring(
      sanswer.search(1) + 3,
      sanswer.search(2) - 1
    );
    word2 = sanswer.substring(
      sanswer.search(2) + 3,
      sanswer.search(3) - 1
    );

    words = [word1, word2];
    txtOut.value = sanswer;
    // txtOut.value = words;
    Draw(words);

  }).fail(function(error) {
    alert("!/js/user.js에서 에러발생: " + error.statusText);
    console.log(error);
  });
}

function Draw(words){
  for (let i = 0; i < 2; i++) {
    var sQuestion = words[i];
    console.log(words[i]);

    var data = {
          prompt: sQuestion,
          n:1,
          size: "256x256"
    }

    $.ajax({
      type: "POST",
      url: 'https://api.openai.com/v1/images/generations',
      headers:{
          "Accept" : "application/json",
          "Content-Type": "application/json", 
          "Authorization": "Bearer " + OPENAI_API_KEY },
      data: JSON.stringify(data),

    }).done(function(response) {
      const container = document.querySelector('.imgContainer');

      const img = new Image()

      
      img.src = response.data[0].url
      img.alt = words[i]
      container.appendChild(img)

    }).fail(function(error) {
      alert("!/js/user.js에서 에러발생: " + error.statusText);
      console.log(error)

    });
  }
  
}
