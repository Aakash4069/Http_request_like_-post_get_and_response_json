

let form =document.getElementById('form')

form.addEventListener('submit',function(e){
    e.preventDefault();//  to pravent from auto submition 
     
    let name =document.getElementById('name');
    let body =document.getElementById('body');
    let id=document.getElementById('id');
    
    //fetch post request
    fetch("https://jsonplaceholder.typicode.com/posts");


})

module.export()