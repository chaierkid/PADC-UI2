<?xml version="1.0" encoding="utf-8"?>
<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:m;" xid="window" class="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"> 
 <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="mainData" idColumn="sID" confirmDelete="false" confirmRefresh="false"><column label="sID" name="sID" type="String" xid="default2"></column>
  <column label="sName" name="sName" type="String" xid="default3"></column>
  <column label="sCode" name="sCode" type="String" xid="default4"></column>
  <column label="sLongName" name="sLongName" type="String" xid="default5"></column>
  <column label="sFName" name="sFName" type="String" xid="default6"></column>
  <column label="sFCode" name="sFCode" type="String" xid="default7"></column>
  <column label="sFID" name="sFID" type="String" xid="default8"></column>
  <column label="sOrgKindID" name="sOrgKindID" type="String" xid="default9"></column>
  <column label="sSequence" name="sSequence" type="String" xid="default10"></column>
  <column label="sValidState" name="sValidState" type="Integer" xid="default11"></column>
  <column label="sParent" name="sParent" type="String" xid="default12"></column>
  <column label="sLevel" name="sLevel" type="Integer" xid="default13"></column>
  <column label="sPhone" name="sPhone" type="String" xid="default14"></column>
  <column label="sFax" name="sFax" type="String" xid="default15"></column>
  <column label="sAddress" name="sAddress" type="String" xid="default16"></column>
  <column label="sZip" name="sZip" type="String" xid="default17"></column>
  <column label="sDescription" name="sDescription" type="String" xid="default18"></column>
  <column label="sPersonID" name="sPersonID" type="String" xid="default19"></column>
  <column label="sNodeKind" name="sNodeKind" type="String" xid="default20"></column>
  <column label="sWxDeptID" name="sWxDeptID" type="Integer" xid="default21"></column>
  <column label="version" name="version" type="Integer" xid="default22"></column>
  <column name="choose" type="String" xid="xid2"></column>
  <data xid="default1">[{&quot;sID&quot;:&quot;1&quot;,&quot;sName&quot;:&quot;总装厂&quot;,&quot;sFName&quot;:&quot;PAC/总装厂&quot;},{&quot;sID&quot;:&quot;2&quot;,&quot;sName&quot;:&quot;部装厂&quot;,&quot;sFName&quot;:&quot;PAC/部装厂&quot;}]</data></div>
  </div>  
  <div component="$UI/system/components/justep/panel/panel" 
    class="x-panel x-full" xid="panel1"> 
      <div class="x-panel-top" xid="top1"> 
        <div component="$UI/system/components/justep/titleBar/titleBar" title="选择部门"
          class="x-titlebar" style="background-color:#FF80FF;">
          <div class="x-titlebar-left"> 
            <a component="$UI/system/components/justep/button/button"
              label="" class="btn btn-link btn-only-icon" icon="icon-chevron-left"
              onClick="{operation:'window.close'}" xid="backBtn"> 
              <i class="icon-chevron-left"/>  
              <span></span> 
            </a> 
          </div>  
          <div class="x-titlebar-title">选择部门</div>  
          <div class="x-titlebar-right reverse"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-left" label="选择" xid="button2" icon="icon-android-checkmark" onClick="button2Click">
   <i xid="i2" class="icon-android-checkmark"></i>
   <span xid="span5">选择</span></a></div>
        </div> 
      </div>  
    <div class="x-panel-content" xid="content1">
    	<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel2"> 
        <div class="x-panel-top" xid="top2">
          <div class="x-flex x-flex-column x-full" xid="div11"> 
            <div xid="div12"> 
              <div class="x-query-input x-flex" xid="div13"> 
                <i class="icon-android-search x-icon-lg" xid="i1" bind-click="i1Click" />  
                <input component="$UI/system/components/justep/input/input" class="form-control" xid="input2" style="height:21px" bind-ref='$model.queryData.ref("fName")' bind-keyup="input2Keyup" />
                <i class="icon-close-circled  x-icon-lg x-cls-filter" xid="i4" bind-click="i4Click" />
              </div> 
            </div> 
          </div>
        </div>  
        <div class="x-panel-content" xid="content4">
          <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView3"> 
            <div class="x-content-center x-pull-down container" xid="div10"> 
              <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i4" />  
              <span class="x-pull-down-label" xid="span6">下拉刷新...</span> 
            </div>  
            <div class="x-scroll-content" xid="div11"> 
              <ul component="$UI/system/components/justep/list/list" class="x-list x-list-template" xid="list2" data="mainData" autoLoad="false"> 
                <table class="x-list-template" xid="listTemplateTable1" style="width:100%;"> 
                  <li xid="li1" class="x-tree-link"> 
                    <div component="$UI/system/components/justep/row/row" class="x-row x-row-center" xid="row1"> 
                      <div class="x-col x-col-10" xid="col3" style="text-align:center;"> 
                        <span component="$UI/system/components/justep/button/checkbox" class="x-checkbox" xid="checkbox2" onChange="checkbox2Change" bind-value='ref("choose")' bind-ref='ref("choose")' checked="false"></span></div>  
                      <div class="x-col x-col-20" xid="col2"> 
                        <img src="$UI/MT/img/person.png" alt="" xid="image1" style="width:51px;height:49px;" /> 
                      </div>  
                      <div class="x-col" xid="col1"> 
                        <div component="$UI/system/components/justep/output/output" class="x-output" xid="output2" bind-ref="ref(&quot;sName&quot;)" />  
                        <div component="$UI/system/components/justep/output/output" class="x-output" xid="output1" bind-ref="ref(&quot;sFName&quot;)" /> 
                      </div>  
                      </div> 
                  </li> 
                </table> 
              </ul> 
            </div>  
            <div class="x-content-center x-pull-up" xid="div12"> 
              <span class="x-pull-up-label" xid="span7">加载更多...</span> 
            </div> 
          </div>
        </div>  
        </div>
    </div>
  </div> 
</div>