const httpArray = []
document.querySelectorAll('.website_text').forEach((item)=>{
    const http = "http://"+item.firstChild.innerHTML+"/";
    httpArray.push(http)
    console.log(httpArray)
})
