fetch('https://api.openweathermap.org/data/2.5/weather?id=703448&appid=2850bfc126a41dc9689aeb6ae8218480') 
    .then(function(resp){return resp.json()} )
    .then(function(data){
        console.log(data);
        document.querySelector('.package-name').innerHTML = data.name;
        document.querySelector('.prise').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.desclaimer').innerHTML = data.weather[0]['description'];
        document.querySelector('.features li:first-child').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.features li:last-child').innerHTML = data.sys['country'];

        document.querySelector('.city').onchange = () =>{
            let a = document.querySelector('.city').value;

            if(a == '2'){
                fetch('https://api.openweathermap.org/data/2.5/weather?id=690548&appid=2850bfc126a41dc9689aeb6ae8218480')
                .then(function(resp){return resp.json()} )
                .then(function(data){
                console.log(data);
                document.querySelector('.package-name').innerHTML = data.name;
                document.querySelector('.prise').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                document.querySelector('.desclaimer').innerHTML = data.weather[0]['description'];
                document.querySelector('.features li:first-child').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
                document.querySelector('.features li:last-child').innerHTML = data.sys['country'];
                })
            }else if(a == '3'){
                fetch('https://api.openweathermap.org/data/2.5/weather?id=689558&appid=2850bfc126a41dc9689aeb6ae8218480')
                .then(function(resp){return resp.json()} )
                .then(function(data){
                console.log(data);
                document.querySelector('.package-name').innerHTML = data.name;
                document.querySelector('.prise').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                document.querySelector('.desclaimer').innerHTML = data.weather[0]['description'];
                document.querySelector('.features li:first-child').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
                document.querySelector('.features li:last-child').innerHTML = data.sys['country'];
                })
            }else if(a == '1'){
                fetch('https://api.openweathermap.org/data/2.5/weather?id=703448&appid=2850bfc126a41dc9689aeb6ae8218480')
                .then(function(resp){return resp.json()} )
                .then(function(data){
                console.log(data);
                document.querySelector('.package-name').innerHTML = data.name;
                document.querySelector('.prise').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                document.querySelector('.desclaimer').innerHTML = data.weather[0]['description'];
                document.querySelector('.features li:first-child').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
                document.querySelector('.features li:last-child').innerHTML = data.sys['country'];
                })
            }else if(a == '4'){
                fetch('https://api.openweathermap.org/data/2.5/weather?id=705914&appid=2850bfc126a41dc9689aeb6ae8218480')
                .then(function(resp){return resp.json()} )
                .then(function(data){
                console.log(data);
                document.querySelector('.package-name').innerHTML = data.name;
                document.querySelector('.prise').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                document.querySelector('.desclaimer').innerHTML = data.weather[0]['description'];
                document.querySelector('.features li:first-child').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
                document.querySelector('.features li:last-child').innerHTML = data.sys['country'];
                })
            }else if(a == '5'){
                fetch('https://api.openweathermap.org/data/2.5/weather?id=1510853&appid=2850bfc126a41dc9689aeb6ae8218480')
                .then(function(resp){return resp.json()} )
                .then(function(data){
                console.log(data);
                document.querySelector('.package-name').innerHTML = data.name;
                document.querySelector('.prise').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                document.querySelector('.desclaimer').innerHTML = data.weather[0]['description'];
                document.querySelector('.features li:first-child').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
                document.querySelector('.features li:last-child').innerHTML = data.sys['country'];
                })
            }
        }
        
    })
    
    .catch(function(){

    });





