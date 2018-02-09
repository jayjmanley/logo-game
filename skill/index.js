'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention
//=========================================================================================================================================
const template = require('./templates.js');
//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this:  var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
const APP_ID = undefined;

//This function returns a descriptive sentence about your data.  Before a user starts a quiz, they can ask about a specific data element,
//like "Ohio."  The skill will speak the sentence from this function, pulling the data values from the appropriate record in your data.
function getSpeechDescription(item)
{
    var sentence = item.StateName + " is the " + item.StatehoodOrder + "th state, admitted to the Union in " + item.StatehoodYear + ".  The capital of " + item.StateName + " is " + item.Capital + ", and the abbreviation for " + item.StateName + " is  strength='strong'/><say-as interpret-as='spell-out'>" + item.Abbreviation + "</say-as>.  I've added " + item.StateName + " to your Alexa app.  Which other state or capital would you like to know about?";
    return sentence;
}


function getData(level)
{
    switch(level){
        case "1":
            return [
                {Name: "Intel",        logo: "intel", Level: "1"},
                {Name: "Facebook",        logo: "facebook", Level: "1"},
                {Name: "Chrome",        logo:"chrome", Level: "1"},
                {Name: "Microsoft",        logo:"microsoft", Level: "1"},
                {Name: "Apple",        logo:"apple",Level: "1"     }
            ];
        case "2":
            return [
                {Name: "Nvidia",        logo: "nvidia", Level: "2"},
                {Name: "Pepsi",        logo: "pepsi", Level: "2"},
                {Name: "Napster",        logo:"napster", Level: "2"},
                {Name: "Louis-Vuitton",        logo:"louis vuitton", Level: "2"},
                {Name: "Tommy-Hilfiger",        logo:"tommy hilfiger",Level: "2"     }
            ];
        case "3":
        return [
                    {Name: "Intel",        logo: "intel", Level: "1"},
                    {Name: "Facebook",        logo: "facebook", Level: "1"},
                    {Name: "Chrome",        logo:"chrome", Level: "1"},
                    {Name: "Microsoft",        logo:"microsoft", Level: "1"},
                    {Name: "Apple",        logo:"apple",Level: "1"     }];

        case "4":
            return [
                        {Name: "Intel",        logo: "intel", Level: "1"},
                        {Name: "Facebook",        logo: "facebook", Level: "1"},
                        {Name: "Chrome",        logo:"chrome", Level: "1"},
                        {Name: "Microsoft",        logo:"microsoft", Level: "1"},
                        {Name: "Apple",        logo:"apple",Level: "1"     }];
        case "5":
            return [
                {Name: "Intel",        logo: "intel", Level: "1"},
                {Name: "Facebook",        logo: "facebook", Level: "1"},
                {Name: "Chrome",        logo:"chrome", Level: "1"},
                {Name: "Microsoft",        logo:"microsoft", Level: "1"},
                {Name: "Apple",        logo:"apple",Level: "1"     }
            ];
        case "6":
            return [
                    {Name: "Intel",        logo: "intel", Level: "1"},
                    {Name: "Facebook",        logo: "facebook", Level: "1"},
                    {Name: "Chrome",        logo:"chrome", Level: "1"},
                    {Name: "Microsoft",        logo:"microsoft", Level: "1"},
                    {Name: "Apple",        logo:"apple",Level: "1"     }
];
        case "7":
            return [
                    {Name: "Intel",        logo: "intel", Level: "1"},
                    {Name: "Facebook",        logo: "facebook", Level: "1"},
                    {Name: "Chrome",        logo:"chrome", Level: "1"},
                    {Name: "Microsoft",        logo:"microsoft", Level: "1"},
                    {Name: "Apple",        logo:"apple",Level: "1"     }];

        case "8":
            return [
                    {Name: "Intel",        logo: "intel", Level: "1"},
                    {Name: "Facebook",        logo: "facebook", Level: "1"},
                    {Name: "Chrome",        logo:"chrome", Level: "1"},
                    {Name: "Microsoft",        logo:"microsoft", Level: "1"},
                    {Name: "Apple",        logo:"apple",Level: "1"     }];

        case "9":
            return [
                    {Name: "Intel",        logo: "intel", Level: "1"},
                    {Name: "Facebook",        logo: "facebook", Level: "1"},
                    {Name: "Chrome",        logo:"chrome", Level: "1"},
                    {Name: "Microsoft",        logo:"microsoft", Level: "1"},
                    {Name: "Apple",        logo:"apple",Level: "1"     }];

        case "10":
            return [
                    {Name: "Intel",        logo: "intel", Level: "1"},
                    {Name: "Facebook",        logo: "facebook", Level: "1"},
                    {Name: "Chrome",        logo:"chrome", Level: "1"},
                    {Name: "Microsoft",        logo:"microsoft", Level: "1"},
                    {Name: "Apple",        logo:"apple",Level: "1"     }];

        default:
            return 100;
    }
}

