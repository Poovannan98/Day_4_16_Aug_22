const countries = new XMLHttpRequest();

countries.open("GET","https://restcountries.com/v3.1/all");
countries.send();

countries.responseType = "json";

countries.onload = function DisplayResult(){
    const result = countries.response;
    
    console.log(result.length);
    console.log(result);

    for(let index in result){
        console.log("Flag:",+index+1,result[index].flags.png);
        console.log("Name:",+index+1,result[index].name.common);
        console.log("Region:",+index+1,result[index].region);
        console.log("Sub-Region:",+index+1,result[index].subregion);
        console.log("Population:",+index+1,result[index].population);
    }
}
