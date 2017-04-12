define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/extendType/commonExtendTypes');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/dataTables/dataTables');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/system/designer/baas/editor/saveRangeDlg'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cF7VZ7z';
	this._flag_='b4b000e3c1f908469f35310bed1e8a5c';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":false,"confirmRefresh":false,"defCols":{"checked":{"define":"checked","extendType":{"name":"sys.boolean"},"label":"选中","name":"checked","relation":"checked","type":"Boolean"},"name":{"define":"name","label":"表","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{"onCustomRefresh":"dataTableCustomRefresh"},"idColumn":"name","limit":-1,"xid":"dataTable"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"checked":{"define":"checked","extendType":{"name":"sys.boolean"},"label":"选中","name":"checked","relation":"checked","type":"Boolean"},"info":{"define":"info","label":"说明","name":"info","relation":"info","type":"String"},"name":{"define":"name","label":"字段","name":"name","relation":"name","type":"String"},"tableName":{"define":"tableName","label":"表","name":"tableName","relation":"tableName","type":"String"}},"directDelete":false,"events":{"onLoadSlave":"dataFiledLoadSlave"},"idColumn":"name","limit":-1,"master":{"relation":"tableName","xid":"dataTable"},"xid":"dataFiled"});
 this.addEditorClass('$UI/system/components/justep/button/checkbox',require('$UI/system/components/justep/button/checkbox'))
}}); 
return __result;});