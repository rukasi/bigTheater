<?php
if($_POST)
    {
        $to = "it@murmanpuppet.ru";
        $subject = "Заявка с сайта";
        $message = 'Имя: '.$_POST['name'].'; Телефон: '.$_POST['phone'].'; Компания: ' . $_POST['company'] .'; Сообщение: ' . $_POST['message'] .';';
        $headers = "Content-type: text/html; charset=UTF-8 \r\n";
        $headers .= "From: <it@murmanpuppet.ru>\r\n";
        $result = mail($to, $subject, $message, $headers);
    
        if ($result){
            echo "Cообщение успешно отправленно. Пожалуйста, оставайтесь на связи";
        }
        else {
            echo "Ошибка!";
        }
    }
?>
