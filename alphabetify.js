 /* selectors */
 window.addEventListener("keydown", e => {
     let key = e.key.toLowerCase();
     const audioEl = document.querySelector(`audio[data-key='${key}']`)
     console.log(document.querySelector(`audio[data-key='${key}']`))
     if (!audioEl) return
     audioEl.currentTime = 0;
     audioEl.play();
     //  console.log(audioEl)

     // document.querySelector('audio[src = "sounds/letters_sounds.mp3"]').play();


 });