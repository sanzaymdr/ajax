

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
