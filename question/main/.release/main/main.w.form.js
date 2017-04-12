define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/menu/menu');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/bootstrap/carousel/carousel');
require('$model/UI2/system/components/justep/popMenu/popMenu');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/imageAPP/main/main'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cqIJvaq';
	this._flag_='4b9bdd679d3bcaa6fb984d896f0c0294';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"bgColor":{"define":"bgColor","label":"bgColor","name":"bgColor","relation":"bgColor","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"imageName":{"define":"imageName","label":"imageName","name":"imageName","relation":"imageName","type":"String"},"pagename":{"define":"pagename","label":"pagename","name":"pagename","relation":"pagename","type":"String"},"title":{"define":"title","label":"title","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"title\":\"暗访安排\",\"imageName\":\"menu11Pic1.png\",\"pagename\":\"arrange\",\"bgColor\":\"bg-blue\"},{\"id\":\"2\",\"title\":\"基本情况\",\"imageName\":\"menu11Pic2.png\",\"pagename\":\"base\",\"bgColor\":\"bg-orange\"},{\"id\":\"3\",\"title\":\"主要问题\",\"imageName\":\"menu11Pic3.png\",\"pagename\":\"mainQuestion\",\"bgColor\":\"bg-purple\"},{\"id\":\"4\",\"title\":\"工作建议\",\"imageName\":\"menu12Pic2.png\",\"pagename\":\"suggestion\",\"bgColor\":\"bg-cyan\"}]","limit":20,"xid":"data"});
}}); 
return __result;});