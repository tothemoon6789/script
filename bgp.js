const httpArray = [];
document.querySelectorAll('a[href^="/dns/"]').forEach((item)=>{
    const content = item.innerHTML;
    const dotVn = content.search(".vn");
    
    
   
    if(dotVn === -1){
     httpArray.push(content); 
    } else {
     
        console.log(".vn",dotVn);
    console.log(".com.vn",dotVn);
    console.log(".net.vn",dotVn);
    }
    
})
  
console.log(httpArray)
