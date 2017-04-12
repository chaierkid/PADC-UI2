window.__justep.__ResourceEngine.loadCss([{url: '/v_3d8e34e770f74a2b8e23d52003be3ad1l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_17456e796a794b189242428a77370f66l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_ddb3134270564ebab36fa45c1b3cd553l_zh_CNs_d_m/system/components/comp2.min.js','/v_1785bfe08ceb495b8bfa7baca5930ac2l_zh_CNs_d_m/system/core.min.js','/v_e612256ecd2a427ab035e3815ff037bfl_zh_CNs_d_m/system/common.min.js','/v_f66c60eca6a44d03b8e868a000a954d2l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/attachment/attachmentSimple');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/imageAPP/main/channel/product'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cQFjYZr';
	this._flag_='ffbdbc4f7df8bd0e1ad03beb1df5f996';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":false,"confirmRefresh":false,"defCols":{"fAttachment":{"define":"fAttachment","label":"fAttachment","name":"fAttachment","relation":"fAttachment","type":"String"},"fCreateDate":{"define":"fCreateDate","label":"fCreateDate","name":"fCreateDate","relation":"fCreateDate","rules":{"datetime":true},"type":"DateTime"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fType":{"define":"fType","label":"fType","name":"fType","relation":"fType","type":"String"}},"directDelete":false,"events":{},"filters":{"filter0":"tabImageAPP.fType='arrange'"},"idColumn":"fID","limit":20,"orderBys":[{"relation":"fCreateDate","type":0}],"queryAction":"queryTabImageAPP","saveAction":"saveTabImageAPP","tableName":"tabImageAPP","url":"/imageAPP/imageAPP","xid":"image"});
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"fattach":{"define":"fattach","name":"fattach","relation":"fattach","type":"String"}},"directDelete":false,"events":{},"idColumn":"fattach","limit":20,"xid":"data1"});
}}); 
return __result;});
