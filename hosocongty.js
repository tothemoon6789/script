import { wait } from "@testing-library/user-event/dist/utils";

//TODO : ----chuan------ lay toan bo link cua hosocongty trong 1 page
const linkArray = [];
document.querySelectorAll(".hsdn")[0].childNodes.forEach((item) => {
  let link = item.lastChild.lastChild.href;
  if (link) {
    linkArray.push(link);
  }
});
console.log(linkArray);
//TODO : ----chuan------ lay toan bo link cua hosocongty trong 1 page

//TODO: ^^^^^^^^^^^^^^^^^^^^LINK CON TRONG LINK CHA^^^^^^^^^^^^^^^^^^^^^^^^
const linkArray = [];
const newWindow = window.open(
  "https://hosocongty.vn/ngay-27/03/2023-ho-chi-minh/page-3"
);
newWindow.addEventListener("DOMContentLoaded", function (event) {
  //do work
  newWindow.document.querySelectorAll(".hsdn")[0].childNodes.forEach((item) => {
    let link = item.lastChild.lastChild.href;
    if (link) {
      linkArray.push(link);
    }
  });
  console.log(linkArray);
  newWindow.close();
});
//TODO: ^^^^^^^^^^^^^^^^^^^^LINK CON TRONG LINK CHA^^^^^^^^^^^^^^^^^^^^^^^^





// BUOC 1




//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
const linkArray = [];
const allFatherLink = [
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-1",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-2",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-3",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-4",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-5",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-6",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-7",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-8",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-9",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-10",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-11",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-12",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-13",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-14",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-15",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-16",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-17",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-18",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-19",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-20",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-21",
  "https://hosocongty.vn/ngay-07/03/2023-ho-chi-minh/page-22",
];
allFatherLink.forEach((element) => {
  const newWindow = window.open(element);
  newWindow.addEventListener("DOMContentLoaded", function (event) {
    //do work
    newWindow.document
      .querySelectorAll(".hsdn")[0]
      .childNodes.forEach((item) => {
        let link = item.lastChild.lastChild.href;
        if (link) {
          linkArray.push(link);
        }
      });
    console.log(linkArray);
    newWindow.close();
  });
});




// BUOC 2





