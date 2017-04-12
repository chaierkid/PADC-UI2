define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var fUserName = "";
	var fUserType = "";
	var Model = function(){
		this.callParent();
	};

	Model.prototype.modelParamsReceive = function(event){
		var context = this.getContext();
        var fId  = context.getRequestParameter('fId');
		var tabquestion = this.comp("tabquestion");
		var cond = "1=1 and tabquestion.tabIsDelete = 0";
		if(null!==fId && ""!==fId){
			cond = cond + " and tabquestion.fId = '"+fId+"'";
		}
		tabquestion.setFilter("tabquestion", cond);
        tabquestion.refreshData();
	};
	Model.prototype.backBtnClick = function(event){
		justep.Shell.showPage("Allreadlist");
	};
	//Q2,是/否互斥fQ2_1
	Model.prototype.fQ2_1Click = function(event){
		var data = this.comp("tabquestion");
		var fQ2_1 = data.getValue("fQ2_1");
		if("是"==fQ2_1){
			data.setValue("fQ2_1", "是");
		}
		data.setValue("fQ2_2", "否");
	};

	//Q2,是/否互斥fQ2_2
	Model.prototype.fQ2_2Click = function(event){
		var data = this.comp("tabquestion");
		var fQ2_2 = data.getValue("fQ2_2");
		if("是"==fQ2_2){
			data.setValue("fQ2_2", "是");
		}
		data.setValue("fQ2_1", "否");
	};
	//Q3,是/否互斥fQ3_1
	Model.prototype.fQ3_1Click = function(event){
		var data = this.comp("tabquestion");
		var fQ3_1 = data.getValue("fQ3_1");
		if("是"==fQ3_1){
			data.setValue("fQ3_1", "是");
		}
		data.setValue("fQ3_2", "否");
	};
	//Q3,是/否互斥fQ3_2
	Model.prototype.fQ3_2Click = function(event){
		var data = this.comp("tabquestion");
		var fQ3_2 = data.getValue("fQ3_2");
		if("是"==fQ3_2){
			data.setValue("fQ3_2", "是");
		}
		data.setValue("fQ3_1", "否");
	};
	
	
	//Q4,fQ4_1是/否互斥fQ4_1,fQ4_2,fQ4_3,fQ4_4,fQ4_5
	Model.prototype.fQ4_1Click = function(event){
		var data = this.comp("tabquestion");
		var fQ4_1 = data.getValue("fQ4_1");
		var fQ4_2 = data.getValue("fQ4_2");
		var fQ4_3 = data.getValue("fQ4_3");
		var fQ4_4 = data.getValue("fQ4_4");
		var fQ4_5 = data.getValue("fQ4_5");
		if("是"==fQ4_1){
			data.setValue("fQ4_1", "是");
		}
		data.setValue("fQ4_2", "否");
		data.setValue("fQ4_3", "否");
		data.setValue("fQ4_4", "否");
		data.setValue("fQ4_5", "否");
	};
	//Q4,fQ4_2是/否互斥fQ4_1,fQ4_2,fQ4_3,fQ4_4,fQ4_5
	Model.prototype.fQ4_2Click = function(event){
		var data = this.comp("tabquestion");
		var fQ4_1 = data.getValue("fQ4_1");
		var fQ4_2 = data.getValue("fQ4_2");
		var fQ4_3 = data.getValue("fQ4_3");
		var fQ4_4 = data.getValue("fQ4_4");
		var fQ4_5 = data.getValue("fQ4_5");
		if("是"==fQ4_2){
			data.setValue("fQ4_2", "是");
		}
		data.setValue("fQ4_1", "否");
		data.setValue("fQ4_3", "否");
		data.setValue("fQ4_4", "否");
		data.setValue("fQ4_5", "否");
	};
	//Q4,fQ4_3是/否互斥fQ4_1,fQ4_2,fQ4_3,fQ4_4,fQ4_5
	Model.prototype.fQ4_3Click = function(event){
		var data = this.comp("tabquestion");
		var fQ4_1 = data.getValue("fQ4_1");
		var fQ4_2 = data.getValue("fQ4_2");
		var fQ4_3 = data.getValue("fQ4_3");
		var fQ4_4 = data.getValue("fQ4_4");
		var fQ4_5 = data.getValue("fQ4_5");
		if("是"==fQ4_3){
			data.setValue("fQ4_3", "是");
		}
		data.setValue("fQ4_1", "否");
		data.setValue("fQ4_2", "否");
		data.setValue("fQ4_4", "否");
		data.setValue("fQ4_5", "否");
	};
	//Q4,fQ4_4是/否互斥fQ4_1,fQ4_2,fQ4_3,fQ4_4,fQ4_5
	Model.prototype.fQ4_4Click = function(event){
		var data = this.comp("tabquestion");
		var fQ4_1 = data.getValue("fQ4_1");
		var fQ4_2 = data.getValue("fQ4_2");
		var fQ4_3 = data.getValue("fQ4_3");
		var fQ4_4 = data.getValue("fQ4_4");
		var fQ4_5 = data.getValue("fQ4_5");
		if("是"==fQ4_4){
			data.setValue("fQ4_4", "是");
		}
		data.setValue("fQ4_1", "否");
		data.setValue("fQ4_2", "否");
		data.setValue("fQ4_3", "否");
		data.setValue("fQ4_5", "否");
	};
	//Q4,fQ4_5是/否互斥fQ4_1,fQ4_2,fQ4_3,fQ4_4,fQ4_5
	Model.prototype.fQ4_5Click = function(event){
		var data = this.comp("tabquestion");
		var fQ4_1 = data.getValue("fQ4_1");
		var fQ4_2 = data.getValue("fQ4_2");
		var fQ4_3 = data.getValue("fQ4_3");
		var fQ4_4 = data.getValue("fQ4_4");
		var fQ4_5 = data.getValue("fQ4_5");
		if("是"==fQ4_5){
			data.setValue("fQ4_5", "是");
		}
		data.setValue("fQ4_1", "否");
		data.setValue("fQ4_2", "否");
		data.setValue("fQ4_3", "否");
		data.setValue("fQ4_4", "否");
	};
	//男
	Model.prototype.checkbox1Click = function(event){
		var data = this.comp("tabquestion");
		var data1 = this.comp("data1");
		data.setValue("fQ5_1_1Sex", "男");
		data1.setValue("nv", "否");
	};
	//女
	Model.prototype.checkbox3Click = function(event){
		var data = this.comp("tabquestion");
		var data1 = this.comp("data1");
		data.setValue("fQ5_1_1Sex", "女");
		data1.setValue("nan", "否");
	};
	Model.prototype.radioGroupPC1Click = function(event){
		var data = this.comp("tabquestion");
		var fQ5_1_1Sex = data.getValue("fQ5_1_1Sex");
		alert(fQ5_1_1Sex);
	};
	//保存
	Model.prototype.button1Click = function(event){
		var data = this.comp("tabquestion");
		var fHospitalCode = this.comp("fHospitalCode").val();
		var fHospitalName = this.comp("fHospitalName").val();
		if(null==fHospitalCode ||fHospitalCode ==""){
			alert("医院编码必须填写");
			return;
		}
		if(null==fHospitalName ||fHospitalName ==""){
			alert("医院名称必须填写");
			return;
		}
		data.saveData();
		alert("已保存");
	};
	return Model;
	
});