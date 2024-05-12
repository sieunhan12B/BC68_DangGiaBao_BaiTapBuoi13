// hàm tính toán tiền lương
//sơ đồ 3 khối
/**
 *Đầu vào: số ngày làm



 Các bước xử lý :
 ==> công thức tính lương=soNgayLam*luongNgay


 Đầu ra :tiền lương nhân viên
 */
document.querySelector(".btntinhluong").onclick = function () {
  const luongNgay = 100000;
  let soNgayLam = document.getElementById("songaylam").value * 1;
  if (soNgayLam < 0) {
    alert("số ngày không hợp lệ");
    soNgayLam = 0;
  }
  let tinhLuong = soNgayLam * luongNgay;
  document.querySelector(".ketqualuong").innerHTML = tinhLuong;
};

// TÍNH TRUNG BÌNH
//sơ đồ 3 khối
/**
 *Đầu vào: so1,so2,so3,so4,so5



 Các bước xử lý :
 công thức tính trung bình 5 số =(so1+so2+so3+so4+so5)/5

 Đầu ra :trung bình của 5 số
 */
document.querySelector(".btntinhtrungbinh").onclick = function () {
  let so1 = document.getElementById("so1").value * 1;
  let so2 = document.getElementById("so2").value * 1;
  let so3 = document.getElementById("so3").value * 1;
  let so4 = document.getElementById("so4").value * 1;
  let so5 = document.getElementById("so5").value * 1;
  let trungbinh = (so1 + so2 + so3 + so4 + so5) / 5;
  console.log(trungbinh);
  document.querySelector(".ketquatrungbinh").innerHTML = trungbinh;
};

// QUY ĐỔI
//sơ đồ 3 khối
/**
 *Đầu vào: tiền USD



 Các bước xử lý :
công thức quy đổi tiền usd sang tiền việt =23500*soUSD

 Đầu ra :tiền Việt
 */
document.querySelector(".btnquydoi").onclick = function () {
  const quyDoiUSDsangVN = 23500;
  let soUSD = document.getElementById("soUSD").value * 1;
  if (soUSD < 0) {
    alert(" số USD không hợp lệ");
    soUSD = 0;
  }
  let quydoi = quyDoiUSDsangVN * soUSD;
  document.querySelector(".ketquaquydoi").innerHTML = quydoi.toLocaleString(
    "vi",
    {
      style: "currency",
      currency: "VND",
    }
  );
};

// TÍNH CHU VI DIỆN TÍCH HCN
//sơ đồ 3 khối
/**
 *Đầu vào: Hình chữ nhật,chiều dài và chiều rộng



 Các bước xử lý :
 ==> công thức diện tích=dài *rộng
 ==>công thức chu vi=(dài +rộng)*2

 Đầu ra :diện tích và chu vi của hình chữ nhật
 */
document.querySelector(".btnchuvidientich").onclick = function () {
  let chieuDai = document.getElementById("chieudai").value * 1;
  let chieuRong = document.getElementById("chieurong").value * 1;
  if (chieuDai < 0 || chieuRong < 0) {
    alert("chiều dài hoặc rộng không hợp lệ");
    chieuDai = 0;
    chieuRong = 0;
  }
  let chuVi = (chieuDai + chieuRong) * 2;
  let dienTich = chieuDai * chieuRong;
  document.querySelector(".ketquatinhhcn").innerHTML =
    "Chu vi = " + chuVi + "\t Diện tích = " + dienTich;
};

// TÍNH TỔNG 2 KÍ SỐ
//sơ đồ 3 khối
/**
 *Đầu vào: nhập vào số có 2 chũ số



 Các bước xử lý :
công thức tính tổng 2 ký số =  số hàng chục + số hàng đơn vị
số hàng chục bằng số có 2 chữ số /10
số hàng đơn vị bằng số có 2 chữ số %10


 Đầu ra :tổng 2 ký số
 */
document.querySelector(".btntinhtong").onclick = function () {
  let so = document.getElementById("nhapso").value * 1;
  if (so > 99 || so < 10) {
    alert("số nhập vào không hợp lệ");
    so = 0;
  }
  let donVi = parseInt(so % 10);
  let chuc = parseInt(so / 10);
  let tinhTong = donVi + chuc;
  document.querySelector(".ketquatinhtong").innerHTML = tinhTong;
};
