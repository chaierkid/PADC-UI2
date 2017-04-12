<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:194px;left:561px;height:auto;"><div component="$UI/system/components/justep/data/data" autoLoad="false" xid="data1" idColumn="weixing" autoNew="true"><column name="weixing" type="Integer" xid="xid1"></column>
  <column name="jingdu" type="Integer" xid="xid2"></column>
  <column name="jingfen" type="Integer" xid="xid3"></column>
  <column name="jingmiao" type="Integer" xid="xid4"></column>
  <column name="weidu" type="Integer" xid="xid5"></column>
  <column name="weifen" type="Integer" xid="xid6"></column>
  <column name="weimiao" type="Integer" xid="xid7"></column></div></div> 

  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1" style="background-image:url($UI/Calculation/timg.jpg);background-repeat:no-repeat;background-position:right;">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="计算器">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1">计算器</div>
   <div class="x-titlebar-right reverse" xid="right1"></div></div></div>
   <div class="x-panel-content" xid="content1">
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"></div>
   <div class="x-col" xid="col2"></div>
   <div class="x-col" xid="col3"></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col x-col-center" xid="col7"><label class="x-label" xid="label6" style="font-weight:bold;font-size:16px;"><![CDATA[卫星经度]]></label></div>
   <div class="x-col" xid="col8"><input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input7" bind-ref='$model.data1.ref("weixing")'></input></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col x-col-center" xid="col10">
    <label class="x-label" xid="label7" style="font-weight:bold;font-size:16px;">地面站经度</label></div> 
   <div class="x-col" xid="col11">
    <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input8" bind-ref='$model.data1.ref("jingdu")' style="float:left;width:80px;"></input>
    <label class="x-label" xid="label12" style="font-weight:bold;font-size:16px;">°</label></div> 
   <div class="x-col" xid="col12">
    <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input9" bind-ref='$model.data1.ref("jingfen")' style="float:left;width:80px;"></input>
    <label class="x-label" xid="label13" style="font-weight:bold;font-size:16px;">′</label></div> 
   <div class="x-col" xid="col19">
    <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input10" bind-ref='$model.data1.ref("jingmiao")' style="float:left;width:80px;"></input>
    <label class="x-label" xid="label14" style="font-weight:bold;font-size:16px;">″</label></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col x-col-center" xid="col26">
    <label class="x-label" xid="label15" style="font-weight:bold;font-size:16px;">地面站纬度</label></div> 
   <div class="x-col" xid="col25">
    <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input15" bind-ref='$model.data1.ref("weidu")' style="float:left;width:80px;"></input>
    <label class="x-label" xid="label18" style="font-weight:bold;font-size:16px;">°</label></div> 
   <div class="x-col" xid="col24">
    <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input14" bind-ref='$model.data1.ref("weifen")' style="float:left;width:80px;"></input>
    <label class="x-label" xid="label17" style="font-weight:bold;font-size:16px;">′</label></div> 
   <div class="x-col" xid="col27">
    <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input16" bind-ref='$model.data1.ref("weimiao")' style="float:left;width:80px;"></input>
    <label class="x-label" xid="label16" style="font-weight:bold;font-size:16px;">″</label></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col9"></div>
   <div class="x-col" xid="col14"></div>
   <div class="x-col" xid="col15"></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4"></div>
   <div class="x-col" xid="col5" style="text-align:center;">
    <a component="$UI/system/components/justep/button/button" class="btn x-green" label="计算" xid="button1" onClick="button1Click">
     <i xid="i1"></i>
     <span xid="span1">计算</span></a> </div> 
   <div class="x-col" xid="col6"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col17"></div>
   <div class="x-col" xid="col18"></div>
   <div class="x-col" xid="col20"></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col" xid="col13">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4">
     <label class="x-label" xid="label4" style="font-weight:bold;font-size:16px;">地面站俯仰角：</label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output1"></div></div> </div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col" xid="col16">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit5">
     <label class="x-label" xid="label5" style="font-weight:bold;font-size:16px;">地面站方位角：</label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output2"></div></div> </div> </div>
  </div>
   </div>
  </div>