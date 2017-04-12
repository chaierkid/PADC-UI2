define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/bootstrap/form/form');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/toolBar/toolBar');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/button/checkbox');
require('$model/UI2/system/components/justep/windowReceiver/windowReceiver');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/system/templates/common/selectColsDialog'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cERJraa';
	this._flag_='367d0cc4bcec3c782b061e8b46a70efb';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"check":{"define":"EXPRESS","label":"选择","name":"check","relation":"EXPRESS","type":"Boolean"},"colEditor":{"define":"colEditor","label":"编辑器(*)","name":"colEditor","relation":"colEditor","type":"String"},"dataType":{"define":"dataType","label":"关系类型","name":"dataType","relation":"dataType","type":"String"},"index":{"define":"index","label":"序号","name":"index","relation":"index","rules":{"integer":true},"type":"Integer"},"labelName":{"define":"labelName","label":"关系标签","name":"labelName","relation":"labelName","type":"String"},"name":{"define":"name","label":"关系名称","name":"name","relation":"name","type":"String"},"refID":{"define":"refID","label":"对应ID","name":"refID","relation":"refID","type":"String"},"selectDataID":{"define":"selectDataID","label":"关联dataID","name":"selectDataID","relation":"selectDataID","type":"String"},"selectLabelName":{"define":"selectLabelName","label":"关联列名","name":"selectLabelName","relation":"selectLabelName","type":"String"}},"directDelete":false,"events":{},"idColumn":"name","limit":20,"xid":"formData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"type":{"define":"type","label":"type","name":"type","relation":"type","type":"String"}},"directDelete":false,"events":{},"idColumn":"type","initData":"[{\"type\":\"\"},{\"type\":\"input\"},{\"type\":\"password\"},{\"type\":\"range\"},{\"type\":\"output\"},{\"type\":\"textarea\"}]","limit":20,"xid":"editeTypeData"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});