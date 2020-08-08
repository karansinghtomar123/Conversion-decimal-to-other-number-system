(function(){
//select options

const services=[
{
value:1,
title:'Binary Number'
},
{
    value:2,
    title:'octal Number'
},
{
        value:3,
        title:'Hexadecimal Number'
}
]
//add select options for the select element

services.forEach(function(service){
const option=document.createElement("option");  //created a element
option.textContent=service.title;  //whatever the value we want to print 
option.value=service.value; //stores the value of services

document.getElementById("input-service").appendChild(option);
});

//input all the values

const num=document.getElementById("InputNum");

const service=document.getElementById("input-service");
 
//customers feedback

const feedback=document.querySelector(".feedback");//gets the input of the feedback class
const loader=document.querySelector(".loader");//for the loading image
const results=document.querySelector(".results");

//submit form

form.addEventListener("submit",function(event){
    event.preventDefault();  //it just prevents the null value
let number=num.value;
console.log(number);
let quality=service.value;

if(number==='' || number<='0' ||quality==='0'){
    feedback.classList.add('showItem','alert-danger');  
    feedback.innerHTML= '<p>please check the Inputs</p>'+
    '<p>Number cannot be less than zero</p>'+
    '<p>Options has to be selected</p>';
    //
    setTimeout(function() {
        feedback.classList.remove("showItem","alert-danger");
    },10000);
}
else{
    feedback.classList.add('showItem','alert-success');
    feedback.innerHTML='<p>calculating.....';
    loader.classList.add('showItem');
    setTimeout(function(){
        loader.classList.remove("showItem");
        feedback.classList.remove("showItem","alert-success");

        showresults(number,quality);
        clearForm();
    },3000);
}

//calculating and showing results
function showresults(number,quality){
    var digit=[];
    if(quality==='1'){
        for(let i=0;number!=0;i++){
            digit[i]=number%2;
            number=Math.floor(number/2);
        }
    }
    else if(quality==='2'){
        for(let i=0;number!=0;i++){
            digit[i]=number%8;
            number=Math.floor(number/8);
        }
    }
    else if(quality==='3'){
        for(let i =0;number!=0;i++){
            // temporary variable to store remainder 
        var temp  = 0; 
          
        // storing remainder in temp variable. 
        temp = number % 16; 
          
        // check if temp < 10 
        if(temp < 10) 
        { 
            digit[i] = temp ; 
    
        } 
        else if(temp==10 )
        { 
            digit.push("A"); 
        
        } 
        else if(temp==11 )
        { 
            digit.push("B"); 
        
        } else if(temp==12 )
        { 
            digit.push("C");  
        
        } else if(temp==13 )
        { 
            digit.push("D"); 
            
        } else if(temp==14 )
        { 
            digit.push("E"); 
        
        } 
        else if(temp=15 )
        { 
            digit.push("F"); 
        
        } 

          
        number=Math.floor(number/16); 
        }
    }
    
    var output=[];
    var temp;
    var say;
    for(let i =digit.length -1,j=0;i>=0;i--,j++){
        temp=digit[i];
        output[j]=digit[i];
        results.classList.add("showItem");
        say=output.join();
        document.getElementById("num").textContent=say;
   
    }
 

}

//for clearing the form
function clearForm(){
num.value="";
service.value="";
}

});
})();