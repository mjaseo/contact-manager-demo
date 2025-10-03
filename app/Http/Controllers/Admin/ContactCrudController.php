<?php

namespace App\Http\Controllers\Admin;

use Modules\Contact\Models\Contact;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

class ContactCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;

    public function setup()
    {
        CRUD::setModel(Contact::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/contact');
        CRUD::setEntityNameStrings('contact', 'contacts');
    }

    protected function setupListOperation()
    {
        CRUD::column('name');
        CRUD::column('email');
        CRUD::addColumn([
            'name'  => 'image',
            'type'  => 'image',
            'label' => 'Image',
            'disk'   => 'public',
        ]);
    }

    protected function setupCreateOperation()
    {
        CRUD::field('name');
        CRUD::field('email');
        CRUD::addField([
            'name'  => 'image',
            'type'  => 'upload',
            'label' => 'Image',
            'crop'  => true,
            'aspect_ratio' => 1,
            'upload' => true,
            'disk'   => 'public',
        ]);
    }

    protected function setupUpdateOperation()
    {
        $this->setupCreateOperation();
    }
}

