<?php
if($_POST)
    {
        $to = "it@murmanpuppet.ru"; //куда отправлять письмо
        $from = $_POST['email']; // от кого
        $subject = "Заявка с сайта"; //тема
        $message = 'Имя: '.$_POST['name'].'; Телефон: '.$_POST['phone'].'; Компания: ' . $_POST['company'] .'; Сообщение: ' . $_POST['message'] .';';
        $headers = "Content-type: text/html; charset=UTF-8 \r\n";
        $headers .= "From: <почта@mail.ru>\r\n";
        $result = mail($to, $subject, $message, $headers);
    
        if ($result){
            echo "Cообщение успешно отправленно. Пожалуйста, оставайтесь на связи";
        }
    }
?>
