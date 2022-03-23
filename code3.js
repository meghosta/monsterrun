gdjs.Untitled_32scene42Code = {};
gdjs.Untitled_32scene42Code.GDNewTextObjects1= [];
gdjs.Untitled_32scene42Code.GDNewTextObjects2= [];
gdjs.Untitled_32scene42Code.GDNewSpriteObjects1= [];
gdjs.Untitled_32scene42Code.GDNewSpriteObjects2= [];

gdjs.Untitled_32scene42Code.conditionTrue_0 = {val:false};
gdjs.Untitled_32scene42Code.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32scene42Code.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32scene42Code.mapOfGDgdjs_46Untitled_9532scene42Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32scene42Code.GDNewSpriteObjects1});gdjs.Untitled_32scene42Code.mapOfGDgdjs_46Untitled_9532scene42Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32scene42Code.GDNewSpriteObjects1});gdjs.Untitled_32scene42Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32scene42Code.GDNewSpriteObjects1);

gdjs.Untitled_32scene42Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene42Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32scene42Code.mapOfGDgdjs_46Untitled_9532scene42Code_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if (gdjs.Untitled_32scene42Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32scene42Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.Untitled_32scene42Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene42Code.GDNewSpriteObjects1[i].setScale(1.1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32scene42Code.GDNewSpriteObjects1);

gdjs.Untitled_32scene42Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene42Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32scene42Code.mapOfGDgdjs_46Untitled_9532scene42Code_46GDNewSpriteObjects1Objects, runtimeScene, true, true);
}if (gdjs.Untitled_32scene42Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32scene42Code.GDNewSpriteObjects1 */
{for(var i = 0, len = gdjs.Untitled_32scene42Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32scene42Code.GDNewSpriteObjects1[i].setScale(1);
}
}}

}


{


gdjs.Untitled_32scene42Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene42Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Untitled_32scene42Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.Untitled_32scene42Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene42Code.GDNewTextObjects1.length = 0;
gdjs.Untitled_32scene42Code.GDNewTextObjects2.length = 0;
gdjs.Untitled_32scene42Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene42Code.GDNewSpriteObjects2.length = 0;

gdjs.Untitled_32scene42Code.eventsList0(runtimeScene);
return;

}

gdjs['Untitled_32scene42Code'] = gdjs.Untitled_32scene42Code;
