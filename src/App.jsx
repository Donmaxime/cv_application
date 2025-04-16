import { useState } from 'react'
import LeftPanel from './Composants/LeftPanel';
import RightPanel from './Composants/RightPanel';
import './App.css'


//Composant Parent qui contient les états, les fonctions de changements et les passent en propriétés aux composants LeftPanel et RightPanel.
function App() {
    //état des informations personnelles.
    const [infoPersonnelles, setInfoPersonnelles] = useState({
      nom:"",
      prenom:"",
      titreProfil:"",
      email:"",
      telephone:"",
      lienLinkedln:"",
      lienPortfolio:""
    });

    //état de l'Accroche
    const [infoAccroche, setInfoAccroche] = useState ({
      accroche:""
    })

    //Fonction de changement de l'état de infoPersonnelles
    const InfoPersonnellesChange = (e) => {
      const {name,value} = e.target;
      setInfoPersonnelles(prevState =>({...prevState,[name]:value}));
    }

    //Fonction de changement de l'état de l'Accroche
    const InfoAccrocheChange = (e) => {
      const {name, value} = e.target;
      setInfoAccroche(prevState =>({...prevState,[name]:value}));
    }

    //Recopie des infopersonnelles modifiées pour l'affichage dans le RightPanel
    const [infoValidees, setInfoValidees] = useState({
      nom:"",
      prenom:"",
      titreProfil:"",
      email:"",
      telephone:"",
      lienLinkedln:"",
      lienPortfolio:""
    });

    //Recopie de l'accroche modifiée pour l'affichage dans le RightPanel
    const [accrocheValidee, SetAccrocheValidee] = useState({
      accroche:""
    });

    //Bouton de validation des informations personnelles 
    const onButtonClick = () => {
      setInfoValidees(infoPersonnelles)
    }

    //Bouton de validation de l'accroche
    const onButton2Click = () => {
      SetAccrocheValidee(infoAccroche)
    }

    return (
      <div className='cv-container'>
        <div className='edit-panel'>
          <LeftPanel
            infoPersonnelles={infoPersonnelles}
            infoAccroche={infoAccroche}
            InfoPersonnellesChange={InfoPersonnellesChange}
            InfoAccrocheChange={InfoAccrocheChange}
            onButtonClick={onButtonClick}
            onButton2Click={onButton2Click}
          />
        </div>
        <div className='preview-panel'>
          <RightPanel
            infoValidees={infoValidees}
            accrocheValidee={accrocheValidee}
          />
        </div>
      </div>
    );
}

export default App