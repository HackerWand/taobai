<?php
/**
 * 
 * @authors Hacker丶Wand (578112964@qq.com)
 * @link http://www.slippersclown.com
 * @date    2018-2-13 18:16:01
 */
namespace app\app\controller;

use app\app\model\User;

class Auth {

    public function wxadocLogin(){
        return json(User::wxadocLogin()->toJsonArray());
    }

}