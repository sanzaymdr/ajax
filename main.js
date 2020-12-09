// //ajax get method

document.getElementById('button').addEventListener('click', data=> 
        {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'user.json', true);
            console.log(xhr)

            xhr.onreadystatechange = function(){
                if(this.readyState== 4 && this.status == 200){
                    console.log(this.responseText)
                    var user = JSON.stringify(this.responseText);
                    const obb = this.responseText;

                    document.getElementById('message').innerHTML = JSON.parse(obb);
                }else if(this.status == 404){
                    document.getElementById('message').innerHTML = 'not found'

                    console.log("not found")
                }
            }
            xhr.send()
        })