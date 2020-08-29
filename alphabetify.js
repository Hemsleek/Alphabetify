 /* selectors */

 /* triggers and event listeners*/
 const alphabetEl = document.querySelectorAll("span");
 alphabetEl.forEach(alphabet => {
     alphabet.addEventListener('click', e => {
         let key = e.target.innerText.toLowerCase();
         console.log(key);

         const audioEl = document.querySelector(`audio[data-key='${key}']`)
         if (!audioEl) return
         audioEl.currentTime = 0;
         audioEl.play();
     })
 })


 window.addEventListener("keydown", e => {
     let key = e.key.toLowerCase();
     const audioEl = document.querySelector(`audio[data-key='${key}']`)

     if (!audioEl) return
     audioEl.currentTime = 0;
     audioEl.play();
     //  }




 });