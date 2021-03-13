var GlobalEC = "added";

function a() {
    var fa = "2nd function o/p1"
    console.log(fa);
    debugger;
    b();
    console.log("lets see when I will be on console");
}

function b() {
    debugger;
    console.log("2nd function o/p2");
    c();
}

function c() {
    debugger;
    console.log("3rd function 0/p3");
}

debugger;
a();