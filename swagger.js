const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "Users API",
        description: "Users api"
    },
    host: "localhost/3000",
    schemes: ["http", "https"]
};

const outputfile = "./swagger.json";
const endpointsfiles = ["./routes/index.js"];

swaggerAutogen(outputfile, endpointsfiles, doc);