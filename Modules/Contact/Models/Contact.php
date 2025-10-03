<?php

namespace Modules\Contact\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Contact extends Model
{
    use CrudTrait;

    protected $fillable = ['name', 'email', 'image'];

    public function setImageAttribute($value)
    {
        $attribute_name = "image";
        $disk = "public"; // or 'uploads' if you configured one
        $destination_path = "uploads/contacts";

        // if the image was erased
        if ($value == null) {
            Storage::disk($disk)->delete($this->{$attribute_name});
            $this->attributes[$attribute_name] = null;
        }

        // if a base64 or uploaded file is sent
        if (is_file($value)) {
            $this->attributes[$attribute_name] = $value->store($destination_path, $disk);
        }
    }
}

