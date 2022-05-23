const input = document.querySelector('.input')
const addNote = document.querySelector('.submit')
const items = document.querySelector('.items')
const modal = document.querySelector('.modal')
const note = document.querySelector('.note')


addNote.addEventListener('submit',add)





for (var i = 1; i <0;) {
    console.log(i);
}
function add(e){
    e.preventDefault();
    const newItems = document.createElement('li')
    items.appendChild(newItems)
    

     const newDiv = document.createElement('div');
     newDiv.className = 'first-note';
     newItems.appendChild(newDiv)
     const h4 = document.createElement('h4')
     newDiv.appendChild(h4)
     h4.innerHTML = `Note ${i++}`
     const h5 = document.createElement('h5')
     newDiv.appendChild(h5)
     

     h5.innerText = (input).value
      
     const button = document.createElement('button')
     newDiv.appendChild(button)

     note.innerHTML = (input).value
     
     
     button.innerText = 'View Details'
     button.classList = 'btn'
     const openModal = document.querySelector('.btn')
        openModal.addEventListener('click',open)
        function open(){
            modal.style.display ='block'
        
          const closeModal = document.querySelector('.modal-close')
          closeModal.addEventListener('click',close)
          function close(){
            modal.style.display = 'none'
            
         }
          window.addEventListener('click',clickOutside)
          function clickOutside(e){
            if(e.target == modal){
                modal.style.display = 'none'
            }
           }
        }
   
        
         
}

