let heartPoint = 0;
let coinPoint = 100;
let copyPoint = 0;

document.getElementById("heart-count").innerText = heartPoint;
document.getElementById("coin-count").innerText = coinPoint;
document.getElementById("copy-count").innerText = copyPoint;


function userCalled(num, name){
    let serviceName = document.getElementById(name).innerText;
    let serviceNum = document.getElementById(num).innerText;

    if(coinPoint >= 20){
        alert(`Calling ${serviceName}, Num: ${serviceNum}`)
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


document.getElementById("call1").addEventListener("click", function(){
    userCalled("num1", "name1");
});

document.getElementById("call2").addEventListener("click", function(){
    userCalled("num2", "name2");
});


document.getElementById("call3").addEventListener("click", function(){
    userCalled("num3", "name3");
});

document.getElementById("call4").addEventListener("click", function(){
    userCalled("num4", "name4");
});

document.getElementById("call5").addEventListener("click", function(){
    userCalled("num5", "name5");
});


document.getElementById("call6").addEventListener("click", function(){
    userCalled("num6", "name6");
});


document.getElementById("call7").addEventListener("click", function(){
    userCalled("num7", "name7");
});

document.getElementById("call8").addEventListener("click", function(){
    userCalled("num8", "name8");
});


document.getElementById("call9").addEventListener("click", function(){
    userCalled("num9", "name9");
});