window.__justep.__ResourceEngine.loadCss([{url: '/$v87f9a4414d1e4434ac54c546b7d2c571$lzh_CN$s$dm/UI2/system/components/comp.min.css', include: '$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/form/css/form,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/justep/common/css/scrollable,$model/UI2/system/components/bootstrap/accordion/css/accordion,$model/UI2/system/components/bootstrap/pager/css/pager,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/bootstrap/navs/css/navs,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/bootstrap/navbar/css/navbar,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/bootstrap/dialog/css/dialog,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/bootstrap/tabs/css/tabs,$model/UI2/system/components/bootstrap/pagination/css/pagination'},{url: '/$v7014d98878f04680ae19ade2962fd228$lzh_CN$s$dm/UI2/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'}]);window.__justep.__ResourceEngine.loadJs(['/$vd486a57aa15c437a9ea51274631bbd37$lzh_CN$s$dm/UI2/system/biz.common.min.js','/$v7492370c3c1b4674a186d96427e9fca9$lzh_CN$s$dm/UI2/system/components/comp2.min.js','/$ve340ab308ee94b7284f2b41d714b3601$lzh_CN$s$dm/UI2/system/components/comp.min.js','/$v78dd2136207d435e9ca02f769b1ebf32$lzh_CN$s$dm/UI2/system/common.min.js','/$vd0ecba675a63447eb460d97af79f7230$lzh_CN$s$dm/UI2/system/core.min.js']);define(function(require){
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/contents/content');
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/bootstrap/row/row');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/bootstrap/carousel/carousel');
require('$model/UI2/system/components/justep/contents/contents');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/data/bizData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/SuppliesSwap2/SuppliesSwap2/process/newprotal/main'); 
require('css!$model/UI2/SuppliesSwap2/SuppliesSwap2/process/newprotal/main').load();
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='__baseID__';
	this._flag_='6b53cb64d984ccc9cd8be238d5cbf429';
	this.callParent(contextUrl);
 var __BizData__ = require("$UI/system/components/justep/data/bizData");new __BizData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":false,"dataModel":"/SuppliesSwap2/SuppliesSwap2/data","defAggCols":{},"defCols":{"FAPPLYDATE":{"define":"TABWXREQUIREMENTPOOL.FAPPLYDATE","isBiz":true,"label":"需求提出日期","name":"FAPPLYDATE","relation":"TABWXREQUIREMENTPOOL.FAPPLYDATE","rules":{"date":true},"type":"Date"},"FAPPLYPERSONID":{"define":"TABWXREQUIREMENTPOOL.FAPPLYPERSONID","isBiz":true,"label":"需求提出人ID","name":"FAPPLYPERSONID","relation":"TABWXREQUIREMENTPOOL.FAPPLYPERSONID","type":"String"},"FAPPLYPERSONNAME":{"define":"TABWXREQUIREMENTPOOL.FAPPLYPERSONNAME","isBiz":true,"label":"需求提出人名称","name":"FAPPLYPERSONNAME","relation":"TABWXREQUIREMENTPOOL.FAPPLYPERSONNAME","type":"String"},"FBALANCECOUNT":{"define":"TABWXREQUIREMENTPOOL.FBALANCECOUNT","isBiz":true,"label":"已平衡数量","name":"FBALANCECOUNT","relation":"TABWXREQUIREMENTPOOL.FBALANCECOUNT","rules":{"integer":true},"type":"Integer"},"FBALANCESTATUS":{"define":"TABWXREQUIREMENTPOOL.FBALANCESTATUS","isBiz":true,"label":"平衡状态","name":"FBALANCESTATUS","relation":"TABWXREQUIREMENTPOOL.FBALANCESTATUS","type":"String"},"FBRANDCODE":{"define":"TABWXREQUIREMENTPOOL.FBRANDCODE","isBiz":true,"label":"FBRANDCODE","name":"FBRANDCODE","relation":"TABWXREQUIREMENTPOOL.FBRANDCODE","type":"String"},"FCOUNTUNIT":{"define":"TABWXREQUIREMENTPOOL.FCOUNTUNIT","isBiz":true,"label":"FCOUNTUNIT","name":"FCOUNTUNIT","relation":"TABWXREQUIREMENTPOOL.FCOUNTUNIT","type":"String"},"FDESCRIPTION":{"define":"TABWXREQUIREMENTPOOL.FDESCRIPTION","isBiz":true,"label":"备注（等其他描述）","name":"FDESCRIPTION","relation":"TABWXREQUIREMENTPOOL.FDESCRIPTION","type":"String"},"FENDCGUNITID":{"define":"TABWXREQUIREMENTPOOL.FENDCGUNITID","isBiz":true,"label":"FENDCGUNITID","name":"FENDCGUNITID","relation":"TABWXREQUIREMENTPOOL.FENDCGUNITID","type":"String"},"FENDCGUNITNAME":{"define":"TABWXREQUIREMENTPOOL.FENDCGUNITNAME","isBiz":true,"label":"FENDCGUNITNAME","name":"FENDCGUNITNAME","relation":"TABWXREQUIREMENTPOOL.FENDCGUNITNAME","type":"String"},"FISZH":{"define":"TABWXREQUIREMENTPOOL.FISZH","isBiz":true,"label":"FISZH","name":"FISZH","relation":"TABWXREQUIREMENTPOOL.FISZH","rules":{"integer":true},"type":"Integer"},"FITEMTYPEID":{"define":"TABWXREQUIREMENTPOOL.FITEMTYPEID","isBiz":true,"label":"FITEMTYPEID","name":"FITEMTYPEID","relation":"TABWXREQUIREMENTPOOL.FITEMTYPEID","type":"String"},"FNAME":{"define":"TABWXREQUIREMENTPOOL.FNAME","isBiz":true,"label":"FNAME","name":"FNAME","relation":"TABWXREQUIREMENTPOOL.FNAME","type":"String"},"FOPPERSONID":{"define":"TABWXREQUIREMENTPOOL.FOPPERSONID","isBiz":true,"label":"FOPPERSONID","name":"FOPPERSONID","relation":"TABWXREQUIREMENTPOOL.FOPPERSONID","type":"String"},"FOPPERSONNAME":{"define":"TABWXREQUIREMENTPOOL.FOPPERSONNAME","isBiz":true,"label":"FOPPERSONNAME","name":"FOPPERSONNAME","relation":"TABWXREQUIREMENTPOOL.FOPPERSONNAME","type":"String"},"FPLANPRICE":{"define":"TABWXREQUIREMENTPOOL.FPLANPRICE","isBiz":true,"label":"计划价格","name":"FPLANPRICE","relation":"TABWXREQUIREMENTPOOL.FPLANPRICE","rules":{"integer":true},"type":"Integer"},"FREPLACEMATERIAL":{"define":"TABWXREQUIREMENTPOOL.FREPLACEMATERIAL","isBiz":true,"label":"FREPLACEMATERIAL","name":"FREPLACEMATERIAL","relation":"TABWXREQUIREMENTPOOL.FREPLACEMATERIAL","type":"String"},"FREQCONFIRMDRAFTID":{"define":"TABWXREQUIREMENTPOOL.FREQCONFIRMDRAFTID","isBiz":true,"label":"FREQCONFIRMDRAFTID","name":"FREQCONFIRMDRAFTID","relation":"TABWXREQUIREMENTPOOL.FREQCONFIRMDRAFTID","type":"String"},"FREQUIREMENTLISTID":{"define":"TABWXREQUIREMENTPOOL.FREQUIREMENTLISTID","isBiz":true,"label":"需求单ID","name":"FREQUIREMENTLISTID","relation":"TABWXREQUIREMENTPOOL.FREQUIREMENTLISTID","type":"String"},"FREQUIREMENTQTY":{"define":"TABWXREQUIREMENTPOOL.FREQUIREMENTQTY","isBiz":true,"label":"需求数量","name":"FREQUIREMENTQTY","relation":"TABWXREQUIREMENTPOOL.FREQUIREMENTQTY","rules":{"integer":true},"type":"Integer"},"FREQUIREMENTUNITID":{"define":"TABWXREQUIREMENTPOOL.FREQUIREMENTUNITID","isBiz":true,"label":"需求单位ID","name":"FREQUIREMENTUNITID","relation":"TABWXREQUIREMENTPOOL.FREQUIREMENTUNITID","type":"String"},"FREQUIREMENTUNITNAME":{"define":"TABWXREQUIREMENTPOOL.FREQUIREMENTUNITNAME","isBiz":true,"label":"需求单位名称","name":"FREQUIREMENTUNITNAME","relation":"TABWXREQUIREMENTPOOL.FREQUIREMENTUNITNAME","type":"String"},"FSELLPICE":{"define":"TABWXREQUIREMENTPOOL.FSELLPICE","isBiz":true,"label":"卖出价格","name":"FSELLPICE","relation":"TABWXREQUIREMENTPOOL.FSELLPICE","rules":{"integer":true},"type":"Integer"},"FSELLUNITID":{"define":"TABWXREQUIREMENTPOOL.FSELLUNITID","isBiz":true,"label":"FSELLUNITID","name":"FSELLUNITID","relation":"TABWXREQUIREMENTPOOL.FSELLUNITID","type":"String"},"FSELLUNITNAME":{"define":"TABWXREQUIREMENTPOOL.FSELLUNITNAME","isBiz":true,"label":"FSELLUNITNAME","name":"FSELLUNITNAME","relation":"TABWXREQUIREMENTPOOL.FSELLUNITNAME","type":"String"},"FSIZE":{"define":"TABWXREQUIREMENTPOOL.FSIZE","isBiz":true,"label":"FSIZE","name":"FSIZE","relation":"TABWXREQUIREMENTPOOL.FSIZE","type":"String"},"FSTANDARD":{"define":"TABWXREQUIREMENTPOOL.FSTANDARD","isBiz":true,"label":"FSTANDARD","name":"FSTANDARD","relation":"TABWXREQUIREMENTPOOL.FSTANDARD","type":"String"},"FSTATUS":{"define":"TABWXREQUIREMENTPOOL.FSTATUS","isBiz":true,"label":"FSTATUS","name":"FSTATUS","relation":"TABWXREQUIREMENTPOOL.FSTATUS","type":"String"},"FSUPPLYSTATUS":{"define":"TABWXREQUIREMENTPOOL.FSUPPLYSTATUS","isBiz":true,"label":"FSUPPLYSTATUS","name":"FSUPPLYSTATUS","relation":"TABWXREQUIREMENTPOOL.FSUPPLYSTATUS","type":"String"},"FTOTALLYINVENTORY":{"define":"TABWXREQUIREMENTPOOL.FTOTALLYINVENTORY","isBiz":true,"label":"库存数量","name":"FTOTALLYINVENTORY","relation":"TABWXREQUIREMENTPOOL.FTOTALLYINVENTORY","rules":{"integer":true},"type":"Integer"},"FWISHDELIVERYDATE":{"define":"TABWXREQUIREMENTPOOL.FWISHDELIVERYDATE","isBiz":true,"label":"期望交货时间","name":"FWISHDELIVERYDATE","relation":"TABWXREQUIREMENTPOOL.FWISHDELIVERYDATE","rules":{"date":true},"type":"Date"},"TABCREATEDATE":{"define":"TABWXREQUIREMENTPOOL.TABCREATEDATE","isBiz":true,"label":"创建时间","name":"TABCREATEDATE","relation":"TABWXREQUIREMENTPOOL.TABCREATEDATE","rules":{"datetime":true},"type":"DateTime"},"TABCREATORID":{"define":"TABWXREQUIREMENTPOOL.TABCREATORID","isBiz":true,"label":"创建人ID","name":"TABCREATORID","relation":"TABWXREQUIREMENTPOOL.TABCREATORID","type":"String"},"TABCREATORNAME":{"define":"TABWXREQUIREMENTPOOL.TABCREATORNAME","isBiz":true,"label":"创建人名称","name":"TABCREATORNAME","relation":"TABWXREQUIREMENTPOOL.TABCREATORNAME","type":"String"},"TABEDITDATE":{"define":"TABWXREQUIREMENTPOOL.TABEDITDATE","isBiz":true,"label":"修改时间","name":"TABEDITDATE","relation":"TABWXREQUIREMENTPOOL.TABEDITDATE","rules":{"datetime":true},"type":"DateTime"},"TABEDITORID":{"define":"TABWXREQUIREMENTPOOL.TABEDITORID","isBiz":true,"label":"修改人ID","name":"TABEDITORID","relation":"TABWXREQUIREMENTPOOL.TABEDITORID","type":"String"},"TABEDITORNAME":{"define":"TABWXREQUIREMENTPOOL.TABEDITORNAME","isBiz":true,"label":"TABEDITORNAME","name":"TABEDITORNAME","relation":"TABWXREQUIREMENTPOOL.TABEDITORNAME","type":"String"},"TABISDELETE":{"define":"TABWXREQUIREMENTPOOL.TABISDELETE","isBiz":true,"label":"是否删除","name":"TABISDELETE","relation":"TABWXREQUIREMENTPOOL.TABISDELETE","rules":{"integer":true},"type":"Integer"},"TABREMARK":{"define":"TABWXREQUIREMENTPOOL.TABREMARK","isBiz":true,"label":"备注","name":"TABREMARK","relation":"TABWXREQUIREMENTPOOL.TABREMARK","type":"String"},"TABWXREQUIREMENTPOOL":{"define":"TABWXREQUIREMENTPOOL","name":"TABWXREQUIREMENTPOOL","relation":"TABWXREQUIREMENTPOOL","type":"String"},"calcCheckBox":{"define":"EXPRESS","name":"calcCheckBox","relation":"EXPRESS","type":"String"},"fIsCheck":{"define":"TABWXREQUIREMENTPOOL.fIsCheck","isBiz":true,"label":"是否检阅","name":"fIsCheck","relation":"TABWXREQUIREMENTPOOL.fIsCheck","rules":{"integer":true},"type":"Integer"},"fZhPersonID":{"define":"tabPersonConfig.fZhPersonID","isBiz":true,"label":"中航人员ID","name":"fZhPersonID","relation":"tabPersonConfig.fZhPersonID","type":"String"},"version":{"define":"TABWXREQUIREMENTPOOL.version","isBiz":true,"label":"版本","name":"version","relation":"TABWXREQUIREMENTPOOL.version","rules":{"integer":true},"type":"Integer"}},"directDelete":true,"events":{"onSaveCommit":"saveCommit"},"filters":{"filter0":"TABWXREQUIREMENTPOOL.TABISDELETE=0 and TABWXREQUIREMENTPOOL.FSTATUS = '已提交' and TABWXREQUIREMENTPOOL.fIsCheck = 0 and tabPersonConfig.fZhPersonID = :currentPersonID() and tabPersonConfig.tabIsDelete=0"},"idColumn":"TABWXREQUIREMENTPOOL","limit":20,"newAction":"createTABWXREQUIREMENTPOOLAction","offset":0,"orderBys":{"TABCREATEDATE":1},"queryAction":"queryPTTABWXREQUIREMENTPOOLAction","saveAction":"saveTABWXREQUIREMENTPOOLAction","updateMode":"whereVersion","xid":"mainData"});
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"count":{"define":"count","name":"count","relation":"count","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"count","limit":20,"xid":"data1"});
}}); 
return __result;});