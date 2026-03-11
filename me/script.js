// document.getElementsByClassName("main")[0].x +=

document.onload = (e)=>{
    document.getElementsByClassName("main")[0].style.translate = floor(document.body.clientWidth/2)+'px';
}

document.onmousemove = (event) => {
    // if (event.pageX != null && event.pageY != null) {
        document.getElementsByClassName("main")[0].style.translate = min(
            document.getElementsByClassName("main")[0].clientWidth,
            event.clientX-250
        )+'px';
    // }
}