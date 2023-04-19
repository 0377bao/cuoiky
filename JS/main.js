var $ = function(str) {
    return document.querySelector(str);
}

var $$ = function(str) {
    return document.querySelectorAll(str);
}

var lich = $(".calenda");
var modal = $(".modal");
var cloes = $$(".close");
var submit = $(".datlich");

lich.onclick = () => {
    modal.style.display = "flex";
}

cloes.forEach(close => {
    close.onclick = () => {
        modal.style.display = "none";
    }
});

submit.onclick = () => {
    kiemtra();
}

function kiemtra() {
    var ma = $("#ma").value;
    var matkhau = $("#mk").value;
    var ngay = new Date($("#ngay").value);
    var gia = 0;
    var chuyenkhoa = $("#select").value;
    if ($("#benh").checked) gia += 500000;
    if ($("#tri").checked) gia += 500000;
    if ($("#bs").checked) gia += 500000;
    if (ma === "" || matkhau === "" || $("#ngay").value === "") {
        alert("Chưa nhập đủ dữ liệu");
    } else {

    }
}