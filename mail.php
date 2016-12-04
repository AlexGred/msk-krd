<?php

  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $form = $_POST['form']; 

  $message_info = "Имя: " . $name;
  $message_info .= "\r\nНомер телефона: " . $phone;
  $message_info .= "\r\nПочта: " . $email;

  switch ($form) {
    case 'cons-1':
    case 'cons-2':
      mail('a.dolzhenkov@initlab.ru', 'Заказать бесплатную консультацию', $message_info, "From: MSK Krd info <info@msk-krd.ru>\r\n" . "X-Mailer: PHP/" . phpversion());

      if (!empty($email)) {
        $message = "Здравствуйте!\r\n Вы записались на бесплатную консультация. В течении дня мы вам перезвоним.";
        mail($email, 'Бесплатную консультация', $message, "From: MSK Krd info <info@msk-krd.ru>\r\n" . "X-Mailer: PHP/" . phpversion());
      }
      break;

    case 'meet-1':
      mail('a.dolzhenkov@initlab.ru', 'Запишитесь на встречу', $message_info, "From: MSK Krd info <info@msk-krd.ru>\r\n" . "X-Mailer: PHP/" . phpversion());

      if (!empty($email)) {
        $message = "Здравствуйте!\r\n Вы записались на встречу. В течении дня мы вам перезвоним.";
        mail($email, 'Бесплатную консультация', $message, "From: MSK Krd info <info@msk-krd.ru>\r\n" . "X-Mailer: PHP/" . phpversion());
      }
      break;
    
    default:
      break;
  }

echo print_r($form);

?>