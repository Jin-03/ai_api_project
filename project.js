const OPENAI_API_KEY = "";

let words = [];
let prompts = [];

function Send(){
  // let sQuestion = "Generate related words with " + txtMsg.value + " and print them out numbered.";
  let sQuestion = txtMsg.value + " 에 연관된 단어들을 찾아서 번호를 매겨서 출력해줘.";
  console.log(sQuestion)
  let data = {
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
    let word0 = txtMsg.value
    let sanswer = response.choices[0].text;
    let word1 = sanswer.substring(
      sanswer.search(1) + 2,
      sanswer.search(2) - 1
    );
    let word2 = sanswer.substring(
      sanswer.search(2) + 2,
      sanswer.search(3) - 1
    );
    let word3 = sanswer.substring(
      sanswer.search(3) + 2,
      sanswer.search(4) - 1
    );

    words = [word0, word1, word2, word3];
    // txtOut.value = sanswer;
    console.log(sanswer);
    txtOut2.value = words;
    console.log(words);
      MakePrompt(words, 3);
      MakePrompt(words, 2);
      MakePrompt(words, 1);
      MakePrompt(words, 0);

  }).fail(function(error) {
    alert("!/js/user.js에서 에러발생: " + error.statusText);
    console.log(error);
  });
}


function MakePrompt(words, i) {

  let sQuestion = "Generate a prompt for drawing " + words[i] + " in english";
  console.log(sQuestion)
  let data = {
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
    
    let sanswer = response.choices[0].text;
    console.log(sanswer);
    prompts[i] = sanswer;
    console.log(prompts);
    // txtOut3.value = prompts;
  

  }).fail(function(error) {
    alert("!/js/user.js에서 에러발생: " + error.statusText);
    console.log(error);
  });
}


function Draw(words){
  for (let i = 0; i < 4; i++) {
    
    let sQuestion = words[i];
    console.log(sQuestion);

    let data = {
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
