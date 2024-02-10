const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("list"); 

// figure out the code you're missing
//Tried using this for help: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_addeventlistener2

//went to professors for assistance because previous code didn't work after 2 days before finding out I didn't connect it properly. I connected it the way I think I'm supposed to now, but it still dosen't work.

button.addEventListener('click', function() { 
    const value = input.value;
    if (input.value == "")
    {   
        alert("Please Enter Something")
    }

    const li = document.createElement('li');
    li.innerHTML = value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌'
    li.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    list.appendChild(li);
    input.focus();
    input.value='';

})




