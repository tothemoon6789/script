//! TODO: ^^^^^^^^^^^^^^^^^^^^do it^^^^^^^^^^^^^^^^^^^^^^^^
// ="""https://www.whois.com/whois/"&A2&""","
//! TODO: ^^^^^^^^^^^^^^^^^^^^do it^^^^^^^^^^^^^^^^^^^^^^^^

const detailArray = [];
const allFatherLink = [
  "https://www.whois.com/whois/123moviesto.club",
  "https://www.whois.com/whois/3dlibrarytemplate.com",
  "https://www.whois.com/whois/3hcode.com",
  "https://www.whois.com/whois/5ptb.store",
  "https://www.whois.com/whois/accmmo4me.com",
  "https://www.whois.com/whois/alocotoi.com",
  "https://www.whois.com/whois/amonicawatch.store",
  "https://www.whois.com/whois/amthucchitam.online",
  "https://www.whois.com/whois/anlameuonglaghien.com",
  "https://www.whois.com/whois/antamthamtu.com",
  "https://www.whois.com/whois/antuongland.com",
  "https://www.whois.com/whois/aodaihoaihien.com",
  "https://www.whois.com/whois/aomuathuonghieu.com",
  "https://www.whois.com/whois/aophong247.com",
  "https://www.whois.com/whois/aophong24h.com",
  "https://www.whois.com/whois/aophongvietnam.com",
  "https://www.whois.com/whois/aosaigon.com",
  "https://www.whois.com/whois/aothunonline.com",
  "https://www.whois.com/whois/aothunsieutoc.com",
  "https://www.whois.com/whois/ariavungtau24h.com",
  "https://www.whois.com/whois/aziteach.com",
  "https://www.whois.com/whois/azspacex.com",
  "https://www.whois.com/whois/bacsilephuc.com",
  "https://www.whois.com/whois/balotuixachsaigon.com",
  "https://www.whois.com/whois/banhdanemnhatthanh.com",
  "https://www.whois.com/whois/banquanlychohaichau.com",
  "https://www.whois.com/whois/banthothanhphat.com",
  "https://www.whois.com/whois/baocaothongminh.com",
  "https://www.whois.com/whois/baohiemdelam.com",
  "https://www.whois.com/whois/baohiemnhanthohatinh.com",
  "https://www.whois.com/whois/baorabviet.xyz",
  "https://www.whois.com/whois/batdongsanluxury24h.com",
  "https://www.whois.com/whois/batdongsantranhai.com",
  "https://www.whois.com/whois/bcs69.com",
  "https://www.whois.com/whois/bds139.com",
  "https://www.whois.com/whois/bdsnghiduong24h.com",
  "https://www.whois.com/whois/beahouses.com",
  "https://www.whois.com/whois/bestcheapwatches.online",
  "https://www.whois.com/whois/betongmiennam.com",
  "https://www.whois.com/whois/bietthuthanhlanh.net",
  "https://www.whois.com/whois/bimexpharma.com",
  "https://www.whois.com/whois/buoc.org",
  "https://www.whois.com/whois/cadiaquynhon-binhdinh.com",
  "https://www.whois.com/whois/caohacsam.com",
  "https://www.whois.com/whois/capquangfptwifi.com",
  "https://www.whois.com/whois/cashpaamcomic.xyz",
  "https://www.whois.com/whois/catdang.net",
  "https://www.whois.com/whois/cayxanhbinhduong.com",
  "https://www.whois.com/whois/cayxanhnamphuoc.com",
  "https://www.whois.com/whois/chailosi.com",
  "https://www.whois.com/whois/cheapsmartphonestore.site",
  "https://www.whois.com/whois/chemgio.vn",
  "https://www.whois.com/whois/chiase24h.info",
  "https://www.whois.com/whois/chiaselink.org",
  "https://www.whois.com/whois/chuyendong247.net",
  "https://www.whois.com/whois/chuyenhathanhhung.com",
  "https://www.whois.com/whois/coin94.net",
  "https://www.whois.com/whois/cokhilangruaitachi.com",
  "https://www.whois.com/whois/cokhiso.com",
  "https://www.whois.com/whois/cokhithaithanhdat.com",
  "https://www.whois.com/whois/cokhithuanphat.click",
  "https://www.whois.com/whois/coloamec.com",
  "https://www.whois.com/whois/congnhomduchanoi.com",
  "https://www.whois.com/whois/congtydaiphat.net",
  "https://www.whois.com/whois/congtydanaquangtrung.net",
  "https://www.whois.com/whois/congtyocean.com",
  "https://www.whois.com/whois/cristaldemais.com",
  "https://www.whois.com/whois/cuaaustdoor.net",
  "https://www.whois.com/whois/cuakinhvieta.com",
  "https://www.whois.com/whois/daiyensam.com",
  "https://www.whois.com/whois/danangsculpture.com",
  "https://www.whois.com/whois/dangvu.site",
  "https://www.whois.com/whois/daohanbaotin.com",
  "https://www.whois.com/whois/daotaoboiloi.com",
  "https://www.whois.com/whois/datnencuchivn.com",
  "https://www.whois.com/whois/datrangsuc.vn",
  "https://www.whois.com/whois/datxe-bienhoa.xyz",
  "https://www.whois.com/whois/datxe-binhduong.com",
  "https://www.whois.com/whois/datxedongnai99.net",
  "https://www.whois.com/whois/datxenhanh247.com",
  "https://www.whois.com/whois/datxenhanh24gio.com",
  "https://www.whois.com/whois/datxeomgarbdian.com",
  "https://www.whois.com/whois/datxetaxi247.com",
  "https://www.whois.com/whois/dautubds.land",
  "https://www.whois.com/whois/daxuatkhau.com",
  "https://www.whois.com/whois/decalxe.net",
  "https://www.whois.com/whois/decalxe.vn",
  "https://www.whois.com/whois/dela.world",
  "https://www.whois.com/whois/denbaohieuhanghai.com",
  "https://www.whois.com/whois/densuoicaocap.com",
  "https://www.whois.com/whois/dianaauthentic.com",
  "https://www.whois.com/whois/diaocdautu24h.com",
  "https://www.whois.com/whois/dichvu.live",
  "https://www.whois.com/whois/dichvugoixedongnai.com",
  "https://www.whois.com/whois/dichvuketoanhl.com",
  "https://www.whois.com/whois/dichvusuachua.pro",
  "https://www.whois.com/whois/dichvutaichinh247.com",
  "https://www.whois.com/whois/dichvuxecongnghe.com",
  "https://www.whois.com/whois/dienlanhdaitri.com",
];

