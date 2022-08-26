var obj1 = {"name":"Sam","class":"MCA"};
var obj2 = {"class":"MCA","name":"Sam"};

var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("Is object equal:" +flag);

// var arr1 = {name: 'akash', numbers: [3, 7, 14]};
// var arr2  = {name: 'akash', numbers: [3, 7, 14]};
// const _ = require('lodash'); 
// console.log(_.isEqual(arr1, arr2));