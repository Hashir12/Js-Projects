const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(( (button)=> {
    button.addEventListener('click', (e) => {
       color = e.target.id
        switch (color) {
            case 'grey':
              body.style.background = 'grey';
              break;
            case 'white':
              body.style.background = 'white';
              break;
            case 'blue':
              body.style.background = 'blue';
              break;
            case 'yellow':
              body.style.background = 'yellow';
              break;
            default:
              console.warn(`No color mapping found for ID: ${color}`);
          }
    })
}))