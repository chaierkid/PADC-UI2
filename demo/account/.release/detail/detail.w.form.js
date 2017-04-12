define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/account/detail'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cNVFJ7b';
	this._flag_='0e8fca7d87efd1a5c81ade7751107ac3';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fClass":{"define":"fClass","label":"分类","name":"fClass","relation":"fClass","type":"String"},"fCreateTime":{"define":"fCreateTime","label":"创建时间","name":"fCreateTime","relation":"fCreateTime","rules":{"datetime":true},"type":"DateTime"},"fDate":{"define":"fDate","label":"日期","name":"fDate","relation":"fDate","rules":{"date":true},"type":"Date"},"fDescription":{"define":"fDescription","label":"备注","name":"fDescription","relation":"fDescription","type":"String"},"fID":{"define":"fID","label":"主键","name":"fID","relation":"fID","type":"String"},"fMoney":{"define":"fMoney","label":"金额","name":"fMoney","relation":"fMoney","rules":{"number":true,"required":{"message":"请填写金额","params":{"expr":"true"}}},"type":"Decimal"},"fType":{"define":"fType","label":"收入\\支出","name":"fType","relation":"fType","type":"String"}},"directDelete":false,"events":{"onValueChanged":"accountDataValueChanged"},"idColumn":"fID","initData":"[]","limit":20,"xid":"accountData"});
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fClass":{"define":"fClass","label":"分类","name":"fClass","relation":"fClass","type":"String"},"fID":{"define":"fID","label":"主键","name":"fID","relation":"fID","type":"String"},"fType":{"define":"fType","label":"支出\\收入","name":"fType","relation":"fType","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","initData":"[]","limit":20,"queryAction":"queryAccount_class","tableName":"account_class","url":"/justep/account","xid":"classData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fType":{"define":"fType","label":"fType","name":"fType","relation":"fType","type":"String"}},"directDelete":false,"events":{},"idColumn":"fType","initData":"[{\"fType\":\"收入\"},{\"fType\":\"支出\"}]","limit":20,"xid":"typeData"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});