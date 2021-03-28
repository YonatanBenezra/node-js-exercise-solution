const { FREEWILL,LIFE,MONEY } = require("./utils")


let question1 = {
    text: "How do I get more money?",
    type: MONEY//use the MONEY type from the utils module
}

let question2 = {
    text: "How much money do I need?",
    type: MONEY//use the MONEY type from the utils module
}

let question3 = {
    text: "To be free or not to be?",
    type: FREEWILL//use the FREEWILL type from the utils module
}

const handleQuestion = require('./handler')

handleQuestion.handleQuestion(question1) //should print "how does the social construction of money work?"
handleQuestion.handleQuestion(question2) //should print "how does the social construction of money work?"
handleQuestion.handleQuestion(question3) //should print "Is free will real or just an illusion?"

