# AI 아트갤러리


## 1. 개요        
___
이번 프로젝트에서는 chatGPT를 활용해서 연관된 단어를 찾아 이미지를 만들어주는 AI 아트갤러리를 만들어보고자 한다.
원하는 단어를 입력하면 연관어를 찾은 다음 그 단어들을 이용하여 이미지를 생성해서 출력하도록 한다.

간단한 단어 입력만으로 자신만의 이미지를 생성할 수 있다.
자신의 상황에 딱 맞는 이미지를 찾을 수 없을 때 활용할 수 있다.
또는 어떤 단어와 연관되는 이미지들을 통해 아이디어를 얻기 위해 활용할 수 있다.


## 2. 활용한 인공지능 API
___

### 2.1 ChatGPT
ChatGPT는 OpenAI가 개발한 대화형 인공지능 챗봇이다.


### 2.2 DALL-E
DALL-E는 오픈AI가 개발한 자연어 서술로부터 이미지를 생성하는 기계 학습 모델이다.


## 3. 프로젝트 기능
___
사용자가 단어를 입력하면 그것과 연관된 단어를 여러 개 찾는다. 처음 입력한 단어와, 연관단어 3개를 골라 총 4개의 단어를 이용하여 이미지 생성을 위한 프롬프트를 만든다. 프롬프트를 이용하여 4개의 이미지를 출력한다.


## 4. 웹페이지 예시
___
![screenshot](/screenshot.png)  
