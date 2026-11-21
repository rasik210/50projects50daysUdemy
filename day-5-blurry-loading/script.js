var intervalId;
var filter =  100;
var progress = 0;
var img = document.getElementsByTagName('img');
var span = document.getElementsByTagName('span');

function load(){
    intervalId = setInterval(updateFiter, 50);
}

function updateFiter(){
    img[0].style.filter = "blur(" + filter + "px)";
    filter -= 1;
    span[0].innerText = progress + "%";
    progress++;
    if (filter < 0) {
        clearInterval(intervalId);
        span[0].style.visibility = 'hidden';
    }
}