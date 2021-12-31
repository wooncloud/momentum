const quotes = [
    {
        quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author: "이소룡"
    },
    {
        quote: "0과 1의 차이",
        author: "안대장"
    },
    {
        quote: "당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 믿는 대로 될 것이다.",
        author: "헨리 포드"
    },
    {
        quote: "노력은 설명하는 것이 아닌 증명하는 것이다.",
        author: "안대장"
    },
    {
        quote: "먼저 핀 꽃은 먼저 진다. 남보다 먼저 공을 세우려고 조급히 서둘것이 아니다.",
        author: "채근담"
    },
    {
        quote: "내가 이길때까지 끝난것이 아니다",
        author: "레스 브라운"
    },
    {
        quote: "계단을 밟아야 계단 위에 올라설수 있다.",
        author: "터키 속담"
    },
    {
        quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
        author: "단테"
    },
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author: "사무엘존슨"
    },
    {
        quote: "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해",
        author: "찰리 채플린"
    },
];

const quote = document.querySelector("#quote > span:first-child");
const author = document.querySelector("#quote > span:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;