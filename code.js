let button = document.getElementById('submit_button')
let userInfo = []

button.addEventListener('click', function(event) {
    event.preventDefault()
   document.body.append('Welcome!')
})

fetch ('https://frontend-take-home.fetchrewards.com/form')
  .then((response) => response.json())
  .then(data => {
      console.log(data); 
      userInfo = data 
  }) 