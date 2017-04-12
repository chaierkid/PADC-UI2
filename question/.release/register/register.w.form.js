define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/select/radioGroup');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/input/password');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/question/register'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cZj2MVj';
	this._flag_='22fe2a1722d881e267fb33842199d7ca';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"name":{"define":"name","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"name\":\"访员\"},{\"id\":\"2\",\"name\":\"领导\"}]","limit":20,"xid":"data1"});
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":false,"confirmRefresh":false,"defCols":{"fId":{"define":"fId","label":"fId","name":"fId","relation":"fId","type":"String"},"fPassword":{"define":"fPassword","label":"fPassword","name":"fPassword","relation":"fPassword","type":"String"},"fUserName":{"define":"fUserName","label":"fUserName","name":"fUserName","relation":"fUserName","type":"String"},"fUserType":{"define":"fUserType","label":"fUserType","name":"fUserType","relation":"fUserType","type":"String"},"tabIsDelete":{"define":"tabIsDelete","label":"tabIsDelete","name":"tabIsDelete","relation":"tabIsDelete","rules":{"integer":true},"type":"Integer"},"tabIsShow":{"define":"tabIsShow","label":"tabIsShow","name":"tabIsShow","relation":"tabIsShow","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"fId","limit":-1,"queryAction":"queryTabuser","saveAction":"saveTabuser","tableName":"tabuser","url":"/question/question","xid":"tabuser"});
 new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":false,"confirmRefresh":false,"defCols":{"fId":{"define":"fId","label":"fId","name":"fId","relation":"fId","type":"String"},"fPassword":{"define":"fPassword","label":"fPassword","name":"fPassword","relation":"fPassword","type":"String"},"fUserName":{"define":"fUserName","label":"fUserName","name":"fUserName","relation":"fUserName","type":"String"},"fUserType":{"define":"fUserType","label":"fUserType","name":"fUserType","relation":"fUserType","type":"String"},"tabIsDelete":{"define":"tabIsDelete","label":"tabIsDelete","name":"tabIsDelete","relation":"tabIsDelete","rules":{"integer":true},"type":"Integer"},"tabIsShow":{"define":"tabIsShow","label":"tabIsShow","name":"tabIsShow","relation":"tabIsShow","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"fId","limit":1,"queryAction":"queryTabuser","saveAction":"saveTabuser","tableName":"tabuser","url":"/question/question","xid":"main"});
}}); 
return __result;});