addEventListener('keyup',(event)=>{
    var key = event.which || event.keyCode;
    if(key == 13){
        pesquisar();
    }
});
async function pesquisar(){
    var valor = document.getElementById("input").value;
    var url = await `https://api.github.com/users/${valor}`;
    // var link = fetch(url).then(response => console.log(response.json()));
    var link =  await fetch(url).then(response => response.json()).then(link);
    

    var img = document.querySelector('.img');
    img.src = link.avatar_url;

    var name = document.querySelector('.name');
    name.innerHTML = link.login;

    var bio = document.querySelector('.bio');
    bio.innerHTML = link.bio;
    if(bio.innerHTML == ""){
        bio.innerHTML = "There's nothing written in " + link.login + "'s biography";
    }

    var repos = document.querySelector('.repos');
    repos.innerHTML = "Repositories: " + link.public_repos;

    var fol = document.querySelector('.follows');
    fol.innerHTML = "Followers: " + link.followers;

    var linkUser = document.getElementById('link');
    var apareceL = `https://github.com/${link.login}`;
    linkUser.innerText = apareceL.toLowerCase();
    linkUser.href = apareceL;
    linkUser.target = "_blank";
}