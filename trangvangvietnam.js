// Lấy các link trên 1 trang của trangvangvietnam.com
const detailAllPage = [];

const boxlistings = document.querySelectorAll(".boxlistings");
boxlistings.forEach((element, index) => {
  const detailOnePage = [];
  const tenCongTy =
    boxlistings[index].children[0].children[1].children[0].children[0]
      .innerHTML;
  const linkChiTiet =
    boxlistings[
      index
    ].children[0].children[1].children[0].children[0].getAttribute("href");
  const trangWeb =
    boxlistings[index].children[1].children[1] &&
    boxlistings[
      index
    ].children[1].children[1].children[1].children[0].getAttribute("href");
  const diaChi =
    boxlistings[index].children[0].children[1].children[2].children[1]
    console.log(diaChi.children);
  const soDienThoai =
    boxlistings[index].children[0].children[1].children[2].children[1]
      .children[2].innerHTML;
  pushToArray(trangWeb, "Chưa thành lập!");
  pushToArray(diaChi, "Không thấy địa chỉ!");
  pushToArray(tenCongTy, "Không có tên công ty!");
  pushToArray(linkChiTiet, "Không có trang chi tiết!");
  pushToArray(soDienThoai, "Không có SDT!");
  function pushToArray(value, mess) {
    if (value) {
      detailOnePage.push(value);
      return;
    }
    detailOnePage.push(mess);
  }

  detailAllPage.push(detailOnePage);
});
console.log(detailAllPage);

// ============================
