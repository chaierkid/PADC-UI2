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
var __parent0=require('$model/UI2/question/newprotal/channel/menu11Pic2'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cimURz2';
	this._flag_='94b8ad0f7fa8565f845810e79fe4f7ce';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"imgSrc":{"define":"imgSrc","label":"imgSrc","name":"imgSrc","relation":"imgSrc","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"imgSrc\":\"./img/3227595611.jpg\"},{\"id\":\"2\",\"imgSrc\":\"./img/3948512187.jpg\"},{\"id\":\"3\",\"imgSrc\":\"./img/2060481804.jpg\"},{\"id\":\"4\",\"imgSrc\":\"./img/892068505.jpg\"},{\"id\":\"5\",\"imgSrc\":\"./img/3227595611.jpg\"},{\"id\":\"6\",\"imgSrc\":\"./img/3948512187.jpg\"},{\"id\":\"7\",\"imgSrc\":\"./img/2060481804.jpg\"},{\"id\":\"8\",\"imgSrc\":\"./img/892068505.jpg\"},{\"id\":\"9\",\"imgSrc\":\"./img/330033807.jpg\"}]","limit":20,"xid":"data"});
}}); 
return __result;});