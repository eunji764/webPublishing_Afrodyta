const menuBtn = document.querySelector('header .material-icons')
const menu = document.querySelector('header ul')

menuBtn.addEventListener('click', ()=>{
  const show = menu.style.display
  if (show === 'block') {
    menu.style.display = 'none'
  } else {
    menu.style.display = 'block'
  } 
})
