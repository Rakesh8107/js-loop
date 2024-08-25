let a = "this is a leptop";
let words = a.split(" ");
let output = "";
for(let i=1; i<=words.length; i++){
    output += words.slice(0, i).join(" ") +  "\n";
}
console.log(output);