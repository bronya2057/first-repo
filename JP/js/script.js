/*global alert*/
/*global console*/
/*global document*/
/*jshint -W061 */

/*alert("hello");
console.log("hello");
document.write("what ta");
var cars=[1,2,3];*/
function submitAnswers()
{
    var total=5;
    var score=0;
    //get user input;
    var q1=document.forms.quizForm.q1.value;
    var q2=document.forms.quizForm.q2.value;
    var q3=document.forms.quizForm.q3.value;
    var q4=document.forms.quizForm.q4.value;
    var q5=document.forms.quizForm.q5.value;
    //var q1=document.forms[quizForm][q1].value;
    
    //validation
    
    
    for(var i=1;i<=total;i++)
        {
            if(eval('q'+i)===null || eval('q'+i)==="")
            {
                alert('you\'ve missed question'+i);
                return false;
            }
        }
    //set correct answers
    var answers=["b",'a','d','b','d'];
   
    //Check answers
    for(i=1;i<=total;i++)
        {
            if(eval("q"+i)==answers[i-1])
                {
                    score++;
                }
        }
    alert(score);
}
