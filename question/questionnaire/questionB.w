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
      directDelete="false" autoLoad="false" idColumn="fID" queryAction="queryTabquestionb"
      tableName="tabquestionb" url="/question/question" saveAction="saveTabquestionb"
      confirmRefresh="false" limit="10" confirmDelete="false"> 
      <column isCalculate="true" label="选择" name="calcCheckBox" type="Boolean"
        xid="calcCheckBox"/>  
      <column label="fID" name="fID" type="String" xid="default16"></column>
  <column label="fArea" name="fArea" type="String" xid="default17"></column>
  <column label="fStreet" name="fStreet" type="String" xid="default18"></column>
  <column label="fMathArea" name="fMathArea" type="String" xid="default19"></column>
  <column label="fPoliceCar" name="fPoliceCar" type="String" xid="default20"></column>
  <column label="fPolice" name="fPolice" type="String" xid="default43"></column>
  <column label="fVolunteerStreet" name="fVolunteerStreet" type="String" xid="default44"></column>
  <column label="fVolunteer" name="fVolunteer" type="String" xid="default45"></column>
  <column label="fPoliceDuty" name="fPoliceDuty" type="String" xid="default46"></column>
  <column label="fVolunteerDuty" name="fVolunteerDuty" type="String" xid="default47"></column>
  <column label="fPhotoTime" name="fPhotoTime" type="DateTime" xid="default48"></column>
  <column label="fPhoto" name="fPhoto" type="String" xid="default49"></column>
  <column label="fCreator" name="fCreator" type="String" xid="default50"></column>
  <column label="fCreateDate" name="fCreateDate" type="DateTime" xid="default51"></column>
  <column label="tabIsDelete" name="tabIsDelete" type="String" xid="default52"></column>
  <column label="fEditor" name="fEditor" type="String" xid="default53"></column>
  <column label="fEditeDate" name="fEditeDate" type="DateTime" xid="default54"></column>
  <column label="fPContent" name="fPContent" type="String" xid="default55"></column>
  <column label="fVContent" name="fVContent" type="String" xid="default56"></column>
  <filter name="filter0" xid="filter1"></filter>
  <rule xid="rule1">
   <col name="fArea" xid="ruleCol1">
    <required xid="required1">
     <expr xid="default21"></expr>
     <message xid="default22"></message></required> </col> 
   <col name="fStreet" xid="ruleCol2">
    <required xid="required2">
     <expr xid="default23"></expr>
     <message xid="default24"></message></required> </col> 
   <col name="fMathArea" xid="ruleCol3">
    <required xid="required3">
     <expr xid="default25"></expr>
     <message xid="default26"></message></required> </col> 
   <col name="fPoliceCar" xid="ruleCol4">
    <required xid="required4">
     <expr xid="default27"></expr>
     <message xid="default28"></message></required> </col> 
   <col name="fPolice" xid="ruleCol5">
    <required xid="required5">
     <expr xid="default29"></expr>
     <message xid="default30"></message></required> </col> 
   <col name="fVolunteerStreet" xid="ruleCol6">
    <required xid="required6">
     <expr xid="default31"></expr>
     <message xid="default32"></message></required> </col> 
   <col name="fVolunteer" xid="ruleCol7">
    <required xid="required7">
     <expr xid="default33"></expr>
     <message xid="default34"></message></required> </col> 
   <col name="fPoliceDuty" xid="ruleCol8">
    <required xid="required8">
     <expr xid="default35"></expr>
     <message xid="default36"></message></required> </col> 
   <col name="fVolunteerDuty" xid="ruleCol9">
    <required xid="required9">
     <expr xid="default37"></expr>
     <message xid="default38"></message></required> </col> 
   <col name="fPhotoTime" xid="ruleCol10">
    <required xid="required10">
     <expr xid="default39"></expr>
     <message xid="default40"></message></required> </col> 
   <col name="fPhoto" xid="ruleCol11">
    <required xid="required11">
     <expr xid="default41"></expr>
     <message xid="default42"></message></required> </col> </rule></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="check" idColumn="id"><column name="id" type="String" xid="xid5"></column>
  <column name="name" type="String" xid="xid6"></column>
  <data xid="default3">[{&quot;id&quot;:&quot;1&quot;,&quot;name&quot;:&quot;认真值守&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;name&quot;:&quot;看手机、看报纸、睡觉等与值守无关行为&quot;},{&quot;id&quot;:&quot;3&quot;,&quot;name&quot;:&quot;未发现警察、武警&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="data3" idColumn="content" autoNew="true" confirmDelete="false" confirmRefresh="false"><column name="content" type="String" xid="xid7"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data2" idColumn="id">
   <column name="id" type="String" xid="column1"></column>
   <column name="name" type="String" xid="column2"></column>
   <data xid="default1">[{&quot;id&quot;:&quot;1&quot;,&quot;name&quot;:&quot;认真值守&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;name&quot;:&quot;看手机、看报纸、睡觉等与值守无关行为&quot;},{&quot;id&quot;:&quot;3&quot;,&quot;name&quot;:&quot;未发现志愿者或民兵&quot;}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1" height="60"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1" title="力量防控" style="height:100%;font-size:x-large;"> 
        <div class="x-titlebar-left" xid="left1">
          <p xid="p1" style="background-color:red;"/>  
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top btn-only-icon"
            xid="返回主页" icon="icon-chevron-left" onClick="button31Click"> 
            <i xid="i9" class="icon-chevron-left"/>  
            <span xid="span9"/>
          </a>  
          </div>  
        <div class="x-titlebar-title" xid="title1">力量防控</div>  
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
    <label xid="label10"><![CDATA[Q2.点位名称：]]></label></div> 
  <div class="x-col" xid="col21"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input3" style="height:35px;" bind-ref='$model.tabquestion.ref("fStreet")'></input></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col  x-col-center" xid="col2">
    <label xid="label1" style="float:left;"><![CDATA[Q3.点位大概面积（长度）：]]></label></div> 
   
  <div class="x-col x-col-33" xid="col41"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" style="height:35px;float:left;" bind-ref='$model.tabquestion.ref("fMathArea")'></input></div>
  <div class="x-col x-col-25 x-col-center" xid="col33">
    <label xid="label2" style="float:left;font-weight:normal;"><![CDATA[平方米（米）,]]></label></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
   <div class="x-col x-col-center" xid="col44">
    <label xid="label19" style="float:left;font-weight:normal;"><![CDATA[可见警车]]></label></div> 
   <div class="x-col" xid="col46">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="input16" style="height:35px;" bind-ref='$model.tabquestion.ref("fPoliceCar")'></input></div> 
   <div class="x-col x-col-center" xid="col45">
    <label xid="label20" style="font-weight:normal;">辆、警力</label>
    </div> 
  <div class="x-col" xid="col50"><input component="$UI/system/components/justep/input/input" class="form-control" xid="input11" style="height:35px;" bind-ref='$model.tabquestion.ref("fPolice")'></input></div>
  <div class="x-col x-col-center" xid="col51"><label xid="label21" style="font-weight:normal;"><![CDATA[人,]]></label></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   
   
   
   
   
   
   <div class="x-col x-col-center" xid="col34">
    <label xid="label15" style="font-weight:normal;"><![CDATA[治安志愿者或民兵点位]]></label></div> 
    
   <div class="x-col x-col-20 x-col-center" xid="col31">
    
  <input component="$UI/system/components/justep/input/input" class="form-control" xid="input17" style="height:35px;" bind-ref='$model.tabquestion.ref("fVolunteerStreet")'></input></div> 
   
    
  <div class="x-col x-col-25 x-col-center" xid="col52"><label xid="label16" style="float:left;font-weight:normal;">个，共</label></div><div class="x-col x-col-10 x-col-center" xid="col30">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="input9" style="height:35px;width:100px;float:left;" bind-ref='$model.tabquestion.ref("fVolunteer")'></input></div><div class="x-col x-col-10 x-col-center" xid="col49"><label xid="label17" style="font-weight:normal;">人。</label></div>
  </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row45">
   <div class="x-col" xid="col149">
    <label xid="label57"><![CDATA[Q4.值班警察、武警在岗状态：]]></label></div> 
   
   </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row12">
   <div class="x-col x-col-center" xid="col54">
    <span component="$UI/system/components/justep/select/radioGroup" class="x-radio-group" xid="radioGroup2" bind-itemset="check" bind-itemsetValue='ref("name")' bind-itemsetLabel='ref("name")' bind-ref='$model.tabquestion.ref("fPoliceDuty")'></span></div> 
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row10">
   <div class="x-col x-col-33 x-col-center" xid="col1">
    <label xid="label3" style="font-weight:normal;">具体描述：</label></div> 
   <div class="x-col " xid="col3">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="input4" bind-ref='$model.tabquestion.ref("fPContent")'></input></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row13">
   <div class="x-col" xid="col55">
    <label xid="label22"><![CDATA[Q5.治安志愿者或民兵在岗状态：]]></label></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   
   
   <div class="x-col x-col-center" xid="col7"><span component="$UI/system/components/justep/select/radioGroup" class="x-radio-group" xid="radioGroup1" bind-itemset="data2" bind-itemsetValue='ref("name")' bind-itemsetLabel='ref("name")' bind-ref='$model.tabquestion.ref("fVolunteerDuty")'></span></div>
  </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row14">
   <div class="x-col x-col-33 x-col-center" xid="col4">
    <label xid="label4" style="font-weight:normal;">具体描述：</label></div> 
   <div class="x-col " xid="col5">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="input5" bind-ref='$model.tabquestion.ref("fVContent")'></input></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3">
   <div class="x-col" xid="col9">
    <label xid="label5"><![CDATA[Q6.证据照片（2张以上，体现地理标志和问题事实）：]]></label></div> </div>
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
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
     <div style="clear:both;" xid="div33"></div></div> </div> </div></div> </div>
  
  
  
  <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col15">
    </div> 
  <div class="x-col x-col-center center-block" xid="col16" style="text-align:center;"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-lg" label="提交" xid="button1" onClick="button1Click">
   <i xid="i1"></i>
   <span xid="span1">提交</span></a></div>
  <div class="x-col" xid="col17"></div></div>
  
  </div> 
  </div> 
</div>
