<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:217px;left:353px;"
    onParamsReceive="modelParamsReceive"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="false"
      xid="wc_problem" idColumn="fID" confirmDelete="false" confirmRefresh="false"
      onCustomRefresh="wc_problemCustomRefresh"> 
      <column name="fID" type="String" xid="xid29"></column>
  <column name="fQty" type="Integer" xid="xid4"></column>
  <column name="fBatch" type="String" xid="xid5"></column>
  <column name="fShipQty" type="String" xid="xid6"></column>
  <column name="fWriter" type="String" xid="xid7"></column>
  <column name="fAuditor" type="String" xid="xid8"></column>
  <column name="fProblemListNum" type="String" xid="xid9"></column>
  <column name="fReason" type="String" xid="xid10"></column>
  <column name="fSuggestion" type="String" xid="xid11"></column>
  <column name="fPieceNum" type="String" xid="xid12"></column>
  <column name="tabEidtorName" type="String" xid="xid13"></column>
  <column name="tabCreatorId" type="String" xid="xid14"></column>
  <column name="tabEidtorId" type="String" xid="xid15"></column>
  <column name="tabIsDelete" type="String" xid="xid16"></column>
  <column name="tabCreateDate" type="DateTime" xid="xid17"></column>
  <column name="tabEditDate" type="DateTime" xid="xid18"></column>
  <column name="materialtType" type="String" xid="xid19"></column>
  <column name="fProStatus" type="String" xid="xid20"></column>
  <column name="fworkshop" type="String" xid="xid21"></column>
  <column name="fResponsibleParty" type="String" xid="xid23"></column>
  <column name="fCaseNumber" type="String" xid="xid24"></column>
  <column name="fCheckSuggest" type="String" xid="xid25"></column>
  <column name="fCheckIsOver" type="String" xid="xid26"></column>
  <column name="fProblemNo" type="String" xid="xid27"></column>
  <column name="fReasonSupply" type="String" xid="xid28"></column>
  <column name="fDrawingNo" type="String" xid="xid30"></column>
  <column name="fAssign" type="Integer" xid="xid31"></column>
  <column name="f108IsSend" type="Integer" xid="xid32"></column>
  <column name="fattached_file" type="String" xid="xid33"></column>
  <column name="f108case" type="String" xid="xid1"></column>
  <column name="f50case" type="String" xid="xid2"></column>
  <column name="content" type="String" xid="xid3"></column>
  <column label="fsubStatus" name="fsubStatus" type="Integer" xid="xid22"></column>
  <column label="f108hanStatus" name="f108hanStatus" type="Integer" xid="xid34"></column>
  <column label="f50hanStatus" name="f50hanStatus" type="Integer" xid="xid35"></column>
  <column label="f108hanTime" name="f108hanTime" type="DateTime" xid="xid36"></column>
  <column label="f50hanTime" name="f50hanTime" type="DateTime" xid="xid37"></column>
  <column label="countersignStatus" name="countersignStatus" type="Integer" xid="xid38"></column>
  <column label="countersignTime" name="countersignTime" type="DateTime" xid="xid39"></column>
  <column label="headmanTime" name="headmanTime" type="DateTime" xid="xid40"></column>
  <column label="headmanStatus" name="headmanStatus" type="Integer" xid="xid41"></column>
  <column label="fWriter" name="fWriter" type="String" xid="xid42"></column>
  <column label="countersignPerson" name="countersignPerson" type="String" xid="xid43"></column>
  <column label="productionPerson" name="productionPerson" type="String" xid="xid44"></column>
  <column label="productionStatus" name="productionStatus" type="Integer" xid="xid45"></column>
  <column label="projectTime" name="projectTime" type="DateTime" xid="xid46"></column>
  <column label="projectStatus" name="projectStatus" type="Integer" xid="xid47"></column>
  <column label="projectPerson" name="projectPerson" type="String" xid="xid48"></column>
  <column label="fWriter1" name="fWriter" type="String" xid="xid49"></column>
  <column label="headman" name="headman" type="String" xid="xid50"></column>
  <column label="productionTime" name="productionTime" type="DateTime" xid="xid51"></column>
  <column label="f108Person" name="f108Person" type="String" xid="xid52"></column>
  <column label="f50Person" name="f50Person" type="String" xid="xid53"></column>
  <column label="fUnit" name="fUnit" type="String" xid="xid54"></column>
  <column label="fConclusion" name="fConclusion" type="String" xid="xid55"></column></div> 
  </div>  
  <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
    active="0" xid="contents1" wrap="false" swipe="false" slidable="false" routable="false"> 
    <div class="x-contents-content" xid="content1"> 
      <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
        xid="panel5"> 
        <div class="x-panel-top" xid="top4"> 
          <div component="$UI/system/components/justep/titleBar/titleBar" title="问题报告单详细"
            class="x-titlebar" xid="titleBar6" style="background-color:#F8F8F8;color:#000000;"> 
            <div class="x-titlebar-left" xid="left6"> 
              <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon"
                label="button" xid="button9" icon="linear linear-volumehigh" onClick="button9Click"> 
                <i xid="i11" class="linear linear-volumehigh"/>  
                <span xid="span12"/> 
              </a> 
            </div>  
            <div class="x-titlebar-title" xid="title6">问题报告单详细</div>  
            <div class="x-titlebar-right reverse" xid="right3"> 
              <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-xs btn-icon-left"
                xid="moreBtn" icon="icon-android-more" onClick="button5Click"> 
                <i xid="i5" class="icon-android-more"/>  
                <span xid="span5"/> 
              </a> 
            </div> 
          </div> 
        </div>  
        <div class="x-panel-content" xid="content3"> 
          <div component="$UI/system/components/fragment/form/formRow5Btn2"
            xid="formRow5Btn25"/>  
          <div component="$UI/system/components/fragment/form/formRow5Btn2"
            xid="formRow5Btn24"> 
            <div class="table table-hover table-bordered" xid="div29" style="background-color:#FFFFFF;"> 
              <div class="form-horizontal container-fluid" component="$UI/system/components/bootstrap/form/form"
                xid="form1"> 
                <div class="form-group" xid="formGroup2"> 
                  <div class="col-sm-12" xid="col1">
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 change-color" xid="labelEdit12" style="height:39px;width:100%;">
    <label class="x-label" xid="label12">问题单号</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output3" bind-ref='$model.wc_problem.ref("fProblemListNum")' style="width:456px;"></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit3">
    <label class="x-label" xid="label2">图号</label>
    <div class="x-edit" xid="div6">
     <div component="$UI/system/components/justep/output/output" class="x-output" xid="output4" bind-ref='$model.wc_problem.ref("fDrawingNo")'></div></div> </div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 change-color" xid="labelEdit19">
    <label class="x-label" xid="label18">数量</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output6" bind-ref='$model.wc_problem.ref("fQty")' style="width:456px;" format="0,000.00"></div>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit x-output_x-edit_margin" xid="output1" bind-ref='$model.wc_problem.ref("fUnit")'></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit4">
    <label class="x-label" xid="label4">批次</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output7" bind-ref='$model.wc_problem.ref("fBatch")'></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 change-color" xid="labelEdit11">
    <label class="x-label" xid="label11">架次</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output9" bind-ref='$model.wc_problem.ref("fShipQty")'></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit2">
    <label class="x-label" xid="label11">填报人</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output8" bind-ref='$model.wc_problem.ref("fWriter")'></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 change-color" xid="labelEdit14">
    <label class="x-label" xid="label13">责任方</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output14" bind-ref='$model.wc_problem.ref("fResponsibleParty")'></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit5">
    <label class="x-label" xid="label5">车间</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output5" bind-ref='$model.wc_problem.ref("fworkshop")'></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 change-color" xid="labelEdit1">
    <label class="x-label" xid="label6">问题分类</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output2" bind-ref='$model.wc_problem.ref("fReason")'></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 " xid="labelEdit8">
    <label class="x-label" xid="label9">问题描述</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output13" bind-ref='$model.wc_problem.ref("fReasonSupply")'></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 change-color" xid="labelEdit9">
    <label class="x-label" xid="label10">故障单号</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output17" bind-ref='$model.wc_problem.ref("fProblemNo")'></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 " xid="labelEdit55">
    <label class="x-label" xid="label62">分析结论</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output52" bind-ref='$model.wc_problem.ref("fConclusion")'></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 change-color" xid="labelEdit15">
    <label class="x-label" xid="label14">物料类型</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output15" bind-ref='$model.wc_problem.ref("materialtType")'></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit57">
    <label class="x-label" xid="label64">件号</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output54" bind-ref='$model.wc_problem.ref("fPieceNum")'></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 change-color" xid="labelEdit16">
    <label class="x-label" xid="label15">108发运箱号</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output16" bind-ref='$model.wc_problem.ref("f108case")'></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 " xid="labelEdit6">
    <label class="x-label" xid="label7">计划下达备注</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output11" bind-ref='$model.wc_problem.ref("content")'></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 change-color" xid="labelEdit56">
    <label class="x-label" xid="label63">50发运箱号</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output53" bind-ref='$model.wc_problem.ref("f50case")'></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit54">
    <label class="x-label" xid="label59">意见</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output51" bind-ref='$model.wc_problem.ref("fSuggestion")'></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 change-color" xid="labelEdit60">
    <label class="x-label" xid="label67">108发运</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output10" bind-ref='$model.wc_problem.ref("f108IsSend")' onRender="output10Render"></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30" xid="labelEdit16">
    <label class="x-label" xid="label15">创建日期</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output16" bind-ref='$model.wc_problem.ref("tabCreateDate")'></div></div> 
   <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label30 change-color" xid="labelEdit7">
    <label class="x-label" xid="label8">审核人</label>
    <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output12" bind-ref='$model.wc_problem.ref("fAuditor")'></div></div> </div><div class="col-sm-12" xid="col2" style="display:none;">
   <div class="form-group" xid="formGroup5">
    <div class="col-sm-2" xid="col13">
     <label class="x-label" xid="label26">附件</label></div> 
    <div class="col-sm-9" xid="col10">
     <div component="$UI/system/components/justep/attachment/attachmentSimple" actionUrl="/baas/justep/attachment/simpleFileStore" xid="attachmentSimple3" bind-ref='$model.wc_problem.ref("fattached_file")'>
      <div class="x-attachment" xid="div36">
       <div class="x-attachment-content x-card-border" xid="div35">
        <div class="x-doc-process" xid="div34">
         <div class="progress-bar x-doc-process-bar" role="progressbar" style="width:0%;" xid="progressBar3"></div></div> 
        <div data-bind="foreach:$attachmentItems" xid="div33">
         <div class="x-attachment-cell" xid="div32">
          <div class="x-attachment-item x-item-other" data-bind="style:{backgroundImage:($model.previewPicture.bind($model,$object))()}" xid="div31" bind-click="div8Click">
           <a data-bind="visible:$model.$state.get() == 'remove'" class="x-remove-barget" xid="a3"></a></div> </div> </div> 
        <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'" xid="div30">
         <div class="x-attachment-item x-item-upload" style=" margin: 0 !important;width: 0 !important;height: 0 !important;" data-bind="visible:$state.get() == 'upload'" xid="div27"></div></div> 
        <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0" xid="div25">
         <div class="x-attachment-item x-item-remove" style=" margin: 0 !important;width: 0 !important;height: 0 !important;" data-bind="click:changeState.bind($object,'remove')" xid="div26"></div></div> 
        <div style="clear:both;" xid="div28"></div></div> </div> </div> </div> </div> </div><div class="col-sm-12" xid="col6" style="display:none;">
   <div class="form-group" xid="formGroup3">
    <div class="col-sm-2" xid="col7">
     <label class="x-label" xid="label3">附件</label></div> 
    <div class="col-sm-9" xid="col5"></div></div> </div>
  </div> 
              </div> 
            </div> 
          </div>  
          <!-- <a component="$UI/system/components/justep/button/button" class="btn btn-default center-block" label="我要反馈" xid="button43" style="height:37px;width:93%;color:#000000;border-color:#E5E5E5 #E5E5E5 #E5E5E5 #E5E5E5;background-color:#e5e5e5;" onClick="button43Click">
   <i xid="i56"></i>
   <span xid="span74">我要反馈</span></a> -->
        <a component="$UI/system/components/justep/button/button" class="btn btn-default center-block" label="我要反馈" xid="button43" style="height:37px;width:93%;color:#000000;border-color:#E5E5E5 #E5E5E5 #E5E5E5 #E5E5E5;background-color:#e5e5e5;display:none;" onClick="button43Click">
   <i xid="i56"></i>
   <span xid="span74">我要反馈</span></a></div> 
      </div> 
    </div> 
  </div>  
  <span component="$UI/system/components/justep/windowDialog/windowDialog" xid="windowDialog1"
    src="$UI/webProblem/image/image.w" forceRefreshOnOpen="true"/>  
  <div component="$UI/system/components/justep/popMenu/popMenu" class="x-popMenu"
    xid="menu" anchor="moreBtn" dismissible="true" opacity="0.1"> 
    <div class="x-popMenu-overlay" xid="div4"/>  
    <ul component="$UI/system/components/justep/menu/menu" class="x-menu dropdown-menu x-popMenu-content"
      xid="menu1"> 
      <li class="x-menu-item" xid="item1"> 
        <a component="$UI/system/components/justep/button/button" class="btn btn-link"
          label="进度" xid="jinduBtn" onClick="jinduBtnClick" icon="icon-android-mixer"> 
          <i xid="i2" class="icon-android-mixer"/>  
          <span xid="span2">进度</span> 
        </a> 
      </li>  
      <li class="x-menu-item" xid="item2"> 
        <a component="$UI/system/components/justep/button/button" class="btn btn-link"
          label="复制" xid="copyBtn" onClick="copyBtnClick" icon="icon-ios7-browsers-outline"> 
          <i xid="i3" class="icon-ios7-browsers-outline"/>  
          <span xid="span3">复制</span> 
        </a> 
      </li>  
      </ul> 
  </div> 
</div>
