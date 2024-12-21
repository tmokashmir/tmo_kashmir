<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Process the form data here (send an email, store it in a database, etc.)
    mail("tmo_kashmir@gmail.com", "New Collaboration Request", "Name: $name\nEmail: $email\nMessage: $message");

    echo "Thank you for reaching out!";
}
?>
