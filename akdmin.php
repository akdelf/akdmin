<? 

	class AKdmin {

		#
		function xss($value) {
			$value = htmlentities($value, ENT_QUOTES, 'UTF-8');
			$value = htmlspecialchars($value);
			$value = strip_tags($value);
			$value = stripslashes ($value);
	    
    		return $value;
    		}


		# обработка входящих параметров
		function gparam($name, $default = null, $type = 'str') {

			if (isset($_GET[$name])) {
				$value = $_GET[$name];
			if ($type == 'str')
				return $this->xss($value);
			elseif($type == 'int')
				return (int)$value;	
				}	
			else
				return  $default;
				}

		# загружаем схему
		function load() {

		}		


	}