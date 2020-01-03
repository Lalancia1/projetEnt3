var catEl = document.getElementById("cat");
var catL=0;
var startTime = new Date().getTime();
var walkTheCat = function() {
    catL=catL+5;
    if(catL>500){
        catL=0;
    }
    catEl.style.left=catL+"px";
    //var currTime = new Date().getTime();
   // var secondsElapsed = ((currTime - startTime)/1000);
    requestAnimationFrame(function()
    {
        walkTheCat();
    });

};

walkTheCat();