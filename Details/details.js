let id = new URLSearchParams(window.location.search).get("id");
let s2boxes = document.querySelector("#s2boxes")
fetch(`http://localhost:3000/solutions/${id}`)
.then(res=>res.json())
.then(data=>{

    
        s2boxes.innerHTML+=
        ` <div class="box1">
        <div class="icon"><img src="${data.image}"></div>
        <h4>${data.name}</h4>
        <h1>${data.description}</h1>
        <p>${data.bottomtext}</p>
        
    </div>  `
    })