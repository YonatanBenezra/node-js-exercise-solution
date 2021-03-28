const {MONEY,FREEWILL,LIFE} = require('./utils')

const handleQuestion = function(question) {
    switch(question.type) {
        case MONEY:
             console.log("how does the social construction of money work?")
             break
             case FREEWILL:
                console.log("Is free will real or just an illusion?")
                break
                case LIFE:
                    console.log("What does it mean to live a good life?")
                    break
                    default:
                        "please enter one of the types"
    }
}

module.exports.handleQuestion = handleQuestion