function getBackgroundAndChampNameFromAPI(){
    var requisicao = new Request("https://awesome-api.vercel.app/api/lol")
    fetch(requisicao).then(resposta => resposta.json()).then(json =>{
        var url = json.img;
        var name = json.name;
        document.getElementById('html').style.backgroundImage= "url(" + url +')';
        document.getElementById('html').style.backgroundSize='cover';
        document.getElementById('html').style.backgroundPosition= 'center';
        document.getElementById('ChampTitle').innerHTML = name;
    
    })
}
getBackgroundAndChampNameFromAPI();