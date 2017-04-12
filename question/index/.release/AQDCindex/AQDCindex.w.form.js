define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/bootstrap/carousel/carousel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/question/index/AQDCindex'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cUveeua';
	this._flag_='633a1e55b2569075afd0a4bf46c7f178';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"bgColor":{"define":"bgColor","label":"bgColor","name":"bgColor","relation":"bgColor","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"imageName":{"define":"imageName","label":"imageName","name":"imageName","relation":"imageName","type":"String"},"pagename":{"define":"pagename","label":"pagename","name":"pagename","relation":"pagename","type":"String"},"title":{"define":"title","label":"title","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"title\":\"暗访问卷\",\"imageName\":\"menu14Pic1.png\",\"pagename\":\"question\",\"bgColor\":\"bg-blue\"},{\"id\":\"2\",\"title\":\"暗访结果\",\"imageName\":\"menu13Pic3.png\",\"pagename\":\"questionResult\",\"bgColor\":\"bg-orange\"}]","limit":20,"xid":"data"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"title":{"define":"title","label":"title","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"title\":\"街面秩序\"},{\"id\":\"2\",\"title\":\"力量防控\"},{\"id\":\"3\",\"title\":\"安检措施落实\"},{\"id\":\"4\",\"title\":\"刀具管控\"},{\"id\":\"5\",\"title\":\"重点医院\"}]","limit":20,"xid":"data2"});
}}); 
return __result;});