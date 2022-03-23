gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDheaderObjects1= [];
gdjs.Untitled_32sceneCode.GDheaderObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32sceneCode.GDNewSpriteObjects1});gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene2", false);
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32sceneCode.GDNewSpriteObjects1});gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].setScale(1.1);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDNewSpriteObjects1Objects, runtimeScene, true, true);
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].setScale(1);
}
}}

}


{


{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDheaderObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDheaderObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
