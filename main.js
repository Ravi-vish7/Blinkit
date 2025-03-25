let container = document.querySelector(".container")

let chocolateData =[{img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4957ad5e-b275-43d4-a5bb-9ce4cb38b233.jpg?ts=1720612210",
    time:"8 MINT",
    name:"Cadbury Dairy Milk Silk <br> Desserts Brownie Chocolate Bar, 140 g",
    weight:"140",
    dprice:"238",
    price:"280",
},{img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b33317a6-1492-4349-a48a-4cd013e45ab9.jpg?ts=1741770563",
    time:"8 MINT",
    name:"Nestle KitKat Grand <br> Break 4 Fingers Wafer Chocolate Bar (38.5 g)",
    weight:"38.5",
    dprice:"35",
    price:"40",
},{img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ee93b954-177b-43dc-8329-057ddd47b3b8.jpg?ts=1709532200",
    time:"8 MINT",
    name:"Nestle Munch Max,<br> Coated Crunchy Wafer Chocolate",
    weight:"38.5",
    dprice:"18",
    price:"20",
},{img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/04130081-14e6-4920-bdd6-d1538ed78754.jpg?ts=1710401769",
    time:"8 MINT",
    name:"Cadbury Gems <br> Duo Pack Shaped Chocolates - Pack of 2",
    weight:"2 x 23.7",
    dprice:"38",
    price:"40",
},{img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/3bd23c06-f617-45b8-9a49-b66fdf6e0e35.jpg?ts=1730702867",
    time:"8 MINT",
    name:"Nestle KitKat <br>Rich Coated Wafer Chocolate",
    weight:"150",
    dprice:"190",
    price:"200",
},{img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/69b1f251-2c5b-4455-adec-a8606084b9ea.jpg?ts=1730793131",
    time:"8 MINT",
    name:"Cadbury Dairy Milk Silk <br>  Chocolate Bar",
    weight:"52",
    dprice:"53",
    price:"55",
},{img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/798e5e29-3db6-4f6c-9703-741139c6484b.jpg?ts=1740988987",
    time:"8 MINT",
    name:"Cadbury Dairy Milk <br> Silk Chocolate Bar",
    weight:"60",
    dprice:"105",
    price:"110",
},{img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/5f0298fc-56e5-4b83-9bae-1b364a34c23f.jpg?ts=1742804517",
    time:"8 MINT",
    name:"Cadbury Dairy  <br> Milk Silk Oreo Chocolate Bar",
    weight:"60",
    dprice:"100",
    price:"120",
},{img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c18936ba-0d2a-40f9-9ebb-7116dbf6a8bd.jpg",
    time:"8 MINT",
    name:"Nestle KitKat <br>Rich Coated Wafer Chocolate",
    weight:"63",
    dprice:"120",
    price:"150",
},{img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9ca5482e-09a1-400a-8ca1-439bb9fd1d8d.jpg?ts=1742372854",
    time:"8 MINT",
    name:"Cadbury Dairy Milk Silk <br> Desserts Brownie Chocolate Bar, 140 g",
    weight:"80",
    dprice:"108",
    price:"120",
},{img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4957ad5e-b275-43d4-a5bb-9ce4cb38b233.jpg?ts=1720612210",
    time:"8 MINT",
    name:"Cadbury Bournville <br> Fruit & Nut Dark Chocolate Bar",
    weight:"140",
    dprice:"238",
    price:"280",
},{img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1d167b57-503f-4e42-b86b-e0743741839a.jpg?ts=1738838248",
    time:"8 MINT",
    name:"Cadbury Dairy Milk Silk <br> Desserts Brownie Chocolate Bar, 140 g",
    weight:"140",
    dprice:"238",
    price:"280",
},{img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/713e4be7-b6c8-4eab-ab4e-789384b343ec.jpg?ts=1742372803",
    time:"8 MINT",
    name:"Cadbury Dairy Milk Silk <br> Desserts Brownie Chocolate Bar, 140 g",
    weight:"140",
    dprice:"238",
    price:"280",
},{img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7dd8c3a2-3a69-4cb8-823c-935f5e9e4525.jpg?ts=1723794378",
    time:"8 MINT",
    name:"Cadbury Dairy Milk Silk <br> Desserts Brownie Chocolate Bar, 140 g",
    weight:"140",
    dprice:"238",
    price:"280",
},{img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/382044a.jpg?ts=1687616755",
    time:"8 MINT",
    name:"Cadbury Dairy Milk Silk <br> Desserts Brownie Chocolate Bar, 140 g",
    weight:"140",
    dprice:"238",
    price:"280",
},{img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/04e65d18-2084-44ba-b43c-35ba04b01f40.jpg?ts=1723633158",
    time:"8 MINT",
    name:"Cadbury Dairy Milk Silk <br> Desserts Brownie Chocolate Bar, 140 g",
    weight:"140",
    dprice:"238",
    price:"280",
},{img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f448fd36-880f-45fb-ab8c-bbaae75819bf.jpg?ts=1742804547",
    time:"8 MINT",
    name:"Cadbury Dairy Milk Silk <br> Desserts Brownie Chocolate Bar, 140 g",
    weight:"140",
    dprice:"238",
    price:"280",
},{img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1698d7c2-82db-43f0-9b81-e6382ef49c88.jpg?ts=1714046194",
    time:"8 MINT",
    name:"Cadbury Dairy Milk Silk <br> Desserts Brownie Chocolate Bar, 140 g",
    weight:"140",
    dprice:"238",
    price:"280",
},]



chocolateData.map((data)=>{
    let card = document.createElement("div")
card.className="card"
card.innerHTML=`<img id="cardimg"src="${data.img}" alt="">
    <p id="time"><img class="tw-h-full tw-w-full tw-transition-opacity tw-opacity-100" width="10%" src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png" data-pf="reset"> 8 MINS </p>
    <h4>${data.name}</h4>
    <p id="w">${data.weight} g <i class="fa-solid fa-angle-down"></i></p>
    <p class="in"><i class="fa-solid fa-indian-rupee-sign fa-2xs"></i>${data.dprice}</p>
    <p class="in mp"><i class="fa-solid fa-indian-rupee-sign fa-2xs"></i>${data.price}</p>
    <button>ADD</button>`
    container.appendChild(card)
})




    // card.appendChild(pricebtn)

    // let pricebtn = document.createElement("div")
    // pricebtn.className=".pricebtn"
    // pricebtn.innerHTML =`