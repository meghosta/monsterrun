gdjs.Untitled_32scene2Code = {};
gdjs.Untitled_32scene2Code.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32scene2Code.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32scene2Code.GDPancakesDishObjects1= [];
gdjs.Untitled_32scene2Code.GDPancakesDishObjects2= [];
gdjs.Untitled_32scene2Code.GDNewSpriteObjects1= [];
gdjs.Untitled_32scene2Code.GDNewSpriteObjects2= [];
gdjs.Untitled_32scene2Code.GDNewSprite2Objects1= [];
gdjs.Untitled_32scene2Code.GDNewSprite2Objects2= [];

gdjs.Untitled_32scene2Code.conditionTrue_0 = {val:false};
gdjs.Untitled_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32scene2Code.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32scene2Code.GDNewSpriteObjects1});gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDPancakesDishObjects1Objects = Hashtable.newFrom({"PancakesDish": gdjs.Untitled_32scene2Code.GDPancakesDishObjects1});gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32scene2Code.GDNewSpriteObjects1});gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Untitled_32scene2Code.GDNewSprite2Objects1});gdjs.Untitled_32scene2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32scene2Code.GDNewSpriteObjects1);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Untitled_32scene2Code.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene2Code.GDNewSpriteObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.Untitled_32scene2Code.GDNewSpriteObjects1[k] = gdjs.Untitled_32scene2Code.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene2Code.GDNewSpriteObjects1.length = k;}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Untitled_32scene2Code.GDNewSpriteObjects1 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32scene2Code.GDNewSpriteObjects1.length !== 0 ? gdjs.Untitled_32scene2Code.GDNewSpriteObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32scene2Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("PancakesDish"), gdjs.Untitled_32scene2Code.GDPancakesDishObjects1);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDNewSpriteObjects1Objects, gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDPancakesDishObjects1Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32scene2Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32scene2Code.GDNewSprite2Objects1);

gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDNewSpriteObjects1Objects, gdjs.Untitled_32scene2Code.mapOfGDgdjs_46Untitled_9532scene2Code_46GDNewSprite2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Untitled_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene42", false);
}}

}


};

gdjs.Untitled_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene2Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDPancakesDishObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDPancakesDishObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32scene2Code.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32scene2Code.GDNewSprite2Objects2.length = 0;

gdjs.Untitled_32scene2Code.eventsList0(runtimeScene);
return;

}

gdjs['Untitled_32scene2Code'] = gdjs.Untitled_32scene2Code;
