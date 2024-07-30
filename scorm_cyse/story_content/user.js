function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6gjAeNB4ldf":
        Script1();
        break;
      case "5sduzI49Dhp":
        Script2();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  
var reviewMap = document.getElementById('link-right-1');
var reviewQuestions = document.getElementById('link-right-2');

var player = GetPlayer();
var quiz_complete = player.GetVar("questions_complete");

if(reviewMap && quiz_complete === true){
reviewMap.style.display = "block";
}

if(reviewQuestions && quiz_complete === true){
reviewQuestions.style.display = "block";
}

var lmsAPI = parent;

SCORM_CallLMSSetValue("cmi.core.lesson_status", "complete");
}

window.Script2 = function()
{
  
var reviewMap = document.getElementById('link-right-1');
var reviewQuestions = document.getElementById('link-right-2');

var player = GetPlayer();
var quiz_complete = player.GetVar("questions_complete");

if(reviewMap && quiz_complete === false){
reviewMap.style.display = "none";
}

if(reviewQuestions && quiz_complete === false){
reviewQuestions.style.display = "none";
}

}

};