function getQuestion(counter)
{
    counter = counter + 1;
    if(counter % 10 == 1){
       return "Here is your " + counter + "st question.  What is this logo?";
    }

    else if(counter % 10 == 2){
       return "Here is your " + counter + "nd question.  What is this logo?";
    }

    else if(counter % 10 == 3){
       return "Here is your " + counter + "rd question.  What is this logo?";
    } else {
        return "Here is your " + counter + "th question.  What is this logo?";
    }
    /*
    switch(property)
    {
        case "City":
            return "Here is your " + counter + "th question.  In what city do the " + item.League + "'s "  + item.Mascot + " play?";
        break;
        case "Sport":
            return "Here is your " + counter + "th question.  What sport do the " + item.City + " " + item.Mascot + " play?";
        break;
        case "HeadCoach":
            return "Here is your " + counter + "th question.  Who is the head coach of the " + item.City + " " + item.Mascot + "?";
        break;
        default:
            return "Here is your " + counter + "th question.  What is the " + formatCasing(property) + " of the "  + item.Mascot + "?";
        break;
    }
    */
}

//This is the function that returns an answer to your user during the quiz.  Much like the "getQuestion" function above, you can use a
//switch() statement to create different responses for each property in your data.  For example, when this quiz has an answer that includes
//a state abbreviation, we add some SSML to make sure that Alexa spells that abbreviation out (instead of trying to pronounce it.)
function getAnswer(property, item)
{
            return "The logo is " + item[property] + ". ";

}

//This is a list of positive speechcons that this skill will use when a user gets a correct answer.  For a full list of supported
//speechcons, go here: https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speechcon-reference
const speechConsCorrect = ["Booya", "All righty", "Bam", "Bazinga", "Bingo", "Boom", "Bravo", "Cha Ching", "Cheers", "Dynomite",
"Hip hip hooray", "Hurrah", "Hurray", "Huzzah", "Oh dear.  Just kidding.  Hurray", "Kaboom", "Kaching", "Oh snap", "Phew",
"Righto", "Way to go", "Well done", "Whee", "Woo hoo", "Yay", "Wowza", "Yowsa"];

//This is a list of negative speechcons that this skill will use when a user gets an incorrect answer.  For a full list of supported
//speechcons, go here: https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speechcon-reference
const speechConsWrong = ["Argh", "Aw man", "Blarg", "Blast", "Boo", "Bummer", "Darn", "D'oh", "Dun dun dun", "Eek", "Honk", "Le sigh",
"Mamma mia", "Oh boy", "Oh dear", "Oof", "Ouch", "Ruh roh", "Shucks", "Uh oh", "Wah wah", "Whoops a daisy", "Yikes"];

//This is the welcome message for when a user starts the skill without a specific intent.
const WELCOME_MESSAGE = "Welcome to the Logo Quiz Game! Are you ready to start?";

//This is the message a user will hear when they start a quiz.
const START_QUIZ_MESSAGE = "OK.  Get ready!";

//This is the message a user will hear when they try to cancel or stop the skill, or when they finish a quiz.
const EXIT_SKILL_MESSAGE = "Thank you for playing the Logo Quiz Game!  Let's play again soon!";

//This is the message a user will hear after they ask (and hear) about a specific data element.
const REPROMPT_SPEECH = "Which other state or capital would you like to know about?";

//This is the message a user will hear when they ask Alexa for help in your skill.
const HELP_MESSAGE = "This is a logo guessing game, levels range from easy to hard. What would you like to do?";


//This is the response a user will receive when they ask about something we weren't expecting.  For example, say "pizza" to your
//skill when it starts.  This is the response you will receive.
function getBadAnswer(item) { return "I'm sorry. " + item + " is not something I know very much about in this skill. " + HELP_MESSAGE; }

//This is the message a user will receive after each question of a quiz.  It reminds them of their current score.
function getCurrentScore(score, counter) { return "Your current score is " + score + " out of " + (counter +1) + ". "; }

