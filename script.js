var button=document.getElementById("myBtn");
button.addEventListener("click",buttonclick);

function buttonclick(){
    
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => document.getElementById("myImg").src = data.message);
        // .catch(err => console.error("error"));
}

