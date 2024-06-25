
let memo = "res/subpages/greeting.html"; // stale
function changePage(page_name){
    // let's assume that resource always exist and dom can be loaded properly
    // im too lazy to ajax it
    let resource = `res/subpages/${page_name}.html`;
    let dom = document.getElementById("info-iframe");
    if(dom === null || memo == resource){
        return;
    }
    memo = resource;
    dom.src = resource;
}