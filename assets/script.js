var searchContainerEl = document.querySelector('#search-city')
var submitButton = document.querySelector('#submit-city')



function getMedia(){

    var apiUrl = 'api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=be344cdaf97196f52514caea64ace3fd'
    fetch(apiUrl)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
        displayMedia(data.results)
    })
}
function displayMedia(results){
    if(results.length === 0){
        return;
    }
    for(var i = 0; i < results.length; i++){
        var div = document.createElement('div')
        var title = document.createElement('h2')
        var description = document.createElement('div')
        

    }
}

submitButton.addEventListener('click', getMedia)