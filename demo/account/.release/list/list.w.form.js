define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/account/list'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cryqe6r';
	this._flag_='81fe46eb84edd17da32899c6da02a12e';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fClass":{"define":"fClass","label":"分类","name":"fClass","relation":"fClass","type":"String"},"fCreateTime":{"define":"fCreateTime","label":"创建时间","name":"fCreateTime","relation":"fCreateTime","rules":{"datetime":true},"type":"DateTime"},"fDate":{"define":"fDate","label":"日期","name":"fDate","relation":"fDate","rules":{"date":true},"type":"Date"},"fDescription":{"define":"fDescription","label":"备注","name":"fDescription","relation":"fDescription","type":"String"},"fID":{"define":"fID","label":"主键","name":"fID","relation":"fID","type":"String"},"fMoney":{"define":"fMoney","label":"金额","name":"fMoney","relation":"fMoney","rules":{"number":true},"type":"Decimal"},"fType":{"define":"fType","label":"收入\\支出","name":"fType","relation":"fType","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","initData":"[]","limit":5,"queryAction":"queryAccount","saveAction":"saveAccount","tableName":"account","url":"/justep/account","xid":"accountData"});
}}); 
return __result;});