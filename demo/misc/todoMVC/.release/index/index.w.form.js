define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/button/checkbox');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/misc/todoMVC/index'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cNb2aEz';
	this._flag_='a595980e11e05507c591dbed3a22007a';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":false,"confirmRefresh":true,"defCols":{"completed":{"define":"completed","label":"completed","name":"completed","relation":"completed","type":"Boolean"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"title":{"define":"title","label":"title","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{"onAfterDelete":"saveData","onAfterNew":"saveData","onValueChanged":"saveData"},"idColumn":"id","limit":20,"xid":"todoData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"allCompleted":{"define":"allCompleted","label":"allCompleted","name":"allCompleted","relation":"allCompleted","rules":{"calculate":"js:($model.todoData.getCount()>0) && ($model.tempData.val('completedCount')==$model.todoData.getCount())"},"type":"Boolean"},"completedCount":{"define":"completedCount","label":"completedCount","name":"completedCount","relation":"completedCount","rules":{"calculate":"js: $model.todoData.count(function(p){return p.row.val('completed')})","integer":true},"type":"Integer"},"status":{"define":"status","label":"status","name":"status","relation":"status","type":"String"}},"directDelete":false,"events":{},"idColumn":"status","initData":"[{\"status\":\"All\"}]","limit":20,"xid":"tempData"});
}}); 
return __result;});