var Tutor = require('./tutorial.js');

function NodeTutorial(){
    console.log("Node Tutorial");
    this.pTutor = function(){
        var PTutor = Tutor;
        PTutor.tutorial();
    }
}

module.exports.NodeTutorial = NodeTutorial;