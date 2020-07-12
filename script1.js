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