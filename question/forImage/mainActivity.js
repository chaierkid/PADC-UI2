define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function(){
		this.callParent();
	};

	Model.prototype.backBtnClick = function(){
		this.comp("windowReceiver1").windowCancel();
	};



	Model.prototype.windowReceiver1Receive = function(event){
		this.comp("MTittle").set({'title':event.data.titleStr});

		/* var picList = [
		        {content: "images/1.jpg"},
		        { content: "images/2.png"},
		        {content: "images/3.png" },
		        { content:"images/5.jpg" },
		        {content:"images/6.jpg" },
		        { content:"images/7.jpg" },
		        { content:"images/8.jpg" },
		        {content:"images/9.jpg"  }
		     ];*/
        
		var islider3 = new iSlider({
            data: event.data.picList,
            dom: document.getElementById("non-looping"),
            animateType: 'default',
        });
        
        
	};

	return Model;
});