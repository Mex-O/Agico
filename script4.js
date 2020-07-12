/*form validation */
                function validate(){
            var email=document.getElementById('email').value;
            var name=document.getElementById('name').value;
            var subject=document.getElementById('subject').value;
            var error1=document.getElementById('error1');
            var error2=document.getElementById('error2');
            var error3=document.getElementById('error3');
            if(email==""){
                error1.innerHTML="*Pls fill in Your Email.";
            }
            if(name<1){
            error2.innerHTML="*Pls fill in Your Name.";
            }
            if(subject<1){
                error3.innerHTML="*Pls tell us how we can help you."
            }
            else{
                window.open('mailto:aderibigbeoluwaseun4@gmail.com');
            }
            return false;
                }
   