var promise = Promise.resolve();
var myTimeout = null;
allFatherLink.forEach((element) => {
  promise = promise.then(function () {
    const newWindow = window.open(element);
    var time = newWindow.prompt();
    var interval = time * 1000; // how much time should the delay between two iterations be (in milliseconds)?
    return new Promise(function (resolve) {
      console.log(interval);
      myTimeout = setTimeout(resolve, interval);
    }).then((res) => {
      // lay thong tin chi tiet tren whois
      const dfRow = newWindow.document.querySelectorAll(".df-row");
      // console.log(dfRow);
      const itemArray = [];
      const title = [];
      for (let index = 0; index < dfRow.length; index++) {
        const lableHtml = dfRow[index].childNodes[0].innerText;
        const valueHtml = dfRow[index].childNodes[1].innerText;
        if (lableHtml !== "Name Servers:") {
          switch (lableHtml) {
            case "Domain:":
              title[0] = lableHtml;
              itemArray[0] = valueHtml;
              break;
            case "Registered On:":
              title[1] = lableHtml;
              itemArray[1] = valueHtml;
              break;
            case "Expires On:":
              title[2] = lableHtml;
              itemArray[2] = valueHtml;
              break;
            case "Name:":
              title[3] = lableHtml;
              itemArray[3] = valueHtml;
              break;
            case "City:":
              title[4] = lableHtml;
              itemArray[4] = valueHtml;
              break;
            case "Phone:":
              title[5] = lableHtml;
              itemArray[5] = valueHtml;
              break;
            default:
              break;
          }
        }
      }

      detailArray.push(itemArray);
      console.log(detailArray);
      newWindow.close();
      clearTimeout(myTimeout);
    });
  });
});
promise.then(function () {
  generateCSV(detailArray); //! xem cho nay
  console.log("Loop finished.");
});
function generateCSV(data) {
  console.log(data);
  //   var csv = "Link, Tên CTY, Tên Khách, Ngành, Trạng Thái, Số điện thoại,\n";
  var csv = "Domain:, Registered On:, Expires On:, Name:, City:, Phone:,\n";
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

//! TODO: ^^^^^^^^^^^^^^^^^^^^do it^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^do it^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^do it^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^do it^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^do it^^^^^^^^^^^^^^^^^^^^^^^^

// // lay thong tin chi tiet tren whois
// const x = document.querySelectorAll(".df-row");
// const y = [];
// for (let index = 0; index < x.length; index++) {
//   const z = x[index].childNodes[1].innerText;
//   y.push(z);
// }
// console.log(y);

// ['Domain:', 'Registrar:', 'Registered On:', 'Expires On:', 'Updated On:', 'Status:', 'Name:', 'Street:', 'City:', 'Postal Code:', 'Country:', 'Phone:', 'Email:', 'Name:', 'Street:', 'City:', 'Postal Code:', 'Country:', 'Phone:', 'Email:', 'Name:', 'Street:', 'City:', 'Postal Code:', 'Country:', 'Phone:', 'Email:']
