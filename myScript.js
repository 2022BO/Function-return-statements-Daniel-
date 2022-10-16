const paintIt = function (item) {
  console.log("The wall has been painted" + ": " + item);
};
paintIt("red");
paintIt("green");
paintIt();

const paintSouth = "The south-east wall has been painted grey";

const paintNorth = "The north wall has been painted orange";
paintIt(paintNorth + " and " + paintSouth);
paintIt(paintSouth);

const paintAllWalls = "the rest of the walls are serveral colors";

paintIt(paintNorth + " and " + paintSouth + " and " + paintAllWalls);
paintIt(paintNorth + " dotted " + " and " + paintAllWalls + " like a Rainbow ");

const paintPainting = function (item) {
  console.log("the artist made a painting :" + item);
};
const artPop = " like Andy Warhol ";
const artPointillism = " like George Seurat ";

paintPainting(artPop + " or " + artPointillism + " ? ");

const cleanWalls = function (itemA, itemB, itemC, itemD, itemE) {
  console.log(itemA);
  console.log(" Color the wall white, remove: " + itemB + " paint ");
  console.log(" paint ");
  console.log(" verf " + " colors " + " rainbow ");
  console.log(" Orange " + " orange "); //argument nu staat onderaan
};

cleanWalls(
  " Color the wall white, remove: " +
    " red, " +
    " blue, " +
    " yellow, " +
    " pink, " +
    " rainbow "
);
cleanWalls(
  " No colors the wall, remove: " +
    " black " +
    " green " +
    " dotted " +
    " striped "
); //undefined als je niets aanroept

const paintTwoArg = function (item2, item3) {
  console.log("paint door" + ": " + item3 + "paint floor " + ":" + item2);
};
paintTwoArg("yellow", "black");
paintTwoArg(" dotted ", " transparent ", " solid grey "); //zonder argument geen uitkomst

const paintFiveArgs = function (item1, item2, item3, item4, item5) {
  console.log(
    " Paint the table " + ":" + item2,
    "," + " paint de chairs " + ":" + item5,
    `,` + " paint the lamp " + ":" + item1,
    `,` + " paint the sofa " + ":" + item4,
    " and " + " paint the closet " + ":" + item3
  );
};
paintFiveArgs("purple", "silver", "brown", "white", "gold");
paintFiveArgs("white", "gold", "brown", "purple", "silver");
paintFiveArgs("white", "white", " ? ", "white", "white"); // volgorde van argumenten maakt wel uit

const paintFourArgs = function (item1, item2, item3, item4) {
  console.log(
    " Paint the table " + ":" + item1,
    "," + " paint de chairs " + ":" + item2,
    `,` + " paint the lamp " + ":" + item3,
    " and " + " paint the closet " + ":" + item4
  );
};
paintFourArgs("purple", "silver", "white", "gold");
paintFourArgs("white", "gold", "brown", "silver");
paintFourArgs("white", "white", " ? ", "white"); // volgorde van argumenten maakt wel uit

//maakt uit waar je wat schrijft! argumenten hebben weinig betekenis qua naam
const drawThreeArgs = function (pensil, pen, brush) {
  console.log(
    "i like to drawings with" + ":" + pen + "," + pensil + "and" + brush
  );
};
drawThreeArgs(" blue ", " yellow ", " red ");

//argumenten niet in console.log -> wel aanroepen heeft geen effect.
const drawSiXArg = function (item6, item7, item8, item9, item10, item11) {
  console.log(
    "i like to draw with" +
      ":" +
      item6 +
      "," +
      item7 +
      "," +
      item8 +
      "," +
      item9 +
      "," +
      item10 +
      " and a" +
      item11
  );
};
drawSiXArg(" pensil ", " pen ", " brush", " hand", " crayon", " chalk ");
drawSiXArg(" hand", " crayon", " chalk ");