//This is the message a user will receive after they complete a quiz.  It tells them their final score.
function getFinalScore(score, counter) { return "Your final score is " + score + " out of " + counter + ". "; }

//These next four values are for the Alexa cards that are created when a user asks about one of the data elements.
//This only happens outside of a quiz.

//If you don't want to use cards in your skill, set the USE_IMAGES_FLAG to false.  If you set it to true, you will need an image for each
//item in your data.
const USE_IMAGES = true;

//This is what your card title will be.  For our example, we use the name of the state the user requested.
function getCardTitle(item) { return "Guess the Logo!"}

//This is the small version of the card image.  We use our data as the naming convention for our images so that we can dynamically
//generate the URL to the image.  The small image should be 720x400 in dimension.
function getImage(item) { return "https://s3-us-west-2.amazonaws.com/logo-game/logo-game/" + item.Level + "/" + item.logo + ".jpg"; }


// backgroundImage for Echo Show body templates
function getBackgroundImage() { return "./background.jpg"; }
//=========================================================================================================================================
//TODO: Replace this data with your own.
//=========================================================================================================================================



//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

var counter = 0;

const states = {
    START: "_START",
    QUIZ: "_QUIZ"
};

const handlers = {
     "LaunchRequest": function() {
        this.handler.state = states.START;
        this.emitWithState("Start");
     },
    "QuizIntent": function() {
        this.handler.state = states.QUIZ;
        this.emitWithState("Quiz");
    },
    "LevelSelectIntent": function() {
        this.handler.state = states.QUIZ;
        this.emitWithState("LevelSelect");
    },
    "AnswerIntent": function() {
        this.handler.state = states.QUIZ;
        this.emitWithState("AnswerIntent");
    },
    "AMAZON.HelpIntent": function() {
        this.response.speak(HELP_MESSAGE).listen(HELP_MESSAGE);
        this.emit(":responseReady");
    },
    "Unhandled": function() {
        this.handler.state = states.START;
        this.emitWithState("Start");
    },
    "AMAZON.PreviousIntent": function() {
        this.handler.state = states.START;
        this.emitWithState("Start");
    },
    "AMAZON.NextIntent": function() {
        this.handler.state = states.START;
        this.emitWithState("Start");
    }
};

const startHandlers = Alexa.CreateStateHandler(states.START,{
    "Start": function() {
        this.response.speak(WELCOME_MESSAGE).listen(HELP_MESSAGE);
        this.emit(":responseReady");
    },
    "AnswerIntent": function() {
       console.log("Answer Intent event: "+JSON.stringify(this.event));

        var item = getItem(this.event.request.intent.slots);

        console.log(getItem(this.event.request.intent.slots));

        if (item && item[Object.getOwnPropertyNames(data[0])[0]] !== undefined) {
            if (supportsDisplay.call(this)||isSimulator.call(this)) {
              //this device supports a display

              let content = {
                    "hasDisplaySpeechOutput" : getSpeechDescription(item),
                    "hasDisplayRepromptText" : REPROMPT_SPEECH,
                    "noDisplaySpeechOutput" : getSpeechDescription(item),
                    "noDisplayRepromptText" : REPROMPT_SPEECH,
                    "simpleCardTitle" : getCardTitle(item),
                    "simpleCardContent" : getTextDescription(item),
                    "bodyTemplateTitle" : getCardTitle(item),
                    "bodyTemplateContent" : getTextDescription(item),
                    "templateToken" : "ItemDetailsView",
                    "askOrTell": ":ask",
                    "sessionAttributes" : this.attributes
                };
                if (USE_IMAGES) {
                  content["imageUrl"]=getImage(item);
                }
                renderTemplate.call(this,content);



            } else {
              //this device does not support a display
              if (USE_IMAGES) {
                //we have images so produce a card
                var imageObj = {ImageUrl: getImage(item)};
                this.response.cardRenderer(getCardTitle(item), getTextDescription(item), imageObj);
              }
              this.response.speak(getSpeechDescription(item)).listen(REPROMPT_SPEECH);
              this.emit(":responseReady");
            }

        } else {
            this.response.speak(getBadAnswer(item)).listen(getBadAnswer(item));
            this.emit(":responseReady");
        }
    },
    "QuizIntent": function() {
        this.handler.state = states.QUIZ;
        this.attributes['STATE'] = this.handler.state;

        console.log("asdfsaf " + this.event.request.intent.slots);
        console.log("LEVEL " + getLevel(this.event.request.intent.slots));
        this.attributes["level"] = getLevel(this.event.request.intent.slots);
        global.data = getData(this.attributes["level"]);

        console.log("IN QUIZ INTENT " + this.handler.state);
        console.log("IN QUIZ INTENT " + JSON.stringify(this.attributes));
        this.emitWithState("Quiz");
    },
    "LevelSelectIntent": function() {
        this.response.speak(EXIT_SKILL_MESSAGE);
        this.emit(':responseReady');
    },
    "AMAZON.StopIntent": function() {
        this.response.speak(EXIT_SKILL_MESSAGE);
        this.emit(':responseReady');
    },
    "AMAZON.CancelIntent": function() {
        this.response.speak(EXIT_SKILL_MESSAGE);
        this.emit(':responseReady');
    },
    "AMAZON.HelpIntent": function() {
        this.response.speak(HELP_MESSAGE).listen(HELP_MESSAGE);
        this.emit(":responseReady");
    },
    "Unhandled": function() {
        this.response.speak(HELP_MESSAGE).listen(HELP_MESSAGE);
        this.emit(":responseReady");
    },
    "AMAZON.PreviousIntent": function() {
        this.response.speak(HELP_MESSAGE).listen(HELP_MESSAGE);
        this.emit(":responseReady");
    },
    "AMAZON.NextIntent": function() {
        this.response.speak(HELP_MESSAGE).listen(HELP_MESSAGE);
        this.emit(":responseReady");
    }
});


