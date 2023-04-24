// ="""https://www.whois.com/whois/"&A2&""","
const detailArray = [];
var interval = 50; // how much time should the delay between two iterations be (in milliseconds)?
let i = 0;
const url = [
  "https://www.whois.com/whois/trumfashion.com"
];
const promise = Promise.resolve();
function copyData() {
  const newWindow = window.open(url[i]);
  promise
    .then(() => {
      return new Promise(function (resolve) {
        newWindow.addEventListener("DOMContentLoaded", () => {
          console.log("DOMContentLoaded");
          setTimeout(() => {
            // lay thong tin chi tiet tren whois
            const dfRow = newWindow.document.querySelectorAll(".df-row");
            const itemArray = [];
            // const title = [];
            for (let index = 0; index < dfRow.length; index++) {
              const lableHtml = dfRow[index].childNodes[0].innerText;
              const valueHtml = dfRow[index].childNodes[1].innerText;
              if (lableHtml !== "Name Servers:") {
                switch (lableHtml) {
                  case "Domain:":
                    // title[0] = lableHtml;
                    itemArray[0] = valueHtml;
                    break;
                  case "Registered On:":
                    // title[1] = lableHtml;
                    itemArray[1] = valueHtml;
                    break;
                  case "Expires On:":
                    // title[2] = lableHtml;
                    itemArray[2] = valueHtml;
                    break;
                  case "Name:":
                    // title[3] = lableHtml;
                    itemArray[3] = valueHtml;
                    break;
                  case "City:":
                    // title[4] = lableHtml;
                    itemArray[4] = valueHtml;
                    break;
                  case "Phone:":
                    // title[5] = lableHtml;
                    itemArray[5] = valueHtml;
                    break;
                  default:
                    break;
                }
              }
              // title[6] = element;
            }

            itemArray[6] = url[i];
            detailArray.push(itemArray);
            console.log(detailArray);
            // this.window.alert('OK')
            resolve();
          }, interval);
        });
      });
    })
    .then(() => {
      if (i === url.length - 1) {
        newWindow.close();
        generateCSV(detailArray); //! xem cho nay
        console.log("Loop finished.");
        console.log(detailArray);
      } else {
        i++;
        copyData();
console.log(i)
        newWindow.close();
      }
    });
}
copyData();

function generateCSV(data) {
  console.log(data);
  //   var csv = "Link, Tên CTY, Tên Khách, Ngành, Trạng Thái, Số điện thoại,\n";
  data.forEach((row,rowIndex) => {
    row.forEach((item,itemIndex) => {
      if(!item) return
      const dauPhay = item.search("#");
      if(dauPhay !== -1){
        console.log('ben trong log')
        data[rowIndex][itemIndex] = "Khong xu ly"
        console.log(data[rowIndex][itemIndex]);
      }
    })
  });
  var csv =
    "Domain:, Registered On:, Expires On:, Name:, City:, Phone:,Link: ,\n";
  data.forEach(function (row) {
    csv += row.join(",");
    csv += "\n";
  });
  var hiddenElement = document.createElement("a");
  hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
  hiddenElement.target = "_blank";
  hiddenElement.download = "data.csv";
  hiddenElement.click();
}
