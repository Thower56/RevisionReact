import logo from './logo.svg';
import './App.css';
import { AffichageCouleurs } from './AffichageCouleur/Couleurs/AffichageCouleurs';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { ChangerDePage } from './ChangerDePage.js';
import { BarreNavigation } from './BarreNavigation.js';
import {Billeterie} from './Billeterie/Billeterie.js';
import {PanierEpicerie} from './PanierEpicerie/PanierEpicerie.js';
import {PrevisionsMeteo} from './PrevisionsMeteo/PrevisionsMeteo.js';
import { TempsEntrainement } from './TempsEntrainement/TempsEntrainement.js';

function App() {
  return (
    <BrowserRouter>
    <Container>
    <BarreNavigation />
      <Routes>

        <Route path='/AffichageCouleur/Couleurs' element={
        <>
          <AffichageCouleurs />
          <ChangerDePage location={'/AffichageCouleur/Couleurs/'} message={'Next page'}/>
        </>
        }/>

        <Route path='/Billeterie/' element={
        <>
          <Billeterie />
          <ChangerDePage location={'/PanierEpicerie/'} message={'Next page'}/>
        </>
        }/>

        <Route path='/PanierEpicerie/' element={
        <>
          <PanierEpicerie />
          <ChangerDePage location={'/PrevisionsMeteo/'} message={'Next page'}/>
        </>
        }/>
        <Route path='/PrevisionsMeteo/' element={
        <>
          <PrevisionsMeteo />
          <ChangerDePage location={'/TempsEntrainement/'} message={'Next page'}/>
        </>
        }/>
        <Route path='/TempsEntrainement/' element={
          <>
            
            <TempsEntrainement/>
            <ChangerDePage location={'/'} message={'Next page'}/>
          </>
        }/>
      </Routes>
    </Container>
  </BrowserRouter>
  );
}

export default App;
