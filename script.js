let task = loadTasksFromStorage()

$(function() {

    $("#tasktxt").on("keydown", function(e) {
        if(e.key === "Enter") {
            let title = $("#tasktxt").val();
            let newTask= {"title": title}
            task.push(newTask);

            renderTask(newTask);

            $("#tasktxt").val("");
        }
    })


})

function renderTask(task){
    $("#task").append(`<li> ${task.title}</li>`);
}

// initialize tasks using the persistent storage
function loadTasksFromStorage(){
    let data = localStorage.getItem("task")  // null if tasks is not availabe.
    return data ? JSON.parse(data) : [] 
}