const quizHandlers = Alexa.CreateStateHandler(states.QUIZ,{
    "Quiz": function() {

        this.attributes["response"] = "";
        this.attributes["counter"] = 0;
        this.attributes["quizscore"] = 0;
        this.attributes["guesses"] = 4;
        this.attributes["first"] = 0;
        this.emitWithState("AskQuestion");


    },
    "AskQuestion": function() {

        console.log("in askQuestion: "+JSON.stringify(this.attributes));
        if(this.attributes["counter"] == 5) {
            this.attributes["counter"] = 0;
        }
        if ((this.attributes["counter"] == 0) && (this.attributes["guesses"] == 4))
        {
            this.attributes["response"] = START_QUIZ_MESSAGE + " ";
        }


        if(this.attributes["guesses"] > 2){
            if(this.attributes["first"] != 0){
                this.attributes["counter"]++;
            }
            console.log(this.attributes["counter"]);
            this.attributes["guesses"] = 0;
        }
        this.attributes["first"] = 1;
        var random = getRandom(0, data.length-1);


        var item = data[this.attributes["counter"]];

        var propertyArray = Object.getOwnPropertyNames(item);
        var property = propertyArray[1];

        // store correct answers in session attributes
        this.attributes["quizitem"] = item;
        this.attributes["quizproperty"] = property;
        console.log(this.attributes["guesses"]);
        console.log(this.attributes["counter"]);


        var question = getQuestion(this.attributes["counter"], property, item);


        if(this.attributes["guesses"] == 0){
            var speech = this.attributes["response"] + question;
        } else {
            var speech = this.attributes["response"];
        }

        if (USE_IMAGES) {

              let content = {
                    "hasDisplaySpeechOutput" : speech,
                    "hasDisplayRepromptText" : question,
                    "noDisplaySpeechOutput" : speech,
                    "noDisplayRepromptText" : question,
                    "simpleCardTitle" : getCardTitle(item),
                    "simpleCardContent" : getTextDescription(item),
                    "listTemplateTitle" : this.attributes["quizscore"]+" / "+this.attributes["counter"]+": "+getCardTitle(item),
                    //"listTemplateContent" : getTextDescription(item),
                    "templateToken" : "ItemDetailsView",
                    "askOrTell": ":ask",
                    "hint" : "Add a hint here",
                    "image" : getImage(this.attributes["quizitem"]),
                    "sessionAttributes" : this.attributes
                };
                if (USE_IMAGES) {
                                  content["backgroundImageLargeUrl"]=getImage(this.attributes["quizitem"]);
                                }
                                console.log("ASK Question event: "+JSON.stringify(this.event));

                                renderTemplate.call(this,content);



                        } else {
                            this.response.speak(speech).listen(question);
                            this.emit(":responseReady");
                        }

                    },
      "ElementSelected" : function() {
     // We will look for the value in this.event.request.token in the AnswerIntent call to compareSlots
     console.log("in ElementSelected QUIZ state");
     this.emitWithState("AnswerIntent");
   },
    "AnswerIntent": function() {
        var response = "";
        var item = this.attributes["quizitem"];
        var property = this.attributes["quizproperty"];

            console.log(item[property]);

            var correct = compareSlots.call(this, item[property]);

            console.log("ASDASDASDASDAS" + this.event.request);


            if (correct)
            {
                response = getSpeechCon(true);
                this.attributes["quizscore"]++;
                this.attributes["guesses"] = 3;
            }
            else
            {
                console.log(this.attributes["guesses"]);
                response = getSpeechCon(false);

                this.attributes["guesses"]++;

            }
        if (this.attributes["counter"] >= 4)        {
          response += getFinalScore(this.attributes["quizscore"], (this.attributes["counter"] + 1));
          if (supportsDisplay.call(this)||isSimulator.call(this)) {
            //this device supports a display

            let content = {
                  "hasDisplaySpeechOutput" : response + " " + EXIT_SKILL_MESSAGE,
                  "bodyTemplateContent" : getFinalScore(this.attributes["quizscore"], (this.attributes["counter"]+1)),
                  "templateToken" : "FinalScoreView",
                  "askOrTell": ":tell",
                  "sessionAttributes" : this.attributes
              };
              if (USE_IMAGES) {
                content["backgroundImageUrl"]=getImage(item);
              }

              renderTemplate.call(this,content);



          } else {

            this.response.speak(response + " " + EXIT_SKILL_MESSAGE);
            this.emit(":responseReady");
          }
        }


        else if (this.attributes["guesses"] > 2) {

            response += getAnswer(property, item);
            response += getCurrentScore(this.attributes["quizscore"], this.attributes["counter"]);
            this.attributes["response"] = response;
            this.emitWithState("AskQuestion");
        } else {
             response += "Try again! ";
            this.attributes["response"] = response;
            this.emitWithState("AskQuestion");
        }
        },


    "AMAZON.StartOverIntent": function() {
        this.emitWithState("Quiz");
    },
    "AMAZON.StopIntent": function() {
        this.response.speak(EXIT_SKILL_MESSAGE);
        this.emit(":responseReady");
    },
    "AMAZON.CancelIntent": function() {
        this.response.speak(EXIT_SKILL_MESSAGE);
        this.emit(":responseReady");
    },
    "AMAZON.HelpIntent": function() {
        this.response.speak(HELP_MESSAGE).listen(HELP_MESSAGE);
        this.emit(":responseReady");
    },
    "Unhandled": function() {
        this.emitWithState("AnswerIntent");
    },
    "AMAZON.PreviousIntent": function() {
          this.emitWithState("AnswerIntent");
    },
    "AMAZON.NextIntent": function() {
          this.emitWithState("AnswerIntent");
    }
});

