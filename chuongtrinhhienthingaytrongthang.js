function checkdays(){
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    if(month<1| month >12){
        txt = 'Khong co thang' + month;
    }else{
        if(month==1 || month==3 ||month ==5|| month ==7 || month ==8 || month ==10 || month ==12){ 
            txt = 'Thang co 31 ngay';
        }else if (month ==4 || month ==6 || month ==9 || month ==11){
            txt = 'Thang co 30 ngay';
        }else {
            if (year %4==0 && year % 100!=0 || year %400 ==0){
                txt = 'Thang co 28 ngay';
            }else{
                txt = 'Thang co 29 ngay';
            }
        }
    }
}