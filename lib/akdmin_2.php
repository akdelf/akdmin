<?php 

	require('fAKdb.php');

	class AKdmin {

		private $main = array(); # главные настройки
		private $order = null; # текущие параметры сортировки
		private $limit = 15; # текущее кол-во элементов в таблице
		private $select = array(); #список полей которые участвуют в запросе


		function __construct() {

		}

		

		#фильтр xss уязвимостей
		function xss($value) {
			$value = htmlentities($value, ENT_QUOTES, 'UTF-8');
			$value = htmlspecialchars($value);
			$value = strip_tags($value);
			$value = stripslashes ($value);
	    
    		return $value;
    	}


		#входящие параметры
		function gets() {
			
			$map = $this->gparam('ad', ''); # текущая схема
			if ($map == '')
				$this->erexit();
			else
				$this->map = $map;

			$this->limit = $this->gparam('l', 15, 'int'); # кол-во записей на старнице 
			$this->order = $this->gparam('ord', ''); # текущая сортировка 

			return $this;

		}

		# обработка входящего параметра
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

			$maintable = Table($this->main('table')); # формируем запрос к таблице
			$maintable->order($this->order); # текущая сортировка
			$maintable->limit($this->limit); # количество записей


		}

		#выход с критической ошибкой
		function erexit($errstr){
			echo $errstr;
			exit;
		}




	}