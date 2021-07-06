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


    