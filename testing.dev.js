let allScenerioSuccess = true;

function statusReady(context, next) {
  const continueLooping = context.vars.status !== "ready";
  
  console.log('this is Thanh Ngo test')
  return next(continueLooping);
}

function setJSONBody(requestParams, context, ee, next) {
  return next(); // MUST be called for the scenario to continue
}

function logInputHeaders(requestParams, context, ee, next) {
  console.log(requestParams.headers);
  return next(); // MUST be called for the scenario to continue
}
function logHeaders(requestParams, response, context, ee, next) {
  console.log('day la log header -------------------------');
  // console.log(requestParams.headers);
  // // console.log(response.headers);
  // console.log(response.body);
  const { statusCode } = response;
  console.log(statusCode);
  // if (response.statusCode == 200 || response.statusCode == 204) {
      
  // } else {
  //   allScenerioSuccess = false;
  // }
  if (![200, 204].includes(statusCode)) {
    allScenerioSuccess = false;
  }
return next(); // MUST be called for the scenario to continue
}

// logFinal: function (context, ee,next){
//   if (context.vars.failCounter === 0) {
//     console.log('Script executed successfully'); // Log success message if there were no failures
//   } else {
//     console.log(`There were ${context.vars.failCounter} failed requests.`);
//   }
//   return next();
// }


// function setupSomeData(context, events, done) {
//   // Set the "query" variable for the virtual user.
//   // context.vars["query"] = "foo";
//   console.log('day la contaxt set -------------------------')
//   console.log(context)
//   console.log(context.vars["authToken"])
//   return done();
// } 

// function testFunction(context, events, done) {
//   console.log('day la test function -------------------------')
//   console.log(context.vars["authToken"])

//   context.vars["authToken"] = '1234567890'
//   console.log(context.vars["authToken"])
//   console.log('------------------------------------------------')
  
//   return done();
// }

function beforeScenario(userContext, events, start) {
  console.log("Script started!");
  start();
}

function afterScenario(userContext, events, done) {
  if (allScenerioSuccess) {
    console.log("SCRIPT EXECUTED SUCCESSFULLY!");
  } else {
    console.log("SCRIPT EXECUTED FAILED!");
  }
  done();
}


module.exports = {
  statusReady: statusReady,
  setJSONBody: setJSONBody,
  logHeaders: logHeaders,
  logInputHeaders: logInputHeaders,
  beforeScenario: beforeScenario,
  afterScenario: afterScenario
  
}