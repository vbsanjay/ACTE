const btn = document.querySelector("#event");

btn.onclick = function(){
    console.log("You clicked me")
    console.log("I hope it worked")
}
function hover()
{
    console.log("Stop touching me")
    console.log("do not hover please")
}

btn.onmouseenter = hover;

const btn2 = document.querySelector('#event2');
btn2.addEventListener('dblclick', function () {
    alert("clicked! Thank you");
})
