<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" xid="window" design="device:mobile">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:143px;left:518px;height:auto;"><div component="$UI/system/components/justep/data/baasData" autoLoad="false" xid="image" queryAction="queryTabImageAPP" saveAction="saveTabImageAPP" url="/imageAPP/imageAPP" tableName="tabImageAPP" idColumn="fID" confirmDelete="false" confirmRefresh="false" orderBy="fCreateDate:desc"><column label="fCreateDate" name="fCreateDate" type="DateTime" xid="default1"></column>
  <column label="fType" name="fType" type="String" xid="default2"></column>
  <column label="fAttachment" name="fAttachment" type="String" xid="default3"></column>
  <column label="fID" name="fID" type="String" xid="default4"></column>
  <filter name="filter0" xid="filter1"><![CDATA[tabImageAPP.fType='suggestion']]></filter></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="false" xid="data1" idColumn="fattach" autoNew="true" confirmDelete="false" confirmRefresh="false"><column name="fattach" type="String" xid="xid1"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full x-card"> 
    <div class="x-panel-top"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" title="工作建议"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="backBtnClick"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">工作建议</div>  
        <div class="x-titlebar-right reverse"></div> 
      </div> 
    </div>  
    <div class="x-panel-content x-cards"> 
      <div component="$UI/system/components/justep/list/list" class="x-list"
        xid="list1" data="image" disablePullToRefresh="true" disableInfiniteLoad="true" limit="20"> 
        <ul class="x-list-template" xid="listTemplateUl1"> 
          <li class="col-xs-4"> 
            <div class="thumbnail" style="height:70px;"> 
              <div component="$UI/system/components/justep/attachment/attachmentSimple"
                actionUrl="/baas/justep/attachment/simpleFileStore" xid="attachmentSimple1" bind-ref='ref("fAttachment")' style="height:100%;width:100%;"> 
                <div class="x-attachment" xid="div1"> 
                  <div class="x-attachment-content x-card-border"  style="border-style:dashed dashed dashed dashed;border-width:0px 0px 0px 0px;" xid="div2"> 
                    <div class="x-doc-process" xid="div3"> 
                      <div class="progress-bar x-doc-process-bar" role="progressbar"
                        style="width:0%;" xid="progressBar1"/>
                    </div>  
                    <div data-bind="foreach:$attachmentItems" xid="div4"> 
                      <div class="x-attachment-cell" xid="div5"> 
                        <div class="x-attachment-item x-item-other" data-bind="click:$model.previewOrRemoveItem.bind($model),style:{backgroundImage:($model.previewPicture.bind($model,$object))()}"
                          xid="div6"> 
                          <a data-bind="visible:$model.$state.get() == 'remove'"
                            class="x-remove-barget" xid="a1"/>
                        </div> 
                      </div> 
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'"
                      xid="div7"> 
                      <div class="x-attachment-item x-item-upload"  style=" margin: 0 !important;width: 0 !important;height: 0 !important;" data-bind="visible:$state.get() == 'upload'"
                        xid="div8"/>
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0"
                      xid="div9"> 
                      <div class="x-attachment-item x-item-remove"  style=" margin: 0 !important;width: 0 !important;height: 0 !important;" data-bind="click:changeState.bind($object,'remove')"
                        xid="div10"/>
                    </div>  
                    <div style="clear:both;" xid="div11"/>
                  </div> 
                </div> 
              </div>
            </div> 
          </li> 
        </ul> 
      </div> 
    <div component="$UI/system/components/justep/row/row" class="x-row" xid="row2">
   <div class="x-col" xid="col4"><div component="$UI/system/components/justep/attachment/attachmentSimple" actionUrl="/baas/justep/attachment/simpleFileStore" xid="attachmentSimple2" bind-ref='$model.data1.ref("fattach")' bind-click="attachmentSimple2Click">
   <div class="x-attachment" xid="div12">
    <div class="x-attachment-content x-card-border" xid="div13">
     <div class="x-doc-process" xid="div14">
      <div class="progress-bar x-doc-process-bar" role="progressbar" style="width:0%;" xid="progressBar2"></div></div> 
     <div data-bind="foreach:$attachmentItems" xid="div15">
      <div class="x-attachment-cell" xid="div16">
       <div class="x-attachment-item x-item-other" data-bind="click:$model.previewOrRemoveItem.bind($model),style:{backgroundImage:($model.previewPicture.bind($model,$object))()}" xid="div17">
        <a data-bind="visible:$model.$state.get() == 'remove'" class="x-remove-barget" xid="a2"></a></div> </div> </div> 
     <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'" xid="div18">
      <div class="x-attachment-item x-item-upload" data-bind="visible:$state.get() == 'upload'" xid="div19"></div></div> 
     <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0" xid="div20">
      <div class="x-attachment-item x-item-remove" data-bind="click:changeState.bind($object,'remove')" xid="div21"></div></div> 
     <div style="clear:both;" xid="div22"></div></div> </div> </div></div>
   </div></div> 
  </div> 
</div>
