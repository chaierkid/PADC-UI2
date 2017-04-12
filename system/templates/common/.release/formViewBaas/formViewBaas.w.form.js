define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/designerCommon/grid/grid');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/system/templates/common/formViewBaas'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cqUFnEv';
	this._flag_='c8a055ca8d75a64a258bd8b14f077bd1';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"colEditor":{"define":"colEditor","label":"编辑器(*)","name":"colEditor","relation":"colEditor","type":"String"},"dataType":{"define":"dataType","label":"关系类型","name":"dataType","relation":"dataType","type":"String"},"index":{"define":"index","label":"序号","name":"index","relation":"index","type":"String"},"labelName":{"define":"labelName","label":"关系标签","name":"labelName","relation":"labelName","type":"String"},"name":{"define":"name","label":"关系名称","name":"name","relation":"name","type":"String"},"refID":{"define":"refID","label":"对应ID","name":"refID","relation":"refID","type":"String"},"selectDataID":{"define":"selectDataID","label":"关联dataID","name":"selectDataID","relation":"selectDataID","type":"String"},"selectLabelName":{"define":"selectLabelName","label":"关联列名","name":"selectLabelName","relation":"selectLabelName","type":"String"}},"directDelete":false,"events":{},"idColumn":"name","limit":20,"xid":"formData"});
}}); 
return __result;});