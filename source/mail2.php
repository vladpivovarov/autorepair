<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
    <title>Обратная связь</title>
</head>

<body>
<?php
function send_mail()
{
    $name = htmlspecialchars($_REQUEST['name']);
}
{
    $phone = htmlspecialchars($_REQUEST['phone']);
}
$message = '<b>Имя пославшего: </b>'.$_REQUEST['name'].'<br> <b>Телефон: </b>'.$_REQUEST['phone'].'';

include "class.phpmailer.php";// подключаем класс

$mail = new PHPMailer();
$mail->From = $_REQUEST['phone'];
$mail->FromName = $_REQUEST['name'];
$mail->AddAddress('vladpivovarov2797@mail.ru');
$mail->IsHTML(true);
$mail->Subject = $_POST['title'];

if(isset($_FILES['files']))
{
    if($_FILES['files']['error'] == 0)
    {
        $mail->AddAttachment($_FILES['files']['tmp_name'],$_FILES['files']['name']);
    }
}
$mail->Body = $message;
if (!$mail->Send()) die ('Mailer Error: '.$mail->ErrorInfo);
{
    echo '<center><b>Спасибо за отправку вашего сообщения<br><a href=index.html>Нажмите</a>, чтобы вернуться на главную страницу';
}
if (!empty($_POST['submit'])) send_mail();
?>
</body>
</html>