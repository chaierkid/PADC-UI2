<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:307px;left:609px;"
    onParamsReceive="modelParamsReceive"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="sex" idColumn="label"> 
      <column name="label" type="String" xid="xid1"/>  
      <column name="value" type="String" xid="xid2"/>  
      <data xid="default2">[{"label":"男","value":"男"},{"label":"女","value":"女"}]</data> 
    </div>  
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="size" idColumn="value"> 
      <column name="label" type="String" xid="default4"/>  
      <column name="value" type="String" xid="default5"/>  
      <data xid="default3">[{"label":"偏胖","value":"偏胖"},{"label":"中等","value":"中等"},{"label":"偏瘦","value":"偏瘦"}]</data> 
    </div> 
  <div component="$UI/system/components/justep/data/baasData" xid="tabquestion" directDelete="true" autoLoad="false" idColumn="fId" queryAction="queryTabquestion" tableName="tabquestion" url="/question/question" saveAction="saveTabquestion" confirmRefresh="false" limit="10">
   <column isCalculate="true" label="选择" name="calcCheckBox" type="Boolean" xid="calcCheckBox"></column>
   <column label="" name="fId" type="String" xid="default1"></column>
   <column label="" name="fHospitalCode" type="String" xid="default6"></column>
   <column label="" name="fHospitalName" type="String" xid="default7"></column>
   <column label="" name="fSurveydate" type="Date" xid="default8"></column>
   <column label="" name="fStareSurevey" type="DateTime" xid="default9"></column>
   <column label="" name="fEndSurevey" type="DateTime" xid="default10"></column>
   <column label="" name="fQ1" type="String" xid="default11"></column>
   <column label="" name="fQ1_1_1" type="String" xid="default12"></column>
   <column label="" name="fQ1_1_2" type="String" xid="default13"></column>
   <column label="" name="fQ1_1_3" type="String" xid="default14"></column>
   <column label="" name="fQ1_1_4" type="String" xid="default15"></column>
   <column label="" name="fQ1_1_1Ph" type="String" xid="default16"></column>
   <column label="" name="fQ1_1_2Ph" type="String" xid="default17"></column>
   <column label="" name="fQ1_1_3Ph" type="String" xid="default18"></column>
   <column label="" name="fQ1_1_4Ph" type="String" xid="default19"></column>
   <column label="" name="fQ1_1_4Context" type="String" xid="default20"></column>
   <column label="" name="fQ2_1" type="String" xid="default21"></column>
   <column label="" name="fQ2_1Ph" type="String" xid="default22"></column>
   <column label="" name="fQ2_2" type="String" xid="default23"></column>
   <column label="" name="fQ3_1" type="String" xid="default24"></column>
   <column label="" name="fQ3_1Ph" type="String" xid="default25"></column>
   <column label="" name="fQ3_2" type="String" xid="default26"></column>
   <column label="" name="fQ4_1" type="String" xid="default27"></column>
   <column label="" name="fQ4_1Ph" type="String" xid="default28"></column>
   <column label="" name="fQ4_2" type="String" xid="default29"></column>
   <column label="" name="fQ4_2Ph" type="String" xid="default30"></column>
   <column label="" name="fQ4_3" type="String" xid="default31"></column>
   <column label="" name="fQ4_3Ph" type="String" xid="default32"></column>
   <column label="" name="fQ4_4" type="String" xid="default33"></column>
   <column label="" name="fQ4_4Ph" type="String" xid="default34"></column>
   <column label="" name="fQ4_5" type="String" xid="default35"></column>
   <column label="" name="fQ4_5Ph" type="String" xid="default36"></column>
   <column label="" name="fQ5" type="String" xid="default37"></column>
   <column label="" name="fQ5_1_1YN_GH" type="String" xid="default38"></column>
   <column label="" name="fQ5_1_1YN_PJ" type="String" xid="default39"></column>
   <column label="" name="fQ5_1_1YN_BL" type="String" xid="default40"></column>
   <column label="" name="fQ5_1_1YN_QT" type="String" xid="default41"></column>
   <column label="" name="fQ5_1_1YN_Context" type="String" xid="default42"></column>
   <column label="" name="fQ5_1_1MZ_GH" type="String" xid="default43"></column>
   <column label="" name="fQ5_1_1MZ_PJ" type="String" xid="default44"></column>
   <column label="" name="fQ5_1_1MZ_BL" type="String" xid="default45"></column>
   <column label="" name="fQ5_1_1MZ_QT" type="String" xid="default46"></column>
   <column label="" name="fQ5_1_1MZ_Context" type="String" xid="default47"></column>
   <column label="" name="fQ5_1_1GH_GH" type="String" xid="default48"></column>
   <column label="" name="fQ5_1_1GH_PJ" type="String" xid="default49"></column>
   <column label="" name="fQ5_1_1GH_BL" type="String" xid="default50"></column>
   <column label="" name="fQ5_1_1GH_QT" type="String" xid="default51"></column>
   <column label="" name="fQ5_1_1GH_Context" type="String" xid="default52"></column>
   <column label="" name="fQ5_1_1ZL_GH" type="String" xid="default53"></column>
   <column label="" name="fQ5_1_1ZL_PJ" type="String" xid="default54"></column>
   <column label="" name="fQ5_1_1ZL_BL" type="String" xid="default55"></column>
   <column label="" name="fQ5_1_1ZL_QT" type="String" xid="default56"></column>
   <column label="" name="fQ5_1_1ZL_Context" type="String" xid="default57"></column>
   <column label="" name="fQ5_1_1Time" type="DateTime" xid="default58"></column>
   <column label="" name="fQ5_1_1Sex" type="String" xid="default59"></column>
   <column label="" name="fQ5_1_1Size" type="String" xid="default60"></column>
   <column label="" name="fQ5_1_1Height" type="String" xid="default61"></column>
   <column label="" name="fQ5_1_1features" type="String" xid="default62"></column>
   <column label="" name="fQ5_1_1Video" type="String" xid="default63"></column>
   <column label="" name="fQ5_1_1Pro" type="String" xid="default64"></column>
   <column label="" name="fQ5_1_2YN_GH" type="String" xid="default65"></column>
   <column label="" name="fQ5_1_2YN_PJ" type="String" xid="default66"></column>
   <column label="" name="fQ5_1_2YN_BL" type="String" xid="default67"></column>
   <column label="" name="fQ5_1_2YN_QT" type="String" xid="default68"></column>
   <column label="" name="fQ5_1_2YN_Context" type="String" xid="default69"></column>
   <column label="" name="fQ5_1_2MZ_GH" type="String" xid="default70"></column>
   <column label="" name="fQ5_1_2MZ_PJ" type="String" xid="default71"></column>
   <column label="" name="fQ5_1_2MZ_BL" type="String" xid="default72"></column>
   <column label="" name="fQ5_1_2MZ_QT" type="String" xid="default73"></column>
   <column label="" name="fQ5_1_2MZ_Context" type="String" xid="default74"></column>
   <column label="" name="fQ5_1_2GH_GH" type="String" xid="default75"></column>
   <column label="" name="fQ5_1_2GH_PJ" type="String" xid="default76"></column>
   <column label="" name="fQ5_1_2GH_BL" type="String" xid="default77"></column>
   <column label="" name="fQ5_1_2GH_QT" type="String" xid="default78"></column>
   <column label="" name="fQ5_1_GH_Context" type="String" xid="default79"></column>
   <column label="" name="fQ5_1_2ZL_GH" type="String" xid="default80"></column>
   <column label="" name="fQ5_1_2ZL_PJ" type="String" xid="default81"></column>
   <column label="" name="fQ5_1_2ZL_BL" type="String" xid="default82"></column>
   <column label="" name="fQ5_1_2ZL_QT" type="String" xid="default83"></column>
   <column label="" name="fQ5_1_2ZL_Context" type="String" xid="default84"></column>
   <column label="" name="fQ5_1_2Time" type="DateTime" xid="default85"></column>
   <column label="" name="fQ5_1_2Sex" type="String" xid="default86"></column>
   <column label="" name="fQ5_1_2Size" type="String" xid="default87"></column>
   <column label="" name="fQ5_1_2Height" type="String" xid="default88"></column>
   <column label="" name="fQ5_1_2features" type="String" xid="default89"></column>
   <column label="" name="fQ5_1_2Video" type="String" xid="default90"></column>
   <column label="" name="fQ5_1_2Pro" type="String" xid="default91"></column>
   <column label="" name="fQ6" type="String" xid="default92"></column>
   <column label="" name="fQ6_1_1" type="String" xid="default93"></column>
   <column label="" name="fQ6_1_1Video" type="String" xid="default94"></column>
   <column label="" name="fQ6_1_2" type="String" xid="default95"></column>
   <column label="" name="fQ6_1_2Video" type="String" xid="default96"></column>
   <column label="" name="fQ6_1_3" type="String" xid="default97"></column>
   <column label="" name="fQ6_1_3Video" type="String" xid="default98"></column>
   <column label="" name="fQ6_1_4" type="String" xid="default99"></column>
   <column label="" name="fQ6_1_4Video" type="String" xid="default100"></column>
   <column label="" name="fQ6_1_4Context" type="String" xid="default101"></column>
   <column label="" name="fQ6_1_5" type="String" xid="default102"></column>
   <column label="" name="fQ6_1_5Video" type="String" xid="default103"></column>
   <column label="" name="fQ6_1_5Context" type="String" xid="default104"></column>
   <column label="" name="tabIsDelete" type="String" xid="default105"></column>
   <column label="" name="tabIsShow" type="String" xid="default106"></column>
   <column label="" name="tabCreateDate" type="DateTime" xid="default107"></column>
   <column label="" name="tabEditDate" type="DateTime" xid="default108"></column>
   <column label="" name="tabCreatorName" type="String" xid="default109"></column>
   <column label="" name="tabEidtorName" type="String" xid="default110"></column>
   <column label="" name="tabCreatorId" type="String" xid="default111"></column>
   <column label="" name="tabEidtorId" type="String" xid="default112"></column>
   <column label="" name="fUserName" type="String" xid="default113"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1"> 
    <div class="x-panel-top" xid="top1"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar"
        xid="titleBar1" title="街面秩序"> 
        <div class="x-titlebar-left" xid="left1"><p xid="p1" style="background-color:red;"></p>
  <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top btn-only-icon" xid="返回主页" icon="icon-chevron-left" onClick="button31Click">
   <i xid="i9" class="icon-chevron-left"></i>
   <span xid="span9"></span></a>
  <label xid="label19"><![CDATA[首页]]></label></div>  
        <div class="x-titlebar-title" xid="title1">街面秩序</div>  
        <div class="x-titlebar-right reverse" xid="right1"/> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content3"> 
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
        active="0" xid="contents3"> 
        <div class="x-contents-content" xid="Q1"> 
          <div component="$UI/system/components/justep/labelEdit/labelEdit"
            class="x-label-edit x-label25" xid="labelEdit1"> 
            <label class="x-label" xid="label1"><![CDATA[调查区域：]]></label>  
            <input component="$UI/system/components/justep/input/input" class="form-control x-edit"
              xid="fHospitalCode" bind-ref="$model.tabquestion.ref(&quot;fHospitalCode&quot;)"/> 
          </div>  
          <div component="$UI/system/components/justep/labelEdit/labelEdit"
            class="x-label-edit x-label25" xid="labelEdit2"> 
            <label class="x-label" xid="label2"><![CDATA[调查点位：]]></label>  
            <input component="$UI/system/components/justep/input/input" class="form-control x-edit"
              xid="fHospitalName" bind-ref="$model.tabquestion.ref(&quot;fHospitalName&quot;)"/> 
          </div>  
          <h4 xid="h411"><![CDATA[Q1该医院周边是否存在摆摊挂牌现象？]]></h4>  
          <span component="$UI/system/components/justep/button/toggle" class="x-toggle"
            xid="fQ1" ON="是" OFF="否" bind-ref="$model.tabquestion.ref(&quot;fQ1&quot;)" checkedValue="是"
            uncheckedValue="否"/>  
          <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label25" xid="labelEdit3">
   <label class="x-label" xid="label3">调查区域：</label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="input1" bind-ref='$model.tabquestion.ref("fHospitalCode")'></input></div><div component="$UI/system/components/justep/bar/bar" class="x-bar"
            xid="bar2"> 
            <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm center-block"
              label="下一步" xid="button2" style="background-color:transparent;" onClick="button2Click"> 
              <i xid="i3"/>  
              <span xid="span3">下一步</span> 
            </a> 
          </div>
  </div>  
        <div class="x-contents-content" xid="Q1_1"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" xid="button10" icon="linear linear-database" onClick="button10Click">
   <i xid="i10" class="linear linear-database"></i>
   <span xid="span10"></span></a><label xid="label20"><![CDATA[返回上一页]]></label><h4 xid="h41">Q1_1如果存在摆摊挂牌现象，请问您是哪一种，请记录并拍照（多选）。</h4>  
          <div component="$UI/system/components/justep/row/row" class="x-row"
            xid="row2"> 
            <div class="x-col x-col-20 x-col-center" xid="col4"> 
              <label xid="label8"><![CDATA[1.代办挂号]]></label> 
            </div>  
            <div class="x-col x-col-10 x-col-center" xid="x-col-5"> 
              <span component="$UI/system/components/justep/button/checkbox"
                class="x-checkbox" xid="fQ1_1_1" checkedValue="是" value="否" checked="true"
                bind-ref="$model.tabquestion.ref(&quot;fQ1_1_1&quot;)"/> 
            </div>  
            <div class="x-col" xid="col6"> 
              <div component="$UI/system/components/justep/attachment/attachmentSimple"
                actionUrl="/baas/justep/attachment/simpleFileStore" xid="fQ1_1_1Ph"
                bind-ref="$model.tabquestion.ref(&quot;fQ1_1_1Ph&quot;)" accept="*/*"> 
                <div class="x-attachment" xid="div1"> 
                  <div class="x-attachment-content x-card-border" xid="div2"> 
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
                      <div class="x-attachment-item x-item-upload" data-bind="visible:$state.get() == 'upload'"
                        xid="div8"/> 
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0"
                      xid="div9"> 
                      <div class="x-attachment-item x-item-remove" data-bind="click:changeState.bind($object,'remove')"
                        xid="div10"/> 
                    </div>  
                    <div style="clear:both;" xid="div11"/> 
                  </div> 
                </div> 
              </div> 
            </div> 
          </div>  
          <div component="$UI/system/components/justep/row/row" class="x-row"
            xid="row3"> 
            <div class="x-col x-col-20 x-col-center" xid="col7"> 
              <label xid="label9"><![CDATA[2.代办票据]]></label> 
            </div>  
            <div xid="x-col-6" class="x-col x-col-10 x-col-center"> 
              <span component="$UI/system/components/justep/button/checkbox"
                class="x-checkbox" xid="fQ1_1_2" value="是" checkedValue="是" uncheckedValue="否"
                checked="true" bind-ref="$model.tabquestion.ref(&quot;fQ1_1_2&quot;)"/> 
            </div>  
            <div class="x-col" xid="col9"> 
              <div component="$UI/system/components/justep/attachment/attachmentSimple"
                actionUrl="/baas/justep/attachment/simpleFileStore" xid="fQ1_1_2Ph"
                bind-ref="$model.tabquestion.ref(&quot;fQ1_1_2Ph&quot;)" accept="*/*"> 
                <div class="x-attachment" xid="div22"> 
                  <div class="x-attachment-content x-card-border" xid="div21"> 
                    <div class="x-doc-process" xid="div20"> 
                      <div class="progress-bar x-doc-process-bar" role="progressbar"
                        style="width:0%;" xid="progressBar2"/> 
                    </div>  
                    <div data-bind="foreach:$attachmentItems" xid="div19"> 
                      <div class="x-attachment-cell" xid="div18"> 
                        <div class="x-attachment-item x-item-other" data-bind="click:$model.previewOrRemoveItem.bind($model),style:{backgroundImage:($model.previewPicture.bind($model,$object))()}"
                          xid="div17"> 
                          <a data-bind="visible:$model.$state.get() == 'remove'"
                            class="x-remove-barget" xid="a2"/> 
                        </div> 
                      </div> 
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'"
                      xid="div16"> 
                      <div class="x-attachment-item x-item-upload" data-bind="visible:$state.get() == 'upload'"
                        xid="div15"/> 
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0"
                      xid="div14"> 
                      <div class="x-attachment-item x-item-remove" data-bind="click:changeState.bind($object,'remove')"
                        xid="div12"/> 
                    </div>  
                    <div style="clear:both;" xid="div13"/> 
                  </div> 
                </div> 
              </div> 
            </div> 
          </div>  
          <div component="$UI/system/components/justep/row/row" class="x-row"
            xid="row4"> 
            <div class="x-col x-col-20 x-col-center" xid="col10"> 
              <label xid="label10"><![CDATA[3.代办复印病历]]></label> 
            </div>  
            <div class="x-col x-col-10 x-col-center" xid="x-col-7"> 
              <span component="$UI/system/components/justep/button/checkbox"
                class="x-checkbox" xid="fQ1_1_3" value="是" checkedValue="是" uncheckedValue="否"
                checked="true" bind-ref="$model.tabquestion.ref(&quot;fQ1_1_3&quot;)"/> 
            </div>  
            <div class="x-col" xid="col12"> 
              <div component="$UI/system/components/justep/attachment/attachmentSimple"
                actionUrl="/baas/justep/attachment/simpleFileStore" xid="fQ1_1_3Ph"
                bind-ref="$model.tabquestion.ref(&quot;fQ1_1_3Ph&quot;)" accept="*/*"> 
                <div class="x-attachment" xid="div33"> 
                  <div class="x-attachment-content x-card-border" xid="div32"> 
                    <div class="x-doc-process" xid="div31"> 
                      <div class="progress-bar x-doc-process-bar" role="progressbar"
                        style="width:0%;" xid="progressBar3"/> 
                    </div>  
                    <div data-bind="foreach:$attachmentItems" xid="div30"> 
                      <div class="x-attachment-cell" xid="div29"> 
                        <div class="x-attachment-item x-item-other" data-bind="click:$model.previewOrRemoveItem.bind($model),style:{backgroundImage:($model.previewPicture.bind($model,$object))()}"
                          xid="div28"> 
                          <a data-bind="visible:$model.$state.get() == 'remove'"
                            class="x-remove-barget" xid="a3"/> 
                        </div> 
                      </div> 
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'"
                      xid="div27"> 
                      <div class="x-attachment-item x-item-upload" data-bind="visible:$state.get() == 'upload'"
                        xid="div26"/> 
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0"
                      xid="div25"> 
                      <div class="x-attachment-item x-item-remove" data-bind="click:changeState.bind($object,'remove')"
                        xid="div23"/> 
                    </div>  
                    <div style="clear:both;" xid="div24"/> 
                  </div> 
                </div> 
              </div> 
            </div> 
          </div>  
          <div component="$UI/system/components/justep/row/row" class="x-row"
            xid="row5"> 
            <div class="x-col x-col-20 x-col-center" xid="col13"> 
              <label xid="label11"><![CDATA[4.其他（注明并拍照）]]></label>  
              <div component="$UI/system/components/justep/row/row" class="x-row"
                xid="row52"> 
                <div class="x-col" xid="col169">
                  <input component="$UI/system/components/justep/input/input"
                    class="form-control" xid="fQ11" bind-ref="$model.tabquestion.ref(&quot;fQ1_1_4Context&quot;)"/>
                </div> 
              </div>
            </div>  
            <div xid="x-col-8" class="x-col x-col-10 x-col-center"> 
              <span component="$UI/system/components/justep/button/checkbox"
                class="x-checkbox" xid="fQ1_1_4" value="是" checkedValue="是" uncheckedValue="否"
                checked="true" bind-ref="$model.tabquestion.ref(&quot;fQ1_1_4&quot;)"/> 
            </div>  
            <div class="x-col x-col-center" xid="col15"> 
              <div component="$UI/system/components/justep/attachment/attachmentSimple"
                actionUrl="/baas/justep/attachment/simpleFileStore" xid="fQ1_1_4Ph"
                bind-ref="$model.tabquestion.ref(&quot;fQ1_1_4Ph&quot;)" accept="*/*"> 
                <div class="x-attachment" xid="div44"> 
                  <div class="x-attachment-content x-card-border" xid="div43"> 
                    <div class="x-doc-process" xid="div42"> 
                      <div class="progress-bar x-doc-process-bar" role="progressbar"
                        style="width:0%;" xid="progressBar4"/> 
                    </div>  
                    <div data-bind="foreach:$attachmentItems" xid="div41"> 
                      <div class="x-attachment-cell" xid="div40"> 
                        <div class="x-attachment-item x-item-other" data-bind="click:$model.previewOrRemoveItem.bind($model),style:{backgroundImage:($model.previewPicture.bind($model,$object))()}"
                          xid="div39"> 
                          <a data-bind="visible:$model.$state.get() == 'remove'"
                            class="x-remove-barget" xid="a4"/> 
                        </div> 
                      </div> 
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'"
                      xid="div38"> 
                      <div class="x-attachment-item x-item-upload" data-bind="visible:$state.get() == 'upload'"
                        xid="div37"/> 
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0"
                      xid="div36"> 
                      <div class="x-attachment-item x-item-remove" data-bind="click:changeState.bind($object,'remove')"
                        xid="div34"/> 
                    </div>  
                    <div style="clear:both;" xid="div35"/> 
                  </div> 
                </div> 
              </div> 
            </div> 
          </div>  
          <div component="$UI/system/components/justep/bar/bar" class="x-bar"
            xid="bar1"> 
            <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm center-block"
              label="下一步" xid="button4" style="background-color:transparent;" onClick="button4Click"> 
              <i xid="i4"/>  
              <span xid="span4">下一步</span> 
            </a> 
          </div> 
        </div>  
        <div class="x-contents-content" xid="Q6_1"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" xid="button15" icon="linear linear-database" onClick="button15Click">
   <i xid="i16" class="linear linear-database"></i>
   <span xid="span16"></span></a><label xid="label32">返回上一页</label><h4 xid="h410"><![CDATA[Q6_1请问是哪一种，请记录并录像（多选）]]></h4>  
          <div component="$UI/system/components/justep/row/row" class="x-row"
            xid="row45"> 
            <div class="x-col x-col-20 x-col-center" xid="col149"> 
              <label xid="label57">1.代办挂号</label> 
            </div>  
            <div class="x-col x-col-10 x-col-center" xid="col150"> 
              <span component="$UI/system/components/justep/button/checkbox"
                class="x-checkbox" xid="fQ6_1_1" checkedValue="是" value="否" checked="true"
                bind-ref="$model.tabquestion.ref(&quot;fQ6_1_1&quot;)"/> 
            </div>  
            <div class="x-col" xid="col148"> 
              <div component="$UI/system/components/justep/attachment/attachmentSimple"
                actionUrl="/baas/justep/attachment/simpleFileStore" xid="fQ6_1_1Video"
                bind-ref="$model.tabquestion.ref(&quot;fQ6_1_1Video&quot;)" accept="*/*"> 
                <div class="x-attachment" xid="div154"> 
                  <div class="x-attachment-content x-card-border" xid="div153"> 
                    <div class="x-doc-process" xid="div152"> 
                      <div class="progress-bar x-doc-process-bar" role="progressbar"
                        style="width:0%;" xid="progressBar14"/> 
                    </div>  
                    <div data-bind="foreach:$attachmentItems" xid="div151"> 
                      <div class="x-attachment-cell" xid="div150"> 
                        <div class="x-attachment-item x-item-other" data-bind="click:$model.previewOrRemoveItem.bind($model),style:{backgroundImage:($model.previewPicture.bind($model,$object))()}"
                          xid="div149"> 
                          <a data-bind="visible:$model.$state.get() == 'remove'"
                            class="x-remove-barget" xid="a14"/> 
                        </div> 
                      </div> 
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'"
                      xid="div148"> 
                      <div class="x-attachment-item x-item-upload" data-bind="visible:$state.get() == 'upload'"
                        xid="div147"/> 
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0"
                      xid="div146"> 
                      <div class="x-attachment-item x-item-remove" data-bind="click:changeState.bind($object,'remove')"
                        xid="div144"/> 
                    </div>  
                    <div style="clear:both;" xid="div145"/> 
                  </div> 
                </div> 
              </div> 
            </div> 
          </div>  
          <div component="$UI/system/components/justep/row/row" class="x-row"
            xid="row46"> 
            <div class="x-col x-col-20 x-col-center" xid="col152"> 
              <label xid="label58"><![CDATA[2.代开票据]]></label> 
            </div>  
            <div class="x-col x-col-10 x-col-center" xid="col153"> 
              <span component="$UI/system/components/justep/button/checkbox"
                class="x-checkbox" xid="fQ6_1_2" checkedValue="是" value="否" checked="true"
                bind-ref="$model.tabquestion.ref(&quot;fQ6_1_2&quot;)"/> 
            </div>  
            <div class="x-col" xid="col151"> 
              <div component="$UI/system/components/justep/attachment/attachmentSimple"
                actionUrl="/baas/justep/attachment/simpleFileStore" xid="fQ6_1_2Video"
                bind-ref="$model.tabquestion.ref(&quot;fQ6_1_2Video&quot;)" accept="*/*"> 
                <div class="x-attachment" xid="div165"> 
                  <div class="x-attachment-content x-card-border" xid="div164"> 
                    <div class="x-doc-process" xid="div163"> 
                      <div class="progress-bar x-doc-process-bar" role="progressbar"
                        style="width:0%;" xid="progressBar15"/> 
                    </div>  
                    <div data-bind="foreach:$attachmentItems" xid="div162"> 
                      <div class="x-attachment-cell" xid="div161"> 
                        <div class="x-attachment-item x-item-other" data-bind="click:$model.previewOrRemoveItem.bind($model),style:{backgroundImage:($model.previewPicture.bind($model,$object))()}"
                          xid="div160"> 
                          <a data-bind="visible:$model.$state.get() == 'remove'"
                            class="x-remove-barget" xid="a15"/> 
                        </div> 
                      </div> 
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'"
                      xid="div159"> 
                      <div class="x-attachment-item x-item-upload" data-bind="visible:$state.get() == 'upload'"
                        xid="div158"/> 
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0"
                      xid="div157"> 
                      <div class="x-attachment-item x-item-remove" data-bind="click:changeState.bind($object,'remove')"
                        xid="div155"/> 
                    </div>  
                    <div style="clear:both;" xid="div156"/> 
                  </div> 
                </div> 
              </div> 
            </div> 
          </div>  
          <div component="$UI/system/components/justep/row/row" class="x-row"
            xid="row47"> 
            <div class="x-col x-col-20 x-col-center" xid="col155"> 
              <label xid="label59"><![CDATA[3.代办复印病历]]></label> 
            </div>  
            <div class="x-col x-col-10 x-col-center" xid="col156"> 
              <span component="$UI/system/components/justep/button/checkbox"
                class="x-checkbox" xid="fQ6_1_3" checkedValue="是" value="否" checked="true"
                bind-ref="$model.tabquestion.ref(&quot;fQ6_1_3&quot;)"/> 
            </div>  
            <div class="x-col" xid="col154"> 
              <div component="$UI/system/components/justep/attachment/attachmentSimple"
                actionUrl="/baas/justep/attachment/simpleFileStore" xid="fQ6_1_3Video"
                bind-ref="$model.tabquestion.ref(&quot;fQ6_1_3Video&quot;)" accept="*/*"> 
                <div class="x-attachment" xid="div176"> 
                  <div class="x-attachment-content x-card-border" xid="div175"> 
                    <div class="x-doc-process" xid="div174"> 
                      <div class="progress-bar x-doc-process-bar" role="progressbar"
                        style="width:0%;" xid="progressBar16"/> 
                    </div>  
                    <div data-bind="foreach:$attachmentItems" xid="div173"> 
                      <div class="x-attachment-cell" xid="div172"> 
                        <div class="x-attachment-item x-item-other" data-bind="click:$model.previewOrRemoveItem.bind($model),style:{backgroundImage:($model.previewPicture.bind($model,$object))()}"
                          xid="div171"> 
                          <a data-bind="visible:$model.$state.get() == 'remove'"
                            class="x-remove-barget" xid="a16"/> 
                        </div> 
                      </div> 
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'"
                      xid="div170"> 
                      <div class="x-attachment-item x-item-upload" data-bind="visible:$state.get() == 'upload'"
                        xid="div169"/> 
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0"
                      xid="div168"> 
                      <div class="x-attachment-item x-item-remove" data-bind="click:changeState.bind($object,'remove')"
                        xid="div166"/> 
                    </div>  
                    <div style="clear:both;" xid="div167"/> 
                  </div> 
                </div> 
              </div> 
            </div> 
          </div>  
          <div component="$UI/system/components/justep/row/row" class="x-row"
            xid="row48"> 
            <div class="x-col x-col-20 x-col-center" xid="col158"> 
              <label xid="label60"><![CDATA[4.其他（注明并拍照）]]></label>  
              <div component="$UI/system/components/justep/row/row" class="x-row"
                xid="row50"> 
                <div class="x-col" xid="col163"> 
                  <input component="$UI/system/components/justep/input/input"
                    class="form-control" xid="fQ6_1_4Context" bind-ref="$model.tabquestion.ref(&quot;fQ6_1_4Context&quot;)"/> 
                </div> 
              </div> 
            </div>  
            <div class="x-col x-col-10 x-col-center" xid="col159"> 
              <span component="$UI/system/components/justep/button/checkbox"
                class="x-checkbox" xid="fQ6_1_4" checkedValue="是" value="否" checked="true"
                bind-ref="$model.tabquestion.ref(&quot;fQ6_1_4&quot;)"/> 
            </div>  
            <div class="x-col" xid="col157"> 
              <div component="$UI/system/components/justep/attachment/attachmentSimple"
                actionUrl="/baas/justep/attachment/simpleFileStore" xid="fQ6_1_4Video"
                bind-ref="$model.tabquestion.ref(&quot;fQ6_1_4Video&quot;)" accept="*/*"> 
                <div class="x-attachment" xid="div187"> 
                  <div class="x-attachment-content x-card-border" xid="div186"> 
                    <div class="x-doc-process" xid="div185"> 
                      <div class="progress-bar x-doc-process-bar" role="progressbar"
                        style="width:0%;" xid="progressBar17"/> 
                    </div>  
                    <div data-bind="foreach:$attachmentItems" xid="div184"> 
                      <div class="x-attachment-cell" xid="div183"> 
                        <div class="x-attachment-item x-item-other" data-bind="click:$model.previewOrRemoveItem.bind($model),style:{backgroundImage:($model.previewPicture.bind($model,$object))()}"
                          xid="div182"> 
                          <a data-bind="visible:$model.$state.get() == 'remove'"
                            class="x-remove-barget" xid="a17"/> 
                        </div> 
                      </div> 
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'"
                      xid="div181"> 
                      <div class="x-attachment-item x-item-upload" data-bind="visible:$state.get() == 'upload'"
                        xid="div180"/> 
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0"
                      xid="div179"> 
                      <div class="x-attachment-item x-item-remove" data-bind="click:changeState.bind($object,'remove')"
                        xid="div177"/> 
                    </div>  
                    <div style="clear:both;" xid="div178"/> 
                  </div> 
                </div> 
              </div> 
            </div> 
          </div>  
          <div component="$UI/system/components/justep/row/row" class="x-row"
            xid="row49"> 
            <div class="x-col x-col-20 x-col-center" xid="col161"> 
              <label xid="label61"><![CDATA[5.其他（注明并拍照）]]></label>  
              <div component="$UI/system/components/justep/row/row" class="x-row"
                xid="row51"> 
                <div class="x-col" xid="col166"> 
                  <input component="$UI/system/components/justep/input/input"
                    class="form-control" xid="fQ6_1_5Context" bind-ref="$model.tabquestion.ref(&quot;fQ6_1_5Context&quot;)"/> 
                </div> 
              </div> 
            </div>  
            <div class="x-col x-col-10 x-col-center" xid="col162"> 
              <span component="$UI/system/components/justep/button/checkbox"
                class="x-checkbox" xid="fQ6_1_5" checkedValue="是" value="否" checked="true"
                bind-ref="$model.tabquestion.ref(&quot;fQ6_1_5&quot;)"/> 
            </div>  
            <div class="x-col" xid="col160"> 
              <div component="$UI/system/components/justep/attachment/attachmentSimple"
                actionUrl="/baas/justep/attachment/simpleFileStore" xid="fQ6_1_5Video"
                bind-ref="$model.tabquestion.ref(&quot;fQ6_1_5Video&quot;)" accept="*/*"> 
                <div class="x-attachment" xid="div198"> 
                  <div class="x-attachment-content x-card-border" xid="div197"> 
                    <div class="x-doc-process" xid="div196"> 
                      <div class="progress-bar x-doc-process-bar" role="progressbar"
                        style="width:0%;" xid="progressBar18"/> 
                    </div>  
                    <div data-bind="foreach:$attachmentItems" xid="div195"> 
                      <div class="x-attachment-cell" xid="div194"> 
                        <div class="x-attachment-item x-item-other" data-bind="click:$model.previewOrRemoveItem.bind($model),style:{backgroundImage:($model.previewPicture.bind($model,$object))()}"
                          xid="div193"> 
                          <a data-bind="visible:$model.$state.get() == 'remove'"
                            class="x-remove-barget" xid="a18"/> 
                        </div> 
                      </div> 
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'"
                      xid="div192"> 
                      <div class="x-attachment-item x-item-upload" data-bind="visible:$state.get() == 'upload'"
                        xid="div191"/> 
                    </div>  
                    <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0"
                      xid="div190"> 
                      <div class="x-attachment-item x-item-remove" data-bind="click:changeState.bind($object,'remove')"
                        xid="div188"/> 
                    </div>  
                    <div style="clear:both;" xid="div189"/> 
                  </div> 
                </div> 
              </div> 
            </div> 
          </div>  
          <div component="$UI/system/components/justep/bar/bar" class="x-bar"
            xid="bar7"> 
            <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm center-block"
              label="完结保存" xid="button7" style="background-color:transparent;" onClick="button7Click"> 
              <i xid="i7"/>  
              <span xid="span7">完结保存</span> 
            </a> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-sm center-block" label="再填一份" xid="button17" style="background-color:transparent;" onClick="button17Click">
   <i xid="i18"></i>
   <span xid="span18">再填一份</span></a></div> 
        
  </div> 
      </div> 
    </div> 
  </div> 
</div>
