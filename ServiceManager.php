<?php

require_once 'interfaces/Service.php';

class ServiceManager
{
    private $service;
    private $request;

    public function __construct(Service $service, $request)
    {
        $this->service = $service;
        $this->request = $request;
    }

    public function getData($id)
    {
        $data = $this->getImplementationData($id);
        $data->setting['currentQuery'] = $this->getImplementationIndex() + 1;
        $data->setting['last'] = $this->isLastImplementation();
        $data->setting['tagName'] = $this->getImplementationTagName();

        return $data;
    }

    private function getImplementationTagName()
    {
        return preg_replace('/sql$/', '', strtolower($this->getImplementation()));
    }

    /**
    *  Get all classes implementing interface
    */
    private function getImplementations()
    {
        return array_values(class_implements($this->service));
    }

    private function getImplementationData($id)
    {
        $method = 'get' . $this->getImplementation();
        if(method_exists($this->service, $method)) {
            return $this->service->$method($id);
        }
    }

    private function getImplementationIndex()
    {
        return (!array_key_exists('currentQuery', $this->request) || !$this->request['currentQuery'])
            ? 0
            : intval($this->request['currentQuery']);
    }

    private function isLastImplementation()
    {
        return $this->getImplementationIndex() === count($this->getImplementations()) - 1;
    }

    private function getImplementation()
    {
        return $this->getImplementations()[$this->getImplementationIndex()];
    }

}