exports.reverse = function(string){
    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        console.log(element)
    }
    return Array.from(string).reverse().join("");
}