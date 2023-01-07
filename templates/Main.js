const testing = document.querySelector("#test");

var feedBox = document.querySelector("#NewsFeed")

async function getData() {
    const response = await fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=GCCyf0tGEmqZurie42bVGVnDghWI8tX6')
    const data = await response.json();
    console.log(data.results)
    for (i = 0; i < 30; i++) {
        var li = document.createElement('li'); //Create List item container
        var newsHead = document.createElement('h2')// holder for the headline
        var a = document.createElement('a'); //holder for the abstract

        newsHead.innerText = data.results[i].title;
        a.innerText = data.results[i].abstract;
        a.href = data.results[i].url

        feedBox.append(li)
        li.appendChild(newsHead)
        li.appendChild(a)
        li.app
        console.log(data.results[i].title,
            "\n", data.results[i].abstract,
            "\n", data.results[i].url)
    }
}

getData();

console.log(testing + "Console");

testing.addEventListener("click", event => {
    
})


