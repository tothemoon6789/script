// ="""https://www.whois.com/whois/"&A2&""","
const detailArray = [];
var interval = 50; // how much time should the delay between two iterations be (in milliseconds)?
let i = 0;
const url = [
  "https://www.whois.com/whois/hocakoinamanh.com",
"https://www.whois.com/whois/daunhotjae.com",
"https://www.whois.com/whois/phumaduong.com",
"https://www.whois.com/whois/bkbscientific.com",
"https://www.whois.com/whois/ketnoigiaothuong.com",
"https://www.whois.com/whois/huyhnguyen.com",
"https://www.whois.com/whois/lapcamera360.com",
"https://www.whois.com/whois/odukimanh.com",
"https://www.whois.com/whois/motbuctranh.com",
"https://www.whois.com/whois/chuyenhvt.net",
"https://www.whois.com/whois/khoathetu.net",
"https://www.whois.com/whois/phuhoaphatprint.com",
"https://www.whois.com/whois/khaitriwater.com",
"https://www.whois.com/whois/taybuibds.com",
"https://www.whois.com/whois/tavitax.com",
"https://www.whois.com/whois/nongsandatquang.com",
"https://www.whois.com/whois/vpccnguyenthinhunga.com",
"https://www.whois.com/whois/nhadatdalatlamdong.com",
"https://www.whois.com/whois/chodocusaigon.com",
"https://www.whois.com/whois/tomgiongninhthuan.com",
"https://www.whois.com/whois/hoaphatgroups.com",
"https://www.whois.com/whois/tuongphatco.com",
"https://www.whois.com/whois/mayrang.net",
"https://www.whois.com/whois/inminhhoa.com",
"https://www.whois.com/whois/cskhtmd.com",
"https://www.whois.com/whois/meoyeu.com",
"https://www.whois.com/whois/phutungsieuviet.com",
"https://www.whois.com/whois/thuyquyenlam.com",
"https://www.whois.com/whois/viewteklab.com",
"https://www.whois.com/whois/vuonxanhphuquoc.com",
"https://www.whois.com/whois/duocmyphamngoclinh.com",
"https://www.whois.com/whois/chobamienvdc.com",
"https://www.whois.com/whois/mindanapaint.com",
"https://www.whois.com/whois/patcoplastic.com",
"https://www.whois.com/whois/dautucanhosg.com",
"https://www.whois.com/whois/bantruyen.com",
"https://www.whois.com/whois/dmctower.com",
"https://www.whois.com/whois/vivuhue.com",
"https://www.whois.com/whois/exllgifts.com",
"https://www.whois.com/whois/noithatphuoclinh.com",
"https://www.whois.com/whois/phanbonvinacafe.com",
"https://www.whois.com/whois/phaochianbinh.com",
"https://www.whois.com/whois/phongtranhduykhang.com",
"https://www.whois.com/whois/dieutribenhhensuyen.com",
"https://www.whois.com/whois/manhremviet.com",
"https://www.whois.com/whois/sami-logistics.com",
"https://www.whois.com/whois/dakviettravel.com",
"https://www.whois.com/whois/thienanhphu.com",
"https://www.whois.com/whois/vietnamfishshow.com",
"https://www.whois.com/whois/linhwedding.net",
"https://www.whois.com/whois/caitaosuachuanha.com",
"https://www.whois.com/whois/anternation.com",
"https://www.whois.com/whois/thienlac.com",
"https://www.whois.com/whois/meylandnghean.com",
"https://www.whois.com/whois/sieuthitranhdephaigiang.com",
"https://www.whois.com/whois/thietkethucte.com",
"https://www.whois.com/whois/hitieko.com",
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
