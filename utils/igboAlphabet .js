import akwuko from "../images/igbo/book.png";
import anu from "../images/igbo/meat.png";
import ama from '../images/igbo/know.png'
import bia from '../images/igbo/come.png'
import bu from '../images/igbo/be.png'
import banye from "../images/igbo/enter.png";
import chineke from "../images/igbo/god.png";
import cho from '../images/igbo/wants.png'
import chu from "../images/igbo/chase.png";
import di from "../images/igbo/exist.png";
import du from '../images/igbo/guide.png'
import daba from "../images/igbo/fall.png";
import eme from "../images/igbo/do.png";
import ebe from "../images/igbo/place.png";
import fu from "../images/igbo/see.png";
import fesa from '../images/igbo/scatter.png'
import fesammiri from "../images/igbo/sprinkles.png";
import gaa from "../images/igbo/go.png";
import guo from "../images/igbo/read.png";
import gwa from "../images/igbo/tell.png";
import gburu from "../images/igbo/kill.png";
import gbaa from "../images/igbo/shoot.png";
import gbachie from "../images/igbo/closed.png";
import ghaa from "../images/igbo/return.png";
import gharia from "../images/igbo/repeat.png";
import ghota from "../images/igbo/understanding.png";
import gwuo from "../images/igbo/play.png";
import gwu from "../images/igbo/dig.png";
import gwuu from "../images/igbo/finish.png";
import hu from "../images/igbo/see.png";
import hapu from "../images/igbo/leave.png";
import hapula from "../images/igbo/abandon.png";
import ihe from "../images/igbo/thing.png";
import ije from "../images/igbo/journry.png";
import ilu from "../images/igbo/marry.png";
import iri from "../images/igbo/climb.png";
import isa from "../images/igbo/wash.png";
import ikpo from "../images/igbo/call.png";
import jiri from "../images/igbo/jiri.png";
import juo from "../images/igbo/ask.png";
import jee from "../images/igbo/go.png";
import kpo from "../images/igbo/call.png";
import kwu from "../images/igbo/stop(1).png";
import kpoo from "../images/igbo/name(2).png";
import kpu from "../images/igbo/carve.png";
import kw from "../images/igbo/stand.png";
import kwupu from "../images/igbo/remove.png";
import luo from "../images/igbo/marry.png";
import leta from "../images/igbo/visit.png";
import le from "../images/igbo/look.png";
import akara from '../assets/akara.png';
import birth from '../images/Igbo/patting.png'
import learn from '../images/Igbo/study.png'
import toDO from '../images/Igbo/to-do-list.png'
import and from '../images/Igbo/handle-with-care.png'
import give from '../images/Igbo/payment.png'
import stay from '../images/Igbo/business.png'
import child from '../images/Igbo/playtime.png'
import father from '../images/Igbo/father.png'
import mother from '../images/Igbo/mother.png'
import fire from '../images/Igbo/fire.png'
import speed from '../images/Igbo/speed.png'
import help from '../images/Igbo/help.png'
import time from  '../images/Igbo/clock.png'
import many from '../images/Igbo/crowd-of-users.png'
import leave from '../images/Igbo/exit.png'
import press from '../images/Igbo/press-button.png'
import white from '../images/Igbo/white.png'
import paint from '../images/Igbo/paint-palette.png'
import eat from '../images/Igbo/eat.png'
import reach from '../images/Igbo/fruit.png'
import speak from '../images/Igbo/speak.png'
import ball from '../images/Igbo/ball.png'
import drink from '../images/Igbo/dink-water.png'
import show from '../images/Igbo/talent-hunt.png'
import put from '../images/Igbo/person.png'
import count from '../images/Igbo/account.png'
import house from '../images/Igbo/house.png'
import morning from '../images/Igbo/morning.png'
import road from '../images/Igbo/road.png'
import world from '../images/Igbo/earth.png'
import answer from '../images/Igbo/phone.png'
import children from '../images/Igbo/children.png'
import carry from '../images/Igbo/box.png'
import bring from '../images/Igbo/bring.png'
import build from '../images/Igbo/puzzle.png'
import wear from '../images/Igbo/wearing.png'
// import avoid from '../images/Igbo/stop.png'
import send from '../images/Igbo/mail.png'



