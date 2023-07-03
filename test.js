const o = "https://hosocongty.vn/ngay-27/06/2023/page-";
const t = 2; //total
// END CONFIG HERE
const l = []; // link
const f = []; // father
const d = []; // detail
var c = 0;
for (let index = 1; index <= t; index++) {
  f.push(o + index);
}
const f1 = () => {
  return new Promise((resolve) => {
    f.forEach((element) => {
      const w = window.open(element);
      w.addEventListener("DOMContentLoaded", function (event) {
        //do work
        w.document.querySelectorAll(".hsdn")[0].childNodes.forEach((item) => {
          let link = item.lastChild.lastChild.href;
          if (link) {
            l.push(link);
          }
        });
        resolve();
        w.close();
      });
    });
  });
};

function f2() {
  return new Promise((resolve) => {
    if (c < l.length) {
      const mw = window.open(l[c]);
      mw.addEventListener("DOMContentLoaded", function (event) {
        const tenCongTy =
          mw.document.querySelectorAll(".box_content")[0].childNodes[0]
            .childNodes[0].childNodes[0];
        // ten khach hang
        const tenKhachHang =
          mw.document.querySelectorAll(".box_content")[0].childNodes[1]
            .childNodes[0].childNodes[1];
        //so dien thoai
        const soDienThoai =
          mw.document.querySelectorAll(".box_content")[0].childNodes[1]
            .childNodes[1].childNodes[1];
        // nganh nghe
        const nganhNghe = "KHONG MUON TIM";
        //Trang thai
        const trangThai = "KHOGN MUON TIM";
        const danhSach = [];
        // if (tenCongTy && tenKhachHang && soDienThoai) {
        // }
        danhSach.push(l[c]);
        danhSach.push(soDienThoai.innerText);
        danhSach.push(tenCongTy.innerText);
        danhSach.push(tenKhachHang.innerText);
        danhSach.push(nganhNghe.innerText);
        danhSach.push(nganhNghe)
        danhSach.push(trangThai);
        d.push(danhSach);
        c++;
        mw.close();
        resolve();
        f2();
      });
    } else {
      generateCSV(d);
    }
  });
}

function generateCSV(data) {
  var csv = "Số điện thoại, Link, Tên CTY, Tên Khách, Ngành, Trạng Thái, ,\n";
  data.sort()
  data.forEach(function (row) {
    csv += row.join(",");
    csv += "\n";
  });

  var e = document.createElement("a");
  e.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
  e.target = "_blank";
  e.download = "data.csv";
  e.click();
}
async function calling() {
  await f1();
  await f2();
}
calling();
