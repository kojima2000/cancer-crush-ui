import React from 'react';
import "./fonts/Montserrat-Regular.ttf";
import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles, initializeIcons } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import TrivialTemplateCreation from './Components/TrivialTemplateEngine/TrivialTemplateCreation';
import TrivialRunner from './Components/TrivialRunner/TrivialRunner';
import NavigationBar from './Components/Navigation/NavigationBar';
import { NavBasicExample } from './Components/Navigation/NavBar';

const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '960px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },  
};
let gameTestData={"name":"intialTemplate","chapters":[
  {"name":"Brai","pages":
  [{
    "name": "Hello",
    "description": "",
    "backGroundImage": "url(./Background%201.svg)"
}, {
    "name": "Question 1",
    "description": "",
    "backGroundImage": "url(./Background%202.svg)",
    "additionalDetail": "Hello I am the helper panel",
    "submitButtonBackGroundImage": "url(./Submit%201button.svg)",
    "backgroundImagePeople": "./Patient%201.svg",
    "question": {
        "age": 54,
        "sex": "Male",
        "history": "Patient was found to have a Right Upper Lobe Adenocarcinoma. He underwent Right Upper Lobe Lobectomy and systematic mediastinal lymph node dissection. Pathology demonstrated a 2.2 cm tumor of adenocarcinoma histology with negative margins. Additionally, there were no visceral pleural invasion and none of the dissected lymph nodes were positive for carcinoma",
        "description": "What is the next best step in the management of this patient?",
        correctAnswerText: ""+
        "Correct!A. Active survelliance"+
        "Patient has pT1c pN0 (stage 1A3; AJCC 8th Edition Staging System). These patients are often followed with a CT chest every 6 months.",
        wrongAnswerText: "try again!",
        "choices": [{
                "description": "Check for PD-L1",
                "acceptedAnswer": false
            }, {
                "description": "Check EGFR mutation status",
                "acceptedAnswer": false
            }, {
                "description": "4 cycles of platinum-based chemotherapy",
                "acceptedAnswer": false
            }, {
                "description": "Active surveillance ",
                "acceptedAnswer": true
            }
        ],
        "caseStudies": ""
    }
}, {
    "name": "Question 2",
    "description": "",
    "backGroundImage": "url(./Background%202.svg)",
    "submitButtonBackGroundImage": "url(./Submit%201button.svg)",
    "backgroundImagePeople": "./Patient%202.svg",
    "question": {
        "age": 54,
        "sex": "Male",
        "history": "A 49-year-old female was found to have a Right Lower Lobe Adenocarcinoma of the Lung. She underwent Left Lower Lobectomy and systemic mediastinal lymph node dissection. Pathology revealed a 2.9 cm tumor of adenocarcinoma histology with negative margins. There was no visceral pleural involvement but one of the intrapulmonary nodes was positive for carcinoma. PD-L1 expression in tumor cells by SP263 was 100% What will be the most appropriate recommendation for this patient?",
        "description": "What will be the most appropriate recommendation for this patient?",
        correctAnswerText: "d. is the correct answer \n"+
        "Patient has a 2.9 cm tumor with an intrapulmonary node making it a T1c N1 (stage IIB) disease. She will benefit from adjuvant chemotherapy (OS benefit). Additionally, if EGFR-mutant NSCLC, she will also benefit from adjuvant osimertinib (DFS benefit) based on ADAURA trial. In the absence of EGFR mutation, after receiving adjuvant chemotherapy, given the high expression of PD-L1, adjuvant atezolizumab is recommended (DFS benefit) based on the IMPower-010 trial. We strongly recommend checking for driver mutation before recommending adjuvant immunotherapy.",
        wrongAnswerText: "try again!",
        "choices": [{
                "description": "A. Active surveillance",
                "acceptedAnswer": false
            }, {
                "description": "B. 4 cycles of platinum-based chemotherapy",
                "acceptedAnswer": false
            }, {
                "description": "C. 4 cycles of cisplatin-pemetrexedfollowed by atezolizumab",
                "acceptedAnswer": false
            }, {
                "description": "D. 4 cycles of cisplatin-pemetrexed and check for EGFR mutation status",
                "acceptedAnswer": true
            }
        ],
        "caseStudies": ""
    }
}, {
    "name": "Question 3",
    "description": "",
    "backGroundImage": "url(./Background%202.svg)",
    "submitButtonBackGroundImage": "url(./Submit%201button.svg)",
    "backgroundImagePeople": "./Patient%203.svg",
    "question": {
        "age": 54,
        "sex": "Male",
        "history": "A 67-year-old female was found to have Left-sided Squamous Cell Carcinoma of the Lung. On further staging work up, disease has involved multiple mediastinal lymph nodes (stage IIIA, T2 N2 M0). "
        +"The disease was unresectable so was recommended to have definitive concurrent chemo and radiation therapy. ",
        "description": "After completing chemo-radiation, what adjuvant therapy do you recommend?",
        correctAnswerText: "c. is the correct answer \n"+
        "Patients with NSCLC after receiving definitive chemo-radiation therapy are recommended to receive maintenance durvalumab (PFS and OS benefit) based on the PACIFIC trial.",
        wrongAnswerText: "try again!",
        "choices": [{
                "description": "a.  Osimertinib",
                "acceptedAnswer": false
            }, {
                "description": "b. No more therapy but active surveillance",
                "acceptedAnswer": false
            }, {
                "description": "c. Durvalumab maintenance for one year",
                "acceptedAnswer": true
            }, {
                "description": " d. 4 cycles of chemotherapy",
                "acceptedAnswer": false
            }
        ],
        "caseStudies": ""
    }},
    {
      "name": "Question 4",
      "description": "",
      "backGroundImage": "url(./Background%202.svg)",
      "submitButtonBackGroundImage": "url(./Submit%201button.svg)",
      "backgroundImagePeople": "./Patient%203.svg",
      "question": {
          "age": 54,
          "sex": "Male",
          "history": "A 67-year-old female was found to have Left-sided Squamous Cell Carcinoma of the Lung. On further staging work up, disease has involved multiple mediastinal lymph nodes (stage IIIA, T2 N2 M0). "
          +"The disease was unresectable so was recommended to have definitive concurrent chemo and radiation therapy. ",
          "description": "After completing chemo-radiation, what adjuvant therapy do you recommend?",
          correctAnswerText: "e. is the correct answer \n"+
          "Pembrolizumab-Ipilimumab is an absolute \"no-no\" based on KEYNOTE-598 study which demonstrated adding Ipilimumab to Pembrolizumab did not improve efficacy (no difference in PFS and OS) but was associated with greater toxicity.",
          wrongAnswerText: "try again!",
          "choices": [{
                  "description": "a. Carboplatin-pemetrexed-pembrolizumab ➡ pemetrexed-pembrolizumab",
                  "acceptedAnswer": false
              }, {
                  "description": "b. Carboplatin-paclitaxel-atezolizumab- bevacizumab ➡ atezolizumab-bevacizumab",
                  "acceptedAnswer": false
              }, {
                  "description": "c. Nivolumab-Ipilimumab",
                  "acceptedAnswer": false
              }, {
                  "description": " d. Nivolumab-Ipilimumab-platinum-doublet ➡ Nivolumab-Ipilimumab",
                  "acceptedAnswer": false
              },
              {
                "description": "  e. Pembrolizumab-Ipilimumab",
                "acceptedAnswer": true
              }
          ],
          "caseStudies": ""
      }
    }
]}
 ,{"name":"","pages":[]}]};
