function outputData(data){
    console.log(data);
    document.querySelector('.package-name').innerHTML = data.name;
    document.querySelector('.prise').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.desclaimer').innerHTML = data.weather[0]['description'];
    document.querySelector('.features li:first-child').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    document.querySelector('.features li:last-child').innerHTML = data.sys['country'];    
};

function loadWetherAndOutput(id){
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=2850bfc126a41dc9689aeb6ae8218480`)
        .then(function(resp){return resp.json()} )
        .then(outputData);
}

document.querySelector('.city').onchange = () =>{
    let a = document.querySelector('.city').value;
    let id = transformCityToId(a);
    loadWetherAndOutput(id);
}

function transformCityToId(a){
    if(a == 'Uzhgorod'){
        return 690548;
    }else if(a == 'Vinnytsia'){
        return 689558;
    }else if(a == 'Kyiv'){
        return 703448;
    }else if(a == 'Khyriv'){
        return 705914;
    }else if(a == 'Barnaul'){
        return 1510853;
    }
}

loadWetherAndOutput(703448);