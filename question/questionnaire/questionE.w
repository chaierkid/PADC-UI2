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
      directDelete="false" autoLoad="false" idColumn="fID" queryAction="queryTabquestione"
      tableName="tabquestione" url="/question/question" saveAction="saveTabquestione"
      confirmRefresh="false" limit="10" confirmDelete="false"> 
      <column isCalculate="true" label="选择" name="calcCheckBox" type="Boolean"
        xid="calcCheckBox"/>  
      <filter name="filter0" xid="filter1"/>  
      <column label="fID" name="fID" type="String" xid="default46"></column>
  <column label="fArea" name="fArea" type="String" xid="default47"></column>
  <column label="fStreet" name="fStreet" type="String" xid="default48"></column>
  <column label="fProblem" name="fProblem" type="String" xid="default49"></column>
  <column label="fPhotoTime" name="fPhotoTime" type="DateTime" xid="default50"></column>
  <column label="fPhoto" name="fPhoto" type="String" xid="default51"></column>
  <column label="fCreator" name="fCreator" type="String" xid="default52"></column>
  <column label="fCreateDate" name="fCreateDate" type="DateTime" xid="default53"></column>
  <column label="tabIsDelete" name="tabIsDelete" type="String" xid="default54"></column>
  <column label="fEditor" name="fEditor" type="String" xid="default55"></column>
  <column label="fEditeDate" name="fEditeDate" type="DateTime" xid="default56"></column>
  <column label="fContent" name="fContent" type="String" xid="default57"></column>
  <rule xid="rule1">
   <col name="calcCheckBox" xid="ruleCol1">
    <required xid="required1">
     <expr xid="default1"></expr>
     <message xid="default12"></message></required> </col> 
   <col name="fStreet" xid="ruleCol2">
    <required xid="required2">
     <expr xid="default13"></expr>
     <message xid="default14"></message></required> </col> 
   <col name="fProblem" xid="ruleCol3">
    <required xid="required3">
     <expr xid="default15"></expr>
     <message xid="default16"></message></required> </col> 
   <col name="fPhotoTime" xid="ruleCol4">
    <required xid="required4">
     <expr xid="default17"></expr>
     <message xid="default18"></message></required> </col> 
   <col name="fPhoto" xid="ruleCol5">
    <required xid="required5">
     <expr xid="default19"></expr>
     <message xid="default20"></message></required> </col> 
   <col name="fArea" xid="ruleCol6">
    <required xid="required6">
     <message xid="default21"></message>
     <expr xid="default22"></expr></required> </col> </rule></div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="check" idColumn="id">
      <column name="id" type="String" xid="xid5"/>  
      <column name="name" type="String" xid="xid6"/>  
      <data xid="default3">[{&quot;id&quot;:&quot;1&quot;,&quot;name&quot;:&quot;代开票据&quot;},{&quot;id&quot;:&quot;2&quot;,&quot;name&quot;:&quot;代办病历&quot;},{&quot;id&quot;:&quot;3&quot;,&quot;name&quot;:&quot;散发广告&quot;},{&quot;id&quot;:&quot;4&quot;,&quot;name&quot;:&quot;流浪乞讨&quot;},{&quot;id&quot;:&quot;5&quot;,&quot;name&quot;:&quot;呲活揽客&quot;}]</data></div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="false"
      xid="data3" idColumn="content" autoNew="true" confirmDelete="false" confirmRefresh="false">
      <column name="content" type="String" xid="xid7"/>
    </div>
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1" height="60"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1" title="重点医院" style="height:100%;font-size:x-large;"> 
        <div class="x-titlebar-left" xid="left1"> 
          <p xid="p1" style="background-color:red;"/>  
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top btn-only-icon"
            xid="返回主页" icon="icon-chevron-left" onClick="button31Click"> 
            <i xid="i9" class="icon-chevron-left"/>  
            <span xid="span9"/> 
          </a> 
        </div>  
        <div class="x-titlebar-title" xid="title1">重点医院</div>  
        <div class="x-titlebar-right reverse" xid="right1">
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-xs btn-icon-left"
            label="删除" xid="button2" icon="icon-android-remove" style="font-size:medium;display:none;"> 
            <i xid="i2" class="icon-android-remove"/>  
            <span xid="span2">删除</span>
          </a>  
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-xs btn-icon-left"
            label="修改" xid="button3" icon="icon-edit" style="font-size:small;display:none;"> 
            <i xid="i3" class="icon-edit"/>  
            <span xid="span3">修改</span>
          </a>
        </div> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content3" style="font-size:medium;"> 
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row8"> 
        <div class="x-col x-col-33 x-col-center" xid="col18"> 
          <label xid="label9"><![CDATA[Q1.区县名称：]]></label>
        </div>  
        <div class="x-col" xid="col20">
          <select component="$UI/system/components/justep/select/select" class="form-control"
            xid="select2" style="height:35px;" bind-options="data1" bind-optionsValue="name"
            bind-ref="$model.tabquestion.ref(&quot;fArea&quot;)"/>
        </div>
      </div>
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row9"> 
        <div class="x-col x-col-33 x-col-center" xid="col19"> 
          <label xid="label10"><![CDATA[Q2.医院名称：]]></label>
        </div>  
        <div class="x-col" xid="col21">
          <input component="$UI/system/components/justep/input/input" class="form-control"
            xid="input3" style="height:35px;" bind-ref="$model.tabquestion.ref(&quot;fStreet&quot;)"/>
        </div>
      </div>
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row45"> 
        <div class="x-col" xid="col149"> 
          <label xid="label57"><![CDATA[Q3.医院大门周围及门诊大厅环境秩序存在问题（多选）:]]></label>
        </div> 
      </div>  
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row1"> 
        <div class="x-col x-col-center" xid="col7">
          <span component="$UI/system/components/justep/select/checkboxGroup"
            class="x-checkbox-group" xid="checkboxGroup2" bind-itemset="check" bind-itemsetValue="ref(&quot;name&quot;)"
            bind-itemsetLabel="ref(&quot;name&quot;)" bind-ref="$model.tabquestion.ref(&quot;fProblem&quot;)"/>
        </div>  
        <div class="x-col x-col-25" xid="col14"/>
      </div>  
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row10"> 
        <div class="x-col x-col-33 x-col-center" xid="col23"> 
          <label xid="label11" style="font-weight:normal;"><![CDATA[其他问题：]]></label>
        </div>  
        <div class="x-col " xid="col22">
          <input component="$UI/system/components/justep/input/input" class="form-control"
            xid="input4" bind-ref="$model.data3.ref(&quot;content&quot;)"/>
        </div>
      </div>
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
   <div class="x-col x-col-33 x-col-center" xid="col2">
    <label xid="label2" style="font-weight:normal;">具体描述：</label></div> 
   <div class="x-col " xid="col3">
    <input component="$UI/system/components/justep/input/input" class="form-control" xid="input1" bind-ref='$model.tabquestion.ref("fContent")'></input></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3"> 
        <div class="x-col" xid="col9"> 
          <label xid="label5"><![CDATA[Q4.证据照片（2张以上，体现地理标志和问题事实）：]]></label>
        </div> 
      </div>  
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row4"> 
        <div class="x-col x-col-33 x-col-center" xid="col10"> 
          <label xid="label7" style="font-weight:normal;"><![CDATA[调查时间：]]></label>
        </div>  
        <div class="x-col" xid="col12">
          <input component="$UI/system/components/justep/input/input" class="form-control"
            xid="input2" style="height:35px;" bind-ref="$model.tabquestion.ref(&quot;fPhotoTime&quot;)"/>
        </div>
      </div>  
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row5"> 
        <div class="x-col" xid="col11"> 
          <div component="$UI/system/components/justep/attachment/attachmentSimple"
            actionUrl="/baas/justep/attachment/simpleFileStore" xid="attachmentSimple1"
            bind-ref="$model.tabquestion.ref(&quot;fPhoto&quot;)"> 
            <div class="x-attachment" xid="div23"> 
              <div class="x-attachment-content x-card-border" xid="div24"> 
                <div class="x-doc-process" xid="div25"> 
                  <div class="progress-bar x-doc-process-bar" role="progressbar"
                    style="width:0%;" xid="progressBar3"/>
                </div>  
                <div data-bind="foreach:$attachmentItems" xid="div26"> 
                  <div class="x-attachment-cell" xid="div27"> 
                    <div class="x-attachment-item x-item-other" data-bind="click:$model.previewOrRemoveItem.bind($model),style:{backgroundImage:($model.previewPicture.bind($model,$object))()}"
                      xid="div28"> 
                      <a data-bind="visible:$model.$state.get() == 'remove'"
                        class="x-remove-barget" xid="a3"/>
                    </div> 
                  </div> 
                </div>  
                <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'"
                  xid="div29"> 
                  <div class="x-attachment-item x-item-upload" data-bind="visible:$state.get() == 'upload'"
                    xid="div30"/>
                </div>  
                <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0"
                  xid="div31"> 
                  <div class="x-attachment-item x-item-remove" data-bind="click:changeState.bind($object,'remove')"
                    xid="div32"/>
                </div>  
                <div style="clear:both;" xid="div33"/>
              </div> 
            </div> 
          </div>
        </div> 
      </div>  
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row7"> 
        <div class="x-col" xid="col15"></div>  
        <div class="x-col x-col-center center-block" xid="col16" style="text-align:center;">
          <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-lg"
            label="提交" xid="button1" onClick="button1Click"> 
            <i xid="i1"/>  
            <span xid="span1">提交</span>
          </a>
        </div>  
        <div class="x-col" xid="col17"/>
      </div> 
    </div> 
  </div> 
</div>
