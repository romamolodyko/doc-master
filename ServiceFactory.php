<?php

require_once 'ServiceFactory.php';
require_once 'ServiceManager.php';
require_once 'model/EmployeeService.php';
require_once 'model/TransportService.php';

class ServiceFactory
{
    private $config;

    public function __construct($config)
    {
        $this->config = $config;
    }

    public function generate($id)
    {
        try{
            $class = $this->config[$id];
            return new ServiceManager(new $class(), $_REQUEST); //second args REQUEST
        } catch (Exception $e) {
            throw new Exception('Category does not exist');
        }
    }
}
