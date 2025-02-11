<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Récupération et assainissement des données
  $nom = htmlspecialchars(trim($_POST['nom']));
  $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
  $message = htmlspecialchars(trim($_POST['message']));

  if ($nom && $email && $message) {
    $to = "contact@biancacosta.com"; // Remplace par ton adresse mail
    $subject = "Nouveau message de $nom";
    $body = "Nom: $nom\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
      echo "Message envoyé avec succès.";
    } else {
      echo "Une erreur est survenue, merci de réessayer.";
    }
  } else {
    echo "Tous les champs sont requis.";
  }
} else {
  echo "Méthode non autorisée.";
}
?>
