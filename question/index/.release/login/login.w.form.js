define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/input/password');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/dialog/dialog');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/question/index/login'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='ciui2am';
	this._flag_='b162abdc578e74fda2193e343e9135f6';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":false,"confirmRefresh":false,"defCols":{"fId":{"define":"fId","label":"fId","name":"fId","relation":"fId","type":"String"},"fPassword":{"define":"fPassword","label":"fPassword","name":"fPassword","relation":"fPassword","type":"String"},"fUserName":{"define":"fUserName","label":"fUserName","name":"fUserName","relation":"fUserName","type":"String"},"fUserType":{"define":"fUserType","label":"fUserType","name":"fUserType","relation":"fUserType","type":"String"},"tabIsDelete":{"define":"tabIsDelete","label":"tabIsDelete","name":"tabIsDelete","relation":"tabIsDelete","rules":{"integer":true},"type":"Integer"},"tabIsShow":{"define":"tabIsShow","label":"tabIsShow","name":"tabIsShow","relation":"tabIsShow","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"fId","limit":-1,"queryAction":"queryTabuser","saveAction":"saveTabuser","tableName":"tabuser","url":"/question/question","xid":"tabuser"});
}}); 
return __result;});