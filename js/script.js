var i;
var j;
var n;
var b=[];
var e=0.00001;
//document.getElementById("btn").onclick=document.getElementById("xa").value;
//n=parseInt(document.getElementById("xa").value);
//var state;
n=parseFloat(prompt("введіть n"));
state={
    n:n
};

var a=[];
function matrix(x){
for(var i=0;i<x;i++){
  a[i]=[];
                 
    for(var j=0;j<x;j++){
        a[i][j]=prompt("введіть елемент"+'a['+(i+1)+(j+1)+']=');
       
 } 
}};

//if(!state.n){matrix(state.n)};
alert(matrix(state.n));
document.write("матриця A:");
document.write("<table>");
for (i=0; i<n; ++i) {
    document.write("<tr align-center>"); 
      for (j=0; j<n; ++j) {
  document.write("<td width=10%>"+a[i][j]+"</td>");
 } document.write("</tr>")
}


for(var i=0; i<n;i++){
    b[i]=prompt("введіть "+(i+1)+"елемент стовпя b");
} ;

document.write("<table>");
document.write("cтовпець b:");
for(var i=0; i<n;i++){
document.write("<tr align=center>");
    document.write("<td width=10%>"+b[i]+"</td>");
    document.write("</tr>")
}document.write("</table>");

var arr=[];
//формує з нулями
for(var i=0;i<n;i++){
  arr[i]=[];               
    for(var j=0;j<n;j++){
         if(i!=j){
        arr[i][j]=a[i][j]} 
                     else arr[i][j]=0}
       
 } ;
//виводить з нулями
document.write("Матриця A з нулями по діагоналі:");
document.write("<table>");
for (i=0; i<n; ++i) {
    document.write("<tr align-center>"); 
      for (j=0; j<n; ++j) {
  document.write("<td width=10%>"+arr[i][j]+"</td>");
 } document.write("</tr>")
}
document.write("</table>");
//необхідна умова
var s=0;
for(i=0;i<n;i++){
    for(j=0;j<n;j++){
        s=s+arr[i][j];
       
    }
};
for(i=0;i<n;i++){
     if(Math.abs(s)>Math.abs(a[i][i])){
       alert("не виконується необхідна умова збіжності")};
       
    
};
//формує з діленням на 
var arr1=[]; 
for(var i=0;i<n;i++){ 
arr1[i]=[]; 
for(var j=0;j<n;j++){ 

arr1[i][j]=-(arr[i][j])/(a[i][i]); 
}}; 


var c=[];
 for(var i=0; i<n; i++){
     c[i]=b[i]/a[i][i];
 };

var max=0;
var max1=0;
for(var i=0;i<n;i++){
      var er=0;
      for(var j=0;j<n; j++){
      er=er+Math.abs(arr1[i][j]);
        
          if(er>max){
              max=er;
          }
      }};
alert(max);
//збіжність arr1
//
//if(max>1){alert("не виконується достатня умова збіжності")};
var max4=0;
var x0=[];
var x2=[];
 for(var i=0; i<n; i++){
     x0[i]=c[i];
 };

var x=[];
var sum =0;
var x1=[];
var k=0;
document.write("                   ");

for(var i=0;i<n;i++){
      sum=0;
      for(var j=0;j<i-1; j++){
        sum=sum+a[i][j]*x0[i]; }
      var sum2=0;
      for(var j=i+1;j<n; j++){
         sum2=sum2+a[i][j]*x0[i]; 
      }
     x1[i]=(b[i]-sum-sum2)/a[i][i];
    document.write("Корені");
      document.write(" "+x1[i].toFixed(2)+" ");
     
  } ;
 for(var i=0;i<n;i++){
     x[i]=x1[i]-x0[i];
     if(x[i]>max1){max1=x[i];}
      };

while(Math.abs(max1)<e){
    for(var i=0;i<n;i++){
     x0[i]=x1[i]};
    k=k+1;
//    document.write(k);
  for(var i=0;i<n;i++){
      sum=0;
      for(var j=0;j<i-1; j++){
        sum=sum+a[i][j]*x0[i]; }
      var sum2=0;
      for(var j=i+1;j<n; j++){
         sum2=sum2+a[i][j]*x0[i]; 
      }
     x1[i]=(b[i]-sum-sum2)/a[i][i];
      document.write(" "+x1[i].toFixed(2)+" ");
     
  } ;
      
//     for(var i=0;i<n;i++){
//         document.write(" "+x1[i].toFixed(2)+" ")};
      
     
  
    for(var i=0;i<n;i++){
     x[i]=x1[i]-x0[i];
     if(x[i]>max1){max1=x[i];}
      };
     
//         var max2=1;
//         for(i=0;i<n-1;i++){
//             if(Math.abs(x1[max2]-x0[max2])<Math.abs(x1[i+1]-x0[i+1])){
//                 max2=i+1;
//             }
//    var m=(Math.abs(max)/(1-Math.abs(max)))*Math.abs(max1);
//    document.writeln(m);
//    document.writeln(max1);
   
};




