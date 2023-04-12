const myArray = [
  "https://www.whois.com/whois/xn--16do-u76aaaaaa.net",
  "https://www.whois.com/whois/1bestlinks.net",
  "https://www.whois.com/whois/1thietkeweb.com",
  "https://www.whois.com/whois/2monngonmoingay.com",
];
var promise = Promise.resolve();
myArray.forEach((element) => {
  promise = promise.then(() => {
    const newWindow = window.open(element);
    console.log("ON FOREACH");
    return new Promise(function (resolve) {
      setTimeout(resolve, 2000);
      
    }).then((res) => {
        newWindow.close() 
    });
  });
});
promise.then(() => {
  console.log("FINISHED");
});
