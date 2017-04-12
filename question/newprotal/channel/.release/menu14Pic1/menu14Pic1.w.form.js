define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/question/newprotal/channel/menu14Pic1'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cuAB7Jv';
	this._flag_='16a6b3d7c6803e2c1ca2814a079528a1';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"title":{"define":"title","label":"title","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"title\":\"新旗舰即将发布 HTC One Max售4060元\"},{\"id\":\"2\",\"title\":\"顶配版Galaxy S5曝光：4G内存/64位处理器\"},{\"id\":\"3\",\"title\":\"WP8系统最强手机 诺基亚1520仅售3610\"},{\"id\":\"4\",\"title\":\"3G一样很快捷 三星Note 3 N9008售3800\"},{\"id\":\"5\",\"title\":\"2014款HTC One再曝光：外观参数已无悬念\"},{\"id\":\"6\",\"title\":\"高性能防水4G手机 索尼L39t售3799元\"}]","limit":20,"xid":"data"});
}}); 
return __result;});