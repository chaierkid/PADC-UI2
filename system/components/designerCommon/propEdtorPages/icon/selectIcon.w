<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:253px;top:20px;"
    onLoad="modelLoad">
    <div component="$UI/system/components/justep/data/data" autoLoad="false"
      xid="files" idColumn="filePath">
      <column name="name" type="String" xid="default1"/>  
      <column name="filePath" type="String" xid="default2"/>
    </div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="selectedFile" idColumn="filePath"><column name="filePath" type="String" xid="default3"></column></div></div>  
  <div component="$UI/system/components/justep/controlGroup/controlGroup" class="x-control-group"
    xid="controlGroup1"> 
    <div class="x-control-group-title">选择Icon</div>  
    <div component="$UI/system/components/justep/controlGroup/controlGroup"
      class="x-control-group" xid="controlGroup2"> 
      <span component="$UI/system/components/justep/button/radio" class="x-radio"
        xid="facefont" name="iconType" label="Facefont模式" value="1" onChange="facefontChanged"/>  
      <span component="$UI/system/components/justep/button/radio" class="x-radio"
        xid="image" name="iconType" label="Image模式" value="2" onChange="imageChanged"/> 
    </div>  
    <div component="$UI/system/components/justep/controlGroup/controlGroup"
      class="x-control-group" bind-css="{hide: !isImgIcon.get()}" xid="imgGroup"> 
      <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit"
        xid="labelInput1"> 
        <label class="x-label" xid="label1"><![CDATA[可用时图标：]]></label>  
        <div class="x-edit" xid="div1"> 
          <input bind-value="imgIcon" xid="inputImg" placeHolder="格式：$UI/system/components/justep/button/demo/chart32.png"
            class="form-control"/> 
        </div> 
      </div>  
      <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit"
        xid="labelInput2"> 
        <label class="x-label" xid="label2"><![CDATA[禁用时图标：]]></label>  
        <div class="x-edit" xid="div2"> 
          <input bind-value="disimgIcon" xid="inputFacefont" placeHolder="格式：$UI/system/components/justep/button/demo/chart32.png"
            class="form-control"/> 
        </div> 
      </div> 
    </div>  
    <div xid="facefontGroup" bind-css="{hide: isImgIcon.get()}">
      <div xid="div3" class="container">
        <select component="$UI/system/components/justep/select/select" class="form-control"
          xid="selectFile" bind-options="files" bind-optionsLabel="name" bind-optionsValue="filePath" optionsAutoLoad="false" onChange="selectFileChange" style="margin-bottom:10px;"/>
      </div> 
    </div> 
  </div> 
</div>
