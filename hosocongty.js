// import { wait } from "@testing-library/user-event/dist/utils";

// //TODO : ----chuan------ lay toan bo link cua hosocongty trong 1 page
// const linkArray = [];
// document.querySelectorAll(".hsdn")[0].childNodes.forEach((item) => {
//   let link = item.lastChild.lastChild.href;
//   if (link) {
//     linkArray.push(link);
//   }
// });
// console.log(linkArray);
// //TODO : ----chuan------ lay toan bo link cua hosocongty trong 1 page

// //TODO: ^^^^^^^^^^^^^^^^^^^^LINK CON TRONG LINK CHA^^^^^^^^^^^^^^^^^^^^^^^^
// const linkArray = [];
// const newWindow = window.open(
//   "https://hosocongty.vn/ngay-27/03/2023-ho-chi-minh/page-3"
// );
// newWindow.addEventListener("DOMContentLoaded", function (event) {
//   //do work
//   newWindow.document.querySelectorAll(".hsdn")[0].childNodes.forEach((item) => {
//     let link = item.lastChild.lastChild.href;
//     if (link) {
//       linkArray.push(link);
//     }
//   });
//   console.log(linkArray);
//   newWindow.close();
// });
// //TODO: ^^^^^^^^^^^^^^^^^^^^LINK CON TRONG LINK CHA^^^^^^^^^^^^^^^^^^^^^^^^

// BUOC 1

//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^

const oriLink = "https://hosocongty.vn/ngay-27/06/2023/page-";
const total = 5;
// END CONFIG HERE
const linkArray = [];
const allFatherLink = [];
const firstStep = () => {
  for (let index = 1; index <= total; index++) {
    allFatherLink.push(oriLink + index);
  }
  console.log(allFatherLink);
  return new Promise((resolve) => {
    allFatherLink.forEach((element) => {
      console.log(element);
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
        resolve();
      });
    });
  });
};

// BUOC 2

const secondeStep = () => {
  console.log('LOG TAI BUOC 2');
  console.log(allFatherLink);
  const detailArray = [];
  // return new Promise(() => {
 

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
        'KHONG MUON TIM'
      //Trang thai
      const trangThai =
        'KHOGN MUON TIM'
      const danhSach = [];
      danhSach.push(element);
        danhSach.push(tenCongTy);
        danhSach.push(tenKhachHang);
        danhSach.push(nganhNghe);
        danhSach.push(trangThai);
        danhSach.push(soDienThoai);
        detailArray.push(danhSach);
        newWindow.close();
      
    });

    return new Promise(function (resolve) {
      setTimeout(resolve, interval);
    });
  });
});
   
// })
}

function generateCSV(data) {
  var csv = "Link, Tên CTY, Tên Khách, Ngành, Trạng Thái, Số điện thoại,\n";
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
async function myFunction  () {
  await firstStep() 
  secondeStep()
  promise.then(function () {
    console.log("Loop finished.");
    console.log(detailArray);
    generateCSV(detailArray);
  });
}
myFunction()
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
//! TODO: ^^^^^^^^^^^^^^^^^^^^DA LAM DUOC^^^^^^^^^^^^^^^^^^^^^^^^
