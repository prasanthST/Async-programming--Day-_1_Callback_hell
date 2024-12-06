const display = document.createElement("div")
display.setAttribute('id', 'display')
// console.log(display);
document.body.appendChild(display)

const heading = document.createElement('h1')
heading.setAttribute('id' , 'count')
display.appendChild(heading)

let element = document.querySelector("h1")
setTimeout(()=>{
    element.innerText="10";
    setTimeout(()=>{
        element.innerText="9"
        setTimeout(()=>{
            element.innerText="8"
            setTimeout(()=>{
                element.innerText="7"
                setTimeout(()=>{
                    element.innerText="6"
                    setTimeout(()=>{
                        element.innerText="5"
                        setTimeout(()=>{
                            element.innerText="4"
                            setTimeout(()=>{
                                element.innerText="3"
                                setTimeout(()=>{
                                    element.innerText="2"
                                    setTimeout(()=>{
                                        element.innerText="1"
                                        setTimeout(()=>{
                                            element.innerText="Happy New Year "
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
heading.appendChild(element)