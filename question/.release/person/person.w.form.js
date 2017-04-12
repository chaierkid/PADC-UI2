define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/button/checkbox');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/gridSelect/gridSelect');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/button/buttonGroup');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/question/person'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cR32Y3e';
	this._flag_='6002bffcb267f84018216e57c35a6f9f';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":false,"defCols":{"calcCheckBox":{"define":"EXPRESS","label":"选择","name":"calcCheckBox","relation":"EXPRESS","type":"Boolean"},"fId":{"define":"fId","label":"","name":"fId","relation":"fId","type":"String"},"fPassword":{"define":"fPassword","label":"","name":"fPassword","relation":"fPassword","type":"String"},"fUserName":{"define":"fUserName","label":"","name":"fUserName","relation":"fUserName","type":"String"},"fUserType":{"define":"fUserType","label":"","name":"fUserType","relation":"fUserType","type":"String"},"tabIsDelete":{"define":"tabIsDelete","label":"","name":"tabIsDelete","relation":"tabIsDelete","rules":{"integer":true},"type":"Integer"},"tabIsShow":{"define":"tabIsShow","label":"","name":"tabIsShow","relation":"tabIsShow","rules":{"integer":true},"type":"Integer"}},"directDelete":true,"events":{},"filters":{"filter0":"tabuser.tabIsDelete=0"},"idColumn":"fId","limit":-1,"queryAction":"queryTabuser","saveAction":"saveTabuser","tableName":"tabuser","url":"/question/question","xid":"mainData"});
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"label":{"define":"label","label":"label","name":"label","relation":"label","type":"String"},"value":{"define":"value","label":"value","name":"value","relation":"value","type":"String"}},"directDelete":false,"events":{},"idColumn":"value","initData":"[{\"value\":\"访员\",\"label\":\"访员\"},{\"value\":\"领导\",\"label\":\"领导\"}]","limit":20,"xid":"data1"});
 new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":false,"confirmRefresh":false,"defCols":{"fId":{"define":"fId","label":"fId","name":"fId","relation":"fId","type":"String"},"fPassword":{"define":"fPassword","label":"fPassword","name":"fPassword","relation":"fPassword","type":"String"},"fUserName":{"define":"fUserName","label":"fUserName","name":"fUserName","relation":"fUserName","type":"String"},"fUserType":{"define":"fUserType","label":"fUserType","name":"fUserType","relation":"fUserType","type":"String"},"tabIsDelete":{"define":"tabIsDelete","label":"tabIsDelete","name":"tabIsDelete","relation":"tabIsDelete","rules":{"integer":true},"type":"Integer"},"tabIsShow":{"define":"tabIsShow","label":"tabIsShow","name":"tabIsShow","relation":"tabIsShow","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"fId","limit":-1,"queryAction":"queryTabuser","saveAction":"saveTabuser","tableName":"tabuser","url":"/question/question","xid":"tabuser"});
}}); 
return __result;});