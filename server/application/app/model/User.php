<?php
/**
 * 
 * @authors Hacker丶Wand (578112964@qq.com)
 * @link http://www.slippersclown.com
 * @date    2018-2-13 18:14:18
 */
namespace app\app\model;

use \Tool\Status;

class User extends BaseModel {

    public static function wxadocLogin(){
        $status = new Status;
        $code = input('code','');
        $result = json_decode(file_get_contents("https://api.weixin.qq.com/sns/jscode2session?appid=wx1a4d164e9adbedaa&secret=239ab6c952149a93079d6a71f2cbbe61&js_code=$code&grant_type=authorization_code"));

        if(isset($result->session_key) && isset($result->openid)){

            $oauth_type = 'oauth_wx';
            $user = self::withTrashed()->where([$oauth_type => $result->openid])->find();
            if(!$user){
                $user = new self;
                $user->$oauth_type = $result->openid;
            }
            
            $user->avatar = input('avatarUrl');
            $user->city = input('city');
            $user->country = input('country');
            $user->gender = input('gender');
            $user->nickname = input('nickName');
            $user->province = input('province');

            $user->save();

            $utoken = base64_encode(json_encode(['id'=>$user->id,'t'=>'user','s'=>time(),'e'=>time() + 60 * 60 * 24 * 30])); 
            $sign = md5($utoken.token());
            $utoken = $utoken.'.'.$sign;

            $status->result = true;
            $status->utoken = $utoken;

        }else{
            $status->msg = '登录失败请重试';
        }

        return $status;
    }

}