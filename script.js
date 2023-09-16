function bubblestart(){
    clutter = "" ;
    for (var i = 1 ; i <=133 ; i++){
        var  random = Math.floor(Math.random()*10)
        clutter += ` <div class="bubble">${random}</div>`
    }
    document.querySelector("#panel2").innerHTML = clutter ;
}
bubblestart();
