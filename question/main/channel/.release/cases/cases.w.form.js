define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/imageAPP/main/channel/cases'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='caQNZvm';
	this._flag_='aede5f336777c177e2a968fdebbc855e';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"imgSrc":{"define":"imgSrc","label":"imgSrc","name":"imgSrc","relation":"imgSrc","type":"String"},"title":{"define":"title","label":"title","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"imgSrc\":\"./img/pic1.jpg\",\"title\":\"新旗舰即将发...\"},{\"id\":\"2\",\"imgSrc\":\"./img/pic2.jpg\",\"title\":\"顶配版Galaxy...\"},{\"id\":\"3\",\"imgSrc\":\"./img/pic3.jpg\",\"title\":\"WP8系统最强...\"},{\"id\":\"4\",\"imgSrc\":\"./img/pic4.jpg\",\"title\":\"3G一样很快捷...\"},{\"id\":\"5\",\"imgSrc\":\"./img/pic5.jpg\",\"title\":\"2014款HTC...\"},{\"id\":\"6\",\"imgSrc\":\"./img/pic6.jpg\",\"title\":\"高性能防水...\"},{\"id\":\"7\",\"imgSrc\":\"./img/pic7.jpg\",\"title\":\"双卡双待入门...\"},{\"id\":\"8\",\"imgSrc\":\"./img/pic8.jpg\",\"title\":\"iOS 7.1新增...\"},{\"id\":\"9\",\"imgSrc\":\"./img/pic9.jpg\",\"title\":\"1299之争 小...\"}]","limit":20,"xid":"data"});
}}); 
return __result;});