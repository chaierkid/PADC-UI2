<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:247px;left:589px;" onLoad="modelLoad" onActive="modelActive">
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="id"><column name="id" type="String" xid="xid1"></column>
  <column name="name" type="String" xid="xid2"></column>
  <data xid="default1">[{&quot;id&quot;:&quot;1&quot;,&quot;name&quot;:&quot;访员&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;name&quot;:&quot;领导&quot;}]</data></div><div component="$UI/system/components/justep/data/baasData" autoLoad="false" xid="tabuser" queryAction="queryTabuser" saveAction="saveTabuser" url="/question/question" tableName="tabuser" idColumn="fId" limit="-1" confirmDelete="false" confirmRefresh="false">
   <column label="fId" name="fId" type="String" xid="default7"></column>
   <column label="fUserName" name="fUserName" type="String" xid="default8"></column>
   <column label="fUserType" name="fUserType" type="String" xid="default9"></column>
   <column label="tabIsDelete" name="tabIsDelete" type="Integer" xid="default10"></column>
   <column label="tabIsShow" name="tabIsShow" type="Integer" xid="default11"></column>
   <column label="fPassword" name="fPassword" type="String" xid="default12"></column>
   <master xid="default13" data="tabuser"></master></div>
  <div component="$UI/system/components/justep/data/baasData" autoLoad="false" xid="main" queryAction="queryTabuser" saveAction="saveTabuser" url="/question/question" tableName="tabuser" idColumn="fId" limit="1" confirmDelete="false" confirmRefresh="false" autoNew="false">
   <master xid="default3" data="main"></master>
  <column label="fId" name="fId" type="String" xid="default15"></column>
  <column label="fUserName" name="fUserName" type="String" xid="default16"></column>
  <column label="fUserType" name="fUserType" type="String" xid="default17"></column>
  <column label="tabIsDelete" name="tabIsDelete" type="Integer" xid="default18"></column>
  <column label="tabIsShow" name="tabIsShow" type="Integer" xid="default19"></column>
  <column label="fPassword" name="fPassword" type="String" xid="default20"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1" style="background-image:url($UI/question/img/1背景.jpg);background-size:cover;">
   <div class="x-panel-top" xid="top1" height="60">
    <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" style="height:100%;font-size:x-large;">
     <div class="x-titlebar-left" xid="left1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-left" xid="button3" icon="icon-chevron-left" onClick="button3Click" label="首页">
   <i xid="i3" class="icon-chevron-left"></i>
   <span xid="span2">首页</span></a></div>
     <div class="x-titlebar-title" xid="title1">
      <span xid="span1" style="font-weight:normal;"><![CDATA[注册]]></span></div> 
     <div class="x-titlebar-right reverse" xid="right1"></div></div> </div> 
   <div class="x-panel-content" xid="content1">
    
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col17"></div>
   <div class="x-col" xid="col18"></div>
   <div class="x-col" xid="col19"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col" xid="col20"></div>
   <div class="x-col" xid="col21"></div>
   <div class="x-col" xid="col22"></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col x-col-20" xid="col1"></div>
   <div class="x-col" xid="col3"><input type="text" class="form-control" component="$UI/system/components/justep/input/input" xid="nameInput" placeHolder="账号" bind-ref='$model.main.ref("fUserName")' style="font-size:large;background-color:transparent;color:#FFFFFF;"></input></div>
   <div class="x-col x-col-20" xid="col4"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col" xid="col14"></div>
   <div class="x-col" xid="col15"></div>
   <div class="x-col" xid="col16"></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col x-col-20" xid="col5"></div>
   <div class="x-col" xid="col6"><input component="$UI/system/components/justep/input/password" class="form-control" xid="passwordInput" placeHolder="密码" bind-ref='$model.main.ref("fPassword")' style="font-size:large;background-color:transparent;color:#FFFFFF;"></input></div>
   <div class="x-col x-col-20" xid="col7"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col" xid="col23"></div>
   <div class="x-col" xid="col24"></div>
   <div class="x-col" xid="col25"></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col" xid="col11"></div>
   <div class="x-col" xid="col12"><span component="$UI/system/components/justep/select/radioGroup" class="x-radio-group" xid="radioGroup2" bind-itemset="data1" bind-itemsetValue='ref("name")' bind-itemsetLabel='ref("name")' bind-ref='$model.main.ref("fUserType")' style="color:#FFFFFF;"></span></div>
   <div class="x-col" xid="col13"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10">
   <div class="x-col" xid="col26"></div>
   <div class="x-col" xid="col27"></div>
   <div class="x-col" xid="col28"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
   <div class="x-col" xid="col29"></div>
   <div class="x-col" xid="col30"></div>
   <div class="x-col" xid="col31"></div></div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12">
   <div class="x-col" xid="col32"></div>
   <div class="x-col" xid="col33"></div>
   <div class="x-col" xid="col34"></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col8"></div>
   <div class="x-col" xid="col9"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="注册并登录" xid="button1" onClick="loginBtnClick" style="font-size:large;">
   <i xid="i2"></i>
   <span xid="span5">注册并登录</span></a></div>
   <div class="x-col" xid="col10"></div></div></div> 
   </div></div>