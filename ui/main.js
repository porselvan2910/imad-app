//Counter code
var button = document.getElementById('count');

button.onclick = function () {
    
  //create a request object
  var request = new XMLHttpRequest();
  
  //capture the response and store it in a variable
  request.onreadychange = function (){
    
    if (request.readyState === XMLHttpRequest.DONE) {
        // take some action
        if (request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('counter');
             span.innerHTML = counter.toString();
        }
    } 
    //not done yet
  };
  // make a request
   request.open('GET','http://porselvan2910.imad.hasura-app.io/counter',true);
   request.send(null);
 
};