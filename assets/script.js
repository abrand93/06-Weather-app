var searchInputEl = document.querySelector('#search-city')
var submitButton = document.querySelector('#submit-city')
var body = document.querySelector('#body')








function getMedia(){
 
    var apiCity = 'https://api.openweathermap.org/data/2.5/weather?q='+ searchInputEl.value + '&APPID=be344cdaf97196f52514caea64ace3fd'
    fetch(apiCity,{
    cache: 'reload'
    })
    .then(function(res){
        return res.json()
    })
    .then(function(data){
       
        var lon = data.coord.lon
        var lat = data.coord.lat
        
        console.log(searchInputEl.value)
    


 
    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat='+lat +"&lon="+ lon +"&appid=be344cdaf97196f52514caea64ace3fd&units=imperial"
    fetch(apiUrl)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
        displayCity(data.city, data.list)
        oneDay(data.city, data.list)
        twoDay(data.city, data.list)
        ThreeDay(data.city, data.list)
        fourDay(data.city, data.list)
        fiveDay(data.city, data.list)
        console.log(data.list)
       
      
    })
})
}
function displayCity(city,list){
    if(city.length === 0){
        return;
    }
    //for(var i = 0; i < city.length; i++){
        var div = document.createElement('div')
        div.classList = 'text-center border-double border-4 border-sky-500'
        var title = document.createElement('h2')
        title.textContent = city.name + " " + list[0].dt_txt
        
        console.log(city)
        div.appendChild(title)
        body.appendChild(div)
        var forcast = document.createElement('p')
        forcast.textContent ="Temp: "+ list[0].main.temp + "F"
        div.appendChild(forcast)
        var wind = document.createElement('p')
        wind.textContent = 'Wind: ' + list[0].wind.speed + 'MPH'
        div.appendChild(wind)
        var humidity = document.createElement('p')
        humidity.textContent ="Humidity: " + list[0].main.humidity + "%"
        div.appendChild(humidity)

}

  function oneDay(city,list){
    
    var div = document.createElement('div')
        div.classList = 'border border-4 border-sky-500'
        var title = document.createElement('h2')
        title.textContent = list[7].dt_txt
      
        div.appendChild(title)
        body.appendChild(div)
        var forcast = document.createElement('p')
        forcast.textContent ="Temp: "+ list[7].main.temp + "F"
        div.appendChild(forcast)
        var wind = document.createElement('p')
        wind.textContent = 'Wind: ' + list[7].wind.speed + 'MPH'
        div.appendChild(wind)
        var humidity = document.createElement('p')
        humidity.textContent ="Humidity: " + list[7].main.humidity + "%"
        div.appendChild(humidity)
    
}
function twoDay(city,list){
    
    var div = document.createElement('div')
        div.classList = 'border border-4 border-sky-500'
        var title = document.createElement('h2')
        title.textContent = list[15].dt_txt
      
        div.appendChild(title)
        body.appendChild(div)
        var forcast = document.createElement('p')
        forcast.textContent ="Temp: "+ list[15].main.temp + "F"
        div.appendChild(forcast)
        var wind = document.createElement('p')
        wind.textContent = 'Wind: ' + list[15].wind.speed + 'MPH'
        div.appendChild(wind)
        var humidity = document.createElement('p')
        humidity.textContent ="Humidity: " + list[15].main.humidity + "%"
        div.appendChild(humidity)
    
}
function ThreeDay(city,list){
    
    var div = document.createElement('div')
        div.classList = 'border border-4 border-sky-500'
        var title = document.createElement('h2')
        title.textContent = list[23].dt_txt
      
        div.appendChild(title)
        body.appendChild(div)
        var forcast = document.createElement('p')
        forcast.textContent ="Temp: "+ list[23].main.temp + "F"
        div.appendChild(forcast)
        var wind = document.createElement('p')
        wind.textContent = 'Wind: ' + list[23].wind.speed + 'MPH'
        div.appendChild(wind)
        var humidity = document.createElement('p')
        humidity.textContent ="Humidity: " + list[23].main.humidity + "%"
        div.appendChild(humidity)
    
}
function fourDay(city,list){
    
    var div = document.createElement('div')
        div.classList = 'border border-4 border-sky-500'
        var title = document.createElement('h2')
        title.textContent = list[31].dt_txt
      
        div.appendChild(title)
        body.appendChild(div)
        var forcast = document.createElement('p')
        forcast.textContent ="Temp: "+ list[31].main.temp + "F"
        div.appendChild(forcast)
        var wind = document.createElement('p')
        wind.textContent = 'Wind: ' + list[31].wind.speed + 'MPH'
        div.appendChild(wind)
        var humidity = document.createElement('p')
        humidity.textContent ="Humidity: " + list[31].main.humidity + "%"
        div.appendChild(humidity)
    
}
function fiveDay(city,list){
    
    var div = document.createElement('div')
        div.classList = 'border border-4 border-sky-500'
        var title = document.createElement('h2')
        title.textContent = list[39].dt_txt
      
        div.appendChild(title)
        body.appendChild(div)
        var forcast = document.createElement('p')
        forcast.textContent ="Temp: "+ list[39].main.temp + "F"
        div.appendChild(forcast)
        var wind = document.createElement('p')
        wind.textContent = 'Wind: ' + list[39].wind.speed + 'MPH'
        div.appendChild(wind)
        var humidity = document.createElement('p')
        humidity.textContent ="Humidity: " + list[39].main.humidity + "%"
        div.appendChild(humidity)
    
}
submitButton.addEventListener('click', getMedia )