define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/Calculation/mainActivity'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c7feQvu';
	this._flag_='bf60da5b75d3cf229459ba5a5903f17c';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"jingdu":{"define":"jingdu","name":"jingdu","relation":"jingdu","rules":{"integer":true},"type":"Integer"},"jingfen":{"define":"jingfen","name":"jingfen","relation":"jingfen","rules":{"integer":true},"type":"Integer"},"jingmiao":{"define":"jingmiao","name":"jingmiao","relation":"jingmiao","rules":{"integer":true},"type":"Integer"},"weidu":{"define":"weidu","name":"weidu","relation":"weidu","rules":{"integer":true},"type":"Integer"},"weifen":{"define":"weifen","name":"weifen","relation":"weifen","rules":{"integer":true},"type":"Integer"},"weimiao":{"define":"weimiao","name":"weimiao","relation":"weimiao","rules":{"integer":true},"type":"Integer"},"weixing":{"define":"weixing","name":"weixing","relation":"weixing","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"weixing","limit":20,"xid":"data1"});
}}); 
return __result;});