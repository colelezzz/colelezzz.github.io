var categories = [];
var products = [];

const getAllCategories = async () => {
    fetch('http://localhost/colelezzz.github.io/ADET/A06/A06_BE/categories.php')
        .then(response => response.json())
        .then(data => {
            categories = data;
            loadCategories();
        });
}

const getAllProducts = async (categoryID) => {
    const categoryData = {
        categoryID: categoryID
    };

    fetch(
        'http://localhost/colelezzz.github.io/ADET/A06/A06_BE/products.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoryData)
    })
        .then(response => response.json())
        .then(data => {
            products = data;
            loadProducts();
        });
}
getAllCategories();

var total = 0;

function loadCategories() {
    var categoriesContainer = document.getElementById("categories");
    categoriesContainer.innerHTML = '';

    categories.forEach((category, index) => {
        categoriesContainer.innerHTML += `
            <div onclick="getAllProducts('${category.categoryID}')" class="card mx-1 p-3 text-center category-btn" style="cursor: pointer;">
              <small>${category.categoryName}</small>
            </div>
        `;
    });
}

function loadProducts() {
    var maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";

    products.forEach(content => {
        var bgColor = content.bgColor || "#ffffff";
        var isUnavailable = !content.isAvailable;

        if (content.sizes) {
            content.sizes.forEach(size => {
                maincontainer.innerHTML += `
                    <div onclick="${isUnavailable ? '' : `addToReceipt('${size.price}','${content.code + size.code}')`}" 
                         class="card mx-1 my-2 content p-3 text-center ${isUnavailable ? 'unavailable' : ''}" 
                         style="background-color: ${bgColor}; cursor: ${isUnavailable ? 'not-allowed' : 'pointer'};">
                      <img src="${size.image}" alt="${content.productName} ${size.productName}" 
                           style="height: 200px; width: 100%; object-fit: cover;" 
                           class="img-fluid mb-2">
                      <small>${content.productName} (${size.productName})</small><br>
                      <strong>₱${size.price}</strong>
                    </div>
                `;
            });
        } else {
            maincontainer.innerHTML += `
                <div onclick="${isUnavailable ? '' : `addToReceipt('${content.price}','${content.code}')`}" 
                     class="card mx-1 my-2 content p-3 text-center ${isUnavailable ? 'unavailable' : ''}" 
                     style="background-color: ${bgColor}; cursor: ${isUnavailable ? 'not-allowed' : 'pointer'};">
                  <img src="${content.image}" alt="${content.productName}" 
                       style="height: 200px; width: 100%; object-fit: cover;" 
                       class="img-fluid mb-2">
                  <small>${content.productName}</small><br>
                  <strong>₱${content.price}</strong>
                </div>
            `;
        }
    });
}

function addToReceipt(price, code) {
    var receiptContainer = document.getElementById("receipt");
    total = parseFloat(total) + parseFloat(price);

    totalValueElement = document.getElementById("totalValue");
    totalValueElement.innerHTML = total;

    receiptContainer.innerHTML += `
    <div class="d-flex flex-row justify-content-between">
      <div><small>${code}</small></div>
      <div><small>${price}</small></div>
    </div>
  `;
}

function clearCart() {
    document.getElementById("receipt").innerHTML = "";
    total = 0;
    document.getElementById("totalValue").innerHTML = total;
}

document.querySelector('[data-bs-target="#checkoutModal"]').addEventListener('click', function () {
    var receiptItems = document.getElementById('receipt').children;
    var formatted = "";

    for (var i = 0; i < receiptItems.length; i++) {
        var itemText = receiptItems[i].innerText.trim().split("\n");
        if (itemText.length === 2) {
            var name = itemText[0];
            var price = itemText[1];
            formatted += name + " ₱" + price + "\n";
        }
    }

    document.getElementById('modalReceipt').textContent = formatted || "(Cart is empty)";
    document.getElementById('modalTotal').textContent = "₱" + document.getElementById('totalValue').textContent;
});

function confirmCheckout() {
    document.getElementById("receipt").innerHTML = "";
    document.getElementById("totalValue").textContent = "0";

    var modal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
    modal.hide();

    location.reload();
}
