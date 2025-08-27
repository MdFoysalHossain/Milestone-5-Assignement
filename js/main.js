let heartPoint = 0;
let coinPoint = 100;
let copyPoint = 0;

document.getElementById("heart-count").innerText = heartPoint;
document.getElementById("coin-count").innerText = coinPoint;
document.getElementById("copy-count").innerText = copyPoint;


function userCalled(num, name, service){
    let serviceName = document.getElementById(name).innerText;
    let serviceNum = document.getElementById(num).innerText;
    let serviceCall = document.getElementById(service).innerText;

    if(coinPoint >= 20){
        alert(`Calling ${serviceCall}, Num: ${serviceNum}`)
        coinPoint -= 20;
        document.getElementById("coin-count").innerText = coinPoint;

        let callList = document.getElementById("call-history");
        let toAppend = `
            <div class="single-item rounded-2xl w-full bg-gray-50 mt-5 flex flex-row items-center p-5">
                <div class="left-details w-[65%] ">
                    <p class="font-semibold text-2xl mb-2">${serviceName}</p>
                    <span class="text-gray-600 text-xl">${serviceNum}</span>
                </div>

                <div class="right-details w-[35%] text-right">

                    <p class="text-lg font-medium  text-black">${new Date().toLocaleTimeString()}</p>
                </div>
            </div>
        `;

        callList.innerHTML += toAppend;

    } else{
        alert(`Not Enough Balance`)
    }
}


function heartClicked(){
    console.log("Heart Clicked");
    heartPoint += 1;
    document.getElementById("heart-count").innerText = heartPoint;

}




document.getElementById("clear-btn").addEventListener("click", function(){
    console.log("Clear ButtonClicked");
    let callHistory = document.getElementById("call-history");
    callHistory.innerHTML = '';
});







document.getElementById("call1").addEventListener("click", function(){
    userCalled("num1", "name1", "service1");
});

document.getElementById("call2").addEventListener("click", function(){
    userCalled("num2", "name2", "service2");
});


document.getElementById("call3").addEventListener("click", function(){
    userCalled("num3", "name3", "service3");
});

document.getElementById("call4").addEventListener("click", function(){
    userCalled("num4", "name4", "service4");
});

document.getElementById("call5").addEventListener("click", function(){
    userCalled("num5", "name5", "service5");
});


document.getElementById("call6").addEventListener("click", function(){
    userCalled("num6", "name6", "service6");
});


document.getElementById("call7").addEventListener("click", function(){
    userCalled("num7", "name7", "service7");
});

document.getElementById("call8").addEventListener("click", function(){
    userCalled("num8", "name8", "service8");
});


document.getElementById("call9").addEventListener("click", function(){
    userCalled("num9", "name9", "service9");
});





document.getElementById("heart1").addEventListener("click", function(){
    heartClicked();
});

document.getElementById("heart2").addEventListener("click", function(){
    heartClicked();
});

document.getElementById("heart3").addEventListener("click", function(){
    heartClicked();
});

document.getElementById("heart4").addEventListener("click", function(){
    heartClicked();
});

document.getElementById("heart5").addEventListener("click", function(){
    heartClicked();
});

document.getElementById("heart6").addEventListener("click", function(){
    heartClicked();
});

document.getElementById("heart7").addEventListener("click", function(){
    heartClicked();
});

document.getElementById("heart8").addEventListener("click", function(){
    heartClicked();
});

document.getElementById("heart9").addEventListener("click", function(){
    heartClicked();
});







function copyNum(num){
    console.log("Copy Clicked");
    copyPoint += 1;
    document.getElementById("copy-count").innerText = copyPoint;
    
    let number = document.getElementById(num).innerText;
    navigator.clipboard.writeText(number);
}


document.getElementById("copy1").addEventListener("click", function(event){
    copyNum("num1");
});

document.getElementById("copy2").addEventListener("click", function(event){
    copyNum("num2");
});


document.getElementById("copy3").addEventListener("click", function(event){
    copyNum("num3");
});


document.getElementById("copy4").addEventListener("click", function(event){
    copyNum("num4");
});


document.getElementById("copy5").addEventListener("click", function(event){
    copyNum("num5");
});

document.getElementById("copy6").addEventListener("click", function(event){
    copyNum("num6");
});

document.getElementById("copy7").addEventListener("click", function(event){
    copyNum("num7");
});

document.getElementById("copy8").addEventListener("click", function(event){
    copyNum("num8");
});

document.getElementById("copy9").addEventListener("click", function(event){
    copyNum("num9");
});







