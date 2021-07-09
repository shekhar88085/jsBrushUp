function msg(){  
    alert("Hello Javatpoint");  
   }  
function message(){
    document.write("message function");
}
var pow=new Function("num1","num2","return Math.pow(num1,num2)");

   var x = 10;  
   var y = 20;  
   var z=x+y;  
   document.write(z);  
 
   document.write("<br/>");
   if(x>5)document.write("x is greter than 5");
   document.write("<br/>");
   switch(x){
       case 10:
           document.write("x is 10");
           break;
        case 5:
            document.write("x is 5");
            break;
        default:
            document.write("x is not defined");
   }
   //msg();
document.write("<br/>");
   message();
   document.writeln("<br/>");
document.writeln(pow(2,4));


document.writeln("function:-");
function emp(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
    }  
    e=new emp(103,"Vimal Jaiswal",30000);  
      document.writeln("<br/>");
    document.writeln(e.id+" "+e.name+" "+e.salary);  
    document.writeln("<br/>");


    document.writeln("array:-");
    var empl=new Array("jai","vijay","Smith");
    for(i=0;i<emp.length;i++){
        document.writeln(empl[i]);
    }


    document.writeln("<br/>"+"string:-");
    var stringName=new String("hello all!!");
    document.write(stringName);


    document.write("<br/>"+"Date Object:-");
    var today=new Date();
    var day=today.getDate();
    var month=today.getMonth()+1;
    var year=today.getFullYear();
    document.writeln(day+"/"+month+"/"+year);

    document.writeln("<br/>"+"digital clock:-");
    window.onload=function(){getTime();}
    function getTime(){
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        m=checkTime(m);
        s=checkTime(s);
        document.getElementById('txt').innerHTML=h+":"+m+":"+s;
        setTimeout(function(){getTime()},1000);
        function checkTime(i){
            if(i<10){
                i="0"+i;
            }return i;
        }
    }
    

//array
document.writeln("<br/>"+"array:-")
var array=[1,2,3];
for(i=0;i<array.length;i++){
    
    document.write(array[i]);
}

//string
document.writeln("<br/>"+"String:-");
var string="Khushbuu love";
document.writeln(string);
document.writeln(string.indexOf("l"));
document.writeln(string.toUpperCase(string));

//math
window.onload=function(){
    document.getElementById('demo').innerHTML=Math.pow(3,4);
}

//BOM


//window.alert("this is js");
function msg1(){
    var v=confirm("Are u sure??");
    if(v==true){
        alert("ok data is deleted!");
    }else{
        alert("cancel!");
    }
}

function msg2(){
    var v=prompt("Who r u?");
    alert("I am "+v);
}

function msg3(){
    open("http://www.javatpoint.com");  
}

//java history object

//document.writeln("<br/>"+window.history);

//js NAvigator Object
document.writeln("<br/>");
document.writeln("<br/> appcodename:-"+navigator.appCodeName);
document.writeln("<br/> appname:-"+navigator.appName);
document.writeln("<br/> appVersion:-"+navigator.appVersion);
document.writeln("<br/> cookieEnabled:-"+navigator.cookieEnabled);
document.writeln("<br/> language:-"+navigator.language);
document.writeln("<br/> userAgent:-" +navigator.userAgent);
document.writeln("<br/> platform:-"+navigator.platform);
document.writeln("<br/> onLine:-"+navigator.onLine);

//Js screen object

document.writeln("<br/>");
document.writeln("<br/> js screen object");
document.writeln("<br/> width:-"+screen.width);
document.writeln("<br/> height:-"+screen.height);
document.writeln("<br/> avilWidth:-"+screen.availWidth);
document.writeln("<br/> availHeight:-"+screen.availHeight);
document.writeln("<br/> coloDepth:-"+screen.colorDepth);
document.writeln("<br/> pixelDepth:-"+screen.pixelDepth);


//documwnt object model

function printvalue(){
    var name=document.form1.name.value;
    alert("Welcome "+name);
}



//innerHTML
document.writeln("<br/>");


//innerTEXT

document.writeln("<br/>");
function validate() {  
    var msg;  
    if(document.myForm.userPass.value.length>5){  
    msg="good";  
    }  
    else{  
    msg="poor";  
    }  
    document.getElementById('mylocation').innerText=msg;  
     }  

     //form validation

     document.writeln("<br/>");
     function validateform(){
         var name=document.myForm2.name.value;
         var password=document.myForm2.password.value;

         if(name==null||name==""){
             alert("Name can't be blank");
             return false;
         }else if(password.length<6){
             alert("Password must be at least 6 characters long.");
             return false;
         }
     }

     // retype verfication

     function matchpass(){
         var p1=document.myForm3.password.value;
         var p2=document.myForm3.password2.value;

         if(p1==p2){
             return true;
         }else{
             alert("Password Must be same!");
             return false;
         }
     }
     

     //number validation

     function numval(){
         var num=document.myForm4.num.value;
         if(isNaN(num)){
             document.getElementById("numloc").innerHTML="Enter Numeric value only";
             return false;
         }else{
             return true;
         }
     }

     //event

     document.writeln("<br/>");
     function mouseroverevent(){
         alert("This is us!!!");
     }