<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:mobile"
  xid="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:317px;left:193px;" onParamsReceive="modelParamsReceive">
    <div component="$UI/system/components/justep/data/baasData" xid="mainData"
      directDelete="true" autoLoad="false" idColumn="fId"
      queryAction="queryTabquestion" tableName="tabquestion" url="/question/question" saveAction="saveTabquestion"
      confirmRefresh="false" limit="10" orderBy="fSurveydate:desc">
      <column isCalculate="true" label="选择" name="calcCheckBox" type="Boolean" xid="calcCheckBox"/>
      <column label="" name="fId" type="String"
        xid=""/>
      <column label="" name="fHospitalCode" type="String"
        xid=""/>
      <column label="" name="fHospitalName" type="String"
        xid=""/>
      <column label="" name="fSurveydate" type="Date"
        xid=""/>
      <column label="" name="fStareSurevey" type="DateTime"
        xid=""/>
      <column label="" name="fEndSurevey" type="DateTime"
        xid=""/>
      <column label="" name="fQ1" type="String"
        xid=""/>
      <column label="" name="fQ1_1_1" type="String"
        xid=""/>
      <column label="" name="fQ1_1_2" type="String"
        xid=""/>
      <column label="" name="fQ1_1_3" type="String"
        xid=""/>
      <column label="" name="fQ1_1_4" type="String"
        xid=""/>
      <column label="" name="fQ1_1_1Ph" type="String"
        xid=""/>
      <column label="" name="fQ1_1_2Ph" type="String"
        xid=""/>
      <column label="" name="fQ1_1_3Ph" type="String"
        xid=""/>
      <column label="" name="fQ1_1_4Ph" type="String"
        xid=""/>
      <column label="" name="fQ1_1_4Context" type="String"
        xid=""/>
      <column label="" name="fQ2_1" type="String"
        xid=""/>
      <column label="" name="fQ2_1Ph" type="String"
        xid=""/>
      <column label="" name="fQ2_2" type="String"
        xid=""/>
      <column label="" name="fQ3_1" type="String"
        xid=""/>
      <column label="" name="fQ3_1Ph" type="String"
        xid=""/>
      <column label="" name="fQ3_2" type="String"
        xid=""/>
      <column label="" name="fQ4_1" type="String"
        xid=""/>
      <column label="" name="fQ4_1Ph" type="String"
        xid=""/>
      <column label="" name="fQ4_2" type="String"
        xid=""/>
      <column label="" name="fQ4_2Ph" type="String"
        xid=""/>
      <column label="" name="fQ4_3" type="String"
        xid=""/>
      <column label="" name="fQ4_3Ph" type="String"
        xid=""/>
      <column label="" name="fQ4_4" type="String"
        xid=""/>
      <column label="" name="fQ4_4Ph" type="String"
        xid=""/>
      <column label="" name="fQ4_5" type="String"
        xid=""/>
      <column label="" name="fQ4_5Ph" type="String"
        xid=""/>
      <column label="" name="fQ5" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1YN_GH" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1YN_PJ" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1YN_BL" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1YN_QT" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1YN_Context" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1MZ_GH" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1MZ_PJ" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1MZ_BL" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1MZ_QT" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1MZ_Context" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1GH_GH" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1GH_PJ" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1GH_BL" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1GH_QT" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1GH_Context" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1ZL_GH" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1ZL_PJ" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1ZL_BL" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1ZL_QT" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1ZL_Context" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1Time" type="DateTime"
        xid=""/>
      <column label="" name="fQ5_1_1Sex" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1Size" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1Height" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1features" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1Video" type="String"
        xid=""/>
      <column label="" name="fQ5_1_1Pro" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2YN_GH" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2YN_PJ" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2YN_BL" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2YN_QT" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2YN_Context" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2MZ_GH" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2MZ_PJ" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2MZ_BL" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2MZ_QT" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2MZ_Context" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2GH_GH" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2GH_PJ" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2GH_BL" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2GH_QT" type="String"
        xid=""/>
      <column label="" name="fQ5_1_GH_Context" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2ZL_GH" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2ZL_PJ" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2ZL_BL" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2ZL_QT" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2ZL_Context" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2Time" type="DateTime"
        xid=""/>
      <column label="" name="fQ5_1_2Sex" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2Size" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2Height" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2features" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2Video" type="String"
        xid=""/>
      <column label="" name="fQ5_1_2Pro" type="String"
        xid=""/>
      <column label="" name="fQ6" type="String"
        xid=""/>
      <column label="" name="fQ6_1_1" type="String"
        xid=""/>
      <column label="" name="fQ6_1_1Video" type="String"
        xid=""/>
      <column label="" name="fQ6_1_2" type="String"
        xid=""/>
      <column label="" name="fQ6_1_2Video" type="String"
        xid=""/>
      <column label="" name="fQ6_1_3" type="String"
        xid=""/>
      <column label="" name="fQ6_1_3Video" type="String"
        xid=""/>
      <column label="" name="fQ6_1_4" type="String"
        xid=""/>
      <column label="" name="fQ6_1_4Video" type="String"
        xid=""/>
      <column label="" name="fQ6_1_4Context" type="String"
        xid=""/>
      <column label="" name="fQ6_1_5" type="String"
        xid=""/>
      <column label="" name="fQ6_1_5Video" type="String"
        xid=""/>
      <column label="" name="fQ6_1_5Context" type="String"
        xid=""/>
      <column label="" name="tabIsDelete" type="String"
        xid=""/>
      <column label="" name="tabIsShow" type="String"
        xid=""/>
      <column label="" name="tabCreateDate" type="DateTime"
        xid=""/>
      <column label="" name="tabEditDate" type="DateTime"
        xid=""/>
      <column label="" name="tabCreatorName" type="String"
        xid=""/>
      <column label="" name="tabEidtorName" type="String"
        xid=""/>
      <column label="" name="tabCreatorId" type="String"
        xid=""/>
      <column label="" name="tabEidtorId" type="String"
        xid=""/>
      <column label="" name="fUserName" type="String"
        xid=""/>
     
    </div>  
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"> 
    <div class="x-panel-top"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="调查列表"
        class="x-titlebar"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="linear linear-sad" onClick="backBtnClick"
            xid="backBtn"> 
            <i class="linear linear-sad"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">调查列表</div>  
        <div class="x-titlebar-right reverse"> 
          </div> 
      </div> 
    </div>  
    <div class="x-panel-content"> 
      <div xid="mainList" class="x-list" component="$UI/system/components/justep/list/list"
        data="mainData" limit="6" autoLoad="false"> 
        <div class="x-list-head"/>  
        <ul class="x-list-template"> 
          <li> 
            <div component="$UI/system/components/justep/row/row" class="x-row x-row-center" bind-click="row2Click"> 
              <div class="x-col" style="text-align: left;"> 
                <span component="$UI/system/components/justep/button/checkbox"
                  bind-ref="ref('calcCheckBox')" class="x-checkbox"/> 
              </div>  
              <div component="$UI/system/components/justep/row/row" class="x-col x-col-90"> 
                <div class="x-row" component="$UI/system/components/justep/row/row"> 
                  <div class="x-col"> 
                    <span class="font-bold x-output" component="$UI/system/components/justep/output/output"
                      data="mainData" bind-ref="ref('fHospitalCode')"/> 
                  </div> 
                <div class="x-col" xid="col5"><span class="font-bold x-output" component="$UI/system/components/justep/output/output" data="mainData" bind-ref="ref('fHospitalName')" xid="output1"></span></div></div> 
                <div class="x-row" component="$UI/system/components/justep/row/row"> 
                  <div class="x-col"> 
                    <span class="font-bold x-output" component="$UI/system/components/justep/output/output"
                      data="mainData" bind-ref="ref('fSurveydate')"/> 
                  </div> 
                <div class="x-col" xid="col6"><span class="font-bold x-output" component="$UI/system/components/justep/output/output" data="mainData" bind-ref="ref('fUserName')" xid="output2"></span></div></div> 
                </div>  
              <div class="x-col font-gray" style="text-align: right"> 
                <a component="$UI/system/components/justep/button/button"
                  label="" class="btn btn-only-icon" icon="icon-chevron-right" xid="editBtn"> 
                  <i class="icon-chevron-right"/>  
                  <span/> 
                </a> 
              </div> 
            </div> 
          </li> 
        </ul> 
      </div> 
    </div>  
    <div class="x-panel-bottom"> 
      <div class="btn-group-lg btn-group-justified" component="$UI/system/components/justep/button/buttonGroup"> 
        </div> 
    <div class="btn-group-lg btn-group-justified" component="$UI/system/components/justep/button/buttonGroup" xid="buttonGroup1">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default" onClick="okEditClick" xid="button2">
    <i xid="i2"></i>
    <span xid="span2">删除</span></a> </div></div> 
  </div> 
</div>