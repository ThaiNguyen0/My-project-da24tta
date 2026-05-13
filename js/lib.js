const productDatabase = [
    { id: 1,  name: "VinFast VF 3",        price: 240000000,  img: "../assets/image/vf3.jpg",        desc: "VinFast VF 3 nhỏ gọn, phù hợp di chuyển trong đô thị." },
    { id: 2,  name: "VinFast VF 5",        price: 458000000,  img: "../assets/image/vf5.jpg",        desc: "VinFast VF 5 thiết kế hiện đại, tiết kiệm năng lượng." },
    { id: 3,  name: "VinFast VF 6",        price: 675000000,  img: "../assets/image/vf6.jpg",        desc: "VinFast VF 6 SUV điện thông minh, tiện nghi cao cấp." },
    { id: 4,  name: "VinFast VF 7",        price: 850000000,  img: "../assets/image/vf7.jpg",        desc: "VinFast VF 7 phong cách thể thao, công nghệ tiên tiến." },
    { id: 5,  name: "VinFast VF 8",        price: 1090000000, img: "../assets/image/vf8.jpg",        desc: "VinFast VF 8 SUV điện mạnh mẽ dành cho gia đình." },
    { id: 6,  name: "VinFast VF 9",        price: 1490000000, img: "../assets/image/vf9.jpg",        desc: "VinFast VF 9 SUV điện cỡ lớn, không gian rộng rãi." },
];

function addProduct(imgSrc, name, price, productId) {
    // Tạo khung chứa cha
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item col-sm-3");

    // Khung 1 – Hình ảnh
    const myDiv1 = document.createElement("div");
    myDiv1.setAttribute("class", "product-image");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", imgSrc);
    productImg.setAttribute("alt", name);
    productImg.style.width = "100%";

    myDiv1.appendChild(productImg);

    // Khung 2 – Thông tin
    const myDiv2 = document.createElement("div");
    myDiv2.setAttribute("class", "product-info");

    const productName = document.createElement("p");
    productName.setAttribute("class", "product-name");
    productName.innerText = name;

    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "product-price");
    productPrice.innerText = price.toLocaleString("vi-VN");

    const productBtn = document.createElement("a");
    productBtn.setAttribute("class", "btn-detail");
    productBtn.setAttribute("href", "../html/detail.html?id=" + productId);
    productBtn.innerText = "Xem chi tiết";

    myDiv2.appendChild(productName);
    myDiv2.appendChild(productPrice);
    myDiv2.appendChild(productBtn);

    myDiv.appendChild(myDiv1);
    myDiv.appendChild(myDiv2);

    document.getElementById("product-list").appendChild(myDiv);
}

function addProduct_v2(products) {
    products.forEach(function(product) {
        addProduct(product.img, product.name, product.price, product.id);
    });
}