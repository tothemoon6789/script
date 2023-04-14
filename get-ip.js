//https://www.whatismyip.com/dns-lookup/const ipArray = [];
const link = ['www.haprotravel.com', 'www.nuocmy.net', 'www.onbooking.com', 'www.diaocdatviet.com.vn', 'www.cattuonbinhduong.com', 'www.fiditour.com', 'www.dulichkhampha.vn', 'www.saigontourist-stt.com', 'www.anbinhtour.com', 'www.dichvugiare.com', 'www.thdtravel.com', 'www.dulichvietnam247.com', 'www.diamondtour.vn', 'www.vione.vn', 'www.dulichsaigontour.vn', 'www.hailongtravel.com', 'www.focusvietnam.com', 'www.startourist.com.vn', 'www.khachsan24.vn'];
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
