<?php

abstract class Service
{

    protected $stdClass;
    protected static $nameCategories;

    public function __construct()
    {
        $this->stdClass = new stdClass();
    }

    /**
     * @return mixed
     */
    public static function getNameCategories()
    {
        return static::$nameCategories;
    }

}