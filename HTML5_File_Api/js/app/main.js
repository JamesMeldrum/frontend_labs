/*
 * Author: James Meldrum
 * Date: 3/20/2013
 * Desc: Upload logic for labelwine. Kept as a simple script to avoid
 *       overhead of a full javascript application. All application
 *       functions are annonymous as this is the only external
 *       script file for application logic, should still be debuggable
 *       and maintainable.
 */

(function(){

  "use strict";

  if(window.File && window.FileReader && window.FileList && window.blob){
    console.log(window.File && window.FileReader && window.FileList && window.blob);
  }else{
    alert("The File API is not fully supported in this browser.");
  }
  
}());

