<?php
require_once '/../interfaces/NameSQL.php';
require_once '/../interfaces/PackageSQL.php';
require_once '/../interfaces/CostSQL.php';
require_once '/../interfaces/Service.php';

class TransportService extends Service implements NameSQL, CostSQL
{

    protected static $nameCategories = 'Транспорт';
    protected static $tagName = 'categories';

    public function getNameSQL($id)
    {
        $this->stdClass->data = [
            ['id'=> 0, 'option' => 'Porche'],
            ['id'=> 1, 'option' => 'Mercedes'],
            ['id'=> 2, 'option' => 'BMW'],
            ['id'=> 3, 'option' => 'Range Rover'],
        ];
        return $this->stdClass;
    }

    public function getCostSQL($id)
    {
        $this->stdClass->data = [
            ['id'=> 0, 'option' => 100],
            ['id'=> 1, 'option' => 200],
            ['id'=> 2, 'option' => 300],
            ['id'=> 3, 'option' => 400],
        ];
        return $this->stdClass;
    }
}