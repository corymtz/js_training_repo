/*
input: ty
output: tttyyy
*/


function threeCompany(input){
    var n = input.length;
    var output="";
    for(var i=0; i<n; i++){
        var letra=input.charAt(i);
        output=output + letra + letra + letra;
    }
    return output;
};

console.log(threeCompany("ty"));
console.log(threeCompany("5567"));
console.log(threeCompany("casa"));
