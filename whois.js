// ="""https://www.whois.com/whois/"&A2&""","
const detailArray = [];
const allFatherLink = [
  "https://www.whois.com/whois/huehongtravel.com",
"https://www.whois.com/whois/asiannest.com",
"https://www.whois.com/whois/sanbaokim.com",
"https://www.whois.com/whois/denledhungtin.com",
"https://www.whois.com/whois/chaangchiia.com",
"https://www.whois.com/whois/vietpet.info",
"https://www.whois.com/whois/nhomsonhaithinh.com",
"https://www.whois.com/whois/satthepchaungocquyen.com",
"https://www.whois.com/whois/veneerdongnam.com",
"https://www.whois.com/whois/dulichsaigongroup.com",
"https://www.whois.com/whois/saigongrouptourism.com",
"https://www.whois.com/whois/saigongrouptravel.com",
"https://www.whois.com/whois/cuppycakebaby.com",
"https://www.whois.com/whois/diencokimkhi.com",
"https://www.whois.com/whois/dienmaychinhle.com",
"https://www.whois.com/whois/dailymaybay.vn",
"https://www.whois.com/whois/adcreative.store",
"https://www.whois.com/whois/gaac.vn",
"https://www.whois.com/whois/httltanminh.com",
"https://www.whois.com/whois/myphamciorin.com",
"https://www.whois.com/whois/bangquangcao24h.com",
"https://www.whois.com/whois/satmythuatducchien.com",
"https://www.whois.com/whois/dongphucthuynhien.com",
"https://www.whois.com/whois/khuonbebanginmiennam.com",
"https://www.whois.com/whois/ruoucaodinhlangmrhien.com",
"https://www.whois.com/whois/baovehaidang.com",
"https://www.whois.com/whois/giaxaydunghiennay.com",
"https://www.whois.com/whois/giaxaydungtphcm.com",
"https://www.whois.com/whois/buunghethanh.com",
"https://www.whois.com/whois/bevelgearmotor.com",
"https://www.whois.com/whois/congdeptudong.com",
"https://www.whois.com/whois/beotayxuatkhau.com",
"https://www.whois.com/whois/aapvietnam.com",
"https://www.whois.com/whois/gachblocktienphucan.com",
"https://www.whois.com/whois/ananmart.net",
"https://www.whois.com/whois/chieusangsanvuon.vn",
"https://www.whois.com/whois/docungthientam.com",
"https://www.whois.com/whois/thangmaynhapngoai.com",
"https://www.whois.com/whois/dongduongxanhplastic.com",
"https://www.whois.com/whois/mhtcharcoal.com",
"https://www.whois.com/whois/ntc-ha.com",
"https://www.whois.com/whois/nemdaily.com",
"https://www.whois.com/whois/ruounhat.net",
"https://www.whois.com/whois/bachhoatincay.com",
"https://www.whois.com/whois/bachhoatincay.net",
"https://www.whois.com/whois/duhocnhatbanblue.com",
"https://www.whois.com/whois/epcuvaylongchau.com",
"https://www.whois.com/whois/nhadat62.com",
"https://www.whois.com/whois/nhadatlongan.vip",
"https://www.whois.com/whois/daythungangtaycaosu.com",
"https://www.whois.com/whois/keodunghiepphat.com",
"https://www.whois.com/whois/nhatquangbeefarm.com",
"https://www.whois.com/whois/phanbonsilic.net",
"https://www.whois.com/whois/binhlumi.com",
"https://www.whois.com/whois/ngoctraicaocapasana.com",
"https://www.whois.com/whois/ngoainguams.com",
"https://www.whois.com/whois/xaydungtic.com",
"https://www.whois.com/whois/dieukhachohung.com",
"https://www.whois.com/whois/hanagroupvn.com",
"https://www.whois.com/whois/aobongdathailan.net",
"https://www.whois.com/whois/aothailan.com",
"https://www.whois.com/whois/tuvanxe247.net",
"https://www.whois.com/whois/anphumy.com",
"https://www.whois.com/whois/dntnminhtrang.com",
"https://www.whois.com/whois/palletphuonglinh.com",
"https://www.whois.com/whois/thumuaphelieubinhduonggiacao.com",
"https://www.whois.com/whois/newlightvn.com",
"https://www.whois.com/whois/dothotrihieu.com",
"https://www.whois.com/whois/vanhanquoc.net",
"https://www.whois.com/whois/kenweddings.com",
"https://www.whois.com/whois/kientruchoanganh.com",
"https://www.whois.com/whois/sonmocinterior.com",
"https://www.whois.com/whois/alphaknx.com",
"https://www.whois.com/whois/baocaosuvina.com",
"https://www.whois.com/whois/chanvuco.com",
"https://www.whois.com/whois/dentrangtriquancafe.com",
"https://www.whois.com/whois/tailieumontoan.com",
"https://www.whois.com/whois/thienhainox.com",
"https://www.whois.com/whois/dienlanhanhduong.net",
"https://www.whois.com/whois/kenh888.com",
"https://www.whois.com/whois/baongocmobile.com",
"https://www.whois.com/whois/caitaonhacuhanoi.com",
"https://www.whois.com/whois/pureitvn-official.com",
"https://www.whois.com/whois/giayvesinhthuannguyen.com",
"https://www.whois.com/whois/baobiminhphuong.com",
"https://www.whois.com/whois/baobithuanphatbd.com",
"https://www.whois.com/whois/baovedelta.com",
"https://www.whois.com/whois/dongthinhphu.com",
"https://www.whois.com/whois/busanhoist.com",
"https://www.whois.com/whois/dailyhyundaihatinh.com",
"https://www.whois.com/whois/diengia.vn",
"https://www.whois.com/whois/quyphuctam.org",
"https://www.whois.com/whois/vuadrapnem.com",
"https://www.whois.com/whois/organicfarmcompany.com",
"https://www.whois.com/whois/pheulocsonminhhoa.com",
"https://www.whois.com/whois/thietkexaydungthienlong.com",
"https://www.whois.com/whois/moclanflower.com",
"https://www.whois.com/whois/anthinhconstruction.com",
"https://www.whois.com/whois/dolincorp.com",
"https://www.whois.com/whois/vantaiduongphat.com",
"https://www.whois.com/whois/cargobi.com",
"https://www.whois.com/whois/thegioioptuong3d.com",
"https://www.whois.com/whois/vietlongcovn.com",
"https://www.whois.com/whois/phuthotech.vn",
"https://www.whois.com/whois/dochoithongminhsbc.com",
"https://www.whois.com/whois/ongnhuacongtrinh.com",
"https://www.whois.com/whois/phelieutrungviet.net",
"https://www.whois.com/whois/vietscm.vn",
"https://www.whois.com/whois/noithatdoangiaphat.com",
"https://www.whois.com/whois/tbshop.vn",
"https://www.whois.com/whois/antoantech.com",
"https://www.whois.com/whois/datxanhservicces.com",
"https://www.whois.com/whois/dothocaocap591.com",
"https://www.whois.com/whois/trungquanbeauty.com",
"https://www.whois.com/whois/hannahlibrary.com",
"https://www.whois.com/whois/diamondcosmetic.vn",
"https://www.whois.com/whois/detbominhhao.com",
"https://www.whois.com/whois/sukiennguyenthaotravinh.com",
"https://www.whois.com/whois/thietbivesinhcuhcm.com",
"https://www.whois.com/whois/vietnamvaluable.com",
"https://www.whois.com/whois/drpharti.com",
"https://www.whois.com/whois/drpharti.net",
"https://www.whois.com/whois/nhanmyxua.vn",
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
