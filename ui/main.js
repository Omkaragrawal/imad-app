console.log('Loaded!');

var submit = document.getElementById('submit');
submit.onclick = function() {
    var request = new XHLHttpRequest();
    request.onreadystateChange = function() {
        if(request.readyState === XHLHttpRequest.done) {
           if(request.statues === 200) {
               console.log('USER logged in.');
               alert('Log-in Successful.');
           } 
        }
    };
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://omkar3654.imad.hasura-app.io/login');
    request.send(JSON.stringify({username: username, password: password}));
};