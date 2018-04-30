const Express = require("express");
const Cors = require("cors");
const Port = process.env.PORT || 9000

let Instructors = [{
    id:1,
    Name:"Kyle Coberly",
    Title:"Faculty Director",
    numberOfDogs:1,
}, {
    id:2,
    Name:"Danny Fritz",
    Title:"Lead Instructor",
    numberOfDogs:0,
}, { 
    id:3,
    Name:"CJ Reynolds",
    Title:"Lead Instructor",
    numberOfDogs:0,
}, { 
    id:4,
    Name:"Brooks Patton",
    Title:"Lead Instructor",
    numberOfDogs:0,
}, { 
    id:5,
    Name:"Roberto Ortega",
    Title:"Lead Instructor",
    numberOfDogs:1,
}, { 
    id:6,
    Name:"Chad Drummond",
    Title:"Lead Instructor",
    numberOfDogs:0,
}, { 
    id:7,
    Name:"Kim Schlesinger",
    Title:"Instructor",
    numberOfDogs:0,
}, { 
    id:8,
    Name:"Peter Ostiguy",
    Title:"Associate Instructor",
    numberOfDogs:1,
}, { 
    id:9,
    Name:"Cass Torske",
    Title:"Resident",
    numberOfDogs:1,
}, { 
    id:10,
    Name:"Matt Winzer",
    Title:"Resident",
    numberOfDogs:2,
}, { 
    id:11,
    Name:"Aaron Goodman",
    Title:"Rsident",
    numberOfDogs:0,
}, { 
    id:12,
    Name:"Michelle Bergquist",
    Title:"Resident",
    numberOfDogs:1,
}]

function findById(data , id){
    for(let i = 0; i < data.length; i++){
        if(data[i].id == id){
            return data[i]
        }
    }
    return null
}

const app = Express()
app.use(Cors())

app.get("/", function (request, response) {
    response.json({data: Instructors});
});

app.get("/:id", function (request, reponse){
    let record = findById(Instructors , request.params.id);
    if (!record){
        reponse.status = 404
        reponse.json({
            error: {
                message: "No record found!"
            }
        });
    }
    reponse.json({data: record});
})

app.listen(Port);