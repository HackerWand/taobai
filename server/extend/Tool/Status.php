<?php
/**
 * 
 * @team SlipperClown (http://www.slipperclown.com)
 * @developer Hacker丶Wand (578112964@qq.com)
 * @date    2016-10-16 18:04:25
 * @version $Id$
 */
namespace Tool;
class Status extends \stdClass{
	const REQUEST_SUCCESS=1; // 请求成功
	const REQUEST_ERROR=0; // 请求失败
	const TOKEN_ERROR=-1; // 令牌错误
	const AUTH_ERROR=-2; // 权限验证失败

	public $result=false;

	public function setResult($result){
		$this->result=(boolean)$result;
	}

	public function toJsonArray(){
		if(!isset($this->code))
			$arr['code']=$this->getResult()?self::REQUEST_SUCCESS:self::REQUEST_ERROR;
		foreach ($this as $key => $value) {
			$arr[$key]=$value;
		}
		return $arr;
	}

	public function getResult(){
		if(!isset($this->result)){
			return false;
		}else{
			return $this->result;
		}
	}
}