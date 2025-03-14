const serviceRates = {
    followers: 130,      // ₹130 per 1000 followers
    likes: 20,           // ₹20 per 1000 likes
    comments: 149,       // ₹149 per 1000 comments
    views: 3,            // ₹3 per 1000 views
    story_views: 2       // ₹2 per 1000 story views
};

function showServices(platform) {
    document.getElementById("services").classList.remove("hidden");
    document.getElementById("payment-section").classList.add("hidden");
}

function updatePrice() {
    let serviceType = document.getElementById('service-type').value;
    let quantity = parseInt(document.getElementById('quantity').value);

    if (isNaN(quantity) || quantity < 1000) {
        document.getElementById('total-price').innerText = "0";
        return;
    }

    let totalPrice = (quantity * serviceRates[serviceType]) / 1000; 
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);

    document.getElementById("payment-section").classList.remove("hidden");
}

function submitOrder() {
    let serviceType = document.getElementById("service-type").value;
    let quantity = document.getElementById("quantity").value;
    let totalPrice = document.getElementById("total-price").innerText;
    let upiTransaction = document.getElementById("upi-transaction").value;

    if (quantity < 1000 || !upiTransaction) {
        alert("Please enter a valid quantity and transaction ID.");
        return;
    }

    let orderData = {
        serviceType,
        quantity,
        totalPrice,
        upiTransaction
    };

    fetch("https://your-backend-url.com/process-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Payment Verified! Redirecting to Instagram...");
            window.location.href = "https://www.instagram.com/tmo_kashmir";
        } else {
            alert("Payment Failed! Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong!");
    });
}