const igboAlphabet = [
  {
    letter: "A",
    pronunciation: "/a/",
    examples: [
      { word: "Akwụkwọ", meaning: "Book", image: akwuko },
      { word: "Anụ", meaning: "Meat/Animal", image: anu },
      { word: "Ama", meaning: "Know/Compound", image: ama },
    ],
    practiceOptions: ["A", "E", "O"],
    culturalContext:
      'The vowel "A" is one of the most frequent sounds in Igbo, appearing in many verbs, nouns, and names.',
  },
  {
    letter: "B",
    pronunciation: "/b/",
    examples: [
      { word: "Bịa", meaning: "Come", image: bia },
      { word: "Bụ", meaning: "Be", image: bu },
      { word: "Banye", meaning: "Enter", image: banye },
    ],
    practiceOptions: ["B", "P", "V"],
    culturalContext:
      'The consonant "B" is strong and clear, often used in imperative verbs.',
  },
  {
    letter: "CH",
    pronunciation: "/t͡ʃ/",
    examples: [
      { word: "Chineke", meaning: "God", image: chineke },
      { word: "Chọ", meaning: "Search/Want", image: cho },
      { word: "Chụ", meaning: "Chase", image: chu },
    ],
    practiceOptions: ["CH", "SH", "J"],
    culturalContext:
      "“CH” is common in Igbo and often found in spiritual, action, and descriptive words.",
  },
  {
    letter: "D",
    pronunciation: "/d/",
    examples: [
      { word: "Dị", meaning: "Be/Exist", image: di },
      { word: "Dụ", meaning: "Guide", image: du },
      { word: "Daba", meaning: "Fall", image: daba },
    ],
    practiceOptions: ["D", "T", "N"],
    culturalContext:
      "The consonant “D” is common in verbs, particularly those about states and actions.",
  },
  {
    letter: "E",
    pronunciation: "/e/",
    examples: [
      { word: "Eze", meaning: "King", image: eze },
      { word: "Eme", meaning: "Do", image: eme },
      { word: "Ebe", meaning: "Place", image: ebe },
    ],
    practiceOptions: ["E", "I", "A"],
    culturalContext:
      'The vowel "E" is essential for forming both singular and plural words in Igbo.',
  },
  {
    letter: "F",
    pronunciation: "/f/",
    examples: [
      { word: "Fụ", meaning: "See", image: fu },
      { word: "Fesa", meaning: "Scatter", image: fesa },
      { word: "Fesa mmiri", meaning: "Sprinkle water", image: fesammiri },
    ],
    practiceOptions: ["F", "V", "PH"],
    culturalContext:
      "“F” is less common than in English but still used in verbs and descriptive phrases.",
  },
  {
    letter: "G",
    pronunciation: "/g/",
    examples: [
      { word: "Gaa", meaning: "Go", image: gaa },
      { word: "Gụọ", meaning: "Read/Count", image: guo },
      { word: "Gwa", meaning: "Tell", image: gwa },
    ],
    practiceOptions: ["G", "K", "GW"],
    culturalContext:
      'The consonant "G" is a hard sound that begins many action verbs in Igbo.',
  },
  {
    letter: "GB",
    pronunciation: "/ɡ͡b/",
    examples: [
      { word: "Gburu", meaning: "Kill", image: gburu },
      { word: "Gbaa", meaning: "Run/Shoot", image: gbaa },
      { word: "Gbachie", meaning: "Close", image: gbachie },
    ],
    practiceOptions: ["GB", "G", "B"],
    culturalContext:
      "“GB” is a labial-velar stop unique to Igbo, crucial for authentic pronunciation.",
  },
  {
    letter: "GH",
    pronunciation: "/ɣ/",
    examples: [
      { word: "Ghaa", meaning: "Return", image: ghaa },
      { word: "Gharịa", meaning: "Repeat", image: gharia },
      { word: "Ghọta", meaning: "Understand", image: ghota },
    ],
    practiceOptions: ["GH", "G", "H"],
    culturalContext:
      "“GH” produces a voiced fricative, a distinct sound in Igbo speech.",
  },
  {
    letter: "GW",
    pronunciation: "/ɡʷ/",
    examples: [
      { word: "Gwuo", meaning: "Play", image: gwuo },
      { word: "Gwu", meaning: "Dig", image: gwu },
      { word: "Gwụ", meaning: "Finish", image: gwuu },
    ],
    practiceOptions: ["GW", "G", "W"],
    culturalContext:
      "“GW” is another labial-velar sound, common in verbs of action.",
  },
  {
    letter: "H",
    pronunciation: "/h/",
    examples: [
      { word: "Hụ", meaning: "See", image: hu },
      { word: "Hapụ", meaning: "Leave", image: hapu },
      { word: "Hapụla", meaning: "Abandon", image: hapula },
    ],
    practiceOptions: ["H", "GH", "CH"],
    culturalContext:
      "The “H” sound is used in verbs and commands to show breathiness.",
  },
  {
    letter: "I",
    pronunciation: "/i/",
    examples: [
      { word: "Ihe", meaning: "Thing", image: ihe },
      { word: "Ije", meaning: "Journey", image: ije },
      { word: "Ịlụ", meaning: "Marry", image: ilu },
    ],
    practiceOptions: ["I", "E", "Ị"],
    culturalContext: "“I” is a high front vowel essential in nouns and verbs.",
  },
  {
    letter: "Ị",
    pronunciation: "/ɪ/",
    examples: [
      { word: "Ịrị", meaning: "Climb", image: iri },
      { word: "Ịsa", meaning: "Wash", image: isa },
      { word: "Ịkpọ", meaning: "Call", image: ikpo },
    ],
    practiceOptions: ["Ị", "I", "E"],
    culturalContext:
      "“Ị” is a slightly lower, centralised vowel sound unique to Igbo.",
  },
  {
    letter: "J",
    pronunciation: "/d͡ʒ/",
    examples: [
      { word: "Jiri", meaning: "Use", image: jiri },
      { word: "Jụọ", meaning: "Ask", image: juo },
      { word: "Jee", meaning: "Go", image: jee },
    ],
    practiceOptions: ["J", "CH", "Z"],
    culturalContext: "“J” is common in verbs and action words.",
  },
  {
    letter: "K",
    pronunciation: "/k/",
    examples: [
      { word: "Kpọ", meaning: "Call", image: kpo },
      { word: "Kwụ", meaning: "Stop/Stand", image: kwu },
      { word: "Kpọọ", meaning: "Name", image: kpoo },
    ],
    practiceOptions: ["K", "C", "Q"],
    culturalContext:
      'The consonant "K" is hard and often used in commands and descriptive terms.',
  },
  {
    letter: "KP",
    pronunciation: "/k͡p/",
    examples: [
      { word: "Kpọ", meaning: "Call", image: kpo },
      { word: "Kpụ", meaning: "Carve", image: kpu },
      { word: "Kpọọ", meaning: "Name", image: kpoo },
    ],
    practiceOptions: ["KP", "K", "P"],
    culturalContext:
      "“KP” is a labial-velar stop unique to Igbo, essential for authentic pronunciation.",
  },
  {
    letter: "KW",
    pronunciation: "/kʷ/",
    examples: [
      { word: "Kwụ", meaning: "Stand", image: kw },
      { word: "Kwụsị", meaning: "Stop", image: kwu },
      { word: "Kwụpụ", meaning: "Remove", image: kwupu },
    ],
    practiceOptions: ["KW", "K", "W"],
    culturalContext:
      "“KW” is another labial-velar consonant, frequent in verbs of motion.",
  },
  {
    letter: "L",
    pronunciation: "/l/",
    examples: [
      { word: "Lụọ", meaning: "Marry", image: luo },
      { word: "Leta", meaning: "Visit", image: leta },
      { word: "Le", meaning: "Look", image: le },
    ],
    practiceOptions: ["L", "R", "N"],
    culturalContext:
      "The “L” consonant is soft and common in polite or descriptive terms.",
  },


  {
    letter: "M",
    pronunciation: "/m/",
    examples: [
      { word: "Mee", meaning: "Do", image: toDO },
      { word: "Mụọ", meaning: "Give birth/Learn", image: birth },
      { word: "Mụta", meaning: "Learn", image: learn }
    ],
    practiceOptions: ["M", "N", "B"],
    culturalContext:
      "The nasal “M” appears frequently in pronouns, verbs, and nouns.",
  },
  {
    letter: "N",
    pronunciation: "/n/",
    examples: [
      { word: "Na", meaning: "And/With", image: and },
      { word: "Nye", meaning: "Give", image: give },
      { word: "Nọ", meaning: "Stay", image: stay }
    ],
    practiceOptions: ["N", "M", "L"],
    culturalContext: "The nasal “N” is fundamental in Igbo sentence structure.",
  },
  {
    letter: "NW",
    pronunciation: "/nʷ/",
    examples: [
      { word: "Nwa", meaning: "Child", image: child },
      { word: "Nwoke", meaning: "Man", image: father },
      { word: "Nwanyi", meaning: "Woman", image: mother }
    ],
    practiceOptions: ["NW", "N", "W"],
    culturalContext:
      "“NW” is a labialised nasal, common in words about people and relationships.",
  },
  {
    letter: "NY",
    pronunciation: "/ɲ/",
    examples: [
      { word: "Nye", meaning: "Give", image: give },
      { word: "Nya", meaning: "Him/Her", image: mother },
      { word: "Nyere", meaning: "Help", image: help }
    ],
    practiceOptions: ["NY", "N", "Y"],
    culturalContext:
      "“NY” is a palatal nasal, frequent in pronouns and giving verbs.",
  },
  {
    letter: "O",
    pronunciation: "/o/",
    examples: [
      { word: "Ọkụ", meaning: "Fire", image: fire },
      { word: "Oge", meaning: "Time", image: time },
      { word: "Ọsọ", meaning: "Speed", image: speed }
    ],
    practiceOptions: ["O", "Ọ", "U"],
    culturalContext:
      "The vowel “O” is common in nouns, often denoting natural elements.",
  },
  {
    letter: "Ọ",
    pronunciation: "/ɔ/",
    examples: [
      { word: "Ọtụtụ", meaning: "Many", image: many },
      { word: "Ọkụ", meaning: "Fire", image: fire },
      { word: "Ọcha", meaning: "White", image: white }
    ],
    practiceOptions: ["Ọ", "O", "U"],
    culturalContext: "“Ọ” is an open-mid back rounded vowel unique to Igbo.",
  },
  {
    letter: "P",
    pronunciation: "/p/",
    examples: [
      { word: "Pịa", meaning: "Press", image: press },
      { word: "Pụọ", meaning: "Leave", image: leave },
      { word: "Pụta", meaning: "Come out", image: leave }
    ],
    practiceOptions: ["P", "B", "F"],
    culturalContext: "“P” is sharp and often used in commands.",
  },
  {
    letter: "R",
    pronunciation: "/ɾ/",
    examples: [
      { word: "Rie", meaning: "Eat", image: eat },
      { word: "Ruo", meaning: "Reach", image: reach },
      { word: "Rapu", meaning: "Leave", image: leave   }
    ],
    practiceOptions: ["R", "L", "D"],
    culturalContext:
      "“R” is a tap or flap, softer than in English, and common in verbs.",
  },
  {
    letter: "S",
    pronunciation: "/s/",
    examples: [
      { word: "Sọ", meaning: "Tell", image: speak },
      { word: "Sụ", meaning: "Speak", image: speak },
      { word: "Sere", meaning: "Paint", image: paint }
    ],
    practiceOptions: ["S", "SH", "Z"],
    culturalContext:
      "“S” is crisp and used in speech-related and descriptive words.",
  },
  {
    letter: "SH",
    pronunciation: "/ʃ/",
    examples: [
      { word: "Sha", meaning: "Drink", image: drink },
      { word: "She", meaning: "She (loan)", image: mother },
      { word: "Shọ", meaning: "Show (loan)", image: show }
    ],
    practiceOptions: ["SH", "S", "CH"],
    culturalContext:
      "“SH” is mainly from loanwords but used in modern Igbo speech.",
  },
  {
    letter: "T",
    pronunciation: "/t/",
    examples: [
      { word: "Tụọ", meaning: "Throw", image: ball },
      { word: "Tinye", meaning: "Put inside", image: put },
      { word: "Tụọ ọnụ", meaning: "Count", image: count }
    ],
    practiceOptions: ["T", "D", "N"],
    culturalContext: "“T” is a crisp sound used in many imperative verbs.",
  },
  {
    letter: "U",
    pronunciation: "/u/",
    examples: [
      { word: "Ụlọ", meaning: "House", image: house },
      { word: "Ụtụtụ", meaning: "Morning", image: morning },
      { word: "Ụzọ", meaning: "Road", image: road }
    ],
    practiceOptions: ["U", "Ụ", "O"],
    culturalContext:
      "The vowel “U” appears in common nouns, especially about places and time.",
  },
  {
    letter: "Ụ",
    pronunciation: "/ʊ/",
    examples: [
      { word: "Ụzọ", meaning: "Road", image: road },
      { word: "Ụmụ", meaning: "Children", image: children },
      { word: "Ụwa", meaning: "World", image: world }
    ],
    practiceOptions: ["Ụ", "U", "O"],
    culturalContext: "“Ụ” is a close back rounded vowel unique to Igbo.",
  },
  {
    letter: "V",
    pronunciation: "/v/",
    examples: [
      { word: "Veta", meaning: "Answer", image: answer },
      { word: "Vọta", meaning: "Select", image: count },
      { word: "Vụrụ", meaning: "Carried", image: carry }
    ],
    practiceOptions: ["V", "B", "F"],
    culturalContext:
      "“V” is less frequent but common in loanwords and modern Igbo.",
  },
  {
    letter: "W",
    pronunciation: "/w/",
    examples: [
      { word: "Weta", meaning: "Bring", image: bring },
      { word: "Wulite", meaning: "Build", image: build },
      { word: "Were", meaning: "Take", image: give }
    ],
    practiceOptions: ["W", "V", "U"],
    culturalContext: "“W” is a glide sound used in verbs of action.",
  },
  {
    letter: "Y",
    pronunciation: "/j/",
    examples: [
      { word: "Yiri", meaning: "Wear", image: wear },
      { word: "Yie", meaning: "Wear/Put on", image: wear },
      { word: "Yiri akwa", meaning: "Wear clothes", image: wear }
    ],
    practiceOptions: ["Y", "I", "J"],
    culturalContext:
      "“Y” is a palatal glide common in descriptive and action verbs.",
  },
  {
    letter: "Z",
    pronunciation: "/z/",
    examples: [
      { word: "Zụta", meaning: "Buy", image: give },
      { word: "Ziga", meaning: "Send", image: send },
      { word: "Zọ", meaning: "Avoid", image: "" }
    ],
    practiceOptions: ["Z", "S", "J"],
    culturalContext:
      "“Z” is a buzzing consonant, often found in transactional and directional verbs.",
  },
];

export default igboAlphabet;
