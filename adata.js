const llave1 = "grant_type=client_credentials";
const llave2 = "client_id=f5d8c0020ca64dc7a2fdbf1d858869c0";
const llave3 = "client_secret=53ce8d86a24946628aa808f91529f858";

const parametrosPOST = {
    method: "POST",
    headers: { "Content-Type": 'application/x-www-form-urlencoded' },
    body: llave1 + '&' + llave2 + '&' + llave3
}

const urlPOST = "https://accounts.spotify.com/api/token";

fetch(urlPOST, parametrosPOST)
    .then(respuesta => respuesta.json())
    .then(datos => generarToken(datos));


function generarToken(datos) {

    let token = datos.access_token;
    token = "Bearer " + token;
    

    const  urlGET  =  "https://api.spotify.com/v1/artists/7okwEbXzyT2VffBmyQBWLz/top-tracks?country=US" ;

    const parametrosGET  =  {
        method : "GET",
        headers : {  "Authorization" : token  },
    }

    fetch(urlGET,parametrosGET)
        .then(respuesta=>respuesta.json())
        .then(datos=>depurarDatos(datos)) ;  

}

function depurarDatos(datos){
   
     //En 3 variables JS almacenamos los recursos que llegan desde el API
     let audio1 = (datos.tracks[0].preview_url); //audio
     let titulo1 = (datos.tracks[0].name); //titulo
     let imagen1 = (datos.tracks[0].album.images[0].url); //imagen

     let audio2 = (datos.tracks[2].preview_url); //audio
     let titulo2 = (datos.tracks[2].name); //titulo
     let imagen2 = (datos.tracks[2].album.images[0].url); //imagen

     let audio3 = (datos.tracks[4].preview_url); //audio
     let titulo3 = (datos.tracks[4].name); //titulo
     let imagen3 = (datos.tracks[4].album.images[0].url); //imagen
 
     let audio4 = (datos.tracks[3].preview_url); //audio
     let titulo4 = (datos.tracks[3].name); //titulo
     let imagen4 = (datos.tracks[3].album.images[0].url); //imagen

     let audio5 = (datos.tracks[5].preview_url); //audio
     let titulo5 = (datos.tracks[5].name); //titulo
     let imagen5 = (datos.tracks[5].album.images[0].url); //imagen

     let audio6 = (datos.tracks[6].preview_url); //audio
     let titulo6 = (datos.tracks[6].name); //titulo
     let imagen6 = (datos.tracks[6].album.images[0].url); //imagen

     //Referenciamos etiquetas HTML usando el DOM
     let audio1DOM = document.getElementById("audio1");
     let titulo1DOM = document.getElementById("titulo1");
     let imagen1DOM = document.getElementById("imagen1");

     let audio2DOM = document.getElementById("audio2");
     let titulo2DOM = document.getElementById("titulo2");
     let imagen2DOM = document.getElementById("imagen2");

     let audio3DOM = document.getElementById("audio3");
     let titulo3DOM = document.getElementById("titulo3");
     let imagen3DOM = document.getElementById("imagen3");

     let audio4DOM = document.getElementById("audio4");
     let titulo4DOM = document.getElementById("titulo4");
     let imagen4DOM = document.getElementById("imagen4");

     let audio5DOM = document.getElementById("audio5");
     let titulo5DOM = document.getElementById("titulo5");
     let imagen5DOM = document.getElementById("imagen5");

     let audio6DOM = document.getElementById("audio6");
     let titulo6DOM = document.getElementById("titulo6");
     let imagen6DOM = document.getElementById("imagen6");
 
     //Creo la referencia y modifico el contenido de las etiquetas
     audio1DOM.src = audio1;
     titulo1DOM.textContent = titulo1;
     imagen1DOM.src = imagen1;

     audio2DOM.src = audio2;
     titulo2DOM.textContent = titulo2;
     imagen2DOM.src = imagen2;

     audio3DOM.src = audio3;
     titulo3DOM.textContent = titulo3;
     imagen3DOM.src = imagen3;

     audio4DOM.src = audio4;
     titulo4DOM.textContent = titulo4;
     imagen4DOM.src = imagen4;

     audio5DOM.src = audio5;
     titulo5DOM.textContent = titulo5;
     imagen5DOM.src = imagen5;

     audio6DOM.src = audio6;
     titulo6DOM.textContent = titulo6;
     imagen6DOM.src = imagen6;
    

}







// const url ="https://api.spotify.com/v1/artists/https%3A%2F%2Fopen.spotify.com%2Ftrack%2F3kml9ZdpT7UYk1ugkjqOzt%3Fsi%3DrWqsmCq6S8CdjKjKzzHZ5g/top-tracks?market=US";
// const token = "Bearer BQDLMtK9uRVLnZPkRUbx_EqiwnNqWu06TUJjl6ejcTuHQhY7eI3FHpYTXVFvIXPeI9oTcbd8McxShWNBloloyc0EnaMO1VR9NBJBD7vzdwa_M3CNbKG8dzpbZDmoEVCSz-_mx-a0FrKrSHUbWj6fqfA-5EZrZ6A";

// const parametros = {
//     method: "GET",
//     headers: { "Authorization": token }
// }

// fetch(url,parametros)
//     .then(respuesta =>respuesta.json())
//     .then(datos     =>console.depurarDatos(datos));     

// function depurarDatos(datos){
  
//     console.log(datos);
//     console.log(datos.tracks);
//     console.log(datos.tracks[0]);
//     console.log(datos.tracks[0].preview_url);
//     console.log(datos.tracks[0].name);
    

// }


