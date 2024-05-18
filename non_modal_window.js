
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        if (localStorage.getItem("subscribed") != "true") {
            document.getElementById('popup').style.display = 'block';
        }
    }, 15000);

    document.getElementById('accept-btn').addEventListener('click', function() {
        localStorage.clear();
        localStorage.setItem('subscribed', "true");
        document.getElementById('popup').style.display = 'none';
        alert('Дякуємо за приєднання!');
    });

    document.getElementById('reject-btn').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
    });

    document.addEventListener('click', function(event) {
        if (event.target.closest('#popup') === null) {
            document.getElementById('popup').style.display = 'none';
        }
    });
});