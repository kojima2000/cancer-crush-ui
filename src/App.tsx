import React from 'react';
import "./fonts/Montserrat-Regular.ttf";
import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles, initializeIcons } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import TrivialTemplateCreation from './Components/TrivialTemplateEngine/TrivialTemplateCreation';
import TrivialRunner from './Components/TrivialRunner/TrivialRunner';
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
  [{"description":"Submit a quiz question","question":{"age":54,"sex":"Male","history":"Patient was found to have a Right Upper Lobe Adenocarcinoma. He underwent Right Upper Lobe Lobectomy and systematic mediastinal lymph node dissection. Pathology demonstrated a 2.2 cm tumor of adenocarcinoma histology with negative margins. Additionally, there were no visceral pleural invasion and none of the dissected lymph nodes were positive for carcinoma","description":"What is the next best step in the management of this patient?","choices":[{"description":"Check for PD-L1","acceptedAnswer":false},{"description":"Check EGFR mutation status","acceptedAnswer":false},{"description":"4 cycles of platinum-based chemotherapy","acceptedAnswer":false},{"description":"Active surveillance ","acceptedAnswer":true}],"caseStudies":""}},
  {"description":"Submit a quiz question","question":{"age":54,"sex":"Male","history":"you are at page2","description":"What is the next best step in the management of this patient?","choices":[{"description":"Check for PD-L1","acceptedAnswer":false},{"description":"Check EGFR mutation status","acceptedAnswer":false},{"description":"4 cycles of platinum-based chemotherapy","acceptedAnswer":false},{"description":"Active surveillance ","acceptedAnswer":true}],"caseStudies":""}},
  {"description":"Submit a quiz question","question":{"age":54,"sex":"Male","history":"you are at page2","description":"What is the next best step in the management of this patient?","choices":[{"description":"2","acceptedAnswer":false},{"description":"Check EGFR mutation status","acceptedAnswer":false},{"description":"4 cycles of platinum-based chemotherapy","acceptedAnswer":false},{"description":"Active surveillance ","acceptedAnswer":true}],"caseStudies":""}}
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
    </header>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/test" element={<TrivialTemplateCreation gameObj={{name:"test",chapters:[]}} />}/>
          <Route path="/game" element={<TrivialRunner trivialTemplateModel={gameTestData}/>} />
      </Routes>
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