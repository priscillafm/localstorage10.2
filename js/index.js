document.getElementById('buttonText').addEventListener('click', function() {
   
   // valor del input
    const inputValue = document.getElementById('inputText').value;

    //guardar el valor en localStorage
    localStorage.setItem('storeVal', inputValue);

    //limpia el texto despues de guardar 
    document.getElementById('inputText').value = ''; 
});