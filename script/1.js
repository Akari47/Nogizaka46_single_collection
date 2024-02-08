const images = document.querySelectorAll("img")
images.forEach(image => {image.draggable = false})

const n_single = 34
for (let i = 1; i < n_single + 1; i++){
    const frame_id = 'f' + i
    const frame_div = document.getElementById(frame_id)
    frame_div.setAttribute('name', 'frame' + i)
}

const popup_window = document.getElementById("popup")
const popup_text_div = document.getElementById("popup_text")

function popup_data(single){
    popup_text_div.innerHTML ='This is the ' + single + ' single'
}

function popup_appear(single){
    popup_window.style.display ="inline-block"
    popup_data(single)
}

function popup_disappear(){
    popup_window.style.display ="none"
    popup_text_div.innerHTML =''
}