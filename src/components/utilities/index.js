
export const cartVoice = (msg) =>{
    //let msg = 'Item added to cart.';
    let speech = new SpeechSynthesisUtterance();

    speech.lang = 'en-US';
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

/* Display the loading preset and add a classname to make it blink */
export const addAnimaClass = ()=> {
    return new Promise((resolve, reject) => {
      let wait = setTimeout(() => {
         document.getElementById('shoppingcart').classList.add('animate');
        clearTimeout(wait);
        resolve('Adding animation');
      }, 300);
    });
  }
  
  /* Display the loading preset and add a classname to make it blink */
export const removeAnimaClass = (cartState)=> {
      return new Promise((resolve, reject) => {
      let wait = setTimeout(() => {
          document.getElementById('shoppingcart').classList.remove('animate');
          clearTimeout(wait);
          resolve('Removing animation');
      }, 300);
      });
  }