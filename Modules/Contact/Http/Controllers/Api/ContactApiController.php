<?php

namespace Modules\Contact\Http\Controllers\Api;

use Modules\Contact\Models\Contact;
use Illuminate\Routing\Controller;

class ContactApiController extends Controller
{
    public function index()
    {
        return response()->json(
            Contact::select('id', 'name', 'email', 'image')->get()
        );
    }
}
