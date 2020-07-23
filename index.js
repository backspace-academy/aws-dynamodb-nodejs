// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

/**
 * Don't hard-code your credentials!
 * Create an IAM role for your EC2 instance instead.
 * For development an IAM role is not required for Cloud9
 */

// Set your region
AWS.config.region = 'us-east-1';

var db = new AWS.DynamoDB();
db.listTables(function(err, data) {
   if (err) {
      console.log(err, err.stack);  // an error occurred
   }
   else {
      console.log(data.TableNames);        // successful response 
   }
});
