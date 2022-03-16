<?php

	// load in mailchimp library
	include('./MailChimp.php');

	// namespace defined in MailChimp.php
	use \DrewM\MailChimp\MailChimp;

	// connect to mailchimp
	$MailChimp = new MailChimp('fa2b1c05478aa529fe8e97ae276a9480-us4'); // put your API key here
	$list = 'ead7be69c8'; // put your list ID here
	$email = $_GET['EMAIL']; // Get email address from form
	$id = md5(strtolower($email)); // Encrypt the email address
	// setup th merge fields
	$mergeFields = array
  'FNAME'=>$_GET['FNAME']
 