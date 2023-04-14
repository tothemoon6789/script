const httpArray = []
document.querySelectorAll('.website_text').forEach((item)=>{
    const http = item.firstChild.innerHTML;
    httpArray.push(http)
    console.log(httpArray)
})
