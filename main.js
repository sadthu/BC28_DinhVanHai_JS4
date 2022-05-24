/*
    - Bài 1
        input: 3 số nguyên
        progress: tạo 3 biến (number1, number2, number3) và gán cho 3 số nguyên
                  xét number1 > number2 && number2 > number3 --> number1 > number2 > number3
                      number1 > number3 && number3 > number2 --> number1 > number3 > number2
                      number2 > number1 && number1 > number3 --> number2 > number1 > number3
                      number2 > number3 && number3 > number1 --> number2 > number3 > number1
                      number3 > number1 && number1 > number2 --> number3 > number1 > number2
                      number3 > number2 && number2 > number3 --> number3 > number2 > number1
        output: 3 số nguyên              
*/
soSanh.onclick = function () {
    var number1 = +document.getElementById('number1').value;
    var number2 = +document.getElementById('number2').value;
    var number3 = +document.getElementById('number3').value;
    var soThu1 = 0;
    var soThu2 = 0;
    var soThu3 = 0;
    if (number1 > number2 && number2 > number3) {
        soThu1 = number1;
        soThu2 = number2;
        soThu3 = number3;
    }else if (number1 > number3 && number3 > number2) {
        soThu1 = number1;
        soThu2 = number3;
        soThu3 = number2;
    }else if (number2 > number1 && number1 > number3) {
        soThu1 = number2;
        soThu2 = number1;
        soThu3 = number3;
    } else if (number2 > number3 && number3 > number1) {
        soThu1 = number2;
        soThu2 = number3;
        soThu3 = number1;
    } else if (number3 > number1 && number1 > number2) {
        soThu1 = number3;
        soThu2 = number1;
        soThu3 = number2;
    }else {
        soThu1 = number3;
        soThu2 = number2;
        soThu3 = number1;
    }
    document.getElementById('ketQua1').innerHTML = 'Tăng dần: ' + soThu3 + ' , ' + soThu2 + ' , ' + soThu1;
}

/*
    - Bài 2
        input: tên thành viên trong gia đình
        progress: tạo biến tenThanhVien và tenDuocChon
                  xét tenThanhVien = 'Bố' thì gán tenDuocChon = 'Xin Chào Bố'
                  xét tenThanhVien = 'Mẹ' thì gán tenDuocChon = 'Xin Chào Mẹ'
                  xét tenThanhVien = 'Anh Trai' thì gán tenDuocChon = 'Xin Chào Anh Trai'
                  xét tenThanhVien = 'Em Gái' thì gán tenDuocChon = 'Xin Chào Em Gái'
                  không đúng với các điều kiện trên thì gán tenDuocChon = 'Xin Chào Khách'
        output: tenDuocChon
*/
loiChao.onclick = function () {
    var tenThanhVien = document.getElementById('tenThanhVien').value;
    var tenDuocChon = '';
    if (tenThanhVien === 'Bố') {
        tenDuocChon = 'Xin Chào Bố';
    }else if (tenThanhVien === 'Mẹ') {
        tenDuocChon = 'Xin Chào Mẹ';
    }else if (tenThanhVien === 'Anh Trai') {
        tenDuocChon = 'Xin Chào Anh Trai';
    }else if (tenThanhVien === 'Em Gái') {
        tenDuocChon = 'Xin Chào Em Gái';
    }else {
        tenDuocChon = 'Xin Chào Khách';
    }
    document.getElementById('ketQua2').innerHTML = tenDuocChon + ' !';
}