//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
const detailArray = [];
const allFatherLink = 
[
  "https://hosocongty.vn/ly-be-hieu-com-2870207.htm",
  "https://hosocongty.vn/nguyen-ro-anh-do-com-2870157.htm",
  "https://hosocongty.vn/nguyen-thi-phuong-mai-com-2870019.htm",
  "https://hosocongty.vn/ngo-minh-phuong-com-2870018.htm",
  "https://hosocongty.vn/vo-thanh-toan-com-2870017.htm",
  "https://hosocongty.vn/le-thi-kim-thao-com-2870016.htm",
  "https://hosocongty.vn/cong-ty-co-phan-xay-dung-kien-truc-maxplus-com-2869845.htm",
  "https://hosocongty.vn/cong-ty-tnhh-ac-quy-an-binh-com-2869833.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-manh-phong-khanh-com-2869832.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-va-dich-vu-du-lich-quang-hung-travel-com-2869830.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dich-vu-to-nhien-com-2869829.htm",
  "https://hosocongty.vn/cong-ty-tnhh-cuc-tay-retail-com-2869823.htm",
  "https://hosocongty.vn/cong-ty-tnhh-tm-dv-px-group-com-2868718.htm",
  "https://hosocongty.vn/cong-ty-tnhh-five-pharma-com-2868717.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thiet-ke-xay-dung-an-dat-group-com-2868712.htm",
  "https://hosocongty.vn/cong-ty-co-phan-dau-tu-xay-dung-truong-thanh-lands-com-2868664.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thiet-ke-xay-dung-m-ampe-com-2868661.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thiet-ke-va-xay-dung-929-com-2868660.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-nhua-dai-duy-tan-com-2868659.htm",
  "https://hosocongty.vn/cong-ty-tnhh-mot-thanh-vien-tola-com-2868656.htm",
  "https://hosocongty.vn/cong-ty-tnhh-tin-phat-hoa-com-2868655.htm",
  "https://hosocongty.vn/cong-ty-tnhh-tm-dv-dt-duc-phat-com-2868652.htm",
  "https://hosocongty.vn/cong-ty-tnhh-kinh-doanh-go-va-trang-tri-noi-that-aq-com-2868650.htm",
  "https://hosocongty.vn/cong-ty-tnhh-pacific-asia-group-com-2868647.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-huu-lien-a-nam-com-2866973.htm",
  "https://hosocongty.vn/cong-ty-tnhh-truyen-thong--amp-quang-cao-ha-khanh-dong-com-2866971.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-ky-thuat-co-dien--amp-pccc-thang-loi-com-2866970.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dich-vu-cong-nghe-va-truyen-thong-map-solutions-com-2866969.htm",
  "https://hosocongty.vn/cong-ty-tnhh-mtv-auto-loc-phat-com-2866968.htm",
  "https://hosocongty.vn/cong-ty-tnhh-minach-com-2866966.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thoi-trang-tre-em-vi-vi-com-2866964.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dich-vu-cham-soc-suc-khoe-thien-duong-com-2866960.htm",
  "https://hosocongty.vn/cong-ty-tnhh-homes-by-idg-com-2866959.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-anh-va-anh-com-2866958.htm",
  "https://hosocongty.vn/dntn-vu-van-nang-com-2866957.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-ky-thuat-anydrone-com-2866956.htm",
  "https://hosocongty.vn/cong-ty-tnhh-pho-production-com-2867000.htm",
  "https://hosocongty.vn/cong-ty-tnhh-mot-thanh-vien-thuong-mai-dich-vu-xuat-nhap-khau-d2a-com-2866999.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-kho-bai-phuong-nam-com-2866996.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-vat-tu-hoang-khang-com-2866995.htm",
  "https://hosocongty.vn/cong-ty-tnhh-xuat-nhap-khau-sai-gon-decor-com-2866985.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thiet-ke-va-thi-cong-noi-that-long-chau-com-2866984.htm",
  "https://hosocongty.vn/cong-ty-tnhh-tm--amp-dv-khach-san-gia-minh-com-2866981.htm",
  "https://hosocongty.vn/cong-ty-tnhh-xuat-nhap-khau-vini-com-2866980.htm",
  "https://hosocongty.vn/cong-ty-co-phan-tap-doan-habimec-group-com-2866977.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dau-tu-phat-trien-ha-thien-anh-com-2866976.htm",
  "https://hosocongty.vn/cong-ty-tnhh-spices-star-com-2866975.htm",
  "https://hosocongty.vn/cong-ty-tnhh-xay-dung-an-nhan-com-2866974.htm",
  "https://hosocongty.vn/cong-ty-tnhh-saic-motor-viet-nam-com-2866677.htm",
  "https://hosocongty.vn/cong-ty-tnhh-phat-trien-thuong-mai-xay-dung-le-nguyen-com-2866676.htm",
  "https://hosocongty.vn/dntn-huynh-thai-hung-com-2866675.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-le-thach-nam-com-2866656.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dau-tu-thuong-mai-va-dich-vu-tkl-com-2866655.htm",
  "https://hosocongty.vn/cong-ty-tnhh-veronica-_039s-beauty-com-2866654.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-royal-home-_039s-sg-com-2866653.htm",
  "https://hosocongty.vn/cong-ty-tnhh-phan-mem-order-multi-com-2866649.htm",
  "https://hosocongty.vn/cong-ty-co-phan-quan-ly-co-so-vat-chat-giao-duc-fm-com-2866645.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-va-dich-vu-ben-nhau-com-2866644.htm",
  "https://hosocongty.vn/cong-ty-tnhh-minz-beauty-com-2866643.htm",
  "https://hosocongty.vn/cong-ty-tnhh-quoc-te-gim-com-2866641.htm",
  "https://hosocongty.vn/cong-ty-tnhh-pixiu-media-com-2867069.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dich-vu-cong-nghe-qt-solutions-com-2867068.htm",
  "https://hosocongty.vn/cong-ty-tnhh-limth-com-2867067.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-phuc-an-acct-com-2867066.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-dau-tu-k-ampk-com-2867065.htm",
  "https://hosocongty.vn/cong-ty-trach-nhiem-huu-han-finworld-com-2867063.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-tan-manh-hung-com-2867062.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-san-xuat-hai-yen-com-2867061.htm",
  "https://hosocongty.vn/cong-ty-tnhh-tm-dich-vu-hoang-kim-com-2867059.htm",
  "https://hosocongty.vn/dntn-pham-thi-thuy-kieu-com-2867058.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-kataco-com-2867052.htm",
  "https://hosocongty.vn/cong-ty-trach-nhiem-huu-han-dich-vu-du-lich-first-unite-com-2867051.htm",
  "https://hosocongty.vn/thai-truong-son-com-2900320.htm",
  "https://hosocongty.vn/cong-ty-luat-tnhh-mot-thanh-vien-tri-an-chi-nhanh-thanh-pho-ho-chi-minh-com-2899343.htm",
  "https://hosocongty.vn/nguyen-phuoc-hai-com-2892056.htm",
  "https://hosocongty.vn/chi-nhanh-cong-ty-tnhh-thuong-mai-xuat-nhap-khau-j-va-n-com-2887277.htm",
  "https://hosocongty.vn/vu-duy-long-com-2883691.htm",
  "https://hosocongty.vn/thai-dang-quoc-com-2883114.htm",
  "https://hosocongty.vn/van-phong-dai-dien-cong-ty-tnhh-collectius-cms-viet-nam-com-2881352.htm",
  "https://hosocongty.vn/sy-sau-lin-com-2881138.htm",
  "https://hosocongty.vn/van-phong-dai-dien-cong-ty-tnhh-thuong-mai-dich-vu-analee-fresh-food-com-2878301.htm",
  "https://hosocongty.vn/chi-nhanh-cong-ty-tnhh-san-xuat-thuong-mai-dich-vu-hai-dang-phat-com-2878295.htm",
  "https://hosocongty.vn/chi-nhanh-cong-ty-co-phan-kim-technology-com-2878291.htm",
  "https://hosocongty.vn/chi-nhanh-cong-ty-tnhh-noi-that-va-quang-cao-hoang-gia-com-2878287.htm",
  "https://hosocongty.vn/cong-ty-tnhh-en-pilates-com-2867875.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dich-vu-cham-soc-va-giao-duc-truong-lam-com-2867430.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dich-vu-xang-dau-tran-nguyen-com-2867196.htm",
  "https://hosocongty.vn/dntn-tran-thi-thu-thuy-com-2867133.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dau-tu-va-xay-dung-hoa-tan-com-2867132.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-xuat-nhap-khau-halam-com-2867129.htm",
  "https://hosocongty.vn/cong-ty-tnhh-elite-network-com-2867128.htm",
  "https://hosocongty.vn/cong-ty-co-phan-giao-duc-mentor-parents-com-2867125.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dich-vu-thuong-mai-phuong-hoi-com-2867124.htm",
  "https://hosocongty.vn/cong-ty-tnhh-xnk-thien-phu-loc-com-2867123.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dau-tu-va-thuong-mai-dmg-com-2867122.htm",
  "https://hosocongty.vn/cong-ty-tnhh-tm-go-va-trang-tri-noi-that-tam-uyen-com-2867121.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thiet-ke-3d-khong-gian-com-2867084.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-dinh-trung-com-2867083.htm",
  "https://hosocongty.vn/cong-ty-tnhh-tan-hoa-ky-com-2867082.htm",
  "https://hosocongty.vn/cong-ty-tnhh-vang-bac-kim-do-phat-com-2867081.htm",
  "https://hosocongty.vn/dntn-sx-nguyen-duc-quang-com-2867080.htm",
  "https://hosocongty.vn/dntn-bui-quang-quang-com-2867079.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dinh-thi-mai-com-2867078.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thoi-trang-venifa-com-2867077.htm",
  "https://hosocongty.vn/cong-ty-tnhh-xay-dung-va-kien-truc-thanh-van-com-2867075.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-mtv-doan-ket-com-2867074.htm",
  "https://hosocongty.vn/cong-ty-tnhh-moc-nhien-ca-phe-com-2867073.htm",
  "https://hosocongty.vn/cong-ty-tnhh-phong-tra-khieu-vu-ngoc-hoa-com-2867071.htm",
  "https://hosocongty.vn/cong-ty-tnhh-vai-xanh-sai-gon-com-2866773.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dich-vu-ke-toan-thue-hk-com-2866772.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-du-lich-duy-hoang-com-2866771.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dich-vu-dau-tu-xay-dung-dai-hung-phat-com-2866768.htm",
  "https://hosocongty.vn/cong-ty-co-phan-nong-nghiep-vina-fruit-com-2866767.htm",
  "https://hosocongty.vn/cong-ty-tnhh-rsa-toan-cau-com-2866766.htm",
  "https://hosocongty.vn/cong-ty-tnhh-kinh-doanh-vat-lieu-xay-dung-va-thi-cong-tien-phat-com-2866762.htm",
  "https://hosocongty.vn/cong-ty-tnhh-mot-thanh-vien-pt-sai-gon-com-2866761.htm",
  "https://hosocongty.vn/cong-ty-tnhh-nha-hang-am-thuc-nai-vang-com-2866697.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dich-vu-prodex-com-2866695.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thien-trung-audio-com-2866688.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thiet-ke-va-xay-dung-39s-design-com-2866685.htm",
  "https://hosocongty.vn/pham-thi-bich-tuyen-com-2871237.htm",
  "https://hosocongty.vn/le-thi-thu-huyen-com-2871234.htm",
  "https://hosocongty.vn/ngo-tran-hoai-bac-com-2871228.htm",
  "https://hosocongty.vn/nguyen-hong-tuan-com-2871210.htm",
  "https://hosocongty.vn/chi-nhanh-cong-ty-tnhh-mot-thanh-vien-thuong-mai-dich-vu-nhu-huy-com-2870359.htm",
  "https://hosocongty.vn/le-truong-giang-com-2870357.htm",
  "https://hosocongty.vn/pham-thi-bich-tram-com-2870315.htm",
  "https://hosocongty.vn/ho-kinh-doanh-bun-thai-ba-quan--nguyen-thi-hoang-diem--com-2870310.htm",
  "https://hosocongty.vn/ho-kinh-doanh-van-anh-sap-1516-to-08--tran-thi-lam--com-2870308.htm",
  "https://hosocongty.vn/phan-duy-khanh-com-2870289.htm",
  "https://hosocongty.vn/le-thi-thuy-com-2870287.htm",
  "https://hosocongty.vn/pham-ba-hoang-anh-com-2870218.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-salon-o-to-quoc-vu-com-2869818.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-quang-cao-thanh-tung-com-2869794.htm",
  "https://hosocongty.vn/cong-ty-co-phan-magic-international-solution-com-2869771.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-xay-dung-cong-khanh-com-2869477.htm",
  "https://hosocongty.vn/cong-ty-co-phan-xay-dung-noi-that-dien-lanh-kha-nam-com-2869464.htm",
  "https://hosocongty.vn/cong-ty-tnhh-tmdv-xay-dung-tan-sai-gon-com-2869462.htm",
  "https://hosocongty.vn/cong-ty-tnhh-kien-truc-va-thiet-ke-xd-acp-com-2869460.htm",
  "https://hosocongty.vn/cong-ty-tnhh-potluck-production-com-2869458.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-phuc-tin-solar-com-2869456.htm",
  "https://hosocongty.vn/cong-ty-tnhh-lw-mh-sea-pte-com-2869453.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-quang-cao-hao-quang-com-2869339.htm",
  "https://hosocongty.vn/nguyen-ngoc-mai-com-2869006.htm",
  "https://hosocongty.vn/cong-ty-tnhh-phu-lieu-ngu-kim-giai-loi-com-2867025.htm",
  "https://hosocongty.vn/cong-ty-tnhh-maison-villa-com-2867024.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dich-vu-tri-khang-com-2867021.htm",
  "https://hosocongty.vn/cong-ty-tnhh-san-xuat-thuong-mai-plastic-nam-long-phat-com-2867017.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-amity-home-com-2867016.htm",
  "https://hosocongty.vn/cong-ty-tnhh-xuat-nhap-khau-vien-phuong-dong-com-2867015.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dien-lanh-hoang-anh-dat-com-2867014.htm",
  "https://hosocongty.vn/cong-ty-tnhh-cong-nghe-tanke-viet-nam-com-2867013.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-va-san-xuat-thinh-an-phat-com-2867009.htm",
  "https://hosocongty.vn/cong-ty-tnhh-mtv-tm-dv-thy-danh-com-2867007.htm",
  "https://hosocongty.vn/cong-ty-tnhh-kinh-doanh-thuong-mai-va-dich-vu-hlt-com-2867004.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuc-pham-le-my-com-2867002.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-quoc-te-ttp-com-2867099.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-va-dich-vu-thien-tran-chau-com-2867098.htm",
  "https://hosocongty.vn/cong-ty-tnhh-san-xuat-mot-thanh-vien-quy-an-com-2867097.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dau-tu-viet-nam-quoc-te-vis-com-2867096.htm",
  "https://hosocongty.vn/cong-ty-co-phan-thuong-mai-dich-vu-minh-nam-hai-com-2867095.htm",
  "https://hosocongty.vn/cong-ty-tnhh-quang-cao-viet-hong-media-com-2867093.htm",
  "https://hosocongty.vn/cong-ty-tnhh-an-uong-van-anh-duy-anh-com-2867090.htm",
  "https://hosocongty.vn/cong-ty-tnhh-aker-biomarine-antarctic-australia-pty-com-2867089.htm",
  "https://hosocongty.vn/cong-ty-tnhh-tu-van-thuong-mai-va-dich-vu-tinh-hoa-viet-com-2867088.htm",
  "https://hosocongty.vn/cong-ty-co-phan-thuong-mai-dich-vu-the-thao-manh-dung-com-2867087.htm",
  "https://hosocongty.vn/cong-ty-tnhh-phan-bon-than-nong-vang-com-2867086.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-van-tai-quoc-tri-com-2867085.htm",
  "https://hosocongty.vn/cong-ty-tnhh-core-allianz-com-2868646.htm",
  "https://hosocongty.vn/cong-ty-tnhh-tmdv-tuan-nguyen-com-2868644.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dich-vu-first-floor-com-2868640.htm",
  "https://hosocongty.vn/cong-ty-tnhh-zaam-international-sourcing-com-2868633.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-an-binh-chiby-com-2868622.htm",
  "https://hosocongty.vn/luyen-thi-thuy-com-2868407.htm",
  "https://hosocongty.vn/bui-manh-com-2868405.htm",
  "https://hosocongty.vn/cong-ty-tnhh-cong-nghe-vinheco-com-2867922.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-xay-dung-kdk-com-2867902.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dau-tu--amp-phat-trien-ky-thuat-so-eth-com-2867898.htm",
  "https://hosocongty.vn/cong-ty-co-phan-xuat-khau--amp-nhap-khau-china-jing-an-com-2867894.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dich-vu-tu-van-kt-kim-hoa-com-2867880.htm",
  "https://hosocongty.vn/cong-ty-co-phan-hai-minh-long-com-2866955.htm",
  "https://hosocongty.vn/cong-ty-tnhh-bull-manufacturing-com-2866954.htm",
  "https://hosocongty.vn/cong-ty-tnhh-mysource-com-2866953.htm",
  "https://hosocongty.vn/cong-ty-co-phan-dau-tu-thiet-ke-xay-dung-vizion-com-2866952.htm",
  "https://hosocongty.vn/cong-ty-co-phan-dau-tu-xay-dung-va-noi-that-binh-phu-com-2866951.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-co-dien-lanh-duc-huy-com-2866948.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuc-pham-va-do-uong-an-toan-viet-nam-com-2866946.htm",
  "https://hosocongty.vn/cong-ty-tnhh-tm-dv-tam-truong-an-com-2866945.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-dau-tu-dien-phat-com-2866944.htm",
  "https://hosocongty.vn/cong-ty-co-phan-gct-binh-duong-com-2866939.htm",
  "https://hosocongty.vn/cong-ty-tnhh-nha-hang-am-thuc-huong-cau-com-2866938.htm",
  "https://hosocongty.vn/cong-ty-tnhh-quang-huy-pham-com-2866937.htm",
  "https://hosocongty.vn/tu-thi-thu-lan-com-2873749.htm",
  "https://hosocongty.vn/nguyen-thi-nhu-quynh-com-2873309.htm",
  "https://hosocongty.vn/tran-thi-mong-truc-com-2872918.htm",
  "https://hosocongty.vn/chi-nhanh-cong-ty-tnhh-dau-tu-san-xuat-thuong-mai-dich-vu-nguyen-trang-com-2872732.htm",
  "https://hosocongty.vn/chi-nhanh-cong-ty-tnhh-phuc-huy-office-com-2872694.htm",
  "https://hosocongty.vn/chi-nhanh-2-cong-ty-tnhh-thuong-mai-dich-vu-choi-xanh-media-com-2872688.htm",
  "https://hosocongty.vn/van-phong-dai-dien-cong-ty-tnhh-mot-thanh-vien-thuong-mai-dich-vu-my-gia-lac-com-2872687.htm",
  "https://hosocongty.vn/chi-nhanh-cong-ty-tnhh-thuong-mai-dich-vu-paris-nha-hang-paris-2-com-2872542.htm",
  "https://hosocongty.vn/chi-nhanh-1-cong-ty-tnhh-cay-xanh-nhat-duong-com-2872482.htm",
  "https://hosocongty.vn/chi-nhanh-cong-ty-tnhh-thuong-mai-dich-vu-g-advertising-com-2872443.htm",
  "https://hosocongty.vn/nguyen-thi-hong-hanh-com-2872081.htm",
  "https://hosocongty.vn/tran-van-tinh-com-2872080.htm",
  "https://hosocongty.vn/chi-nhanh-vo-roof-cong-ty-tnhh-bep-vo-com-2878281.htm",
  "https://hosocongty.vn/chi-nhanh-cong-ty-tnhh-dich-vu-san-xuat-cong-thanh-nam-com-2878264.htm",
  "https://hosocongty.vn/chi-nhanh-cong-ty-tnhh-lien-doanh-quang-trung-com-2878258.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-va-dich-vu-vien-thong-tai-phat-chi-nhanh-thanh-pho-ho-chi-minh-com-2878250.htm",
  "https://hosocongty.vn/ho-kinh-doanh-tran-luong-com-2876517.htm",
  "https://hosocongty.vn/tri__n-vi__n-hi__i-com-2873946.htm",
  "https://hosocongty.vn/nguyi__n-hi__ng-phi__i__ng-com-2873945.htm",
  "https://hosocongty.vn/cong-ty-co-phan-am-thuc-199275-nhat-truong-cuu-nhi-chi-nhanh-bau-xi-giun-com-2873881.htm",
  "https://hosocongty.vn/chi-nhanh-cong-ty-tnhh-kinh-doanh-thuong-mai-dich-vu-co-khi-minh-nguyen-com-2873880.htm",
  "https://hosocongty.vn/chi-nhanh-cong-ty-tnhh-mtv-kim-binh-com-2873859.htm",
  "https://hosocongty.vn/hoi__ng-thi__-hi__u-com-2873763.htm",
  "https://hosocongty.vn/nguyi__n-phi__i__c-thanh-com-2873750.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuy-san-hai-hoang-com-2867047.htm",
  "https://hosocongty.vn/cong-ty-tnhh-san-xuat-gia-cong-may-ht-com-2867046.htm",
  "https://hosocongty.vn/cong-ty-tnhh-san-xuat-thuong-mai-giay-huy-hoang-com-2867043.htm",
  "https://hosocongty.vn/cong-ty-tnhh-phat-trien-cong-nghe-quang-cao-vu-gia-com-2867041.htm",
  "https://hosocongty.vn/cong-ty-tnhh-almohandes-insaat-com-2867039.htm",
  "https://hosocongty.vn/cong-ty-tnhh-cong-nghe-in-hd-com-2867038.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-tai-zhou-viet-nam-com-2867037.htm",
  "https://hosocongty.vn/cong-ty-co-phan-techpass-com-2867036.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dich-vu-bao-bi--amp-in-an-an-phat-com-2867034.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-quoc-te-c-mart-tools-com-2867032.htm",
  "https://hosocongty.vn/cong-ty-tnhh-tana-invest-com-2867027.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-dau-tu-xuat-nhap-khau-bao-chau-com-2867026.htm",
  "https://hosocongty.vn/vien-y-duoc-viet-com-2868987.htm",
  "https://hosocongty.vn/cong-ty-tnhh-un-wol-com-2868772.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dich-vu-bao-ve-thang-long-an-ninh-24-com-2868764.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-va-dich-vu-me-be-mia-care-com-2868763.htm",
  "https://hosocongty.vn/cong-ty-co-phan-thuong-mai-vat-tu-y-te-duc-tin-com-2868760.htm",
  "https://hosocongty.vn/cong-ty-co-phan-cong-nghe-giao-duc-native-x-com-2868759.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-thiet-bi-trac-dia-tu-hai-qd-com-2868758.htm",
  "https://hosocongty.vn/cong-ty-tnhh-lt-group-viet-nam-com-2868736.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dich-vu-giat-say-phuc-nguyen-com-2868730.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-thanh-thanh-do-com-2868728.htm",
  "https://hosocongty.vn/cong-ty-tnhh-tm-dv-nhut-linh-com-2868724.htm",
  "https://hosocongty.vn/cong-ty-tnhh-douglas-j-white-com-2868721.htm",
  "https://hosocongty.vn/cong-ty-tnhh-cung-ung-lao-dong-va-may-mac-minh-man-com-2867119.htm",
  "https://hosocongty.vn/cong-ty-tnhh-che-bien-va-kinh-doanh-go-thanh-ba-com-2867117.htm",
  "https://hosocongty.vn/cong-ty-tnhh-inox-trung-kim-com-2867116.htm",
  "https://hosocongty.vn/cong-ty-tnhh-dau-tu-cara-com-2867114.htm",
  "https://hosocongty.vn/cong-ty-tnhh-phan-van-hien-com-2867113.htm",
  "https://hosocongty.vn/cong-ty-tnhh-onature-com-2867110.htm",
  "https://hosocongty.vn/cong-ty-tnhh-saigon-cryo-cell-com-2867108.htm",
  "https://hosocongty.vn/cong-ty-co-phan-thuong-mai-dau-tu-xay-dung-mekong-land-com-2867104.htm",
  "https://hosocongty.vn/cong-ty-tnhh-san-xuat-pha-le-gia-phat-com-2867103.htm",
  "https://hosocongty.vn/cong-ty-tnhh-diet-moi-diet-con-trung-tan-goc-3-mien-minh-chau-com-2867102.htm",
  "https://hosocongty.vn/cong-ty-tnhh-do-hoang-anh-com-2867101.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-dien-anh-sang-viet-com-2867100.htm",
  "https://hosocongty.vn/cong-ty-tnhh-keystone-advisory-com-2866907.htm",
  "https://hosocongty.vn/cong-ty-tnhh-zoefly-investment-com-2866846.htm",
  "https://hosocongty.vn/cong-ty-tnhh-creative-fashion-com-2866844.htm",
  "https://hosocongty.vn/cong-ty-tnhh-thuong-mai-dich-vu-the-kas-com-2866835.htm",
  "https://hosocongty.vn/cong-ty-tnhh-tm-dv-vien-thong-mt-com-2866834.htm",
  "https://hosocongty.vn/cong-ty-tnhh-lap-dat-va-xay-dung-dong-hai-com-2866832.htm",
  "https://hosocongty.vn/cong-ty-tnhh-moi-si-com-2866831.htm",
  "https://hosocongty.vn/cong-ty-tnhh-contrau-aquaculture-technology-jv-com-2866827.htm",
  "https://hosocongty.vn/cong-ty-co-phan-farmers-holding-group-com-2866784.htm",
  "https://hosocongty.vn/cong-ty-tnhh-my-pham-tony-tony-com-2866779.htm",
  "https://hosocongty.vn/cong-ty-tnhh-cong-nghe-va-truyen-thong-cygnus-com-2866778.htm",
  "https://hosocongty.vn/cong-ty-tnhh-vitop-viet-nam-com-2866774.htm"
];
var interval = 500; // how much time should the delay between two iterations be (in milliseconds)?
var promise = Promise.resolve();
allFatherLink.forEach((element) => {
  promise = promise.then(function () {
    
    
    
  
  const newWindow = window.open(element);
  newWindow.addEventListener("DOMContentLoaded", function (event) {
    const tenCongTy =
      newWindow.document.querySelectorAll(".box_content")[0].childNodes[0]
        .childNodes[0].childNodes[0].innerText;
    // ten khach hang
    const tenKhachHang =
      newWindow.document.querySelectorAll(".box_content")[0].childNodes[1]
        .childNodes[0].childNodes[1].innerText;
    //so dien thoai
    const soDienThoai =
      newWindow.document.querySelectorAll(".box_content")[0].childNodes[1]
        .childNodes[1].childNodes[1].innerText;
    // nganh nghe
    const nganhNghe =
      newWindow.document.querySelectorAll(".box_content")[0].childNodes[1]
        .childNodes[3].childNodes[1].innerText;
    //Trang thai
    const trangThai =
      newWindow.document.querySelectorAll(".box_content")[0].childNodes[1]
        .childNodes[4].childNodes[1].innerText;
    const danhSach = [];
    danhSach.push(element)
    danhSach.push(tenCongTy);
    danhSach.push(tenKhachHang);
    danhSach.push(nganhNghe);
    danhSach.push(trangThai);
    danhSach.push(soDienThoai);
    detailArray.push(danhSach)
    newWindow.close();
  });
  
  return new Promise(function (resolve) {
    setTimeout(resolve, interval);
  });
});
});
promise.then(function () {
  console.log('Loop finished.');
  console.log(detailArray);
  generateCSV(detailArray)
  
});
function generateCSV(data) {
  var csv = 'Link, Tên CTY, Tên Khách, Ngành, Trạng Thái, Số điện thoại,\n';
  data.forEach(function(row) {
      csv += row.join(',');
      csv += "\n";
  });

  var hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'data.csv';
  hiddenElement.click();
}
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
