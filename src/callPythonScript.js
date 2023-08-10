var spawn = require('child_process').spawn;
//const childPython = spawn('python', ['--version']);
var childPython = spawn('python', ['pythonCodes.py']);
// const childPython = spawn('python', ['codespace.py', 'OyeKool']);
childPython.stdout.on('data', function (data) {
    console.log("stdout: ".concat(data));
});
childPython.stderr.on('data', function (data) {
    console.error("stderr: ".concat(data));
});
childPython.on('close', function (code) {
    console.log("child process exited with code ".concat(code));
});
