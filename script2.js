/*Counter*/

function animateValue(obj, start = 0, end = null, duration = 6000) {
    if (obj) {

        var textStarting = obj.innerHTML;

        end = end || parseInt(textStarting.replace(/\D/g, ""));

        var range = end - start;

        var minTimer = 100;

        var stepTime = Math.abs(Math.floor(duration / range));

        stepTime = Math.max(stepTime, minTimer);

        var startTime = new Date().getTime();
        var endTime = startTime + duration;
        var timer;

        function run() {
            var now = new Date().getTime();
            var remaining = Math.max((endTime - now) / duration, -0);
            var value = Math.round(end - (remaining * range));
            // replace numeric digits only in the original string
            obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
            if (value == end) {
                clearInterval(timer);
            }
        }

        timer = setInterval(run, stepTime);
        run();
    }
}

animateValue(document.getElementById('counter-box'));
animateValue(document.getElementById('counter-box2'));
animateValue(document.getElementById('counter-box3'));
animateValue(document.getElementById('counter-box4'));







/*hover*/



var cap=document.getElementById('cap');
var img=document.getElementById('img');
img.addEventListener('mousemove', function(){
cap.style.display="block";
cap.style.transitionDelay="2s";
});
img.addEventListener('mouseleave', function(){
cap.style.display="none";
});
var cap2=document.getElementById('cap2');
var img2=document.getElementById('img2');
img2.addEventListener('mousemove', function(){
cap2.style.display="block";
cap2.style.transitionDelay="2s";
});
img2.addEventListener('mouseleave', function(){
cap2.style.display="none";
});
var cap3=document.getElementById('cap3');
var img3=document.getElementById('img3');
img3.addEventListener('mousemove', function(){
cap3.style.display="block";
cap3.style.transitionDelay="2s";
});
img3.addEventListener('mouseleave', function(){
cap3.style.display="none";
})