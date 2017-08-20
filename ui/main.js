console.log('Loaded!');

var submit = document.getElementById('submit');
submit.onclick = function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    var request = new XMLHttpRequest();
    request.onreadystateChange = function() {
        if(request.readyState === XHLHttpRequest.done) {
           if(request.status == 200) {
               console.log('USER logged in.');
               alert('Log-in Successful.');
           } else if(request.status == 403) {
                   alert('Incorrect password/username');
               } else if(request.status == 500) {
                   alert('SERVER ERROR'); 
               }
           }
        }

    request.open('POST', 'http://omkar3654.imad.hasura-app.io/login');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
};