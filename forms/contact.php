<?php
  /**
  * Requires the "PHP Email Form" library
  * The "PHP Email Form" library is available only in the pro version of the template
  * The library should be uploaded to: vendor/php-email-form/php-email-form.php
  * For more info and help: https://bootstrapmade.com/php-email-form/
  */

  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'contact@example.com';

  if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
    include( $php_email_form );
  } else {
    die( 'Unable to load the "PHP Email Form" Library!');
  }

  // Only accept POST requests.
  if ( ($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST' ) {
    http_response_code(405);
    die( 'Method Not Allowed' );
  }

  // Strip CR/LF (and other control chars) to prevent email header injection
  // via the name/email/subject fields.
  function ef_single_line( $value, $max = 255 ) {
    $value = preg_replace( '/[\r\n\t]+/', ' ', (string) $value );
    $value = trim( $value );
    if ( strlen( $value ) > $max ) {
      $value = substr( $value, 0, $max );
    }
    return $value;
  }

  $name    = ef_single_line( $_POST['name'] ?? '' );
  $email   = ef_single_line( $_POST['email'] ?? '' );
  $subject = ef_single_line( $_POST['subject'] ?? '' );
  $phone   = isset( $_POST['phone'] ) ? ef_single_line( $_POST['phone'], 50 ) : '';
  $message = trim( (string) ( $_POST['message'] ?? '' ) );

  // Validate required fields and email format before doing anything.
  if ( $name === '' || $email === '' || $subject === '' || $message === '' ) {
    http_response_code(400);
    die( 'Please fill in all required fields.' );
  }
  if ( ! filter_var( $email, FILTER_VALIDATE_EMAIL ) ) {
    http_response_code(400);
    die( 'Please provide a valid email address.' );
  }
  if ( strlen( $message ) > 5000 ) {
    $message = substr( $message, 0, 5000 );
  }

  $contact = new PHP_Email_Form;
  $contact->ajax = true;
  
  $contact->to = $receiving_email_address;
  $contact->from_name = $name;
  $contact->from_email = $email;
  $contact->subject = $subject;

  // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials
  /*
  $contact->smtp = array(
    'host' => 'example.com',
    'username' => 'example',
    'password' => 'pass',
    'port' => '587'
  );
  */

  $contact->add_message( $name, 'From');
  $contact->add_message( $email, 'Email');
  if ( $phone !== '' ) {
    $contact->add_message( $phone, 'Phone');
  }
  $contact->add_message( $message, 'Message', 10);

  echo $contact->send();
?>
