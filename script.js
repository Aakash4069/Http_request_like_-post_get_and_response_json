

let form =document.getElementById('form')

form.addEventListener('submit',function(e){
    e.preventDefault();//  to pravent from auto submition 
     
    let name =document.getElementById('name').value;
    let body =document.getElementById('body').value;
    // let id=document.getElementById('id').value;
    
    //fetch post request
    fetch("https://jsonplaceholder.typicode.com/posts",{

        method:'Post',
        body:JSON.stringify({
            titile:name,
            body:body,
            id:id
        }),
        headers:{
            "Content-Type":"application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
        
})

// module.export()