<?php
/**
 * 
 * @team SlipperClown (http://www.slipperclown.com)
 * @developer Hacker丶Wand (578112964@qq.com)
 * @date    2016-10-13 15:14:23
 * @version $Id$
 */
namespace app\app\model;
use think\Model;
use traits\model\SoftDelete;

class BaseModel extends Model {
    use SoftDelete;
    protected $autoWriteTimestamp = 'datetime';
    protected static $deleteTime = 'delete_time';
    public static $login_user_id;
}