window.__justep.__ResourceEngine.loadCss([{url: '/v_8279acfe6088486191c6255b27580612l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_957199415a4e42b78a411853d5cf432fl_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_4330c2f7b1334dba8ff1fbfb4fd5a8c2l_zh_CNs_d_m/system/components/comp2.min.js','/v_94bb0b4b05a441febb97ec32e90023a2l_zh_CNs_d_m/system/core.min.js','/v_d59ad578cf6441de94a6514a2677bbe4l_zh_CNs_d_m/system/common.min.js','/v_230c5f25673d40e3abc163091d79945fl_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/attachment/attachmentSimple');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/pai/main'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c3YbQFf';
	this._flag_='373c0329acf1b67680d93d210c282d78';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fAddress":{"define":"fAddress","label":"地理位置","name":"fAddress","relation":"fAddress","type":"String"},"fCreateTime":{"define":"fCreateTime","label":"建立时间","name":"fCreateTime","relation":"fCreateTime","type":"String"},"fDescription":{"define":"fDescription","label":"描述","name":"fDescription","relation":"fDescription","type":"String"},"fDownloadPath":{"define":"fDownloadPath","label":"下载地址","name":"fDownloadPath","relation":"fDownloadPath","type":"String"},"fFileName":{"define":"fFileName","label":"文件名","name":"fFileName","relation":"fFileName","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","rules":{"integer":true},"type":"Integer"},"fPositioning":{"define":"fPositioning","label":"定位","name":"fPositioning","relation":"fPositioning","type":"String"},"fPreviewPath":{"define":"fPreviewPath","label":"预览地址","name":"fPreviewPath","relation":"fPreviewPath","type":"String"}},"directDelete":false,"events":{},"idColumn":"fID","limit":20,"queryAction":"queryPai_pictures","saveAction":"savePai_pictures","tableName":"pai_pictures","url":"/justep/pai","xid":"paiData"});
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"fileName":{"define":"fileName","name":"fileName","relation":"fileName","type":"String"},"id":{"define":"id","name":"id","relation":"id","type":"String"}},"directDelete":false,"events":{"onValueChanged":"dataValueChanged"},"idColumn":"id","initData":"[{\"id\":\"1\",\"fileName\":\"\"}]","limit":-1,"xid":"data"});
}}); 
return __result;});
