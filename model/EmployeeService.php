<?php
require_once '/../interfaces/CategoriesSQL.php';
require_once '/../interfaces/NameSQL.php';
require_once '/../interfaces/PackageSQL.php';
require_once '/../interfaces/CostSQL.php';
require_once '/../interfaces/Service.php';

class EmployeeService extends Service implements CategoriesSQL, NameSQL, PackageSQL, CostSQL
{
    protected static $nameCategories = 'Сотрудники';

    public function getCategoriesSQL()
    {
        $this->stdClass->data = [
            ['id'=> 1, 'option' => 'Фотографы'],
            ['id'=> 4, 'option' => 'Видеооператоры'],
            ['id'=> 9, 'option' => 'Музыканты'],
            ['id'=> 10, 'option' => 'Ведущие'],
        ];
        return $this->stdClass;
    }

    public function getNameSQL($id)
    {
        $this->stdClass->data = [
            ['id'=> 0, 'option' => 'Anton P.'],
            ['id'=> 1, 'option' => 'Elsena S.'],
            ['id'=> 2, 'option' => 'Sergey S.'],
            ['id'=> 3, 'option' => 'Roman M.'],
        ];
        return $this->stdClass;
    }

    public function getPackageSQL($id)
    {
        $this->stdClass->data = [
            ['id'=> 0, 'option' => 'MIn'],
            ['id'=> 1, 'option' => 'Vesil'],
            ['id'=> 2, 'option' => 'Standart'],
            ['id'=> 3, 'option' => 'Max'],
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
        $this->stdClass->setting['tagName'] = 'cost';
        return $this->stdClass;
    }

}