function compareSlots(value) {
  //are there slots
  var isSlot=
    this.event.request &&
    this.event.request.intent &&
    this.event.request.intent.slots;

  //are there tokens
  var isToken=
    this.event.request &&
    this.event.request.token;



  if(isSlot){

      console.log("SLOTS" + value.toString().toLowerCase());
  let slots=this.event.request.intent.slots;

    for (var slot in slots){

        if (slots[slot].value != undefined){
              console.log("SLOTS" + slots[slot].value.toString().toLowerCase());
            if (slots[slot].value.toString().toLowerCase() == value.toString().toLowerCase()) return true;
        }
    }
  }
  if(isToken){
      console.log("TOKEN" + this.event.request.token.toString().toLowerCase());
  console.log("TOKEN " + value.toString().toLowerCase());
    if (this.event.request.token.toString().toLowerCase() == value.toString().toLowerCase()) return true;
    console.log(this.event.request.token.toString().toLowerCase());
  }
    return false;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getRandom(min, max)
{
    return Math.floor(Math.random() * (max-min+1)+min);
}

function goThrough(length)
{
    return Math.floor(Math.random() * (max-min+1)+min);
}

function getRandomSymbolSpeech(symbol)
{
    return "<say-as interpret-as='spell-out'>" + symbol + "</say-as>";
}

function getItem(slots)
{
    var propertyArray = Object.getOwnPropertyNames(data[0]);
    var value;

    for (var slot in slots)
    {
        if (slots[slot].value !== undefined)
        {
            value = slots[slot].value;
            for (var property in propertyArray)
            {
                var item = data.filter(x => x[propertyArray[property]].toString().toLowerCase() === slots[slot].value.toString().toLowerCase());
                if (item.length > 0)
                {
                    return item[0];
                }
            }
        }
    }
    return value;
}

function getLevel(slots) {
    var value;

    for (var slot in slots){

        if (slots[slot].value != undefined){
            value = slots[slot].value;
            return value;
        } else {
            return "That is not a level!";
        }
    }
}

function getSpeechCon(type)
{
    var speechCon = "";
    if (type) return "<say-as interpret-as='interjection'>" + speechConsCorrect[getRandom(0, speechConsCorrect.length-1)] + "! </say-as><break strength='strong'/>";
    else return "<say-as interpret-as='interjection'>" + speechConsWrong[getRandom(0, speechConsWrong.length-1)] + " </say-as><break strength='strong'/>";
}

function formatCasing(key)
{
    key = key.split(/(?=[A-Z])/).join(" ");
    return key;
}

function getTextDescription(item)
{
    var text = "";

    for (var key in item)
    {
        text += formatCasing(key) + ": " + item[key] + "\n";
    }
    return text;
}

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers, startHandlers, quizHandlers);
    alexa.execute();
};

