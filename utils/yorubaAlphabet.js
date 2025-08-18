import akara from '../assets/akara.png'
import agbo from '../images/yoruba/champagne.png'
import ada from '../images/yoruba/weapon.png'
import bata from '../images/yoruba/running-shoe.png'
import buredi from '../images/yoruba/white-bread.png'
import belu from '../images/yoruba/bell.png'
import dudu from '../images/yoruba/black-circle.png'
import dandogo from '../images/yoruba/robe.png'
import dan from '../images/yoruba/shine.png'
import eja from '../images/yoruba/fish.png'
import efo from '../images/yoruba/Vegetable.png'
import ebo from '../images/yoruba/sacrifice.png'
import eni from '../images/yoruba/people.png'
import egbon from '../images/yoruba/siblings.png'
import ebora from '../images/yoruba/spirit.png'
import fe from '../images/yoruba/love.png'
import fadaka from '../images/yoruba/silver.png'
import fo from '../images/yoruba/wash.png'
import gbe from '../images/yoruba/drying.png'
import gbogbo from '../images/yorubaall.png'
import gaari from '../images/yoruba/gaari.png'
import gbekele from '../images/yoruba/trust.png'
import gbadun from '../images/yoruba/enjoy.png'
import gbari from '../images/yoruba/accept.png'
import ha from '../images/yoruba/exclaim.png'
import haki from '../images/yoruba/hacker.png'
import halo from '../images/yoruba/hello.png'
import iwe from '../images/yoruba/books.png'
import ilu from '../images/yoruba/town.png'
import iba from '../images/yoruba/town.png'
import je from '../images/yoruba/eat.png'
import ju from '../images/yoruba/throw.png'
import jin from '../images/yoruba/fry.png'
import ka from '../images/yoruba/read.png'
import ko from '../images/yoruba/teacching.png'
import kun from '../images/yoruba/fill.png'
import leta from '../images/yoruba/letter.png'
import lehin from '../images/yoruba/behind.png'
import ma from '../images/yoruba/dont.png'
import mo from '../images/yoruba/know.png'
import mi from '../images/yoruba/me.png'
import na from '../images/yoruba/beat.png'
import ni from '../images/yoruba/have.png'
import ninu from '../images/yoruba/inside.png'
import ounje from '../images/yoruba/food.png'
import omo from '../images/yoruba/child.png'
import ojo from '../images/yoruba/rain.png'
import oba from '../images/yoruba/king.png'
import ojo from '../images/yoruba/day.png'
import okunrin from '../images/yoruba/man.png'
import pa from '../images/yoruba/kill.png'
import pe from '../images/yoruba/call.png'
import pupa from '../images/yoruba/red.png'
import rin from '../images/yoruba/walk.png'
import ro from '../images/yoruba/bend.png'
import rerin from '../images/yoruba/laugh.png'
import sun from '../images/yoruba/sleep.png'
import so from '../images/yoruba/speak.png'
import san from '../images/yoruba/pay.png'
import se from '../images/yoruba/do.png'
import soosi from '../images/yoruba/church.png'
import si from '../images/yoruba/open.png'
import ta from '../images/yoruba/sell.png'
import tun from '../images/yoruba/again.png'
import ti from '../images/yoruba/that.png'
import ugbo from '../images/yoruba/farm.png'
import ude from '../images/yoruba/hunter.png'
import wi from '../images/yoruba/say.png'
import wa from '../images/yoruba/exist.png'
import we from '../images/yoruba/bath.png'
import ya from '../images/yoruba/separate.png'
import yi from '../images/yoruba/turn.png'
import ye from '../images/yoruba/worthy.png'



