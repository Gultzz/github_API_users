window.onload = piscar;
addEventListener('keyup',(event)=>{
    var key = event.which || event.keyCode;
    if(key == 13){
        pesquisar();
    }
});
async function pesquisar(){
    var valor = document.getElementById("input").value;
    var url = await `https://api.github.com/users/${valor.trim()}`;
    console.log(url);
    // var link = fetch(url).then(response => console.log(response.json()));
    var link =  await fetch(url).then(response => response.json()).then(link);
    
    var img = document.querySelector('.img');
    img.src = link.avatar_url;

    var name = document.querySelector('.name');
    name.innerHTML = link.login;
    

    var bio = document.querySelector('.bio');
    bio.innerHTML = "Biografia: "+link.bio;
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
    if(img.src == undefined || img.src == "undefined"){
        img.src = 'image/user.jpg';
        name.innerHTML = "Invalid user";
        bio.innerHTML = "Enter a valid user so you can see information about them";
        repos.innerHTML = "Repositories: " + 0;
        fol.innerHTML = "Followers: " + 0;
        linkUser.innerHTML = "https://github.com/InvalidUser";
        linkUser.href = "https://github.com/InvalidUser";
        }
}

function piscar(){
    setTimeout(()=>{
        var inputs = document.getElementById("input");
        if(inputs.placeholder == "Github username_"){
            inputs.placeholder = "Github username";
        }else{
            inputs.placeholder = "Github username_";
        }
        piscar();
    },500);
}