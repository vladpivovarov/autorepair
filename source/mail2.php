<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Заказ на деталь</title>
</head>

<body>

<?php
// Вывод заголовка с данными о кодировке страницы
header('Content-Type: text/html; charset=utf-8');
// Настройка локали
setlocale(LC_ALL, 'ru_RU.65001', 'rus_RUS.65001', 'Russian_Russia. 65001', 'russian');

function send_mail()
{
    $name = htmlspecialchars($_REQUEST['name']);
}
{
    $phone = htmlspecialchars($_REQUEST['phone']);
}
{
    $desc = htmlspecialchars($_REQUEST['desc']);
}

$message = iconv('UTF-8', 'cp1251', "<b>Заказ на деталь</b><br><b>Имя: </b> ").iconv('UTF-8', 'cp1251', $_REQUEST['name']).iconv('UTF-8', 'cp1251', "<br> <b>Телефон: </b>").iconv('UTF-8', 'cp1251', $_REQUEST['phone']).iconv('UTF-8', 'cp1251', $_REQUEST['desc']).'';

include "class.phpmailer.php";// подключаем класс

$mail = new PHPMailer();
$mail->From = iconv('UTF-8', 'cp1251', $_REQUEST['phone']);
$mail->FromName = iconv('UTF-8', 'cp1251', $_REQUEST['name']);
$mail->FromDesc = iconv('UTF-8', 'cp1251', $_REQUEST['desc']);
$mail->AddAddress('vladpivovarov2797@ya.ru');
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
    echo '<center><b>Спасибо за Ваш заказ! В ближайшее время мы свяжемся с Вами.<br><a href=index.html>Нажмите</a>, чтобы вернуться на главную страницу';
}
if (!empty($_POST['submit'])) send_mail();
?>
</body>
</html>