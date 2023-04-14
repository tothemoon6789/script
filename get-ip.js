//https://www.whatismyip.com/dns-lookup/const ipArray = [];
const link = [
    "https://guihangdimysieutoc.com/",
    "http://www.vanchuyenngaydem.com/",
    ];
for (let index = 0; index < link.length; index++) {
   

}
let count = -1;
function hitMe() {
    count++
    if (count<link.length) {
       setTimeout(()=>{
           
         document.querySelector("#tool-dns-lookup > form > div > input[type=url]").value = link[count];
document.querySelector("#tool-run").click();
           console.log(111)
        setTimeout(()=>{
            const ip = document.querySelector("#return-data > ul > li > a").innerHTML
            console.log(ip)
            ipArray.push(ip)
            console.log(222)
            console.log(ipArray)
            hitMe()
        },10000)
    },2000) 
    }
    
}
hitMe()
