const planet = document.querySelector('#select')
const image_registration = document.querySelector('#planet-image')

console.log(planet)

planet.addEventListener('change', function(){
    if(this.value==="mercury"){
        image_registration.src = "./Assets/premium-icon-mercury-2739612.png"
    } 
    else if(this.value==="uranus"){
        image_registration.src = "./Assets/free-icon-uranus-3594083.png"
    }
    else if(this.value==="earth"){
        image_registration.src = "./Assets/3594282.png"
    }
    else if(this.value==="mars"){
        image_registration.src = "./Assets/premium-icon-venus-3594270.png"
    }
    else if(this.value==="venera"){
        image_registration.src = "./Assets/premium-icon-moon-3594160.png"
    }
    else if(this.value==="neptune"){
        image_registration.src = "./Assets/free-icon-neptune-3594089.png"
    }

})