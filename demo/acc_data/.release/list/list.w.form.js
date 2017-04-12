define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/pagerBar/pagerBar');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/bootstrap/pagination/pagination');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/windowDialog/windowDialog');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/pagerLimitSelect/pagerLimitSelect');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/demo/acc_data/list'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cmY32qm';
	this._flag_='3e668295dc00e0720afde3d80ff5ccd0';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fClass":{"define":"fClass","label":"分类","name":"fClass","relation":"fClass","type":"String"},"fCreateTime":{"define":"fCreateTime","label":"创建时间","name":"fCreateTime","relation":"fCreateTime","rules":{"datetime":true},"type":"DateTime"},"fDate":{"define":"fDate","label":"日期","name":"fDate","relation":"fDate","rules":{"date":true},"type":"Date"},"fDescription":{"define":"fDescription","label":"备注","name":"fDescription","relation":"fDescription","type":"String"},"fID":{"define":"fID","label":"主键","name":"fID","relation":"fID","type":"String"},"fMoney":{"define":"fMoney","label":"金额","name":"fMoney","relation":"fMoney","rules":{"number":true},"type":"Decimal"},"fType":{"define":"fType","label":"收入\\支出","name":"fType","relation":"fType","type":"String"}},"directDelete":false,"events":{"onBeforeNew":"accountDataBeforeNew","onCustomRefresh":"accountDataCustomRefresh","onCustomSave":"accountDataCustomSave"},"idColumn":"fID","initData":"[{\"fID\":\"001\",\"fCreateTime\":\"\",\"fDate\":\"2015-09-29\",\"fMoney\":100,\"fDescription\":\"去前门\",\"fType\":\"支出\",\"fClass\":\"交通\"},{\"fID\":\"002\",\"fCreateTime\":\"\",\"fDate\":\"2015-09-29\",\"fMoney\":200.5,\"fDescription\":\"去吃大餐\",\"fType\":\"支出\",\"fClass\":\"食物\"},{\"fID\":\"003\",\"fDate\":\"2015-09-29\",\"fMoney\":150,\"fDescription\":\"捡钱了\",\"fType\":\"收入\",\"fClass\":\"意外之财\"}]","limit":5,"xid":"accountData"});
}}); 
return __result;});