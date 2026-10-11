$(document).ready(function() 
{
// Add a new task
$("#adds").click(function() 
{
 var task = $("#input").val();
 if (task)
    {
        $("#task-list").append("<li>" + task + "</li>");
        $("#input").val("");

     }
})

}

)