const textBox = document.getElementById("textBoxId")
const form = document.getElementById("form")
const apiKey = "58b5086ad0c24393a8ed607ecb348aef"
let jsonStored

form.addEventListener("submit",(event) => {
    event.preventDefault()
    const query = textBox.value
    const endPoint = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=1`
    fetch(endPoint)
        .then(res => res.json())
        .then(data => {
            imgFood.src = data.results[0].image
            document.querySelector('#recipeName').innerHTML = data.results[0].title
            const id = data.results[0].id
            fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
                .then(response => response.json())
                .then(data2 => document.getElementById("food").insertAdjacentHTML('beforeend',data2.instructions))
                // .then(data2 => console.log(data2.instructions))
        })


    document.getElementById('searchBarDiv').style.display='none'
    // document.getElementById('searchBarDiv').style.display='block'
})



