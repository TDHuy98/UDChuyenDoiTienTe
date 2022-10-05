function exchange() {
    let amount = document.getElementById("sotienmuondoi").value;
    let fromC = document.getElementById("donvitiengoc").value;
    let toC = document.getElementById("donvidoi").value;
    let ketqua;

    if (fromC == "VND" && toC == "USD"){
       ketqua = "Số tiền quy đổi: " + amount / 24000 + "$";
    }
    else if (fromC == "USD" && toC == "VND"){
        ketqua = "Số tiền quy đổi: " + (amount * 24000) + "Đ";
    }
    else if (fromC=="VND"){
        ketqua = "Số tiền quy đổi: " + amount + "Đ"
    }
    else{
        ketqua =  "Số tiền quy đổi: "+amount+"$";
    }
    document.getElementById("kq").innerHTML = ketqua;
}