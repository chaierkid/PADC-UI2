window.__justep.__ResourceEngine.loadCss([{url: '/v_d9723824f8544fe290ed671b040e4353l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_0a050c8eab73435a94c0133af6bcb6e0l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_3bc5227f2cc04529aa89ed7d2cac75bbl_zh_CNs_d_m/system/core.min.js','/v_c9cae90950a1459ca331ff2e27b318abl_zh_CNs_d_m/system/common.min.js','/v_4e8abd509d8c45fba39041eef845b0abl_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/question/questionnaire/quesitonManager'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cbyIB3y';
	this._flag_='9c27da1512dc0b7e5373d7c9162b92ee';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fArea":{"define":"fArea","label":"fArea","name":"fArea","relation":"fArea","type":"String"},"fCreateDate":{"define":"fCreateDate","label":"fCreateDate","name":"fCreateDate","relation":"fCreateDate","rules":{"datetime":true},"type":"DateTime"},"fCreator":{"define":"fCreator","label":"fCreator","name":"fCreator","relation":"fCreator","type":"String"},"fEditeDate":{"define":"fEditeDate","label":"fEditeDate","name":"fEditeDate","relation":"fEditeDate","rules":{"datetime":true},"type":"DateTime"},"fEditor":{"define":"fEditor","label":"fEditor","name":"fEditor","relation":"fEditor","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fPhoto":{"define":"fPhoto","label":"fPhoto","name":"fPhoto","relation":"fPhoto","type":"String"},"fPhotoTime":{"define":"fPhotoTime","label":"fPhotoTime","name":"fPhotoTime","relation":"fPhotoTime","rules":{"datetime":true},"type":"DateTime"},"fProblem":{"define":"fProblem","label":"fProblem","name":"fProblem","relation":"fProblem","type":"String"},"fStreet":{"define":"fStreet","label":"fStreet","name":"fStreet","relation":"fStreet","type":"String"},"tabIsDelete":{"define":"tabIsDelete","label":"tabIsDelete","name":"tabIsDelete","relation":"tabIsDelete","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"fID","limit":20,"queryAction":"queryTabquestiona","saveAction":"saveTabquestiona","tableName":"tabquestiona","url":"/question/question","xid":"baasData1"});
}}); 
return __result;});
