define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var fUserName ="";
	var fUserType = "";
	var Model = function(){
		this.callParent();
	};
	//Q1跳转
	Model.prototype.button2Click = function(event){
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
//		var fSurveydate = this.comp("fSurveydate").val();
//		var fStareSurevey = this.comp("fStareSurevey").val();
//		var fEndSurevey = this.comp("fEndSurevey").val();
		var fQ1 = this.comp("fQ1").val();
		data.saveData();
		var contents = this.comp('contents3');
		if(fQ1=="是"){
			contents.to('Q1_1');
		}else if(null==fQ1 || fQ1=="否"){
			contents.to('Q2');
		}
	};
	//Q1_1跳转
	Model.prototype.button4Click = function(event){
		var data = this.comp("tabquestion");
//		var fQ1_1_1 = this.comp("fQ1_1_1").val();
//		var fQ1_1_2 = this.comp("fQ1_1_2").val();
//		var fQ1_1_3 = this.comp("fQ1_1_3").val();
//		var fQ1_1_4 = this.comp("fQ1_1_4").val();
//		data.setValue("fQ1_1_1", fQ1_1_1);
//		data.setValue("fQ1_1_2", fQ1_1_2);
//		data.setValue("fQ1_1_3", fQ1_1_3);
//		data.setValue("fQ1_1_4", fQ1_1_4);
		data.saveData();
		var contents = this.comp('contents3');
		contents.to('Q2');
	};

	//Q4跳转至Q5
	Model.prototype.button1Click = function(event){
		var data = this.comp("tabquestion");
		data.saveData();
		var contents = this.comp('contents3');
		contents.to('Q5');
	};

	//Q5跳转
	Model.prototype.button3Click = function(event){
		var data = this.comp("tabquestion");
		var fQ5 = this.comp("fQ5").val();
		data.saveData();
		if(fQ5=="是"){
			var contents = this.comp('contents3');
			contents.to('Q5_1_1');
		}else if(null==fQ5 || fQ5=="否"){
			var contents = this.comp('contents3');
			contents.to('Q6');
		}
	};
	//Q5_1_1跳转至Q5_1_2
	Model.prototype.button5Click = function(event){
		var data = this.comp("tabquestion");
		data.saveData();
		var contents = this.comp('contents3');
		contents.to('Q5_1_2');
	};
	//Q5_1跳转至Q6
	Model.prototype.button5_2Click = function(event){
		var data = this.comp("tabquestion");
		data.saveData();
		var contents = this.comp('contents3');
		contents.to('Q6');
	};

	//Q6跳转
	Model.prototype.button6Click = function(event){
		var data = this.comp("tabquestion");
		var fQ6 = this.comp("fQ6").val();
		data.saveData();
		if(fQ6=="是"){
			var contents = this.comp('contents3');
			contents.to('Q6_1');
		}else if(null==fQ6 || fQ6=="否"){
			alert("调查问卷结束，谢谢您的参与~");
			
			var contents = this.comp('contents3');
			contents.to('Q1');
			data.clear();
			data.newData();
			var fId = justep.UUID.createUUID();
			data.setValue("fId", fId);
			data.setValue("tabIsDelete", 0);
			data.setValue("tabIsShow", 1);
			data.setValue("fUserName", fUserName);
			
			var url = require.toUrl("./AQDCindex.w?fUserName="+fUserName+"&fUserType="+fUserType+"");
			justep.Shell.showPage(url);
		}
	};

	//完结保存
	Model.prototype.button7Click = function(event){
		var data = this.comp("tabquestion");
		data.setValue("fUserName", fUserName);
		data.saveData();
		alert("调查问卷结束，谢谢您的参与~");
		var url = require.toUrl("./AQDCindex.w?fUserName="+fUserName+"&fUserType="+fUserType+"");
		justep.Shell.showPage(url);
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


	Model.prototype.bar2Click = function(event){
			var contents = this.comp('contents3');
			contents.to('Q5_1_2');
	};


	Model.prototype.modelParamsReceive = function(event){
		var context = this.getContext();
        //获取URL中的参数
        fUserName = context.getRequestParameter('fUserName');
        fUserType = context.getRequestParameter('fUserType');
        var data = this.comp("tabquestion");
        data.clear();
		data.newData();
		var fId = justep.UUID.createUUID();
		data.setValue("fId", fId);
		data.setValue("tabIsDelete", 0);
		data.setValue("tabIsShow", 1);
		data.setValue("fUserName", fUserName);
	};


	Model.prototype.button31Click = function(event){
		var url = require.toUrl("./AQDCindex.w?fUserName="+fUserName+"&fUserType="+fUserType+"");
		justep.Shell.showPage(url);
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



	Model.prototype.button10Click = function(event){
		var data = this.comp("tabquestion");
		data.saveData();
		var contents = this.comp('contents3');
		contents.to('Q1');
	};



	Model.prototype.button12Click = function(event){
		var data = this.comp("tabquestion");
		data.saveData();
		var contents = this.comp('contents3');
		contents.to('Q1_1');
	};



	Model.prototype.button123Click = function(event){
		var data = this.comp("tabquestion");
		var fQ5 = this.comp("fQ5").val();
		data.saveData();
		var contents = this.comp('contents3');
		contents.to('Q2');
	};



	Model.prototype.button9Click = function(event){
		var data = this.comp("tabquestion");
		data.saveData();
		var contents = this.comp('contents3');
		contents.to('Q5');
	};



	Model.prototype.button11Click = function(event){
		var data = this.comp("tabquestion");
		data.saveData();
		var contents = this.comp('contents3');
		contents.to('Q5_1_1');
	};



	Model.prototype.button14Click = function(event){
		var data = this.comp("tabquestion");
		var fQ6 = this.comp("fQ6").val();
		data.saveData();
		var contents = this.comp('contents3');
		contents.to('Q5_1_2');
	};



	Model.prototype.button15Click = function(event){
		var data = this.comp("tabquestion");
		data.saveData();
		var contents = this.comp('contents3');
		contents.to('Q6');
	};


	Model.prototype.button17Click = function(event){
		var data = this.comp("tabquestion");
		data.setValue("fUserName", fUserName);
		data.saveData();
		alert("已保存");
		var contents = this.comp('contents3');
		contents.to('Q1');
		data.clear();
		data.newData();
		var fId = justep.UUID.createUUID();
		data.setValue("fId", fId);
		data.setValue("tabIsDelete", 0);
		data.setValue("tabIsShow", 1);
		data.setValue("fUserName", fUserName);
	};


	return Model;
});