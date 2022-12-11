// // print odd number anonymous
var odd = function(array){
    for(var i=0;i<10;i++){
        if(array[i]%2!=0)
            console.log(array[i]);
    }
}
odd([1,2,3,4,5,6,7,8,9,10]);

// // IIFE

(function(array){
    for(var i=0;i<array.length;i++){
        if(array[i]%2!=0){
            console.log(array[i])
        }
    }
})([1,2,3,4,5,6,7,8,9])

// //String to title caps anonymos

var add  = function(str){
    str=str.toLowerCase().split(" ");
    for(var i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
        
   }
   console.log(str.join(" "));
}
add("guvi greek network pvt ltd");

//IIFE

(function(str){
    str=str.toLowerCase().split(" ");
    for(var i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
        
   }
   console.log(str.join(" "));
})("guvi greek network pvt ltd");


// // sum all numbers anonymous

var sum = function(number){
    var sum1=0;
    for(var i=0;i<number.length;i++){
        sum1=sum1+number[i];
        
    }
    console.log(sum1);
    return sum1;
    
}
sum([1,2,3,4,5]);

// // IIFE


(function(number){
    var sum1=0;
    for(var i=0;i<number.length;i++){
        sum1=sum1+number[i];
        
    }
    console.log(sum1);
    return sum1;
    
})([1,2,3,4,5])

// // Return all the prime number in array

var num=function(a){
    a=a.filter((number)=>{
        for(var i=2;i<=Math.sqrt(number);i++){
            if(number%i===0) return false;
        }
        return true;
    })
    console.log(a)
}
num([2,3,4,5,6,7,8,9,10])   

// //IIFE

(function(num){
    num=num.filter((number)=>{
        for(var i=2;i<=Math.sqrt(number);i++){
            if(number%i==0) return false;  
        }
        return true;
    })
    console.log(num);   
})([2,3,4,5,6,7,8,9,10])

// //Palindrome

var Palindrome=function(arr){
    var a=arr[0];
    var b=arr[(arr.length)-1];
    if(a==b){
        console.log("true");
        }else{
            console.log("false");
            
        }
}
Palindrome("MADAM");

// IIFE

(function(arr){
    var a=arr[0];
    var b=arr[(arr.length)-1];
    if(a==b){
        console.log("true");
        }else{
            console.log("false");
            
        }
})("MADAM");

// // Return median of two sorted array of same size
var sum=function(a1,a2){
    var a=a1.concat(a2);
    sum=0;
    for(var i=0;i<a.length;i++){
    sum=sum+a[i];
    }
    console.log(sum/a.length)
}
sum([1,2,3,4,5],[6,7,8,9,10]);

// //IIFE
(function(a1,a2){
    var a=a1.concat(a2);
    sum=0;
    for(var i=0;i<a.length;i++){
    sum=sum+a[i];
    }
    console.log(sum/a.length)
})([1,2,3,4,5],[6,7,8,9,10])




// //Remove duplicates from an Array
var dupl= function(array){
    let dup=[...new Set(array)];
    console.log(dup);
} 
dupl([1,2,2,3,4,4,5,6]);

// //IIFE
(function(array){
    let dup=[...new Set(array)];
    console.log(dup);
})([1,2,2,3,4,4,5,6])


// // Rotate an array by K times

  var rotate=function(a,k){
    for(var i=0;i<k;i++){
        a.unshift(a.pop());
    }
    return a;
}
console.log(rotate([1,2,3,4,5],3))


 //IIFE

(function(a,k){
    for(var i=0;i<k;i++){
        a.unshift(a.pop());
    }
    console.log(a)
    return a;
    
})([1,2,3,4,5],3)

//---------------------------------------------------

//ARROW FUNCTION
// // print odd number

odd=(array)=>{
    for(var i=0;i<array.length;i++){
        if(array[i]%2!=0){
            console.log(array[i])
        }
    }
}
odd([1,2,3,4,5,6,7,8,9]);

// //String to title caps anonymos

add = (str)=>{
    str=str.toLowerCase().split(" ");
    for(var i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
        
   }
   console.log(str.join(" "));
}
add("guvi greek network pvt ltd");

// // sum all numbers anonymous
sum =(number)=>{
    var sum1=0;
    for(var i=0;i<number.length;i++){
        sum1=sum1+number[i];
        
    }
    console.log(sum1);
    return sum1;
    
}
sum([1,2,3,4,5]);

// // Return all the prime number in array

 prime=(num)=>{
    num=num.filter((number)=>{
        for(var i=2;i<Math.sqrt(number);i++){
            if(number%i===0) return false;
        }
        return true;
    });
    console.log(num);
}
prime([1,2,3,4,5,6,7,8,9,10])

// //Palindrome

var Palindrome=function(arr){
    var a=arr[0];
    var b=arr[(arr.length)-1];
    if(a==b){
        console.log("true");
        }else{
            console.log("false");
            
        }
}
Palindrome("MADAM");