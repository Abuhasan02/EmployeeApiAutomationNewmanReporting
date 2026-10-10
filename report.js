const newman = require('newman');
// require('dotenv').config(); //require install dotenv package
 
newman.run({
    collection: `SQALOGY_B3_EmployeeApi.postman_collection.json`,
    environment: `SQALogy_B3_Env.postman_environment.json`,
    // enviroment
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
