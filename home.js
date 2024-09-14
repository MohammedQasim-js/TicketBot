let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "300px";
        menuList.style.zIndex = "10";
    }
    else{
        menuList.style.maxHeight = "0px"
    }
}


// ticket counter

const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    price = document.querySelector('.price'),
    num = document.querySelector(".num");
    let a = 1;
    plus.addEventListener("click", ()=>{
      a++;
      a = (a < 10) ? "0" + a : a;
      num.innerText = a;
      price.innerText = a * 350;
    });
    minus.addEventListener("click", ()=>{
      if(a > 1){
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
        price.innerText = a * 350;
      }
    });

    //search  bar

    const wrapper = document.querySelector('.wrapper2');
    const btnPopup = document.querySelector('.btnLogin-pop');
    const iconClose = document.querySelector('.icon-close');

    btnPopup.addEventListener('click', ()=> {
        wrapper.classList.add('active-popup');
    });
  
    iconClose.addEventListener('click', ()=> {
        wrapper.classList.remove('active-popup');
    });
