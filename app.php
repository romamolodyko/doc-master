<?php
require_once 'ServiceFactory.php';

$type = $_REQUEST['type'];
$method = 'get'.ucfirst($type);
$method();

function getCategories()
{
    $config = include_once 'config.php';
    $categories = [];
    foreach ($config as $key => $value) {
        $categories['data'][$key]['id'] = $key;
        $categories['data'][$key]['option'] = $value::getNameCategories();
    }
    $categories['setting']['tagName'] = 'category';
    $categories['setting']['currentQuery'] = '';
    echo json_encode($categories);
}

function getOption()
{
    $factory = new ServiceFactory(include_once 'config.php');
    $service = $factory->generate($_GET['serviceId']); //$id service
    $data = $service->getData($_GET['idItem']); //arguments $id item
    echo json_encode($data);
}
