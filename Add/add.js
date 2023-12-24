let save = document.querySelector('#save');
let imgInp = document.querySelector('#image');
let nameInp = document.querySelector('#name');
let descInp = document.querySelector('#desc');
let btmText = document.querySelector('#btmtext')


save.addEventListener("click", (event) => {
    event.preventDefault();
    let obj = {};
    let src = imgInp.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        obj = {
            image: e.target.result,
            name: nameInp.value,
            description: descInp.value,
            bottomtext: btmText.value
        }
        axios.post(`http://localhost:3000/solutions`, obj)
            .then(res => {
                console.log(res.data);
                window.location = '../index.html'
            })
    }
    reader.readAsDataURL(src);
})