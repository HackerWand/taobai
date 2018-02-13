<?php
/**
 * 
 * @authors Hacker丶Wand (578112964@qq.com)
 * @date    2017-08-14 17:19:04
 * @version $Id$
 */
namespace app\app\controller;
use app\app\model\BaseModel;
use app\app\model\User;

class BaseController {

	protected static $user = null;

	function __construct(){
		$result = auth_check('user',true);
		
		if($result === false){
			header('Content-Type:application/json; charset=utf-8');
			echo json_encode(['code' => -1,'msg' => '请重新登录']); exit;
		}
		
		self::$user = User::where(['id' => $result->id])->find();
		if(!self::$user){
			echo json_encode(['code' => -1,'msg' => '用户不存在']); exit;
		}
		BaseModel::$login_user_id = $result->id;
	}

	function json($msg,$code = 0,$data = null){
		return json(['msg' => $msg,'code' => $code,'data' => $data]);
	}

}