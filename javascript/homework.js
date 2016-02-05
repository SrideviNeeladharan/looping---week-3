var waterColorList = new Array();
waterColorList[0] = "images/watercolor/thumbs/artwork_1.jpg";
waterColorList[1] = "images/watercolor/thumbs/artwork_2.jpg";
waterColorList[2] = "images/watercolor/thumbs/artwork_3.jpg";
waterColorList[3] = "images/watercolor/thumbs/artwork_4.jpg";
waterColorList[4] = "images/watercolor/thumbs/artwork_5.jpg";
waterColorList[5] = "images/watercolor/thumbs/artwork_6.jpg";
waterColorList[6] = "images/watercolor/thumbs/artwork_7.jpg";
waterColorList[7] = "images/watercolor/thumbs/artwork_8.jpg";
waterColorList[8] = "images/watercolor/thumbs/artwork_9.jpg";
waterColorList[9] = "images/watercolor/thumbs/artwork_10.jpg";

var oilList = new Array();
oilList[0] = "images/oil/thumbs/artwork_1.jpg";
oilList[1] = "images/oil/thumbs/artwork_2.jpg";
oilList[2] = "images/oil/thumbs/artwork_3.jpg";
oilList[3] = "images/oil/thumbs/artwork_4.jpg";
oilList[4] = "images/oil/thumbs/artwork_5.jpg";
oilList[5] = "images/oil/thumbs/artwork_6.jpg";
oilList[6] = "images/oil/thumbs/artwork_7.jpg";
oilList[7] = "images/oil/thumbs/artwork_8.jpg";



function water_color()
{
    var watercolorDiv = document.getElementById("colors");
    var watercolorOutput = "";
    for(var i=0; i < waterColorList.length; i++)
      {
        watercolorOutput += '<img src=" ' + waterColorList[i] + '"/>';
      }

      watercolorDiv. innerHTML = watercolorOutput;
}

function oil_color()
  {
    var oilDiv = document.getElementById("oil");
    var oilOutput = "";
    for(j=0; j<oilList.length; j++)
      {
        oilOutput += '<img src="' + oilList[j] + '"/>';
      }
    oilDiv. innerHTML = oilOutput;
  }
  
window.onload = function()
{
    water_color();
    oil_color();
};




