/* Created by: Kenny Le
 * Created on: Mar 2022
 * This file contains the JS functions for index.html 
*/

/**
 * Do basic math.
 */
function doMathClicked() {
  document.getElementById('calculate the area').innerHTML = '<p>The area is:' + (5 * 3) + '</p>'
  document.getElementById('calculate the perimeter').innerHTML = '<p>The perimeter is:' + (2 * (5 + 3)) + '</p>'
}