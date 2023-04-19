const httpArray = [];
document.querySelector('#dns').querySelectorAll('tr td:nth-child(3) a').forEach((item)=>{
    const content = item.textContent;
    const search = content.search(".vn");
    if (search === -1) {
        if(content.search(".com")!== -1 || content.search(".net") !==-1){
    httpArray.push(content)        
        }
    
    }
    
})
console.log(httpArray)
