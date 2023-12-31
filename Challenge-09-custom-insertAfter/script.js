// this code is of my own for the challenge

function insertAfter(newEl, existingEl) {
   console.log(existingEl.parentElement)
   existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling)
}


const li = document.createElement('li')
li.textContent = 'Daddy Chill'

const elPlacement = document.querySelector('li:last-child')

insertAfter(li, elPlacement)

