//https://www.whatismyip.com/dns-lookup
const ipArray = [];
const link = [
   
    "http://www.nuocmy.net/",
    "http://www.onbooking.com/",
    "http://www.diaocdatviet.com.vn/",
    "http://www.cattuonbinhduong.com/",
    "http://www.fiditour.com/",
    "http://www.dulichkhampha.vn/",
    "http://www.saigontourist-stt.com/",
    "http://www.anbinhtour.com/",
    "http://www.dichvugiare.com/",
    "http://www.thdtravel.com/",
    "http://www.dulichvietnam247.com/",
    "http://www.diamondtour.vn/",
    "http://www.vione.vn/",
    "http://www.dulichsaigontour.vn/",
    "http://www.hailongtravel.com/",
    "http://www.focusvietnam.com/",
    "http://www.startourist.com.vn/",
    "http://www.khachsan24.vn/"
]

let count = -1;
function hitMe() {
    count++
    if (count<link.length) {
       setTimeout(()=>{
           console.log(count)
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
