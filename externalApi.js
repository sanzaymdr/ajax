

//to print first 50 users from github api

document.getElementById('button').addEventListener('click',userData =>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);
    alert('wait api is fetching the data')

    xhr.onload = () => {
        if(xhr.status ==200){
            var user = JSON.parse(xhr.responseText);
            output = '';
            for(var i in user){
                output += 'ID: ' + user[i].id +'<br>'+'Name: '+ user[i].login+'<br><hr>';
            }
            document.getElementById('data').innerHTML = output;

        }
    }
    xhr.send();
})
// print git users with images 
document.getElementById('buttonOne').addEventListener('click',imageData=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.github.com/users' , true);

    xhr.onload = () => {
        if(xhr.status == 200){
            var data = JSON.parse(xhr.responseText);
            imageOutput = '';
            for(var i in data ){      
                imageOutput += 
                    '<img src="'+data[i].avatar_url+'" height="70px" width="70px">'+
                    '<ul>'
                    '<li>ID:'+data[i].id+'</li>'
                    '<li>Username:'+data[i].login+'</li>'
                    '</ul>';
            }
            console.log(data)
            document.getElementById('data').innerHTML = imageOutput;
        }
    }

    xhr.send();
})