initializeIcons();
export const App: React.FunctionComponent = () => {
  return (
    <div>
      <header>
            <link
      rel="stylesheet"
      href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css"
              />
              <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/icon?family=Material+Icons"
              />
    </header>
    <BrowserRouter>
      <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm2">
        <NavBasicExample/>
        </div>
        <div className="ms-Grid-col ms-sm10">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/game/template" element={<TrivialTemplateCreation gameObj={{name:"test",chapters:[]}} />}/>
            <Route path="/game" element={<TrivialRunner trivialTemplateModel={gameTestData}/>} />
        </Routes>
        </div>
      </div>
      </div>
    </BrowserRouter>
    </div>
  );
};

function Home() {
  return (    
  <Stack horizontalAlign="center" verticalAlign="center" verticalFill styles={stackStyles} tokens={stackTokens}>
  <img className="App-logo" src={logo} alt="logo" />
  <Text variant="xxLarge" styles={boldStyle}>
    Welcome to your Fluent UI app
  </Text>
  <Text variant="large">For a guide on how to customize this project, check out the Fluent UI documentation.</Text>
  <Text variant="large" styles={boldStyle}>
    Essential links
  </Text>
  <Stack horizontal tokens={stackTokens} horizontalAlign="center">
    <Link href="https://developer.microsoft.com/en-us/fluentui#/get-started/web">Docs</Link>
    <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">Stack Overflow</Link>
    <Link href="https://github.com/microsoft/fluentui/">Github</Link>
    <Link href="https://twitter.com/fluentui">Twitter</Link>
  </Stack>
  <Text variant="large" styles={boldStyle}>
    Design system
  </Text>
  <Stack horizontal tokens={stackTokens} horizontalAlign="center">
    <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/web/icons">Icons</Link>
    <Link href="https://developer.microsoft.com/en-us/fluentui#/styles/web">Styles</Link>
    <Link href="https://aka.ms/themedesigner">Theme designer</Link>
  </Stack>
</Stack>)
}