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
    Date ngay = new Date($("#ngay").value);
    alert(ma + matkhau + ngay);
}