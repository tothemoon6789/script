// ="""https://www.whois.com/whois/"&A2&""","
const detailArray = [];
var interval = 50; // how much time should the delay between two iterations be (in milliseconds)?
let i = 0;
const url = [
    "https://www.whois.com/whois/donghuonglyson.com",
"https://www.whois.com/whois/tinhocngoisao.info",
"https://www.whois.com/whois/congngheductin.net",
"https://www.whois.com/whois/ourdesigncenter.net",
"https://www.whois.com/whois/vattunganhmay.net",
"https://www.whois.com/whois/intuonglai.com",
"https://www.whois.com/whois/batdongsanaz.asia",
"https://www.whois.com/whois/shopbichdang.com",
"https://www.whois.com/whois/senvietmedia.net",
"https://www.whois.com/whois/xemayhongan.com",
"https://www.whois.com/whois/thinhvuong.net",
"https://www.whois.com/whois/noithatre24h.com",
"https://www.whois.com/whois/inanhoangnam.com",
"https://www.whois.com/whois/nhaccuhello.com",
"https://www.whois.com/whois/hungdangdesign.com",
"https://www.whois.com/whois/karuna-canopies.com",
"https://www.whois.com/whois/phamphuong.com",
"https://www.whois.com/whois/vutrumoi.com",
"https://www.whois.com/whois/monkeyvietnam.online",
"https://www.whois.com/whois/duoccotruyen.net",
"https://www.whois.com/whois/t9solution.com",
"https://www.whois.com/whois/asvietnam.org",
"https://www.whois.com/whois/baotinsteel.com",
"https://www.whois.com/whois/phienchoonline.com",
"https://www.whois.com/whois/trungtamnghiencuuduoc.com",
"https://www.whois.com/whois/hoinghionline.com",
"https://www.whois.com/whois/sacpinoto.com",
"https://www.whois.com/whois/kingpower.info",
"https://www.whois.com/whois/chaiduocpham.com",
"https://www.whois.com/whois/nhakhoanhutam.com",
"https://www.whois.com/whois/phelieutamphat.com",
"https://www.whois.com/whois/vieclamvotec.com",
"https://www.whois.com/whois/datnenkhangdien.com",
"https://www.whois.com/whois/datnenphongphu4.com",
"https://www.whois.com/whois/hatnhuaabs.com",
"https://www.whois.com/whois/standaviet.com",
"https://www.whois.com/whois/nemdaily.com",
"https://www.whois.com/whois/ruounhat.net",
"https://www.whois.com/whois/alphasoftwaregroup.com",
"https://www.whois.com/whois/mimaxstore.com",
"https://www.whois.com/whois/duongsinhngoclinh.xyz",
"https://www.whois.com/whois/vtophucthinh.com",
"https://www.whois.com/whois/danhgiaxedap.com",
"https://www.whois.com/whois/locnuocminhdang.com",
"https://www.whois.com/whois/ninaairbnbvinhomes.com",
"https://www.whois.com/whois/nhadatcanhogiare.com",
"https://www.whois.com/whois/xaydungnghiaphat.com",
"https://www.whois.com/whois/tcttbearing.com",
"https://www.whois.com/whois/phelieudaihoangphat.com",
"https://www.whois.com/whois/caosugiongtayninh.com",
"https://www.whois.com/whois/muacaosugiong.com",
"https://www.whois.com/whois/ctyuniland.com",
"https://www.whois.com/whois/kthsecurity.com",
"https://www.whois.com/whois/anhsaocantho.com",
"https://www.whois.com/whois/queenihc.com",
"https://www.whois.com/whois/thietkewebcongty.asia",
"https://www.whois.com/whois/vietnamteachingjob.com",
"https://www.whois.com/whois/msahcm.online",
"https://www.whois.com/whois/tropical-arc.com",
"https://www.whois.com/whois/dichvuchuyennhahcm.net",
"https://www.whois.com/whois/khohangkhuyenmai.com",
"https://www.whois.com/whois/nhomxingfaangiang.com",
"https://www.whois.com/whois/nhomxingfaangiang.xyz",
"https://www.whois.com/whois/nhomxingfamientay.com",
"https://www.whois.com/whois/khunha.com",
"https://www.whois.com/whois/trangtinphapluat.net",
"https://www.whois.com/whois/saigonupcycle.com",
"https://www.whois.com/whois/nguyenlieuducmy.com",
"https://www.whois.com/whois/nguyenvantiep.com",
"https://www.whois.com/whois/thietbidaithanh.com",
"https://www.whois.com/whois/tranlai.com",
"https://www.whois.com/whois/daiphuquang.com",
"https://www.whois.com/whois/giaobiz.com",
"https://www.whois.com/whois/nhadep-group.com",
"https://www.whois.com/whois/3tbranding.com",
"https://www.whois.com/whois/vppanbinh.com",
"https://www.whois.com/whois/binhminhchautho.com",
"https://www.whois.com/whois/thinhtinphat.com",
"https://www.whois.com/whois/khachsanhungphat.com",
"https://www.whois.com/whois/kevalink.com",
"https://www.whois.com/whois/shophoabmt.com",
"https://www.whois.com/whois/amelia-bio.info",
"https://www.whois.com/whois/huongbeautyspa.com",
"https://www.whois.com/whois/suakhoathanhvo.com",
"https://www.whois.com/whois/camerasaoviet.com",
"https://www.whois.com/whois/zahrataynguyen.com",
"https://www.whois.com/whois/mangviettelhn.net",
"https://www.whois.com/whois/namvietmachine.com",
"https://www.whois.com/whois/linhkienaiot.com",
"https://www.whois.com/whois/tdung.xyz",
"https://www.whois.com/whois/thaovo.xyz",
"https://www.whois.com/whois/longthanhkien.com",
"https://www.whois.com/whois/davitrading.com",
"https://www.whois.com/whois/sweetyvietnam.com",
"https://www.whois.com/whois/huychuongchaybo.com",
"https://www.whois.com/whois/banxetaihaiphong.net",
"https://www.whois.com/whois/subohonson.com",
"https://www.whois.com/whois/hongfu-amara.com",
"https://www.whois.com/whois/enviduongvinh.com",
"https://www.whois.com/whois/maytinhgiapham.com",
"https://www.whois.com/whois/trahoaxuanhong.com",
"https://www.whois.com/whois/nguoigiangbuom.com",
"https://www.whois.com/whois/tarotnlife.com",
"https://www.whois.com/whois/ochuonghcm.com",
"https://www.whois.com/whois/forhimclub.com",
"https://www.whois.com/whois/nhadatkhutaysg.com",
"https://www.whois.com/whois/tongkhophaochi.com",
"https://www.whois.com/whois/vnpt-hcm.com",
"https://www.whois.com/whois/thanhxuancuata.xyz",
"https://www.whois.com/whois/batdongsantienphong.com",
"https://www.whois.com/whois/shopsextoy18t.com",
"https://www.whois.com/whois/vandatwanda.com",
"https://www.whois.com/whois/ngilogistics.com",
"https://www.whois.com/whois/atelovietnam.com",
"https://www.whois.com/whois/kenh888.com",
"https://www.whois.com/whois/cuoistore.com",
"https://www.whois.com/whois/kenzouni.com",
"https://www.whois.com/whois/lalabilingual.com",
"https://www.whois.com/whois/marketingnuu.com",
"https://www.whois.com/whois/vatlieuxaydungbmt.com",
"https://www.whois.com/whois/nguyenspa.com",
"https://www.whois.com/whois/antped.com",
"https://www.whois.com/whois/namhuanland.com",
"https://www.whois.com/whois/gameofsound.com",
"https://www.whois.com/whois/chodocuhanoi.com",
"https://www.whois.com/whois/phamthanhthanhnam.xyz",
"https://www.whois.com/whois/thuocthuysannguyenngoc.com",
"https://www.whois.com/whois/linhphukienmayphacaphe.com",
"https://www.whois.com/whois/luatvadoisong.com",
"https://www.whois.com/whois/luatviethoang.com",
"https://www.whois.com/whois/sonlongthinh.com",
"https://www.whois.com/whois/thatson.com",
"https://www.whois.com/whois/viethoanglaw.com",
"https://www.whois.com/whois/chattayruacongnghiep.com",
"https://www.whois.com/whois/phongphuvinh.com",
"https://www.whois.com/whois/thietbidiencongtrinh.com",
"https://www.whois.com/whois/lehoangpumps.com",
"https://www.whois.com/whois/fitstu.net",
"https://www.whois.com/whois/congdongmythuat.com",
"https://www.whois.com/whois/fredton.com",
"https://www.whois.com/whois/kvbvietnam.com",
"https://www.whois.com/whois/tin43.net",
"https://www.whois.com/whois/nguyenminhan.com",
"https://www.whois.com/whois/nipitigroup.com",
"https://www.whois.com/whois/baotri247.com",
"https://www.whois.com/whois/benhtrivanamhoc.com",
"https://www.whois.com/whois/ckdev.top",
"https://www.whois.com/whois/bdstrieudo.com",
"https://www.whois.com/whois/monannhalam.xyz",
"https://www.whois.com/whois/nguyendangtoanthang18042003.xyz",
"https://www.whois.com/whois/kimcuongcable.com",
"https://www.whois.com/whois/quangcaoinanbinhduong.com",
"https://www.whois.com/whois/uylucdat.com",
"https://www.whois.com/whois/thegioioptuong3d.com",
"https://www.whois.com/whois/luattruongthinh.com",
"https://www.whois.com/whois/vietau.net",
"https://www.whois.com/whois/inoxthanhphuco.com",
"https://www.whois.com/whois/cokhitamminhquan.com",
"https://www.whois.com/whois/pcccthanhdatbinhduong.com",
"https://www.whois.com/whois/canhotanuyen.com",
"https://www.whois.com/whois/conhantaohaly.com",
"https://www.whois.com/whois/thitruonggiadung.click",
"https://www.whois.com/whois/viettiennd.com",
"https://www.whois.com/whois/hoithaoykhoamjn.com",
"https://www.whois.com/whois/khuonviet.net",
"https://www.whois.com/whois/mentalhealth-hmu-charite.com",
"https://www.whois.com/whois/mitsubishi-vietnam.net",
"https://www.whois.com/whois/daonhatgiare.com",
"https://www.whois.com/whois/rota-giang.com",
"https://www.whois.com/whois/trinhdo.com",
"https://www.whois.com/whois/hahawavedecor.com",
"https://www.whois.com/whois/dienlanh86.com",
"https://www.whois.com/whois/aloviecnha.com",
"https://www.whois.com/whois/deltabrains.tech",
"https://www.whois.com/whois/lanbaohoang.com",
"https://www.whois.com/whois/nguyentrinhhoaithuong.xyz",
"https://www.whois.com/whois/vitutomedia.com",
"https://www.whois.com/whois/thietbifuji.com",
"https://www.whois.com/whois/thicongtrucauthanggiare.com",
"https://www.whois.com/whois/trucauthanggiasi.com",
"https://www.whois.com/whois/congvietgroup.com",
"https://www.whois.com/whois/xinhtuoimoingay.com",
"https://www.whois.com/whois/nguyenevent.com",
"https://www.whois.com/whois/greenpineplantdalat.com",
"https://www.whois.com/whois/vietthaicable.com",
"https://www.whois.com/whois/vietthaicable.net",
"https://www.whois.com/whois/dogotau.com",
"https://www.whois.com/whois/dichvuthuexehopdong.online",
"https://www.whois.com/whois/kientrucdepla.com",
"https://www.whois.com/whois/trieudohomes.com",
"https://www.whois.com/whois/dichvuvesinhgiahuynh.com",
"https://www.whois.com/whois/phukienphonggym.com",
"https://www.whois.com/whois/globetech-asia.com",
"https://www.whois.com/whois/hoangvietlong.com",
"https://www.whois.com/whois/thietbigiaoductantien.com",
"https://www.whois.com/whois/batdongsan-phumy.com",
"https://www.whois.com/whois/nenphucsinh.com",
"https://www.whois.com/whois/thachcaoanhtuan.com",
"https://www.whois.com/whois/nanorightgroup.com",
"https://www.whois.com/whois/hangsay.com",
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
