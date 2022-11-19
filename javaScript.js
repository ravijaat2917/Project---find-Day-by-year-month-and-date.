function searchDay(){
    let date = document.getElementById("day").value ;
    let month = document.getElementById("month").value ;
    let year = document.getElementById("year").value ;
    // console.log(day , month , year);
    if( month > 12 || date > 31 ){
        document.getElementById("result").innerHTML = "Invalid Date Or Month" ;
    }else{

    let fullDate =  new Date();
    fullDate.setDate(date);
    fullDate.setMonth(month-1);
    fullDate.setFullYear(year);

    let day = fullDate.getDay();

    switch(day){
        case 0 : document.getElementById("result").innerHTML = "Sunday" ; break ;
        case 1 : document.getElementById("result").innerHTML = "Monday" ; break ;
        case 2 : document.getElementById("result").innerHTML = "Tuesday" ; break ;
        case 3 : document.getElementById("result").innerHTML = "Wednesday" ; break ;
        case 4 : document.getElementById("result").innerHTML = "Thrusday" ; break ;
        case 5 : document.getElementById("result").innerHTML = "Friday" ; break ;
        case 6 : document.getElementById("result").innerHTML = "Saturday" ; break ;

    }
}
}

function fun(){
    let year = document.getElementById("year").value ;
    let month = document.getElementById("month").value ;
    var leap = false ;
    
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        leap = true ;
    }


    if( leap == true ){
        if( document.getElementById("month").value == 2 ){
            document.getElementById("monthclass").innerHTML = '<input  type="number" id="day" min="1"  max="29" value="1" placeholder="Select Day">' ;
        }else{
            document.getElementById("monthclass").innerHTML = '<input  type="number" id="day" min="1"  max="31" value="1" placeholder="Select Day">' ;
        }
    }
}