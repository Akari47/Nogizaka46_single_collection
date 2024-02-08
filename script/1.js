const images = document.querySelectorAll("img")
images.forEach(image => {image.draggable = false})

const popup_window = document.getElementById("popup")
const popup_text_div = document.getElementById("popup_text")

const spotify_url = [
    {"id": 1, "url": "https://open.spotify.com/embed/track/3oay79erf6O3Lk0Cy5aulc?utm_source=generator"},
    {"id": 2, "url": "https://open.spotify.com/embed/track/6mRTYXkcl9kHL01Wr7zDEB?utm_source=generator"},
    {"id": 3, "url": "https://open.spotify.com/embed/track/7ozdvdj2ap3UzD9LiqfH0l?utm_source=generator"},
    {"id": 4, "url": "https://open.spotify.com/embed/track/3PoPbz3Wfb5H1gsRbXQNit?utm_source=generator"},
    {"id": 5, "url": "https://open.spotify.com/embed/track/122N8LpRgJtKUB6sIvlMGh?utm_source=generator"},
    {"id": 6, "url": "https://open.spotify.com/embed/track/6fZnP5rYZ4vH2ZIz8wmY3V?utm_source=generator"},
    {"id": 7, "url": "https://open.spotify.com/embed/track/4aiDRWmTvD1asnIqV9I6th?utm_source=generator"},
    {"id": 8, "url": "https://open.spotify.com/embed/track/6jCQMZ1WN7y68Lk7jrBfaG?utm_source=generator"},
    {"id": 9, "url": "https://open.spotify.com/embed/track/6NjkooYrGVWAHH5omloIeS?utm_source=generator"},
    {"id": 10, "url": "https://open.spotify.com/embed/track/5BHSWjy2EUK0hyif8LvTgt?utm_source=generator"},
    {"id": 11, "url": "https://open.spotify.com/embed/track/6fbejDfWfVHnXW0tUQuO1O?utm_source=generator"},
    {"id": 12, "url": "https://open.spotify.com/embed/track/5eDvZAip7hyk4zfCx9VgdU?utm_source=generator"},
    {"id": 13, "url": "https://open.spotify.com/embed/track/4nAq6sLQ7ZzYzreDCj2cFj?utm_source=generator"},
    {"id": 14, "url": "https://open.spotify.com/embed/track/7hq4OgiBuMUAmg8mhQu2cz?utm_source=generator"},
    {"id": 15, "url": "https://open.spotify.com/embed/track/288SNOHYZizb3jZ6U6DByY?utm_source=generator"},
    {"id": 16, "url": "https://open.spotify.com/embed/track/0lU7b9JpuI9RMVqqcJc5kd?utm_source=generator"},
    {"id": 17, "url": "https://open.spotify.com/embed/track/0PHEwJbhs3wte1vCsBI4LF?utm_source=generator"},
    {"id": 18, "url": "https://open.spotify.com/embed/track/4BUOpUEPoIBZpq7YauH6Bs?utm_source=generator"},
    {"id": 19, "url": "https://open.spotify.com/embed/track/0kUjyLfXDaKZedEAruiqAw?utm_source=generator"},
    {"id": 20, "url": "https://open.spotify.com/embed/track/3cZwlMEtYsc2c3d6ABFyOz?utm_source=generator"},
    {"id": 21, "url": "https://open.spotify.com/embed/track/3Tt2l5PZQMonMesad0GDu3?utm_source=generator"},
    {"id": 22, "url": "https://open.spotify.com/embed/track/4RWJxm0Vn83uE0TIhwnABv?utm_source=generator"},
    {"id": 23, "url": "https://open.spotify.com/embed/track/3sdIljU1Gej1Wry4dhqhEF?utm_source=generator"},
    {"id": 24, "url": "https://open.spotify.com/embed/track/6fLq9e3IPdHUwIeSR49n5e?utm_source=generator"},
    {"id": 25, "url": "https://open.spotify.com/embed/track/52SybEH2oGMMrvnoLBFCCf?utm_source=generator"},
    {"id": 26, "url": "https://open.spotify.com/embed/track/7z6wfRDM09uY5x5HUoqSjV?utm_source=generator"},
    {"id": 27, "url": "https://open.spotify.com/embed/track/0oJNx56svbarYB6AznuWHM?utm_source=generator"},
    {"id": 28, "url": "https://open.spotify.com/embed/track/2ddPABR2Qfj7lq9v6QVTVn?utm_source=generator"},
    {"id": 29, "url": "https://open.spotify.com/embed/track/4pfJEUjNi65LLQcEBHaWAz?utm_source=generator"},
    {"id": 30, "url": "https://open.spotify.com/embed/track/6f1LJZaDkuzZoG2Ivb3HXQ?utm_source=generator"},
    {"id": 31, "url": "https://open.spotify.com/embed/track/1lZyM0j1iFa4vB9xSkpjur?utm_source=generator"},
    {"id": 32, "url": "https://open.spotify.com/embed/track/3W1KL5dUISmtye75QhNohl?utm_source=generator"},
    {"id": 33, "url": "https://open.spotify.com/embed/track/2JAwscGWJvCSK0HnES066Z?utm_source=generator"},
    {"id": 34, "url": "https://open.spotify.com/embed/track/66jdKha03fC7OMdkGyQHDM?utm_source=generator"}
];

let popup_now
function popup_data(single){
    popup_now = single
    const Url = spotify_url[single-1].url
    const iframe = document.createElement('iframe')
    iframe.style.borderRadius = '12px'
    iframe.src = Url
    iframe.width = '100%'
    iframe.height = '500'
    iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
    iframe.loading = 'lazy'
    popup_text_div.appendChild(iframe)
}
let popup_status = false
function popup_appear(single){
    if (popup_status == false){
        popup_window.style.display ="inline-block"
        popup_data(single)
    }
    else if(popup_now != single){
        popup_disappear()
        popup_window.style.display ="inline-block"
        popup_data(single)
    }
    popup_status = true
}

function popup_disappear(){
    popup_window.style.display ="none"
    popup_text_div.innerHTML =''
    popup_status = false
}