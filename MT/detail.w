<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:334px;left:745px;height:auto;"> 
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="a">
   <column name="a" type="String" xid="xid1"></column>
   <column name="b" type="String" xid="xid2"></column>
   <column name="c" type="String" xid="xid3"></column>
   <column name="d" type="String" xid="xid4"></column>
   <column name="e" type="String" xid="xid5"></column>
   <column name="f" type="String" xid="xid6"></column>
   <column name="g" type="String" xid="xid7"></column>
   <column name="h" type="String" xid="xid8"></column>
   <column name="i" type="String" xid="xid9"></column>
   <column name="j" type="String" xid="xid10"></column>
   <column name="k" type="String" xid="xid11"></column>
   <column name="l" type="String" xid="xid12"></column>
   <column name="m" type="String" xid="xid13"></column>
   <column name="n" type="String" xid="xid14"></column>
   <column name="o" type="String" xid="xid15"></column>
   <data xid="default1">[{&quot;a&quot;:&quot;GG-FC1-94-7010&quot;,&quot;b&quot;:&quot;DD-FC1-94061-3010,-3010/MX&quot;,&quot;c&quot;:&quot;2BEG1P,2BMM1P&quot;,&quot;d&quot;:&quot;1-*&quot;}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="更改单详细"
          class="x-titlebar">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">更改单详细</div>  
          <div class="x-titlebar-right reverse"> 
          </div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1"><div component="$UI/system/components/fragment/form/formRow5Btn2" xid="formRow5Btn24" style="height:100%;">
   <div class="table table-hover table-bordered" xid="div29" style="background-color:#FFFFFF;">
    <div class="form-horizontal container-fluid" component="$UI/system/components/bootstrap/form/form" xid="form1">
     <div class="form-group" xid="formGroup2">
      <div class="col-sm-12" xid="col1">
       <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 change-color" xid="labelEdit12" style="height:39px;width:100%;">
        <label class="x-label" xid="label12"><![CDATA[更改单号]]></label>
        <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output3" bind-ref='$model.data1.ref("a")' style="width:456px;"></div></div> 
       <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3">
        <label class="x-label" xid="label2"><![CDATA[图文号]]></label>
        <div class="x-edit" xid="div6">
         <div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref='$model.data1.ref("b")'></div></div> </div> 
       <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 change-color" xid="labelEdit19">
        <label class="x-label" xid="label18"><![CDATA[批次]]></label>
        <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output6" bind-ref='$model.data1.ref("c")' style="width:456px;" format="0,000.00"></div>
        <div component="$UI/system/components/justep/output/output" class="x-output x-edit x-output_x-edit_margin" xid="output1"></div></div> 
       <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4">
        <label class="x-label" xid="label4"><![CDATA[架次]]></label>
        <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output7" bind-ref='$model.data1.ref("d")'></div></div> 
       <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 change-color" xid="labelEdit11">
        <label class="x-label" xid="label11"><![CDATA[有效期]]></label>
        <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output9"></div></div> 
       <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
        <label class="x-label" xid="label11"><![CDATA[制发日期]]></label>
        <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output8"></div></div> 
       <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 change-color" xid="labelEdit14">
        <label class="x-label" xid="label13"><![CDATA[机型]]></label>
        <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output14"></div></div> 
       <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit5">
        <label class="x-label" xid="label5"><![CDATA[是否LG单]]></label>
        <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output5"></div></div> 
       <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 change-color" xid="labelEdit1">
        <label class="x-label" xid="label6"><![CDATA[设计人]]></label>
        <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output2"></div></div> 
       <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 " xid="labelEdit8">
        <label class="x-label" xid="label9"><![CDATA[是否更改技术文件]]></label>
        <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output13"></div></div> 
       <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 change-color" xid="labelEdit9">
        <label class="x-label" xid="label10"><![CDATA[是否更改目录]]></label>
        <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output17"></div></div> 
       <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 " xid="labelEdit55">
        <label class="x-label" xid="label62"><![CDATA[保留履历]]></label>
        <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output52"></div></div> 
       
       
       
       
       
       
       
       
       </div> 
      
      </div> </div> </div> </div></div>
  </div> 
</div>