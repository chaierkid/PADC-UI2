define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/tabs/tabs');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/output/output');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/question/questionStatistics/echarts/questionStatistics'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cMVNfqe';
	this._flag_='eb18dbb0e361c4b805526dd77de3b3fa';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":false,"autoNew":true,"confirmDelete":false,"confirmRefresh":true,"defCols":{"area":{"define":"area","name":"area","relation":"area","type":"String"},"enddate":{"define":"enddate","name":"enddate","relation":"enddate","rules":{"date":true},"type":"Date"},"startdate":{"define":"startdate","name":"startdate","relation":"startdate","rules":{"date":true},"type":"Date"},"street":{"define":"street","name":"street","relation":"street","type":"String"}},"directDelete":false,"events":{},"idColumn":"area","limit":20,"xid":"data1"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"code":{"define":"code","name":"code","relation":"code","type":"String"},"name":{"define":"name","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{},"idColumn":"code","initData":"[{\"code\":\"全市\",\"name\":\"全市\"},{\"code\":\"H01\",\"name\":\"东城区\"},{\"code\":\"H02\",\"name\":\"西城区\"},{\"code\":\"H03\",\"name\":\"海淀区\"},{\"code\":\"H04\",\"name\":\"朝阳区\"},{\"code\":\"H05\",\"name\":\"丰台区\"},{\"code\":\"H06\",\"name\":\"石景山区\"},{\"code\":\"H07\",\"name\":\"门头沟区\"},{\"code\":\"H08\",\"name\":\"房山区\"},{\"code\":\"H09\",\"name\":\"大兴区\"},{\"code\":\"H10\",\"name\":\"通州区\"},{\"code\":\"H11\",\"name\":\"顺义区\"},{\"code\":\"H12\",\"name\":\"怀柔区\"},{\"code\":\"H13\",\"name\":\"密云区\"},{\"code\":\"H14\",\"name\":\"平谷区\"},{\"code\":\"H15\",\"name\":\"延庆区\"},{\"code\":\"H16\",\"name\":\"昌平区\"}]","limit":20,"xid":"data2"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});