let id = new URLSearchParams(window.location.search).get("id");
let details = document.querySelector("#s2boxes");

fetch(`http://localhost:3000/solutions/${id}`)
.then(res=>res.json())
.then(data=>{

    
        details.innerHTML+=
        ` <div class="box1">
        <div class="img">
        <img src="${data.image}" alt=""><br>
        <input type="file" placeholder="Enter your image" id="img">
        </div>
        <h1>${data.name}</h1>
        Name :<input type="text" value="${data.name}" id="name">
        <p>${data.description}</p>
        Description: <input type="text" value="${data.description}" id="description">
        <p>${data.bottomtext}</p>
        Text : <input type="text" value="${data.bottomtext}" id="btmtext"> 
        <button id="save">Save</button>
    </div> 
           
    </div>  `
    let fileInp = document.querySelector('#img');
    let saveButton = document.querySelector('#save');

    let obj = {};

 
    fileInp.addEventListener("input", (e)=>{
        let file = e.target.files[0]
        if(file){
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = ()=>{
                obj.image = reader.result
            }
        }
    })

    saveButton.addEventListener('click', () => {

        const nameinput = document.querySelector('#name');
        const description = document.querySelector('#description');
        const bottomtext = document.querySelector('#btmtext')

        obj.name= nameinput.value;
        obj.description = description.value;
        obj.bottomtext = bottomtext.value;

        if(!(nameinput.value && description.value && img.files[0] && bottomtext.value)){
            alert("Bos buraxmaq olmaz")
        }else{
            
        fetch('http://localhost:3000/solutions/'+id,
            {
                method: "PATCH",

                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj), // body data type must match "Content-Type" header
            })
            .then(res => res.json())
            .then(data => console.log(data))
            window.location="../index.html"
    }}

    )
    })