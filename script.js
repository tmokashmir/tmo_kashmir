const serviceRates = {
    followers: 0.13,      // ₹0.13 per 1 follower
    likes: 0.02,         // ₹0.02 per 1 like
    comments: 0.149,     // ₹0.149 per 1 comment
    views: 0.003,        // ₹0.003 per 1 view
    story_views: 0.002   // ₹0.002 per 1 story view
};

function showServices(platform) {
    document.getElementById("services").classList.remove("hidden");
    document.getElementById("payment-section").classList.add("hidden");
}

function updatePrice() {
    let serviceType = document.getElementById('service-type').value;
    let quantity = parseInt(document.getElementById('quantity').value);

    // Agar quantity blank hai to price 0 dikhao
    if (isNaN(quantity) || quantity < 1) {
        document.getElementById('total-price').innerText = "0";
        return;
    }

    // 1 quantity ke liye bhi sahi price calculate hoga
    let totalPrice = quantity * serviceRates[serviceType]; 
    document.getElementById('total-price').innerText = totalPrice.toFixed(3);

    document.getElementById("payment-section").classList.remove("hidden");
}
