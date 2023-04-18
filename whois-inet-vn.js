const domain = ["giamtochopso.com", "godgear.net", "gogovantai.com"];

let counter = 0;
const result = [];
function copyContent() {
  const newWindow = window.open(
    "https://whois.inet.vn/whois?domain=" + domain[counter]
  );

  const promise = new Promise(function (resolve) {
    newWindow.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        console.log(domain[counter]);
        const tenMien = newWindow.document.querySelector(
          "#headerWhoisResult > div > div > div > div.hgroup > h3 > span"
        ).innerHTML;

        const ngayDangKy = newWindow.document.querySelector(
          "#headerWhoisResult > div > div > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > span"
        ).innerHTML;
        const ngayHetHan = newWindow.document.querySelector(
          "#headerWhoisResult > div > div > div > table > tbody > tr:nth-child(3) > td:nth-child(2) > strong"
        ).innerHTML;
        console.log(tenMien);
        console.log(ngayDangKy);
        console.log(ngayHetHan);
        resolve([tenMien, ngayDangKy, ngayHetHan]);
      }, 2000);
    });
  });

  promise.then((res) => {
    console.log(res);
    if (counter === domain.length-1) {
        result.push(res);
        console.log(result);
        newWindow.close();
        generateCSV(result)
    } else {
        counter++;
        result.push(res);
        newWindow.close();
        copyContent();
    }
  });
}
copyContent();
function generateCSV(data) {
    console.log(data);
    //   var csv = "Link, Tên CTY, Tên Khách, Ngành, Trạng Thái, Số điện thoại,\n";
    var csv =
      "Domain:, Registered On:, Expires On:,\n";
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
  
