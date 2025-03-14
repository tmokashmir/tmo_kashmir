const categories = {
    social: ["Instagram", "Facebook", "Twitter"],
    video: ["YouTube", "TikTok"],
    messaging: ["Telegram"]
};

const serviceRates = {
    followers: 130,      // ₹130 per 1000 followers
    likes: 20,           // ₹20 per 1000 likes
    comments: 149,       // ₹149 per 1000 comments
    views: 3,            // ₹3 per 1000 views
    story_views: 2       // ₹2 per 1000 story views
};

function showPlatforms(category) {
    let platformList = document.getElementById("platform-list");
    platformList.innerHTML = "";

    categories[category].forEach(platform => {
        let btn = document.createElement("button");
        btn.innerText = platform;
        btn.onclick = () => showServices(platform);
        platformList.appendChild(btn);
    });

    document.getElementById("platforms").classList.remove("hidden");
    document.getElementById("services").classList.add("hidden");
    document.getElementById("payment-section").classList.add("hidden");
}

function showServices(platform) {
    document.getElementById("services").classList.remove("hidden");
    document.getElementById("payment-section").classList.add("hidden");
}

function updatePrice() {
    let serviceType = document.getElementById('service-type').value;
    let quantity = document.getElementById('quantity').value;

    if (quantity < 100 || isNaN(quantity)) {
        document.getElementById('total-price').innerText = "0";
        return;
    }

    let totalPrice = (quantity / 1000) * serviceRates[serviceType];
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);

    document.getElementById("payment-section").classList.remove("hidden");
}

function confirmPayment() {
    let transactionId = document.getElementById('upi-transaction').value;

    if (!transactionId) {
        alert("Please enter a valid UPI Transaction ID.");
        return;
    }

    alert("Payment Confirmed! Redirecting to Instagram...");
    window.location.href = "https://www.instagram.com/tmo_kashmir";
}
