console.log("DEEPANSHU")
const container=document.querySelector("#container");
for (let i = 0; i < 256; i++) {
    const box=document.createElement('div');
    box.classList.add('boxes');
    container.appendChild(box)

    box.addEventListener('mouseover',()=>{
        box.style.backgroundColor="red"

    }
    )
}