<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:mobile"
  xid="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:342px;left:182px;" onLoad="modelLoad" onActive="modelActive">
    <div component="$UI/system/components/justep/data/baasData" xid="mainData"
      directDelete="true" autoLoad="true" idColumn="fId"
      queryAction="queryTabuser" tableName="tabuser" url="/question/question" saveAction="saveTabuser"
      confirmRefresh="false" limit="-1">
      <column isCalculate="true" label="选择" name="calcCheckBox" type="Boolean" xid="calcCheckBox"/>
      <column label="" name="fId" type="String"
        xid=""/>
      <column label="" name="fUserName" type="String"
        xid=""/>
      <column label="" name="fUserType" type="String"
        xid=""/>
      <column label="" name="tabIsDelete" type="Integer"
        xid=""/>
      <column label="" name="tabIsShow" type="Integer"
        xid=""/>
      <column label="" name="fPassword" type="String"
        xid=""/>
     
    <filter name="filter0" xid="filter1"><![CDATA[tabuser.tabIsDelete=0]]></filter></div>  
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="value"><column label="value" name="value" type="String" xid="xid1"></column>
  <column label="label" name="label" type="String" xid="xid2"></column>
  <data xid="default1">[{&quot;value&quot;:&quot;访员&quot;,&quot;label&quot;:&quot;访员&quot;},{&quot;value&quot;:&quot;领导&quot;,&quot;label&quot;:&quot;领导&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/baasData" autoLoad="false" xid="tabuser" queryAction="queryTabuser" saveAction="saveTabuser" url="/question/question" tableName="tabuser" idColumn="fId" limit="-1" confirmDelete="false" confirmRefresh="false">
   <column label="fId" name="fId" type="String" xid="default7"></column>
   <column label="fUserName" name="fUserName" type="String" xid="default8"></column>
   <column label="fUserType" name="fUserType" type="String" xid="default9"></column>
   <column label="tabIsDelete" name="tabIsDelete" type="Integer" xid="default10"></column>
   <column label="tabIsShow" name="tabIsShow" type="Integer" xid="default11"></column>
   <column label="fPassword" name="fPassword" type="String" xid="default12"></column>
   <master xid="default13" data="tabuser"></master></div></div>  
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full" active="0" xid="contents">
   <div class="x-contents-content" xid="list">
    <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="人员列表">
   <div class="x-titlebar-left" xid="left1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" xid="button3" icon="icon-chevron-left" onClick="button3Click">
   <i xid="i3" class="icon-chevron-left"></i>
   <span xid="span3"></span></a></div>
   <div class="x-titlebar-title" xid="title1">人员列表</div>
   <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button1" icon="icon-plus" onClick="button1Click">
   <i xid="i1" class="icon-plus"></i>
   <span xid="span1"></span></a>
  </div></div></div>
   <div class="x-panel-content" xid="content3"><div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="mainData">
   <ul class="x-list-template" xid="listTemplateUl1">
    <li xid="li1"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-10 x-col-center" xid="col1" style="text-align:left;"><span component="$UI/system/components/justep/button/checkbox" bind-ref='ref("calcCheckBox")' class="x-checkbox" xid="checkbox1"></span></div>
   <div class="x-col" xid="col2"><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col5"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref='ref("fUserName")'></div></div>
   <div class="x-col" xid="col6"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" bind-ref='ref("fUserType")'></div></div>
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col8"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output3" bind-ref='ref("fPassword")'></div></div>
   </div></div>
   </div></li></ul> </div></div>
   <div class="x-panel-bottom" xid="bottom1"><div component="$UI/system/components/justep/button/buttonGroup" class="btn-group-lg btn-group-justified" tabbed="true" xid="buttonGroup1" style="height:100%;width:100%;"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="删除" xid="button4" onClick="button4Click">
   <i xid="i4"></i>
   <span xid="span4">删除</span></a></div></div></div></div> 
   <div class="x-contents-content" xid="detail"><div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2">
   <div class="x-panel-top" xid="top2"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar2" title="新增用户名">
   <div class="x-titlebar-left" xid="left2"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" xid="button7" onClick="button7Click" icon="linear linear-volumehigh">
   <i xid="i8" class="linear linear-volumehigh"></i>
   <span xid="span8"></span></a></div>
   <div class="x-titlebar-title" xid="title2">新增用户名</div>
   <div class="x-titlebar-right reverse" xid="right2"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="button" xid="button6" icon="linear linear-bubble" onClick="button6Click">
   <i xid="i7" class="linear linear-bubble"></i>
   <span xid="span7"></span></a></div></div></div>
   <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit1">
   <label class="x-label" xid="label1"><![CDATA[用户名：]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input1" bind-ref='$model.mainData.ref("fUserName")'></input></div>
  <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
   <label class="x-label" xid="label2"><![CDATA[密码：]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input2" bind-ref='$model.mainData.ref("fPassword")'></input></div>
  <div class="x-gridSelect" component="$UI/system/components/justep/gridSelect/gridSelect" xid="gridSelect1" bind-ref='$model.mainData.ref("fUserType")'>
   <option xid="option1" data="data1" value="value" label="label"></option></div></div>
   </div></div></div></div>