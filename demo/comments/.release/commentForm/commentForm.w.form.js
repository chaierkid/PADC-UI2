define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/textarea/textarea');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/comments/commentForm'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cumIvEv';
	this._flag_='224b60474e1f8a14c574dc0a47e988bd';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"author":{"define":"author","label":"作者","name":"author","relation":"author","rules":{"required":{"message":"请埴写作者","params":{"expr":"true"}}},"type":"String"},"comment":{"define":"comment","label":"评论","name":"comment","relation":"comment","rules":{"required":{"message":"请填写评论","params":{"expr":"true"}}},"type":"String"}},"directDelete":false,"events":{},"idColumn":"author","initData":"[{}]","limit":20,"xid":"data"});
}}); 
return __result;});