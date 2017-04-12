<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" xid="window" design="device:mobile">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:174px;left:549px;height:auto;" onActive="modelActive" onLoad="modelLoad"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data1" idColumn="createDate" onCustomRefresh="data1CustomRefresh"><column label="createDate" name="createDate" type="String" xid="xid1"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"> 
    <div class="x-panel-top" height="60"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="每日暗访"
        class="x-titlebar" style="height:100%;font-size:x-large;"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="backBtnClick"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">每日暗访</div>  
        <div class="x-titlebar-right reverse"></div> 
      </div> 
    </div>  
    <div class="x-panel-content"> 
    <div class="x-list x-inner-scroll" component="$UI/system/components/justep/list/list" data="data1" limit="20" xid="list1" autoLoad="false"> 
        <div class="x-list-head" />  
        <div class="x-list-content x-scroll-view"> 
          <div component="$UI/system/components/justep/scrollView/scrollView" supportPullToRefresh="true" supportInfiniteLoad="true" hScroll="false" vScroll="true" hScrollbar="false" vScrollbar="true" bounce="true" class="x-scroll"> 
            <div class="x-content-center x-pull-down container">
			      <i class="x-pull-down-img glyphicon x-icon-pull-down"></i>
			      <span class="x-pull-down-label">下拉刷新...</span>
			</div>  
            <div class="x-scroll-content"> 
              <ul class="x-list-template"> 
              	<!-- bind-css="{ 'x-currentRow': $model.taskData.currentRow.get() == $object }" -->
                <li class="list-group-item" bind-click="li1Click" style="font-size:large;"> 
                  <div class="x-row x-row-center" component="$UI/system/components/justep/row/row" xid="row3">
   
   
   <div class="x-col" xid="col15" style="font-weight:bold;">
    <span component="$UI/system/components/justep/output/output" data="taskData" bind-ref='ref("createDate")' xid="output8"></span></div> </div></li> 
              </ul> 
            </div>  
            <div class="x-content-center x-pull-up">
		        <span class="x-pull-up-label">加载更多...</span>
		    </div> 
          </div> 
        </div> 
      </div></div> 
  </div> 
</div>
