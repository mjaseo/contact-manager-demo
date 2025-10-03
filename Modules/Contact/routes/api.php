<?php

use Illuminate\Support\Facades\Route;
use Modules\Contact\Http\Controllers\Api\ContactApiController;
use Modules\Contact\Http\Controllers\ContactController;

Route::middleware(['auth:sanctum'])->prefix('v1')->group(function () {
    Route::apiResource('contacts', ContactController::class)->names('contact');
});

Route::get('/contacts', [ContactApiController::class, 'index']);
