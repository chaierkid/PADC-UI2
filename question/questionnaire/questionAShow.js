define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var operator  ='';
	var parentID  ='';
	var Model = function(){
		this.callParent();
	};
	
	function Trim(str,is_global){
		var result ='';
        if(str!==null && str!=='' && str!==undefined){
        	result = str.replace(/(^\s+)|(\s+$)/g,"");
	        if(is_global.toLowerCase()=="g"){
				result = result.replace(/\s/g,"");
	        }
	        result = result.replace(/\'/g,"''");
        }
        return result;
	}



	Model.prototype.modelParamsReceive = function(event){
		operator = event.params.operator;
		parentID =  event.params.id;
        var data = this.comp("tabquestion");
		data.setFilter("tabquestiona", "tabquestiona.fID='"+parentID+"'  "
				+ " and tabquestiona.tabIsDelete=0 ");
		data.refreshData();
        if(this.getParent().userType =='超级管理员'){
    		var button2 = $(this.getElementByXid("button2"));
			button2.css('display', 'block'); 
			var button3 = $(this.getElementByXid("button3"));
			button3.css('display', 'block');
    	} 
		
	};


	Model.prototype.button31Click = function(event){
		this.close();
	};


	Model.prototype.button2Click = function(event){
		if(confirm("确认删除该问卷？")){
			var data = this.comp("tabquestion");
			var row =data.getCurrentRow();
	        row.val( "tabIsDelete", "1");
	        data.setValue("fEditor", this.getParent().userName,row);
			data.setValue("fEditeDate", justep.Date.toString(new Date(),justep.Date.STANDART_FORMAT),row);
	        data.saveData();
			this.close();
		}
	};


	Model.prototype.button3Click = function(event){
		justep.Shell.showPage( "questionA",{operator:"edit",id:parentID});
	};


	 


	Model.prototype.div28Click = function(event){
		var tabquestion = this.comp("tabquestion");
		var fattached_file= tabquestion.getValueByID("fPhoto",parentID);
		justep.Shell.showPage( "showImage",{fattached_file:fattached_file,parentID:parentID});
	};


	return Model;
});