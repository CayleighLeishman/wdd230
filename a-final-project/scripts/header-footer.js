///TO DO: FIX
// Date Stuff
let datespan=document.querySelector('#currentYear')
datespan.innertext = new Date().getFullYear()

// sets the last modified date
let lastModifiedParagraph = document.getElementById('#lastModified')
lastModifiedParagraph.innerHTML =`Last Modified: ${document.lastModified}`

