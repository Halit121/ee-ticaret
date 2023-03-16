const imgs = [
  {
    src: "./image/pc-8.png",
  },
  {
    src: "./image/pc-5.jpg",
  },
  {
    src: "./image/pc-7.jpg",
  },
  {
    src: "./image/pc-6.jpg",
  },
];
let index = 0;
let slideCount = imgs.length;
let timer;

window.addEventListener("load", function () {
  slideShow(index);
  timer = setInterval(() => {
    index++;
    slideShow(index);
  }, 2000);
});

document.querySelector(".fa-arrow-left").addEventListener("click", function () {
  clearInterval(timer);
  index--;
  slideShow(index);
  timer = setInterval(() => {
    index++;
    slideShow(index);
  }, 2000);
});

document
  .querySelector(".fa-arrow-right")
  .addEventListener("click", function () {
    clearInterval(timer);
    index++;
    slideShow(index);
    timer = setInterval(() => {
      index++;
      slideShow(index);
    }, 2000);
  });

function slideShow(i) {
  index = i;
  if (i < 0) {
    index = slideCount - 1;
  }
  if (i >= slideCount) {
    index = 0;
  }
  document
    .querySelector(".card-image-top")
    .setAttribute("src", imgs[index].src);
}

window.addEventListener("blur", function () {
  clearInterval(timer);
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// sepete ürün ekleme

let sepet = [
  {
    ürün: "ürün1",
    img: "./image/pc-1.jpg",
    ürünNo: 1,
  },
  {
    ürün: "ürün2",
    img: "./image/pc-2.png",
    ürünNo: 2,
  },
  {
    ürün: "ürün3",
    img: "./image/pc-3.png",
    ürünNo: 3,
  },
  {
    ürün: "ürün4",
    img: "./image/pc-4.png",
    ürünNo: 4,
  },
];

const sepeteEkleButon = document.querySelector("#ben"); // buton ekleme

sepeteEkleButon.addEventListener("click",()=>{
const ürün="ürün1"

let ürünİndex=sepet.findIndex((item)=>item.ürün===ürün)

if(ürünİndex!==-1){
  sepet[ürünİndex].sayi+=1;
}
else{

sepet.push({ürün:ürün, img:"../image/pc-1.jpg", ürünNo:1});
  
}





const sepetListesi=document.querySelector(".sidenav")
sepetListesi.innerHTML=""
sepet.forEach((item)=>{
  const li=document.createElement("li")
  const img=document.createElement("img")
  img.src=ürün.img
  li.appendChild(img);
  li.innerHTML+= `${item.ürün}: ${item.ürünNo}: ${item.src}`;
  sepetListesi.appendChild(li);

})






sepeteEkleButon()

}) //dizilerdeki ürünleri yerleştirme


























