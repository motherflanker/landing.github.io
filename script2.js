function exec(){
    let x = document,
    input = x.getElementsByClassName('input'),
    arr = [];
    let l = 0;
    let res;
    function save(){
        for(let i = 0; i < input.length; i++){
            arr[i] = input[i].value;
        }
    }
    save();

    for(let k = 0; k < arr.length; k++){
        if(arr[k].length > l){
            l = arr[k].length;
            res = arr[k];
        }
    }
    alert(res);
}


//==========================================================//


function find(){
   let str = document.getElementById('input2').value;
   let map = [];
   for(let i = 0; i < str.length; i++){
       let char = str.charAt(i);
       if(map[char]){
           map[char]++;
       }
       else{
           map[char] = 1;
       }
   }
   let max = 0;
   let c = '';
   for(k in map){
       if(map[k] > max){
           max = map[k];
           c = k;
       }
   }
   alert("The most frequent element: " + c + ", " + "occures " + max + " times");

   let rep = prompt("Enter the replacement");
   let res = '';
   for(let j = 0; j < str.length; j++){
       if(str[j] == c){}
       res = str.replaceAll(c,  rep);
    }
   alert(res);
}


//==========================================================//

function anagramm(){
    let str1 = document.getElementById('input3').value;
    let str2 = document.getElementById('input4').value;
    str1 = str1.toString().split("").sort().join("");
    str2 = str2.toString().split("").sort().join("");
    alert(str1 === str2);
}
