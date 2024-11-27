<?php
header('Content-Type: application/json');

// Récupération des données du formulaire
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$subject = $_POST['subject'] ?? '';
$message = $_POST['message'] ?? '';

// Validation des données
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Tous les champs sont requis']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email invalide']);
    exit;
}

// Email de l'association
$to = 'council.conseil.api@gmail.com';

// En-têtes de l'email
$headers = [
    'From' => $email,
    'Reply-To' => $email,
    'X-Mailer' => 'PHP/' . phpversion(),
    'Content-Type' => 'text/html; charset=UTF-8'
];

// Corps du message en HTML
$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #7B051A; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .footer { text-align: center; padding: 20px; font-size: 0.8em; color: #666; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>Nouveau message de contact</h2>
        </div>
        <div class='content'>
            <p><strong>Nom :</strong> " . htmlspecialchars($name) . "</p>
            <p><strong>Email :</strong> " . htmlspecialchars($email) . "</p>
            <p><strong>Sujet :</strong> " . htmlspecialchars($subject) . "</p>
            <p><strong>Message :</strong></p>
            <p>" . nl2br(htmlspecialchars($message)) . "</p>
        </div>
        <div class='footer'>
            <p>Ce message a été envoyé depuis le formulaire de contact du site web de l'AAPI.</p>
        </div>
    </div>
</body>
</html>
";

// Envoi de l'email
try {
    if (mail($to, "Nouveau contact: " . $subject, $emailBody, implode("\r\n", $headers))) {
        http_response_code(200);
        echo json_encode(['success' => true, 'message' => 'Message envoyé avec succès']);
    } else {
        throw new Exception('Erreur lors de l\'envoi de l\'email');
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Une erreur est survenue lors de l\'envoi du message']);
}
