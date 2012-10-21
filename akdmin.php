<?php 

	require('fAKdb.php');

	class AKdmin {

		private $main = array(); # главные настройки
		private $order = null; # текущие параметры сортировки
		private $limit = 15; # текущее кол-во элементов в таблице


		function __construct() {

		}

		
		function init() {
			
			foreach ($xml->xpath('/items/main') as $key => $mainitem) {
				$this->main[]
			}	
					
		}



		#фильтр xss уязвимостей
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

		# загружаем модель
		function load($map) {
	
			$f_xml = site_fold_ad.'xml/'. $map.'.xml';
	    
    		if (!file_exists($f_xml)){
				echo('not found shema');
				exit;
			} 

			return simplexml_load_file($f_xml);

		}


		# иницилиазция главных настроек схемы
		function mainitems() {

			foreach ($xml->xpath('/items/main') as $key => $mainitem) {
				$this->main[$key];
			}

			return $this;	

		}


		# получаем все записи текущей таблицы
		function list() {

			$this->maintable = Table($this->main('table'));

		}



	}