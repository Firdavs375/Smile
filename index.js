let  a = document.getElementsByClassName("qorachiq")

document.onmousemove = function(){
    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerHeight + "%";

    for(let i=0;i<2;i++){
        a[i].style.left = x;
        a[i].style.top = y;
        a[i].style.transfrom = "translate(-"+x+",-"+y+")";
    }
}

// let balls = document.getElementsByClassName("ball");
// document.onmousemove = function(){
//     let x = event.clientX * 100 / window.innerWidth + "%";
//     let y = event.clientY * 100 / window.innerHeight + "%";

//     for(let i=0;i<2;i++){
//         balls[i].style.left = x;
//         balls[i].style.top = y;
//         balls[i].style.transfrom = "translate(-"+x+",-"+y+")";
//     }
// }