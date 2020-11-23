var url;

function getBackgroundAndChampNameFromAPI(){
    var requisicao = new Request("https://awesome-api.vercel.app/api/lol")
    fetch(requisicao).then(resposta => resposta.json()).then(json =>{
        url = json.img;
        var name = json.name;
        document.getElementById('html').style.backgroundImage= "url(" + url +')';
        document.getElementById('html').style.backgroundSize='cover';
        document.getElementById('html').style.backgroundPosition= 'center';
        document.getElementById('ChampTitle').innerHTML = name;
    
    })
}
getBackgroundAndChampNameFromAPI();

    
function OpenMenu(){


    var display = document.getElementById('menu').style.display;

    if(display === "none"){

        document.getElementById('menu').style.setProperty('display', 'block');

    }else{

        document.getElementById('menu').style.setProperty('display', 'none');


    }


}


function changeBackgroundType(){

    var backtype = document.getElementById("backtype").value;
    
    if(backtype === "repeat"){
  
        document.getElementById('html').style.backgroundSize='auto';

        
    }

    if(backtype === "cover"){
        
        document.getElementById('html').style.backgroundSize='cover';

        
    }

   


}

function changeAPI(){


    var API = document.getElementById("APItype").value;

    if(API === "lol"){

    var requisicao = new Request("https://awesome-api.vercel.app/api/lol")
    fetch(requisicao).then(resposta => resposta.json()).then(json =>{
        url = json.img;
        var name = json.name;
        document.getElementById('html').style.backgroundImage= "url(" + url +')';
        document.getElementById('html').style.backgroundPosition= 'center';
        document.getElementById('ChampTitle').innerHTML = name;
    
    })


    }else if(API === "museum"){

        var requisicao = new Request("https://awesome-api.vercel.app/api/art")
        fetch(requisicao).then(resposta => resposta.json()).then(json =>{
            url = json.img;
            var name = json.title;
            document.getElementById('html').style.backgroundImage= "url(" + url +')';
            document.getElementById('html').style.backgroundPosition= 'center';
            document.getElementById('ChampTitle').innerHTML = name;
        
        })        


    }else if(API === "rickmorty"){

        var requisicao = new Request("https://awesome-api.vercel.app/api/rick-and-morty")
        fetch(requisicao).then(resposta => resposta.json()).then(json =>{
            url = json.img;
            var name = json.title;
            document.getElementById('html').style.backgroundImage= "url(" + url +')';
            document.getElementById('html').style.backgroundPosition= 'center';
            document.getElementById('ChampTitle').innerHTML = name;
        
        })        


    }else if(API === "finalspace"){

        var requisicao = new Request("https://awesome-api.vercel.app/api/final-space")
        fetch(requisicao).then(resposta => resposta.json()).then(json =>{
            url = json.img;
            var name = json.title;
            document.getElementById('html').style.backgroundImage= "url(" + url +')';
            document.getElementById('html').style.backgroundPosition= 'center';
            document.getElementById('ChampTitle').innerHTML = name;
        
        })        


    }else if(API === "dota"){

        var requisicao = new Request("https://awesome-api.vercel.app/api/dota")
        fetch(requisicao).then(resposta => resposta.json()).then(json =>{
            url = json.img;
            var name = json.name;
            document.getElementById('html').style.backgroundImage= "url(" + url +')';
            document.getElementById('html').style.backgroundPosition= 'center';
            document.getElementById('ChampTitle').innerHTML = name;
        
        })        


    }else if(API === "pokemon"){

        var requisicao = new Request("https://awesome-api.vercel.app/api/pokemon")
        fetch(requisicao).then(resposta => resposta.json()).then(json =>{
            url = json.img;
            var name = json.name;
            document.getElementById('html').style.backgroundImage= "url(" + url +')';
            document.getElementById('html').style.backgroundPosition= 'center';
            document.getElementById('ChampTitle').innerHTML = name;
        
        })        


    }
    
    



}