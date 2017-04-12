<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:307px;left:609px;"
    onParamsReceive="modelParamsReceive"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="data1" idColumn="code">
      <column name="code" type="String" xid="xid3"/>  
      <column name="name" type="String" xid="xid4"/>  
      <data xid="default2">[{"code":"H01","name":"东城区"},{"code":"H02","name":"西城区"},{"code":"H03","name":"海淀区"},{"code":"H04","name":"朝阳区"},{"code":"H05","name":"丰台区"},{"code":"H06","name":"石景山区"},{"code":"H07","name":"门头沟区"},{"code":"H08","name":"房山区"},{"code":"H09","name":"大兴区"},{"code":"H10","name":"通州区"},{"code":"H11","name":"顺义区"},{"code":"H12","name":"怀柔区"},{"code":"H13","name":"密云区"},{"code":"H14","name":"平谷区"},{"code":"H15","name":"延庆区"},{"code":"H16","name":"昌平区"}]</data>
    </div>
    <div component="$UI/system/components/justep/data/baasData" xid="tabquestion"
      directDelete="false" autoLoad="false" idColumn="fID" queryAction="queryTabquestionc"
      tableName="tabquestionc" url="/question/question" saveAction="saveTabquestionc"
      confirmRefresh="false" limit="10" confirmDelete="false"> 
      <column isCalculate="true" label="选择" name="calcCheckBox" type="Boolean"
        xid="calcCheckBox"/>  
      <filter name="filter0" xid="filter1"></filter>
  <column label="fID" name="fID" type="String" xid="default31"></column>
  <column label="fArea" name="fArea" type="String" xid="default32"></column>
  <column label="fStreet" name="fStreet" type="String" xid="default33"></column>
  <column label="fPag" name="fPag" type="String" xid="default34"></column>
  <column label="fPerson" name="fPerson" type="String" xid="default35"></column>
  <column label="fLiquid" name="fLiquid" type="String" xid="default36"></column>
  <column label="fPhotoTime" name="fPhotoTime" type="DateTime" xid="default37"></column>
  <column label="fPhoto" name="fPhoto" type="String" xid="default38"></column>
  <column label="fCreator" name="fCreator" type="String" xid="default39"></column>
  <column label="fCreateDate" name="fCreateDate" type="DateTime" xid="default40"></column>
  <column label="tabIsDelete" name="tabIsDelete" type="String" xid="default41"></column>
  <column label="fEditor" name="fEditor" type="String" xid="default42"></column>
  <column label="fEditeDate" name="fEditeDate" type="DateTime" xid="default43"></column>
  <column label="fContent" name="fContent" type="String" xid="default44"></column>
  <rule xid="rule1">
   <col name="fArea" xid="ruleCol1">
    <required xid="required1">
     <expr xid="default4"></expr>
     <message xid="default5"></message></required> </col> 
   <col name="fStreet" xid="ruleCol2">
    <required xid="required2">
     <expr xid="default6"></expr>
     <message xid="default7"></message></required> </col> 
   <col name="fPag" xid="ruleCol3">
    <required xid="required3">
     <expr xid="default8"></expr>
     <message xid="default9"></message></required> </col> 
   <col name="fPerson" xid="ruleCol4">
    <required xid="required4">
     <expr xid="default10"></expr>
     <message xid="default11"></message></required> </col> 
   <col name="fLiquid" xid="ruleCol5">
    <required xid="required5">
     <expr xid="default12"></expr>
     <message xid="default13"></message></required> </col> 
   <col name="fPhotoTime" xid="ruleCol6">
    <required xid="required6">
     <expr xid="default14"></expr>
     <message xid="default15"></message></required> </col> 
   <col name="fPhoto" xid="ruleCol7">
    <required xid="required7">
     <expr xid="default16"></expr>
     <message xid="default17"></message></required> </col> </rule></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="check" idColumn="id"><column name="id" type="String" xid="xid5"></column>
  <column name="name" type="String" xid="xid6"></column>
  <data xid="default3">[{&quot;id&quot;:&quot;1&quot;,&quot;name&quot;:&quot;是&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;name&quot;:&quot;否&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="data3" idColumn="content" autoNew="true" confirmDelete="false" confirmRefresh="false"><column name="content" type="String" xid="xid7"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data2" idColumn="id">
   <column name="id" type="String" xid="column1"></column>
   <column name="name" type="String" xid="column2"></column>
   <data xid="default1">[{&quot;id&quot;:&quot;1&quot;,&quot;name&quot;:&quot;是&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;name&quot;:&quot;否&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data4" idColumn="id">
   <column name="id" type="String" xid="column3"></column>
   <column name="name" type="String" xid="column4"></column>
   <data xid="default21">[{&quot;id&quot;:&quot;1&quot;,&quot;name&quot;:&quot;是&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;name&quot;:&quot;否&quot;}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1" height="60"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1" title="安检措施落实" style="font-size:x-large;height:100%;"> 
        <div class="x-titlebar-left" xid="left1">
          <p xid="p1" style="background-color:red;"/>  
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top btn-only-icon"
            xid="返回主页" icon="icon-chevron-left" onClick="button31Click"> 
            <i xid="i9" class="icon-chevron-left"/>  
            <span xid="span9"/>
          </a>  
          </div>  
        <div class="x-titlebar-title" xid="title1">安检措施落实</div>  
        <div class="x-titlebar-right reverse" xid="right1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-xs btn-icon-left" label="删除" xid="button2" icon="icon-android-remove" style="font-size:small;display:none;">
   <i xid="i2" class="icon-android-remove"></i>
   <span xid="span2">删除</span></a>
  <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-xs btn-icon-left" label="修改" xid="button3" icon="icon-edit" style="font-size:small;display:none;">
   <i xid="i3" class="icon-edit"></i>
   <span xid="span3">修改</span></a></div> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content3" style="font-size:medium;"> 
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col x-col-33 x-col-center" xid="col18">
    <label xid="label9"><![CDATA[Q1.区县名称：]]></label></div> 
  <div class="x-col" xid="col20"><select component="$UI/system/components/justep/select/select" class="form-control" xid="select2" style="height:35px;" bind-options="data1" bind-optionsValue="name" bind-ref='$model.tabquestion.ref("fArea")'></select></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col x-col-33 x-col-center" xid="col19">
    <label xid="label10"><![CDATA[Q2.安检口位置：]]></label></div> 
  <div class="x-col" xid="col21"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input3" style="height:35px;" bind-ref='$model.tabquestion.ref("fStreet")'></input></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col" xid="col1">
    <label xid="label1"><![CDATA[Q3.是否逐人逐包检查？]]></label></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col x-col-center" xid="col2">
    <span component="$UI/system/components/justep/select/radioGroup" class="x-radio-group" xid="radioGroup3" bind-itemset="data4" bind-itemsetValue='ref("name")' bind-itemsetLabel='ref("name")' bind-ref='$model.tabquestion.ref("fPag")'></span></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row45">
   <div class="x-col" xid="col149">
    <label xid="label57"><![CDATA[Q4.是否检查出违禁物品?]]></label></div> 
   
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12">
   <div class="x-col x-col-center" xid="col54">
    <span component="$UI/system/components/justep/select/radioGroup" class="x-radio-group" xid="radioGroup2" bind-itemset="check" bind-itemsetValue='ref("name")' bind-itemsetLabel='ref("name")' bind-ref='$model.tabquestion.ref("fPerson")'></span></div> 
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
   <div class="x-col" xid="col55">
    <label xid="label22"><![CDATA[Q5.是否对发现的液体进行测试？]]></label></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   
   
   <div class="x-col x-col-center" xid="col7"><span component="$UI/system/components/justep/select/radioGroup" class="x-radio-group" xid="radioGroup1" bind-itemset="data2" bind-itemsetValue='ref("name")' bind-itemsetLabel='ref("name")' bind-ref='$model.tabquestion.ref("fLiquid")'></span></div>
  </div>
  
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10">
   <div class="x-col x-col-33 x-col-center" xid="col23">
    <label xid="label3"><![CDATA[Q6.问题具体描述:]]></label></div> 
   <div class="x-col " xid="col22">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="input4" bind-ref='$model.tabquestion.ref("fContent")'></input></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col9">
    <label xid="label5"><![CDATA[Q7.证据照片（2张以上，体现地理标志和问题事实）：]]></label></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col x-col-33 x-col-center" xid="col10">
    <label xid="label7" style="font-weight:normal;"><![CDATA[调查时间：]]></label></div> 
  <div class="x-col" xid="col12"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input2" style="height:35px;" bind-ref='$model.tabquestion.ref("fPhotoTime")'></input></div></div>
  
  
  
  
  
  
  
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5">
   <div class="x-col" xid="col11">
    <div component="$UI/system/components/justep/attachment/attachmentSimple" actionUrl="/baas/justep/attachment/simpleFileStore" xid="attachmentSimple1" bind-ref='$model.tabquestion.ref("fPhoto")'>
     <div class="x-attachment" xid="div23">
      <div class="x-attachment-content x-card-border" xid="div24">
       <div class="x-doc-process" xid="div25">
        <div class="progress-bar x-doc-process-bar" role="progressbar" style="width:0%;" xid="progressBar3"></div></div> 
       <div data-bind="foreach:$attachmentItems" xid="div26">
        <div class="x-attachment-cell" xid="div27">
         <div class="x-attachment-item x-item-other" data-bind="click:$model.previewOrRemoveItem.bind($model),style:{backgroundImage:($model.previewPicture.bind($model,$object))()}" xid="div28">
          <a data-bind="visible:$model.$state.get() == 'remove'" class="x-remove-barget" xid="a3"></a></div> </div> </div> 
       <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'" xid="div29">
        <div class="x-attachment-item x-item-upload" data-bind="visible:$state.get() == 'upload'" xid="div30"></div></div> 
       <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0" xid="div31">
        <div class="x-attachment-item x-item-remove" data-bind="click:changeState.bind($object,'remove')" xid="div32"></div></div> 
       <div style="clear:both;" xid="div33"></div></div> </div> </div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col15">
    </div> 
  <div class="x-col x-col-center center-block" xid="col16" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-lg" label="提交" xid="button1" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span1">提交</span></a></div>
  <div class="x-col" xid="col17"></div></div>
  </div> 
  </div> 
</div>