//==============================================================================
//===================== Echo Show Helper Functions  ============================
//==============================================================================


function supportsDisplay() {
  var hasDisplay =
    this.event.context &&
    this.event.context.System &&
    this.event.context.System.device &&
    this.event.context.System.device.supportedInterfaces &&
    this.event.context.System.device.supportedInterfaces.Display

  return hasDisplay;
}

function isSimulator() {
  var isSimulator = !this.event.context; //simulator doesn't send context
  return false;
}


function renderTemplate (content) {
   console.log("renderTemplate" + content.templateToken);
   switch(content.templateToken) {
       case "WelcomeScreenView":
         this.context.succeed(response);
         break;
       case "FinalScoreView":
        var response = {
          "version": "1.0",
          "response": {
            "directives": [
              {
                "type": "Display.RenderTemplate",
                "backButton": "HIDDEN",
                "template": {
                  "type": "BodyTemplate6",
                  //"title": content.bodyTemplateTitle,
                  "token": content.templateToken,
                  "textContent": {
                    "primaryText": {
                      "type": "RichText",
                      "text": "<font size = '7'>"+content.bodyTemplateContent+"</font>"
                    }
                  }

                }
              },{
                  "type": "Hint",
                  "hint": {
                    "type": "PlainText",
                    "text": content.hint
                  }
                }
            ],
            "outputSpeech": {
              "type": "SSML",
              "ssml": "<speak>"+content.hasDisplaySpeechOutput+"</speak>"
            },
            "reprompt": {
              "outputSpeech": {
                "type": "SSML",
                "ssml": ""
              }
            },
            "shouldEndSession": content.askOrTell== ":tell",

          },
          "sessionAttributes": content.sessionAttributes

        }




         //Send the response to Alexa
         this.context.succeed(response);
         break;

       case "ItemDetailsView":
           var response = {
             "version": "1.0",
             "response": {
               "directives": [
                 {
                   "type": "Display.RenderTemplate",
                   "template": {
                     "type": "BodyTemplate7",
                     "title": content.listTemplateTitle,
                     "token": content.templateToken,

                       "image": {

                        "sources":[{
                        "url": content.image,
                        }],
                     },
                     "backButton": "HIDDEN"
                   }
                 }
               ],
               "outputSpeech": {
                 "type": "SSML",
                 "ssml": "<speak>"+content.hasDisplaySpeechOutput+"</speak>"
               },
               "reprompt": {
                 "outputSpeech": {
                   "type": "SSML",
                   "ssml": "<speak>"+content.hasDisplayRepromptText+"</speak>"
                 }
               },
               "shouldEndSession": content.askOrTell== ":tell",
               "card": {
                 "type": "Simple",
                 "title": content.simpleCardTitle,
                 "content": content.simpleCardContent
               }
             },
             "sessionAttributes": content.sessionAttributes

         }


          //Send the response to Alexa
          console.log("ready to respond (ItemDetailsView): "+JSON.stringify(response));
           this.context.succeed(response);
           break;
       default:
          this.response.speak("Thanks for playing, goodbye");
          break;
   }

}
