<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TemplateController extends Controller
{
    public function app()
    {
        return view('welcome');
    }
    public function login()
    {
        return view('auth.login');
    }
}
