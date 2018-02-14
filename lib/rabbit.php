<?php


function add_q($table, $id) {

	$fconfig = '/vhosts/adanar.argumenti.ru/config/config.json';

	$set = json_decode(file_get_contents($fconfig), True);
  $config = $set['rabbit'];

  $data = json_encode(['table' => $table, 'id' => $id]);

  return;

	$rabbit_key = 'adanar_update';

  $rabbit = new AMQPConnection($config);
  $rabbit->connect();

  $testChannel = new AMQPChannel($rabbit);
  $testExchange = new AMQPExchange($testChannel);

  $testExchange->setName('amq.direct');
  
  $data = json_encode(['table' => $table, 'id' => $id]);
  
  $testExchange->publish($data, $rabbit_key);
      
  $rabbit->disconnect();


}