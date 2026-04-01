<?php
require('config.php'); 

if (isset($_POST['submit_form'])) {
    $full_name = mysqli_real_escape_string($mysqli_user, $_POST['full_name']);
    $email = mysqli_real_escape_string($mysqli_user, $_POST['email']);
    $service = mysqli_real_escape_string($mysqli_user, $_POST['service']);
    $budget = mysqli_real_escape_string($mysqli_user, $_POST['budget']);
    $details = mysqli_real_escape_string($mysqli_user, $_POST['details']);

    $sql = "INSERT INTO inquiries (full_name, email, service, budget, details) 
            VALUES ('$full_name', '$email', '$service', '$budget', '$details')";

    if (mysqli_query($mysqli_user, $sql)) {
        echo "<script>
                alert('Sukriya! Data mil gaya hai.');
                window.location.href='index.html'; // Yahan index.html likhein
              </script>";
    } else {
        echo "Error: " . mysqli_error($mysqli_user);
    }
}
?>