/*
    - Bài 3
        input: 3 số nguyên
        progress: tạo 5 biến number1, number2, number3, count, soLe
                  gán 3 biến number1, number2, number3 lần lượt là 3 số nguyên người dùng nhập vào
                  xét number1 % 2 = 0 --> count++
                  xét number2 % 2 = 0 --> count++
                  xét number3 % 2 = 0 --> count++
        output: count và soLe

*/
demSo.onclick = function () {
    var number1 = +document.getElementById('soThu1').value;
    var number2 = +document.getElementById('soThu2').value;
    var number3 = +document.getElementById('soThu3').value;
    var count = 0;
    var count1 = 0;
    var soLe = '';
    var soChan = '';
    if (((number1 % 2) === 0)&&(number1 != 0)) {
        count++;
        soChan = number1;
    }else if(number1 != 0){
        count1++;
        soLe = number1;
    }

    if (((number2 % 2) === 0)&&(number2 != 0)) {
        count++;
        soChan += ', ' + number2;
    }else if(number2 != 0){
        count1++;
        soLe += ', ' + number2;
    }

    if (((number3 % 2) === 0) && (number3 != 0)) {
        count++;
        soChan += ', ' + number3;
    }else if(number3 != 0){
        count1++;
        soLe += ', ' + number3;
    }else {
        count = 'Không hợp lệ';
        count1 = 'Không hợp lệ';
        soChan = 'Không hợp lệ';
        soLe = 'Không hợp lệ';
    }
    document.getElementById('ketQua3').innerHTML = 'Tổng số chẵn: ' + count + ' (các số chẵn: ' + soChan + ')' + '<br>' + 'Tổng số lẻ: ' + count1 +  ' (các số lẻ: ' + soLe + ')';
}

/*
    - Bài 4
        input: 3 cạnh tam giác
        progress: tạo 4 biến doDaiCanh1, doDaiCanh2, doDaiCanh3, tamGiac
                  gán 3 biến doDaiCanh1, doDaiCanh2, doDaiCanh3 lần lượt là 3 cạnh của tam giác
                  xét (Cạnh 1 = Cạnh 2 hoặc Cạnh 1 = cạnh 3 hoặc Cạnh 2 = Cạnh 3) và (cạnh 1 khác cạnh 2 hoặc cạnh 1 khác cạnh 3)
                  ---> tam giác cân
                  xét cạnh 1 = cạnh 2 và cạnh 2 = cạnh 3 ---> tam giác đều
                  xét (canh1^2 = canh2^2 + canh3^2 hoặc canh2^2 = canh1^2 + canh3^2 hoặc canh3^2 = canh2^2 + canh1^2)
                  ---> tam giác vuông
                  ngoài những trường hợp trên ---> tam giác thường
        output: loại tam giác (tamGiac)
*/
loaiTamGiac.onclick = function () {
    var doDaiCanh1 = +document.getElementById('canhThu1').value;
    var doDaiCanh2 = +document.getElementById('canhThu2').value;
    var doDaiCanh3 = +document.getElementById('canhThu3').value;
    var tamGiac = '';
    if ((doDaiCanh1 == doDaiCanh2 || doDaiCanh1 == doDaiCanh3 || doDaiCanh2 == doDaiCanh3) && (doDaiCanh1 != doDaiCanh2 || doDaiCanh1 != doDaiCanh3) && (doDaiCanh1!=0 && doDaiCanh2!=0 && doDaiCanh3!=0)) {
        tamGiac = 'Tam giác cân';
    }
    else if (doDaiCanh1 == doDaiCanh2 && doDaiCanh2 == doDaiCanh3 && doDaiCanh1!=0 && doDaiCanh2!=0 && doDaiCanh3!=0) {
        tamGiac = 'Tam giác đều';
    }
    else if (((doDaiCanh1 * doDaiCanh1 == doDaiCanh2 * doDaiCanh2 + doDaiCanh3 * doDaiCanh3) || (doDaiCanh2 * doDaiCanh2 == doDaiCanh1 * doDaiCanh1 + doDaiCanh3 * doDaiCanh3) || (doDaiCanh3 * doDaiCanh3 == doDaiCanh2 * doDaiCanh2 + doDaiCanh1 * doDaiCanh1)) && (doDaiCanh1!=0 && doDaiCanh2!=0 && doDaiCanh3!=0)) {
        tamGiac = 'Tam giác vuông';
    }
    else if(doDaiCanh1!=0 && doDaiCanh2!=0 && doDaiCanh3!=0){
        tamGiac = 'Tam giác thường';
    }
    else{
        tamGiac = 'Không hợp lệ'
    }
    document.getElementById('ketQua4').innerHTML = tamGiac;
}