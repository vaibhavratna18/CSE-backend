const fs=require ("fs");
const data=fs.readFileSync("./data.txt","utf8");    
//console.log(data.toString());
console.log(data);
if (data.match("H")){
    console.log("File contains'H'");
    const newdata = data.replace("H","ABES");
    fs.writeFileSync("./data.txt",newdata,"utf-8")
}
//fs.writeFileSync("data2.txt","Hello Ghaziabad","utf-8");
//fs.renameSync("./data2.txt","./data3.txt");
//fs.unlinkSync("./.data1.txt");
//fs.appendFileSync("./data1.txt","Virat Kohli is the GOAT", "utf-8");
