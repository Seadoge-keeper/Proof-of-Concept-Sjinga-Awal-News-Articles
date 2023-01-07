var feedBox = document.querySelector("#NewsFeed") 

async function getData() {
    const response = await fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=GCCyf0tGEmqZurie42bVGVnDghWI8tX6')
    const data = await response.json(); // Stores the response into a JSON file labelled "data"
    console.log(data.results) //outputs the table of "results" inside the newly obtained data.
    for (i = 0; i < 30; i++) { // For loop
        var li = document.createElement('li'); //Create List item container
        var newsHead = document.createElement('h2')// holder for the headline
        var a = document.createElement('a'); //holder for the abstract

        newsHead.innerText = data.results[i].title; // inputs the title of the article into the news Headline
        a.innerText = data.results[i].abstract; // inputs the abstract into the innerText of the <a> tag
        a.href = data.results[i].url // inputs the URL of the article into the <a> tag

        feedBox.append(li) // This adds a new List item into the NewsFeed List 
        li.appendChild(newsHead) // this will add a new heading tag inside of the List item
        li.appendChild(a) // This will add an <a> tag containing the abstract of the article and URL
        console.log(data.results[i].title,
            "\n", data.results[i].abstract,
            "\n", data.results[i].url)
    }
}

getData(); // calls the function of the website 


