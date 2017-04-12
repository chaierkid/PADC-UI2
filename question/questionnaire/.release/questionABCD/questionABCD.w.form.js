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
var __parent0=require('$model/UI2/question/questionnaire/questionABCD'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='ce63yIr';
	this._flag_='d1b786b54e7a1efe673eb3c0fd57ddfc';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"imageName":{"define":"imageName","label":"imageName","name":"imageName","relation":"imageName","type":"String"},"title":{"define":"title","label":"title","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"title\":\"街面秩序\",\"imageName\":\"jiemian.jpg\"},{\"id\":\"2\",\"title\":\"力量防控\",\"imageName\":\"liliang.jpg\"},{\"id\":\"3\",\"title\":\"安检措施落实\",\"imageName\":\"anquan.jpg\"},{\"id\":\"4\",\"title\":\"刀具管控\",\"imageName\":\"daoju.jpg\"}]","limit":20,"xid":"data"});
}}); 
return __result;});