const alphabets = [
    {
      letter: "A",
      pronunciation: "/a/",
      examples: [
        { word: "Àkàrà", meaning: "Bean Cake", image: akara },
        { word: "Àgbo", meaning: "Herbal Drink", image: agbo },
        { word: "Àdà", meaning: "Cutlass", image: ada }
      ],
      practiceOptions: ["A", "H", "B"],
      culturalContext:
        'In Yoruba culture, the "A" sound is fundamental, often appearing in names and greetings, symbolizing foundation and origin.'
    },
    {
      letter: "B",
      pronunciation: "/b/",
      examples: [
        { word: "Bàtà", meaning: "Shoe", image: bata },
        { word: "Búrẹ́dì", meaning: "Bread", image: buredi },
        { word: "Bẹ́lú", meaning: "Bell", image: belu }
      ],
      practiceOptions: ["B", "A", "D"],
      culturalContext:
        'The letter "B" appears in many Yoruba words, often representing warmth, welcome, and daily objects.'
    },
    {
      letter: "D",
      pronunciation: "/d/",
      examples: [
        { word: "Dúdú", meaning: "Black", image: dudu },
        { word: "Dáńdógó", meaning: "Traditional Robe", image: dandogo },
        { word: "Dán", meaning: "To Shine", image: dan }
      ],
      practiceOptions: ["D", "F", "E"],
      culturalContext:
        'The "D" sound is common in Yoruba descriptive words, often conveying strength and identity.'
    },
    {
      letter: "E",
      pronunciation: "/e/",
      examples: [
        { word: "Ẹja", meaning: "Fish", image: eja },
        { word: "Ẹ̀fọ́", meaning: "Vegetable", image: efo },
        { word: "Ẹbo", meaning: "Sacrifice", image: ebo }
      ],
      practiceOptions: ["E", "Ẹ", "A"],
      culturalContext:
        'The letter "E" is widely used in Yoruba and often marks verbs and nouns tied to daily life.'
    },
    {
      letter: "Ẹ",
      pronunciation: "/ɛ/",
      examples: [
        { word: "Ẹni", meaning: "Person", image: eni },
        { word: "Ẹ̀gbọ́n", meaning: "Elder Sibling", image: egbon },
        { word: "Ẹbọra", meaning: "Spirit", image: ebora }
      ],
      practiceOptions: ["Ẹ", "E", "I"],
      culturalContext:
        'Ẹ is unique to Yoruba orthography and carries sounds not found in English, central to clear expression.'
    },
    {
      letter: "F",
      pronunciation: "/f/",
      examples: [
        { word: "Fẹ́", meaning: "Love", image: fe },
        { word: "Fàdákà", meaning: "Silver", image: fadaka },
        { word: "Fọ", meaning: "Wash", image: fo }
      ],
      practiceOptions: ["F", "P", "V"],
      culturalContext:
        'The "F" sound often conveys actions and descriptions, appearing in verbs and adjectives.'
    },
    {
      letter: "G",
      pronunciation: "/g/",
      examples: [
        { word: "Gbẹ̀", meaning: "Dry", image: gbe },
        { word: "Gbogbo", meaning: "All", image: gbogbo },
        { word: "Gàárì", meaning: "Cassava Granules", image: gaari }
      ],
      practiceOptions: ["G", "GB", "K"],
      culturalContext:
        'The "G" sound in Yoruba is a hard consonant often associated with descriptive and emphatic words.'
    },
    {
      letter: "GB",
      pronunciation: "/ɡ͡b/",
      examples: [
        { word: "Gbẹ̀kẹ̀lé", meaning: "Trust", image: gbekele },
        { word: "Gbádùn", meaning: "Enjoy", image: gbadun },
        { word: "Gbárí", meaning: "Accept", image: gbari }
      ],
      practiceOptions: ["GB", "G", "B"],
      culturalContext:
        'The GB sound is unique to Yoruba and some African languages, a co-articulated consonant crucial for meaning.'
    },
    {
      letter: "H",
      pronunciation: "/h/",
      examples: [
        { word: "Hà", meaning: "Exclaim", image: ha },
        { word: "Hàkì", meaning: "Hacking", image: haki },
        { word: "Hàlò", meaning: "Hello", image: halo }
      ],
      practiceOptions: ["H", "A", "E"],
      culturalContext:
        'The letter "H" is less common in Yoruba but appears in expressive sounds and borrowed words.'
    },
    {
      letter: "I",
      pronunciation: "/i/",
      examples: [
        { word: "Ìwé", meaning: "Book", image: iwe },
        { word: "Ìlú", meaning: "Town", image: ilu },
        { word: "Ìbà", meaning: "Greeting", image: iba }
      ],
      practiceOptions: ["I", "E", "O"],
      culturalContext:
        'The "I" vowel is a high front vowel, key to many Yoruba nouns and verbs.'
    },
    {
      letter: "J",
      pronunciation: "/ʤ/",
      examples: [
        { word: "Jẹ", meaning: "Eat", image: je },
        { word: "Jù", meaning: "Throw", image: ju },
        { word: "Jin", meaning: "Fry", image: jin }
      ],
      practiceOptions: ["J", "Y", "CH"],
      culturalContext:
        'The "J" sound is common in action words in Yoruba, especially related to food and movement.'
    },
    {
      letter: "K",
      pronunciation: "/k/",
      examples: [
        { word: "Kà", meaning: "Read", image: ka },
        { word: "Kọ́", meaning: "Teach", image: ko },
        { word: "Kún", meaning: "Fill", image: kun }
      ],
      practiceOptions: ["K", "C", "Q"],
      culturalContext:
        'K is a strong consonant sound in Yoruba, used in many verbs and imperative forms.'
    },
    {
  letter: "L",
  pronunciation: "/l/",
  examples: [
    { word: "Lẹ́tà", meaning: "Letter (mail)", image: leta },
    { word: "Láti", meaning: "From", image: akara },
    { word: "Lẹ́hìn", meaning: "Behind", image: lehin }
  ],
  practiceOptions: ["L", "R", "N"],
  culturalContext:
    'The "L" sound in Yoruba is soft and common in polite expressions, greetings, and formal speech.'
},
{
  letter: "M",
  pronunciation: "/m/",
  examples: [
    { word: "Má", meaning: "Don’t", image: ma },
    { word: "Mọ́", meaning: "Know", image: mo },
    { word: "Mí", meaning: "Me", image: mi }
  ],
  practiceOptions: ["M", "N", "B"],
  culturalContext:
    'M is a nasal sound in Yoruba, often carrying emphasis in personal pronouns and commands.'
},
{
  letter: "N",
  pronunciation: "/n/",
  examples: [
    { word: "Nà", meaning: "Beat", image: na },
    { word: "Ní", meaning: "Have/At", image: ni },
    { word: "Nínú", meaning: "Inside", image: ninu }
  ],
  practiceOptions: ["N", "M", "R"],
  culturalContext:
    'The "N" sound is nasal and is a key consonant in many Yoruba verbs and prepositions.'
},
{
  letter: "O",
  pronunciation: "/o/",
  examples: [
    { word: "Oúnjẹ", meaning: "Food", image: ounje },
    { word: "Ọmọ", meaning: "Child", image: omo },
    { word: "Òjò", meaning: "Rain", image: ojo }
  ],
  practiceOptions: ["O", "Ọ", "U"],
  culturalContext:
    'The "O" vowel is rounded and open, appearing in many nouns, greetings, and descriptive words.'
},
{
  letter: "Ọ",
  pronunciation: "/ɔ/",
  examples: [
    { word: "Ọbà", meaning: "King", image: oba },
    { word: "Ọjọ́", meaning: "Day", image: ojo },
    { word: "Ọkùnrin", meaning: "Man", image: okunrin }
  ],
  practiceOptions: ["Ọ", "O", "E"],
  culturalContext:
    'Ọ is a distinct Yoruba vowel sound, deeper than "O", often used in royal titles and cultural expressions.'
},
{
  letter: "P",
  pronunciation: "/p/",
  examples: [
    { word: "Pà", meaning: "Kill", image: pa },
    { word: "Pé", meaning: "Call/Invite", image: pe },
    { word: "Pupa", meaning: "Red", image: pupa }
  ],
  practiceOptions: ["P", "B", "F"],
  culturalContext:
    'P is a forceful sound in Yoruba, often used in descriptive words and commands.'
},
{
  letter: "R",
  pronunciation: "/r/",
  examples: [
    { word: "Rìn", meaning: "Walk", image: rin },
    { word: "Rọ̀", meaning: "Bend", image: ro },
    { word: "Rẹ́rìn", meaning: "Laugh", image: rerin }
  ],
  practiceOptions: ["R", "L", "N"],
  culturalContext:
    'The Yoruba "R" is rolled or tapped, adding rhythm and musicality to speech.'
},
{
  letter: "S",
  pronunciation: "/s/",
  examples: [
    { word: "Sùn", meaning: "Sleep", image: sun },
    { word: "Sọ", meaning: "Speak", image: so },
    { word: "Sán", meaning: "Pay", image: san }
  ],
  practiceOptions: ["S", "Ṣ", "Z"],
  culturalContext:
    'S is a sharp consonant in Yoruba, used widely in commands, actions, and descriptive phrases.'
},
{
  letter: "Ṣ",
  pronunciation: "/ʃ/",
  examples: [
    { word: "Ṣe", meaning: "Do", image: se },
    { word: "Ṣọ́ọ̀ṣì", meaning: "Church", image: soosi },
    { word: "Ṣí", meaning: "Open", image: si }
  ],
  practiceOptions: ["Ṣ", "S", "Sh"],
  culturalContext:
    'Ṣ is a unique Yoruba sound similar to "sh" in English, and is vital in many cultural and religious terms.'
},
{
  letter: "T",
  pronunciation: "/t/",
  examples: [
    { word: "Tà", meaning: "Sell", image: ta },
    { word: "Tún", meaning: "Again", image: tun },
    { word: "Tí", meaning: "That/Which", image: ti }
  ],
  practiceOptions: ["T", "D", "P"],
  culturalContext:
    'T is a crisp consonant in Yoruba, common in action words and sentence connectors.'
},
{
  letter: "U",
  pronunciation: "/u/",
  examples: [
    { word: "U", meaning: "Loanword usage", image: akara },
    { word: "Ùgbó", meaning: "Farm", image: ugbo },
    { word: "Ùdẹ̀", meaning: "Hunter", image: ude }
  ],
  practiceOptions: ["U", "O", "Ọ"],
  culturalContext:
    'U is less common in native Yoruba words but appears in borrowed terms and regional dialects.'
},
{
  letter: "W",
  pronunciation: "/w/",
  examples: [
    { word: "Wí", meaning: "Say", image: wi },
    { word: "Wà", meaning: "Be/Exist", image: wa },
    { word: "Wẹ̀", meaning: "Bathe", image: we }
  ],
  practiceOptions: ["W", "Y", "V"],
  culturalContext:
    'W is smooth and flowing, common in verbs and descriptive expressions in Yoruba.'
},
{
  letter: "Y",
  pronunciation: "/j/",
  examples: [
    { word: "Yà", meaning: "Separate", image: ya },
    { word: "Yí", meaning: "Turn", image: yi },
    { word: "Yẹ́", meaning: "Be Worthy", image: ye }
  ],
  practiceOptions: ["Y", "I", "J"],
  culturalContext:
    'The Yoruba "Y" is a palatal sound that adds softness and flow to names and verbs.'
}

  ];

  export default alphabets;
