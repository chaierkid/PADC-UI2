window.__justep.__ResourceEngine.loadCss([{url: '/v_ee26ab9eaa384900ab6823df10b699d6l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_dd05ae6b7bd54203ab3bd70e082945c7l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/lib/css2/dataControl,$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/lib/css3/round,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/lib/css4/e-commerce,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/lib/css1/linear,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_558c0bc667644f7ba44bcf0d79854df8l_zh_CNs_d_m/system/core.min.js','/v_8e97a0b8c3a743198c751aa89157001dl_zh_CNs_d_m/system/common.min.js','/v_c8b13f1013934145ae388fac8f54a4adl_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/cascadeMenu/index'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cJnAr2a';
	this._flag_='ef2787e53307216a24d7e0f550dc07db';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fid":{"define":"fid","label":"id","name":"fid","relation":"fid","type":"String"},"name":{"define":"name","label":"小说类型：","name":"name","relation":"name","type":"String"},"value":{"define":"value","label":"value","name":"value","relation":"value","type":"String"}},"directDelete":false,"events":{},"idColumn":"fid","initData":"[{\"fid\":\"1\",\"name\":\"言情\",\"value\":\"111\"},{\"fid\":\"2\",\"name\":\"都市\",\"value\":\"222\"},{\"fid\":\"3\",\"name\":\"玄幻\",\"value\":\"333\"}]","limit":20,"xid":"categoryData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"name":{"define":"name","label":"小说名称：","name":"name","relation":"name","type":"String"},"value":{"define":"value","label":"","name":"value","relation":"value","type":"String"}},"directDelete":false,"events":{},"idColumn":"name","initData":"[{\"id\":\"1\",\"name\":\"步步惊心\",\"value\":\"111\"},{\"id\":\"2\",\"name\":\"特种教师\",\"value\":\"111\"},{\"id\":\"3\",\"name\":\"超级兵王\",\"value\":\"111\"},{\"id\":\"4\",\"name\":\"校花的贴身高手\",\"value\":\"222\"},{\"id\":\"5\",\"name\":\"最强弃少\",\"value\":\"222\"},{\"id\":\"6\",\"name\":\"权利巅峰\",\"value\":\"222\"},{\"id\":\"7\",\"name\":\"完美世界\",\"value\":\"333\"},{\"id\":\"8\",\"name\":\"斗破苍穹\",\"value\":\"333\"},{\"id\":\"9\",\"name\":\"大主宰\",\"value\":\"333\"}]","limit":20,"xid":"novelData"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});
