//2 different ways to create an array

//Method 1

var colorsList = ["red", "black", "blue", "yellow", "green"];

//Method 2

var imagelist = new Array();//declaring an array variable
imagelist[0] = "images/drawing/thumbs/artwork_1.jpg";//generating a variable
imagelist[1] = "images/drawing/thumbs/artwork_2.jpg";
imagelist[2] = "images/drawing/thumbs/artwork_3.jpg";
imagelist[3] = "images/drawing/thumbs/artwork_4.jpg";
imagelist[4] = "images/drawing/thumbs/artwork_5.jpg";
imagelist[5] = "images/drawing/thumbs/artwork_6.jpg";
imagelist[6] = "images/drawing/thumbs/artwork_7.jpg";//generating a variable
imagelist[7] = "images/drawing/thumbs/artwork_8.jpg";
imagelist[8] = "images/drawing/thumbs/artwork_9.jpg";
imagelist[9] = "images/drawing/thumbs/artwork_10.jpg";
imagelist[10] = "images/drawing/thumbs/artwork_11.jpg";
imagelist[11] = "images/drawing/thumbs/artwork_12.jpg";
imagelist[12] = "images/drawing/thumbs/artwork_13.jpg";//generating a variable
imagelist[13] = "images/drawing/thumbs/artwork_14.jpg";
imagelist[14] = "images/drawing/thumbs/artwork_15.jpg";
imagelist[15] = "images/drawing/thumbs/artwork_16.jpg";
imagelist[16] = "images/drawing/thumbs/artwork_17.jpg";
imagelist[17] = "images/drawing/thumbs/artwork_18.jpg";

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



//create the buildThumbnail function

function buildThumbnails()
{
  //hook onto the thumbs div
  var thumbsDiv = document.getElementById("thumbs");
  
  //create an output variable
  var output="";
  
  
  //first part:counter(set to 0 to start the loop)
  //sec part: condition(the loop will keep counter as long as the condition is TRUE)
  //third part:incrementor(add 1 to the counter AFTER the code in the brackets is executed)
  
  for (var i=0; i < imagelist.length; i++)
  {
    
    output += '<img src="' + imagelist[i] + '"/>';
  }
  
  for (var j=0; j < waterColorList.length; j++)
  {
    output += '<img src="' + waterColorList[j] + '"/>';
  }
  
  for (var k=0; k < oilList.length ; k++)
  {
    output += '<img src="' + oilList[k] + '"/>';
  }
    thumbsDiv.innerHTML= output;     
}






























   /*thumbsDiv.innerHTML =                        
      '<img src="' + imagelist[0] + '"/>' +
      '<img src="' + imagelist[1] + '"/>' + 
      '<img src="' + imagelist[2] + '"/>' 
    ; */
   //thumbsDiv.innerHTML = "<p>Hellooo , how are you??</p>";
  //thumbsDiv.innerHTML = imagelist[2];
  //thumbsDiv.innerHTML = '<img src="' + imagelist[2] + '"/>';

//reference the element to the page



/*thumbsDiv.innerHTML = colorsList.length; (are almost the same)
document.getElementById("thumbs").innerHTML = colorsList.length;*/

//it is built in variable which has all the window related issues
window.onload = function()
{
  buildThumbnails();//use or "fire off"  or invoke this function
};
