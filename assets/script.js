var searchInputEl = document.querySelector('#search-city')
var submitButton = document.querySelector('#submit-city')
var main = document.querySelector('#main')
var body = document.querySelector('#body')
var sidenav = document.querySelector('.sidenav')
var userhisUl= document.querySelector('#user-his')
var Todos = []
var past = document.querySelector('.liBtn')


function getHistory(){
    userhisUl.innerHTML=""
    for(var i = 0;i < Todos.length; i++){
        var hist = Todos[i]
        var li = document.createElement('li')

        li.textContent = hist
        li.setAttribute('data-index', i)
        userhisUl.appendChild(li)
        li.classList = ("liBtn bg-cyan-400 m-5 p-2 hover:bg-sky-700")

    }
}

function init(){
    var storedHistory = JSON.parse(localStorage.getItem("history"))

    if(storedHistory !== null){
       Todos = storedHistory
    }
    getHistory()
}
function storeHistory(){
    localStorage.setItem('history', JSON.stringify(Todos))
}

function getMedia(){
   
    getHistory()
  
    var historyText = searchInputEl.value
    console.log(historyText)
    Todos.push(historyText)
    console.log
    
    
    storeHistory()
    
    var apiCity = 'https://api.openweathermap.org/data/2.5/weather?q='+ searchInputEl.value + '&APPID=be344cdaf97196f52514caea64ace3fd'
    fetch(apiCity)
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
    
    //for(var i = 0; i < city.length; i++){
        var div = document.createElement('div')
        div.classList = ' border-double border-4 border-sky-500 text-left'
        var title = document.createElement('h2')
        title.textContent = city.name + " " + list[0].dt_txt
        var img = document.createElement('img')
       var icon = list[0].weather[0].icon
        img.setAttribute('src','https://openweathermap.org/img/wn/'+icon+'@2x.png')
        console.log(icon)
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
        div.appendChild(img)
        title.classList = "text-2xl font-bold"
}

  function oneDay(city,list){
    
    var div = document.createElement('div')
        div.classList = 'border border-4 border-sky-500 p-2 m-2 content-start text-left'
        var title = document.createElement('h2')
        title.textContent = list[7].dt_txt
      
        div.appendChild(title)
        main.appendChild(div)
        var forcast = document.createElement('p')
        forcast.textContent ="Temp: "+ list[7].main.temp + "F"
        div.appendChild(forcast)
        var wind = document.createElement('p')
        wind.textContent = 'Wind: ' + list[7].wind.speed + 'MPH'
        div.appendChild(wind)
        var humidity = document.createElement('p')
        humidity.textContent ="Humidity: " + list[7].main.humidity + "%"
        div.appendChild(humidity)
        var img = document.createElement('img')
       var icon = list[7].weather[0].icon
        img.setAttribute('src','https://openweathermap.org/img/wn/'+icon+'@2x.png')
	div.appendChild(img)
        
}
function twoDay(city,list){
    
    var div = document.createElement('div')
        div.classList = 'border border-4 border-sky-500 p-2 m-2 content-start text-left'
        var title = document.createElement('h2')
        title.textContent = list[15].dt_txt
      
        div.appendChild(title)
        main.appendChild(div)
        var forcast = document.createElement('p')
        forcast.textContent ="Temp: "+ list[15].main.temp + "F"
        div.appendChild(forcast)
        var wind = document.createElement('p')
        wind.textContent = 'Wind: ' + list[15].wind.speed + 'MPH'
        div.appendChild(wind)
        var humidity = document.createElement('p')
        humidity.textContent ="Humidity: " + list[15].main.humidity + "%"
        div.appendChild(humidity)
        var img = document.createElement('img')
       var icon = list[15].weather[0].icon
        img.setAttribute('src','https://openweathermap.org/img/wn/'+icon+'@2x.png')
	div.appendChild(img)
    
}
function ThreeDay(city,list){
    
    var div = document.createElement('div')
        div.classList = 'border border-4 border-sky-500 p-2 m-2 content-start text-left'
        var title = document.createElement('h2')
        title.textContent = list[23].dt_txt
      
        div.appendChild(title)
        main.appendChild(div)
        var forcast = document.createElement('p')
        forcast.textContent ="Temp: "+ list[23].main.temp + "F"
        div.appendChild(forcast)
        var wind = document.createElement('p')
        wind.textContent = 'Wind: ' + list[23].wind.speed + 'MPH'
        div.appendChild(wind)
        var humidity = document.createElement('p')
        humidity.textContent ="Humidity: " + list[23].main.humidity + "%"
        div.appendChild(humidity)
        var img = document.createElement('img')
       var icon = list[23].weather[0].icon
        img.setAttribute('src','https://openweathermap.org/img/wn/'+icon+'@2x.png')
	div.appendChild(img)
    
}
function fourDay(city,list){
    
    var div = document.createElement('div')
        div.classList = 'border border-4 border-sky-500 p-2 m-2 content-start text-left'
        var title = document.createElement('h2')
        title.textContent = list[31].dt_txt
      
        div.appendChild(title)
        main.appendChild(div)
        var forcast = document.createElement('p')
        forcast.textContent ="Temp: "+ list[31].main.temp + "F"
        div.appendChild(forcast)
        var wind = document.createElement('p')
        wind.textContent = 'Wind: ' + list[31].wind.speed + 'MPH'
        div.appendChild(wind)
        var humidity = document.createElement('p')
        humidity.textContent ="Humidity: " + list[31].main.humidity + "%"
        div.appendChild(humidity)
        var img = document.createElement('img')
        var icon = list[31].weather[0].icon
         img.setAttribute('src','https://openweathermap.org/img/wn/'+icon+'@2x.png')
     div.appendChild(img)
}
function fiveDay(city,list){
    
    var div = document.createElement('div')
        div.classList = 'border border-4 border-sky-500 p-2 m-2 text-left'
        var title = document.createElement('h2')
        title.textContent = list[39].dt_txt
      
        div.appendChild(title)
        main.appendChild(div)
        var forcast = document.createElement('p')
        forcast.textContent ="Temp: "+ list[39].main.temp + "F"
        div.appendChild(forcast)
        var wind = document.createElement('p')
        wind.textContent = 'Wind: ' + list[39].wind.speed + 'MPH'
        div.appendChild(wind)
        var humidity = document.createElement('p')
        humidity.textContent ="Humidity: " + list[39].main.humidity + "%"
        div.appendChild(humidity)
        var img = document.createElement('img')
        var icon = list[39].weather[0].icon
         img.setAttribute('src','https://openweathermap.org/img/wn/'+icon+'@2x.png')
     div.appendChild(img)
}
getHistory()
init()


$(submitButton).on('click', getMedia )

$(".liBtn").on("click", function (){
    
    var userInput = $(this).text()
    var apiCity = 'https://api.openweathermap.org/data/2.5/weather?q='+ userInput + '&APPID=be344cdaf97196f52514caea64ace3fd'
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
       return;
      
    })
})
    console.log(userInput)
})
