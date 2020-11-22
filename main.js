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


    document.getElementById('menu').style.setProperty('display', 'block');


}


function changeBackgroundType(){

    var backtype = document.getElementById("backtype").value;
    
    if(backtype === "repeat"){
  
        document.getElementById('html').style.backgroundSize='auto';

        
    }

    if(backtype === "cover"){
        
        document.getElementById('html').style.backgroundSize='cover';

        
    }

    if(backtype === "diagonal"){

        
        document.getElementById('html').style.backgroundSize='auto';
        
        
    }


}