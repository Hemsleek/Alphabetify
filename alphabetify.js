 /* selectors */
 const alphabetEls = document.querySelectorAll("span");

 /*utility functions*/

 const playSound = (e) => {
     let key;
     if (e.type == 'click') key = e.target.innerText.toLowerCase();
     if (e.type == "keydown") key = e.key.toLowerCase();

     if (!key) return;

     const audioEl = document.querySelector(`audio[data-key='${key}']`)

     if (!audioEl) return

     const alphabet = Array.from(document.querySelectorAll("span")).filter(a => a.innerText.toLowerCase() == `${key}`)[0];

     alphabet.classList.add("active")

     audioEl.currentTime = 0;
     audioEl.play();

     //  setTimeout(() => {

     //      alphabet.classList.remove('active');

     //  }, 1000)


 }


 /* triggers and event listeners*/

 alphabetEls.forEach(alphabet => {
     alphabet.addEventListener('transitionend', e => {
         if (!e.propertyName === "transform") return;
         if (!e.target.innerText) return;

         alphabet.classList.remove("active")
     })
     alphabet.addEventListener('click', playSound)

 })

 window.addEventListener("keydown", playSound);