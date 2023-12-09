
// ! //////////////////////////////////////////////////////// ! \\


let input = document.getElementById("display");
let buttonvalues = document.querySelectorAll('.batn');
let equalbtn = document.querySelector('.batn-equal');
let clearbtn = document.querySelector('.batn-clear');
let deletebtn = document.querySelector('.batn-delete');


// ! button js

buttonvalues.forEach(function(button){
   button.addEventListener('click',function(){
    let number = button.innerText;
    input.value += number;
    input.scrollLeft = input.scrollWidth;
   });
});




        // !  equal button js
    
        equalbtn.addEventListener('click',function(){
            
                let answer = eval(input.value);
                input.value = answer;
            
            
        });

     


// !   Del btn js

deletebtn.addEventListener('click', function() {
    let userinput = input.value;
    userinput = userinput.slice(0, -1);
    input.value = userinput;
});


// ! Clear btn js

clearbtn.addEventListener('click',function(){
    input.value = ""
});



