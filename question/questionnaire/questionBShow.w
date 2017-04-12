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
      <column label="fID" name="fID" type="String" xid="default1"></column>
  <column label="fArea" name="fArea" type="String" xid="default4"></column>
  <column label="fStreet" name="fStreet" type="String" xid="default5"></column>
  <column label="fMathArea" name="fMathArea" type="String" xid="default6"></column>
  <column label="fPoliceCar" name="fPoliceCar" type="String" xid="default7"></column>
  <column label="fPolice" name="fPolice" type="String" xid="default8"></column>
  <column label="fVolunteerStreet" name="fVolunteerStreet" type="String" xid="default9"></column>
  <column label="fVolunteer" name="fVolunteer" type="String" xid="default10"></column>
  <column label="fPoliceDuty" name="fPoliceDuty" type="String" xid="default11"></column>
  <column label="fVolunteerDuty" name="fVolunteerDuty" type="String" xid="default12"></column>
  <column label="fPhotoTime" name="fPhotoTime" type="DateTime" xid="default13"></column>
  <column label="fPhoto" name="fPhoto" type="String" xid="default14"></column>
  <column label="fCreator" name="fCreator" type="String" xid="default15"></column>
  <column label="fCreateDate" name="fCreateDate" type="DateTime" xid="default16"></column>
  <column label="tabIsDelete" name="tabIsDelete" type="String" xid="default17"></column>
  <column label="fEditor" name="fEditor" type="String" xid="default18"></column>
  <column label="fEditeDate" name="fEditeDate" type="DateTime" xid="default19"></column>
  <column label="fPContent" name="fPContent" type="String" xid="default20"></column>
  <column label="fVContent" name="fVContent" type="String" xid="default21"></column>
  <column label="fStatus" name="fStatus" type="String" xid="default22"></column>
  <column label="fStatus2" name="fStatus2" type="String" xid="default23"></column>
  <column label="fStatus3" name="fStatus3" type="String" xid="default24"></column></div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="check" idColumn="id">
      <column name="id" type="String" xid="xid5"/>  
      <column name="name" type="String" xid="xid6"/>  
      <data xid="default3">[{"id":"1","name":"1、无照游商"},{"id":"2","name":"2、占道经营"},{"id":"3","name":"3、散发小广告"},{"id":"4","name":"4、流浪乞讨"},{"id":"5","name":"5、黑车营运"},{"id":"6","name":"6、私搭乱建"},{"id":"7","name":"7、违章停车"},{"id":"8","name":"8、无人驾驶航空器飞行"}]</data>
    </div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="false"
      xid="data3" idColumn="content" autoNew="true" confirmDelete="false" confirmRefresh="false">
      <column name="content" type="String" xid="xid7"/>
    </div>
  </div>  
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
        <div class="x-titlebar-right reverse" xid="right1" style="vertical-align:middle;">
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-xs btn-icon-top"
            label="删除" xid="button2" icon="icon-android-remove" style="display:none;vertical-align:middle;font-size:small;" onClick="button2Click"> 
            <i xid="i2" class="icon-android-remove"/>  
            <span xid="span2">删除</span>
          </a>  
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-xs btn-icon-top"
            label="修改" xid="button3" icon="icon-edit" style="display:none;vertical-align:middle;font-size:small;" onClick="button3Click"> 
            <i xid="i3" class="icon-edit"/>  
            <span xid="span3">修改</span>
          </a>
        </div> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content3" style="font-size:medium;"> 
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col1">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label35" xid="labelEdit1">
   <label class="x-label" xid="label1" style="font-weight:bold;"><![CDATA[Q1.区县名称：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output5" bind-ref='$model.tabquestion.ref("fArea")'></div></div></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row4">
   <div class="x-col" xid="col2">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label35" xid="labelEdit2">
   <label class="x-label" xid="label2" style="font-weight:bold;"><![CDATA[Q2.点位名称：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output6" bind-ref='$model.tabquestion.ref("fStreet")'></div></div></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row10">
   <div class="x-col  x-col-center" xid="col6">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label60" xid="labelEdit4">
   <label class="x-label" xid="label10" style="font-weight:bold;"><![CDATA[Q3.点位大概面积（长度）：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output1" bind-ref='$model.tabquestion.ref("fStreet")' style="width:152px;"></div></div></div> 
   <div class="x-col x-col-25 x-col-center" xid="col33">
    <label xid="label7" style="float:left;font-weight:normal;">平方米（米）,</label></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row11">
   <div class="x-col x-col-bottom" xid="col44">
    <label xid="label19" style="float:left;font-weight:normal;">可见警车</label></div> 
   <div class="x-col" xid="col46">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output10" bind-ref='$model.tabquestion.ref("fPoliceCar")'></div></div> 
   <div class="x-col x-col-bottom" xid="col45">
    <label xid="label20" style="font-weight:normal;">辆、警力</label></div> 
   <div class="x-col" xid="col50">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output11" bind-ref='$model.tabquestion.ref("fPolice")'></div></div> 
   <div class="x-col x-col-bottom" xid="col51">
    <label xid="label21" style="font-weight:normal;">人,</label></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row9">
   <div class="x-col x-col-33 x-col-bottom" xid="col34">
    <label xid="label15" style="font-weight:normal;">治安志愿者或民兵点位</label></div> 
   <div class="x-col x-col-20 x-col-center" xid="col31">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output12" bind-ref='$model.tabquestion.ref("fVolunteerStreet")'></div></div> 
   <div class="x-col x-col-bottom" xid="col52">
    <label xid="label16" style="float:left;font-weight:normal;">个，共</label></div> 
   <div class="x-col x-col-20 x-col-center" xid="col30">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output13" bind-ref='$model.tabquestion.ref("fVolunteer")'></div></div> 
   <div class="x-col x-col-10 x-col-bottom" xid="col49">
    <label xid="label17" style="font-weight:normal;">人。</label></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row7">
   <div class="x-col" xid="col5">
    <label class="x-label" xid="label13" style="font-weight:bold;"><![CDATA[Q4.值班警察、武警在岗状态：]]></label></div> 
  </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row15">
   
   <div class="x-col x-col-center" xid="col15"><div component="$UI/system/components/justep/output/output" class="x-output" xid="output15" bind-ref='$model.tabquestion.ref("fPoliceDuty")'></div></div></div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col x-col-center" xid="col4">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit5">
     <label class="x-label" xid="label4">具体描述：</label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output2" bind-ref='$model.tabquestion.ref("fPContent")'></div></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row17">
   <div class="x-col" xid="col19">
    <label class="x-label" xid="label22" style="font-weight:bold;"><![CDATA[Q5.治安志愿者或民兵在岗状态：]]></label></div> 
   </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row16">
   <div class="x-col x-col-center" xid="col17">
    <div component="$UI/system/components/justep/output/output" class="x-output" xid="output16" bind-ref='$model.tabquestion.ref("fVolunteerDuty")'></div></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row8">
   <div class="x-col x-col-center" xid="col7">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit6">
     <label class="x-label" xid="label6">具体描述：</label>
     <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output3" bind-ref='$model.tabquestion.ref("fVContent")'></div></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row3"> 
        <div class="x-col" xid="col9"> 
          <label xid="label5"><![CDATA[Q6.证据照片（2张以上，体现地理标志和问题事实）：]]></label>
        </div> 
      </div>  
      <div component="$UI/system/components/justep/row/row" class="x-row" xid="row6">
   <div class="x-col" xid="col3">
    <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3">
   <label class="x-label" xid="label3" style="font-weight:bold;"><![CDATA[调查时间：]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output7" bind-ref='$model.tabquestion.ref("fPhotoTime")'></div></div></div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row5"> 
        <div class="x-col" xid="col11"> 
          <div component="$UI/system/components/justep/attachment/attachmentSimple"
            actionUrl="/baas/justep/attachment/simpleFileStore" xid="attachmentSimple1"
            bind-ref="$model.tabquestion.ref(&quot;fPhoto&quot;)"> 
            <div class="x-attachment" xid="div23"> 
              <div class="x-attachment-content x-card-border"  style="border-style:dashed dashed dashed dashed;border-width:0px 0px 0px 0px;" xid="div24"> 
                <div class="x-doc-process" xid="div25"> 
                  <div class="progress-bar x-doc-process-bar" role="progressbar"
                    style="width:0%;" xid="progressBar3"/>
                </div>  
                <div data-bind="foreach:$attachmentItems" xid="div26"> 
                  <div class="x-attachment-cell" xid="div27"> 
                    <div class="x-attachment-item x-item-other" data-bind="style:{backgroundImage:($model.previewPicture.bind($model,$object))()}"
                      xid="div28"  bind-click="div28Click" > 
                      <a data-bind="visible:$model.$state.get() == 'remove'"
                        class="x-remove-barget" xid="a3"/>
                    </div> 
                  </div> 
                </div>  
                <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'"
                  xid="div29"> 
                  <div class="x-attachment-item x-item-upload" style=" margin: 0 !important;width: 0 !important;height: 0 !important;" data-bind="visible:$state.get() == 'upload'"
                    xid="div30"/>
                </div>  
                <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0"
                  xid="div31"> 
                  <div class="x-attachment-item x-item-remove" style=" margin: 0 !important;width: 0 !important;height: 0 !important;" data-bind="click:changeState.bind($object,'remove')"
                    xid="div32"/>
                </div>  
                <div style="clear:both;" xid="div33"/>
              </div> 
            </div> 
          </div>
        </div> 
      </div>  
      
  
  
  
  
  
  
  
  
  
  
  <div class="x-row x-row-center" component="$UI/system/components/justep/row/row" xid="row12">
   <div class="x-col x-col-20 x-col-center" xid="col8">
    <label xid="label8" style="font-weight:normal;">状态：</label></div> 
   <div class="x-col" xid="col8" style="font-weight:bold;">
    <span component="$UI/system/components/justep/output/output" data="taskData" bind-ref='$model.tabquestion.ref("fStatus2")' xid="output8"></span></div> 
   <div class="x-col" xid="col10" style="font-weight:bold;">
    <span component="$UI/system/components/justep/output/output" data="taskData" bind-ref='$model.tabquestion.ref("fStatus")' xid="output4"></span></div> 
   <div class="x-col" xid="col10" style="font-weight:bold;">
    <span component="$UI/system/components/justep/output/output" data="taskData" bind-ref='$model.tabquestion.ref("fStatus3")' xid="output4"></span></div> </div></div> 
  </div> 
</div>
