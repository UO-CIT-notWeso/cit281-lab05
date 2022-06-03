//Lab 5 -- Wes O'Brien

const fastify = require("fastify")();
// Get route and JSON/object reply
/*
fastify.get("/cit", (request, reply) => {
  console.log("Query Object:", request.query);
  let response = { response: "No query paramaters recieved"};
  if (Object.keys(request.query).length > 0) {
    response = request.query
  }
reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send(response);
});
*/

const students = [
  {
    id: 1,
    last: "Rockets",
    first: "Johnny",
  },
  {
    id: 2,
    last: "Jobs",
    first: "Steve",
  },
  {
    id: 3,
    last: "Kinison",
    first: "Sam",
  }
];

for (const element of students){
  console.log(element);
}


function getStudentById(id) {
  let idInInteger;
  let studentWithId;
  for (student of students){    
  }
  return studentWithId;
}

fastify.get("/cit/student", (request, reply) => {
  const { students } = request.params;  
  const { last, first } = request.params;
    let response = request.params;
    reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send(response);
}); 

fastify.post("/cit/student", function (request, reply) {
  const newStudent = request.body;
  const updatedStudentArray = appendsToStudent(newStudent);
  reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send([updatedStudentArray]);
}); 


fastify.get("/cit/student/:id", (request, reply) => {
    const { id } = request.params;
    const { students } = request.params;
    let response = request.params;
    reply
.code(200)
.header("Content-Type", "application/json; charset=utf-8")
.send(response);
}); 


fastify.get("/cit/*", (request, reply) => {
reply
.code(404)
.header("Content-Type", "text/html; charset=utf-8")
.send("<h1>Not Found.</h1>");
});


// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8082;
fastify.listen(listenPort, listenIP, (err, address) => {
if (err) {
console.log(err);
process.exit(1);
}
console.log(`Server listening on ${address}`);
});
