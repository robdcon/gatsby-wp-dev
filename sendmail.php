<?php 
header("Access-Control-Allow-Origin: *");

require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;

$obj = json_decode(file_get_contents("php://input"));

$fname = $obj->name;
$email = $obj->email;
$message = $obj->message;
$service = $obj->dropdown;

sendEmail ($fname, $email, $message, $service);

function sendEmail ($fname, $email, $message, $service) {
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'robdcon@gmail.com';
    $mail->Password = 'hftsytapddemzuzy'; 
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('info@webdesign.robdcon.co.uk', 'Contact From');
    $mail->addReplyTo('robdcon@gmail.com', 'Rob');

    $mail->Subject = 'New request from webdssign.robdcon.co.uk';
    $mail->isHTML(true);

    //$mail->addAddress($email, $fname); 
   // $mail->addCC('robdcon@gmail.com', 'Rob');
    $mail->addAddress('robdcon@gmail.com', 'Rob');
    $mailContent = "
        <body>
            <p>{$fname}</p>
            <p>{$email}</p>
            <p>{$message}</p>
            <p>{$service}</p>
        </body>
    ";
    $mail->Body = $mailContent;

    $message;

    if ($mail->send()) {
        $message = 'Message has been sent';
    }else {
        $message = 'Message could not be sent.';
        $message = 'Mailer Error: ' . $mail->ErrorInfo;
    }

    return $message;

}

?>