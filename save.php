<?php
	$myfile = fopen("productivity1.xml", "w");
	
	$current = file_get_contents($file);
	$current .= "<test>\n\t<score>" . "</score>\n";
	$current .= "\t<date>" . "</date>\n";
	$current .= "\t<time>" . "</time>\n";
	$current .= "\t<desc>" . "</desc>\n<test>";




	file_put_contents($myfile, $current);
	fclose($myfile);
?>
