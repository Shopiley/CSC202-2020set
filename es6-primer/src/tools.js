var log = function(output){
    console.log(output)
    //document.getElementById("output").innerHTML = output;
    }
    export var appName = "ES6 Review";

    export var dummyFunction = function(){
    return "I am a dummy function";
    }

    export default log; 

    //template literals
    export const weatherTag = function(string, temperature){ 
        //Let us assume that the Template literal to be passed has two string parts separating the embedded expressions. 
        //We can capture these two parts as array elements 
        let substring0 = string[0]; 
        let substring1 = string[1]; 
        let weatherCondition; 
        //Let us use the embedded expressions for some logic 
        if (temperature > 26){ 
        weatherCondition = "hot day" 
        }else{ 
        weatherCondition = "cool day" 
        } 
        return `${substring0}${temperature}${substring1}${weatherCondition}`  //template literal
       }









