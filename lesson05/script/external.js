// typed code but copied most from assingment.


const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list'); 

// figure out the code you're missing
//Tried using this for help: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_addeventlistener2

button.addEventListener('click', function() { 
    document.getElementById("#favchapt")
    input.favchapt; 
})

if (input.value != '')
{   
    document.getElementById("Please input something")
}

const li = document.createElement('li');

const deleteButton =document.createElement('button');

li.textContent = input.value;

// coppied the X from assingment
deleteButton.textContent = '❌'

li.append(deleteButton);

list.append(li);

deleteButton.addEventListener('click', function() {
    this.isContentEditable.removeChild(li);
    input.focus();
});

input.focus();

input.value = '';



