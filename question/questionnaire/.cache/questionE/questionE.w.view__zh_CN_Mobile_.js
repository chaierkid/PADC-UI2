window.__justep.__ResourceEngine.loadCss([{url: '/v_e6fa847c69c349669066b711b09307c0l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_4f94ddf2baaa4eda9e837293f019b4e5l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_1c93b9a514c84ed89f30c25413687474l_zh_CNs_d_m/system/components/comp2.min.js','/v_7776a4d5fa0b4cb9af7c5a2d1f88a0acl_zh_CNs_d_m/system/core.min.js','/v_89e84433085e4e1cab796318013b1955l_zh_CNs_d_m/system/common.min.js','/v_827efe6abb88475a9093f060a2b4d2edl_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/attachment/attachmentSimple');
require('$model/UI2/system/components/justep/select/checkboxGroup');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/button/checkbox');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/question/questionnaire/questionE'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='caauequ';
	this._flag_='d0c120933fad9616cb54c7b608b49d8b';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"code":{"define":"code","name":"code","relation":"code","type":"String"},"name":{"define":"name","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{},"idColumn":"code","initData":"[{\"code\":\"H01\",\"name\":\"东城区\"},{\"code\":\"H02\",\"name\":\"西城区\"},{\"code\":\"H03\",\"name\":\"海淀区\"},{\"code\":\"H04\",\"name\":\"朝阳区\"},{\"code\":\"H05\",\"name\":\"丰台区\"},{\"code\":\"H06\",\"name\":\"石景山区\"},{\"code\":\"H07\",\"name\":\"门头沟区\"},{\"code\":\"H08\",\"name\":\"房山区\"},{\"code\":\"H09\",\"name\":\"大兴区\"},{\"code\":\"H10\",\"name\":\"通州区\"},{\"code\":\"H11\",\"name\":\"顺义区\"},{\"code\":\"H12\",\"name\":\"怀柔区\"},{\"code\":\"H13\",\"name\":\"密云区\"},{\"code\":\"H14\",\"name\":\"平谷区\"},{\"code\":\"H15\",\"name\":\"延庆区\"},{\"code\":\"H16\",\"name\":\"昌平区\"}]","limit":20,"xid":"data1"});
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":false,"confirmRefresh":false,"defCols":{"calcCheckBox":{"define":"EXPRESS","label":"选择","name":"calcCheckBox","relation":"EXPRESS","type":"Boolean"},"fArea":{"define":"fArea","label":"fArea","name":"fArea","relation":"fArea","type":"String"},"fContent":{"define":"fContent","label":"fContent","name":"fContent","relation":"fContent","type":"String"},"fCreateDate":{"define":"fCreateDate","label":"fCreateDate","name":"fCreateDate","relation":"fCreateDate","rules":{"datetime":true},"type":"DateTime"},"fCreator":{"define":"fCreator","label":"fCreator","name":"fCreator","relation":"fCreator","type":"String"},"fEditeDate":{"define":"fEditeDate","label":"fEditeDate","name":"fEditeDate","relation":"fEditeDate","rules":{"datetime":true},"type":"DateTime"},"fEditor":{"define":"fEditor","label":"fEditor","name":"fEditor","relation":"fEditor","type":"String"},"fID":{"define":"fID","label":"fID","name":"fID","relation":"fID","type":"String"},"fPhoto":{"define":"fPhoto","label":"fPhoto","name":"fPhoto","relation":"fPhoto","type":"String"},"fPhotoTime":{"define":"fPhotoTime","label":"fPhotoTime","name":"fPhotoTime","relation":"fPhotoTime","rules":{"datetime":true},"type":"DateTime"},"fProblem":{"define":"fProblem","label":"fProblem","name":"fProblem","relation":"fProblem","type":"String"},"fStreet":{"define":"fStreet","label":"fStreet","name":"fStreet","relation":"fStreet","type":"String"},"tabIsDelete":{"define":"tabIsDelete","label":"tabIsDelete","name":"tabIsDelete","relation":"tabIsDelete","type":"String"}},"directDelete":false,"events":{},"filters":{"filter0":""},"idColumn":"fID","limit":10,"queryAction":"queryTabquestione","saveAction":"saveTabquestione","tableName":"tabquestione","url":"/question/question","xid":"tabquestion"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"name":{"define":"name","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"name\":\"代开票据\"},{\"id\":\"2\",\"name\":\"代办病历\"},{\"id\":\"3\",\"name\":\"散发广告\"},{\"id\":\"4\",\"name\":\"流浪乞讨\"},{\"id\":\"5\",\"name\":\"呲活揽客\"}]","limit":20,"xid":"check"});
 new __Data__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":false,"confirmRefresh":false,"defCols":{"content":{"define":"content","name":"content","relation":"content","type":"String"}},"directDelete":false,"events":{},"idColumn":"content","limit":20,"xid":"data3"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});
