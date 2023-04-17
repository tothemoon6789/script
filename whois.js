// ="""https://www.whois.com/whois/"&A2&""","
const detailArray = [];
const allFatherLink = [
  "https://www.whois.com/whois/daotaoaffiliate.com",
"https://www.whois.com/whois/dautuforexaz.com",
"https://www.whois.com/whois/lephuongpc.com",
"https://www.whois.com/whois/tamlaysangvn.com",
"https://www.whois.com/whois/movingsaigon.com",
"https://www.whois.com/whois/phuquoccity.net",
"https://www.whois.com/whois/antoancongnghiep.com",
"https://www.whois.com/whois/thanhy.vn",
"https://www.whois.com/whois/luckystargroup68.com",
"https://www.whois.com/whois/cmcjsc.com",
"https://www.whois.com/whois/chamsocdaantoan.com",
"https://www.whois.com/whois/phuquochousing.com",
"https://www.whois.com/whois/sauriengdahuoai.net",
"https://www.whois.com/whois/tuvanniemtin.com",
"https://www.whois.com/whois/tietkiemdi.com",
"https://www.whois.com/whois/dulichhoasen.vn",
"https://www.whois.com/whois/lotusmoving24h.com",
"https://www.whois.com/whois/cmcjsc.vn",
"https://www.whois.com/whois/duongtin24h.com",
"https://www.whois.com/whois/gaia-creature.com",
"https://www.whois.com/whois/bachhoaandam.com",
"https://www.whois.com/whois/benhthieumau.vn",
"https://www.whois.com/whois/xinphepxaydungmienphi.com",
"https://www.whois.com/whois/bantinnong24h.com",
"https://www.whois.com/whois/conphungtourist.com",
"https://www.whois.com/whois/kiendecor.net",
"https://www.whois.com/whois/selavia-phuquoc.net",
"https://www.whois.com/whois/selaviaphuquocs.com",
"https://www.whois.com/whois/hanghoaphaisinh.com",
"https://www.whois.com/whois/kientrucnhadep360.com",
"https://www.whois.com/whois/chongthamtamky.com",
"https://www.whois.com/whois/tuoitregiongrieng.com",
"https://www.whois.com/whois/finhay.net",
"https://www.whois.com/whois/hangluatngoclam.com",
"https://www.whois.com/whois/clubhomeland.com",
"https://www.whois.com/whois/trasamdua.vn",
"https://www.whois.com/whois/locphat247.com",
"https://www.whois.com/whois/phongnhago.com",
"https://www.whois.com/whois/datnenanvuong.com",
"https://www.whois.com/whois/dinhduongchotreem.info",
"https://www.whois.com/whois/erikeducation.com",
"https://www.whois.com/whois/ohuihanquocs.com",
"https://www.whois.com/whois/aseanreports.com",
"https://www.whois.com/whois/vtta.vn",
"https://www.whois.com/whois/caosukythuat.store",
"https://www.whois.com/whois/giacahomnay.com",
"https://www.whois.com/whois/mdrtstars.org",
"https://www.whois.com/whois/cautruyenhinh.net",
"https://www.whois.com/whois/waplerthailand.com",
"https://www.whois.com/whois/videcovn.com",
"https://www.whois.com/whois/xaydungbaoquan.com",
"https://www.whois.com/whois/firvis-global.com",
"https://www.whois.com/whois/tranh3dmiennam.com",
"https://www.whois.com/whois/hoachatthanhan.com",
"https://www.whois.com/whois/dogomanhquoc.com",
"https://www.whois.com/whois/bomtiemdien.com",
"https://www.whois.com/whois/bonruatayvotrung.com",
"https://www.whois.com/whois/denmoled.com",
"https://www.whois.com/whois/khomagiamgia.com",
"https://www.whois.com/whois/maylocvakhukhuankhongkhi.com",
"https://www.whois.com/whois/mayphantichhuyethoc.com",
"https://www.whois.com/whois/maytruyendich.com",
"https://www.whois.com/whois/mayxetnghiemhuyethoc.com",
"https://www.whois.com/whois/mayxetnghiemkhimau.com",
"https://www.whois.com/whois/mayxetnghiemnuoctieu.com",
"https://www.whois.com/whois/mayxetnghiemsinhhoa.net",
"https://www.whois.com/whois/chapadewhotel.vn",
"https://www.whois.com/whois/duhunggiaphat.com",
"https://www.whois.com/whois/intui.vn",
"https://www.whois.com/whois/benbivoithoigian.com",
"https://www.whois.com/whois/phanmemthuy.com",
"https://www.whois.com/whois/tieucanhbinhthuan.com",
"https://www.whois.com/whois/tinnghiamoto.com",
"https://www.whois.com/whois/rongtre.vn",
"https://www.whois.com/whois/thaonguyenphat.com",
"https://www.whois.com/whois/hellomebau.com",
"https://www.whois.com/whois/cameraquansat24h.net",
"https://www.whois.com/whois/cuachongchay24h.com",
"https://www.whois.com/whois/emmaus-group.com",
"https://www.whois.com/whois/simdep123.com",
"https://www.whois.com/whois/rheem.vn",
"https://www.whois.com/whois/benhvienniengrang.com",
"https://www.whois.com/whois/yentocaocap.com",
"https://www.whois.com/whois/thietbiytedonghai.com",
"https://www.whois.com/whois/vitviet.com",
"https://www.whois.com/whois/canhuyhoang.com",
"https://www.whois.com/whois/timesharevn.site",
"https://www.whois.com/whois/congnghemoimiennam.com",
"https://www.whois.com/whois/nongtraitietkiem.com",
"https://www.whois.com/whois/agriculturevietnam.com",
"https://www.whois.com/whois/cherashop.com",
"https://www.whois.com/whois/svlight.vn",
"https://www.whois.com/whois/toloprof.com",
"https://www.whois.com/whois/asiaphoenix.online",
"https://www.whois.com/whois/tranduc.net",
"https://www.whois.com/whois/hanoisamson.vn",
"https://www.whois.com/whois/focalvietnam.com",
"https://www.whois.com/whois/promedivietnam.com",
"https://www.whois.com/whois/baodaiphat.com",
];
var interval = 3000; // how much time should the delay between two iterations be (in milliseconds)?
var promise = Promise.resolve();
allFatherLink.forEach((element) => {
  promise = promise
    .then(function () {
      console.log(element);
      const newWindow = window.open(element);
      newWindow.addEventListener("DOMContentLoaded", function (event) {
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
        
        itemArray[6] = element;
        detailArray.push(itemArray);
        console.log(detailArray);
        // this.window.alert('OK')
        newWindow.close();
      });

      return new Promise(function (resolve) {
        setTimeout(resolve, interval);
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
promise.then(function () {
  generateCSV(detailArray); //! xem cho nay
  console.log("Loop finished.");
  console.log(detailArray);
});
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
