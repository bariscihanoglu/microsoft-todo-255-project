$(function() {
    var users = JSON.parse(localStorage.getItem("users"));
    var profile = {};
    var propfileIndex = 0;
    var todolistNames=[];
    /*First User is default one and assigned to top Header */
    $("#top").append(`
        <img src="${users[0].image}" alt="">
        <div>
            <p class="header-title">${users[0].name}</p>
            <p class="header-email">${users[0].email}</p>
        </div>
    `);

    /*Rendering all profiles*/ 
    for(let user of users) {
        $("#profiles").append(`
        <div class="member-profile">
            <img src="${user.image}" alt="">
            <div class="member-info">
                <p>${user.name}</p>
                <p>Section: ${user.section}</p>
                <p>${user.id}</p>
            </div>
        </div>
        `);
    }

    renderingTodoListCetagories();

    //Add new List button
    $("#left-section footer").on("click", function(e) {
        let newListName = "technology";
        let newTodolist = {"sda": []};


        users[propfileIndex].todolists.push(newTodolist);
        //renderingTodoListCetagories();
        console.log(propfileIndex);

        //localStorage.setItem("users", JSON.stringify(users));
        //renderingTodoListCetagories();

        $("#left-section article").append(`
            <div class="category">
                <div><i class="fa-solid fa-bars fa-sm"></i></div>
                <div>${newListName}</div>
                <div class="delete secret"><i class="fa-solid fa-trash"></i></div>
                <div class="count">${0}</div>
            </div>
        `);

    });





    $("body").on("mouseenter", ".category", function(e) {
        $(this).find(".delete").removeClass("secret");
        e.stopPropagation();

    })
    .on("mouseleave", ".category", function(e) {
        $(this).find(".delete").addClass("secret");
        e.stopPropagation();

    })
    .on("click", ".category", function(e) {
        $("#todolist article").html("");
        let todolistName = $(this).find("div:eq(1)").text();
        console.log(users[propfileIndex].todolists);
        $("#todolist header div").text(todolistName);
        $(".selected-menu").removeClass("selected-menu");
        $(this).addClass("selected-menu");
        for (let todolist of users[propfileIndex].todolists) {
            if(Object.keys(todolist)[0] == todolistName) {
                let arr = todolist[todolistName];
                console.log(arr);
                for(let i of arr) {
                    $("#todolist article").append(`
                    <div class="item">
                        <input type="checkbox" name="" id="">
                        <p>${i}</p>
                    </div> 
                    `);
                }

            }
        }

        e.stopPropagation();
    });

















    function renderingTodoListCetagories() {
        //rendering todolist categories


    //Assigning click event for all profiles, if 
    // clicked one of the profiles
    // top header will be changed and the profile
    // will be saved under "profile" variable
    $("#profiles .member-profile").on("click", function(e){
        profile = users[$(this).index()];
        propfileIndex = $(this).index();
        //console.log(profile);
        $("#top").html("").append(`
            <img src="${profile.image}" alt="">
            <div>
                <p class="header-title">${profile.name}</p>
                <p class="header-email">${profile.email}</p>
            </div>
        `);

        $("#members").toggleClass("display");
        $("#members").toggleClass("hidden");

        $("#todolist").toggleClass("display");
        $("#todolist").toggleClass("hidden");

        todolistNames = [];
        for (let i=0; i<profile.todolists.length; i++) {
            let list = profile.todolists[i];
            let listName = Object.keys(list)[0];
            let listItems = list[listName]; 

            todolistNames.push(listName);

            //rendering todolist names in the storage
            $("#left-section article").append(`
                <div class="category">
                    <div><i class="fa-solid fa-bars fa-sm"></i></div>
                    <div>${listName}</div>
                    <div class="delete secret"><i class="fa-solid fa-trash"></i></div>
                    <div class="count">${listItems.length}</div>
                </div>
            `);
        }

    });
}


});





let users = [{
        name: "Erdem Atila",
        section: "01",
        id: 22002777,
        image:"./img/Aragorn.jpg",
        email:"erdem.atila@ug.bilkent.edu.tr",
        todolists: [
            {
                "Shopping List": [
                    "grocery shopping",
                    "milk",
                    "apple"
                ]
            },
            {
                "Mourning Routines": [
                    "Get up at 07.00 am",
                    "Walking"
                ]
            }
        ]
    },
    {
        name: "Merve Atila",
        section: "03",
        id: 20193452,
        image: "./img/Legolas.jpg",
        email: "merve.atila@bs.sussex.edu.tr",
        todolists: [
            {
                "Exams": [
                    "Law",
                    "English"
                ]
            },
            {
                "Routines": [
                    "Get up at 08.20 am",
                    "Running",
                    "Preparing for the day"
                ]
            }
        ]
    },

    {
        name: "Fakir Cundube",
        section: "02",
        id: 200024532,
        image: "./img/Gimli.jpg",
        email: "poor.cundube@hs.life.edu.tr",
        todolists: [
            {
                "Lİfe": [
                    "Live",
                    "Eat",
                    "Defikation"
                ]
            },
            {
                "School": [
                    "Prepare the bag"
                ]
            }
        ]
    }
]
    localStorage.setItem("users", JSON.stringify(users));




