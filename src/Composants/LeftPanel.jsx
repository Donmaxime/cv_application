import '../Style/leftPanel.css'
export default function LeftPanel({infoPersonnelles, InfoPersonnellesChange, onButtonClick, infoAccroche, InfoAccrocheChange, onButton2Click}) {
    
    return (
        <>
            <h2><strong><u>Curriculum vitae</u></strong></h2>
            <div class="scrollmenu">
                <a href="#infosP">Informations personnelles</a>
                <a href="#obj">Objectif ou accroche</a>
                <a href="#exp">Expérience professionnelle</a>
                <a href="#langue">Langues</a>
            </div>
            <form className="form-container" id='infosP'>
                <h3><u>INFORMATIONS PERSONNELLES</u></h3>
                <div className="form-group">
                    <label for="txtnom">Nom:</label>
                    <input
                        className="form-input"
                        type="text"
                        id="txtnom"
                        name="nom"
                        value={infoPersonnelles.nom}
                        onChange={InfoPersonnellesChange}
                        placeholder="Nom de famille"
                    />
                </div>

                <div className='form-group'>
                    <label for="txtprenom">Prénom(s):</label>
                    <input
                        className="form-input"
                        type="text"
                        id="txtprenom"
                        name="prenom"
                        value={infoPersonnelles.prenom}
                        onChange={InfoPersonnellesChange}
                        placeholder="Prénom(s)"
                    />
                </div>

                <div className='form-group'>
                    <label for="txttitreProfil">Profil:</label>
                    <input
                        className="form-input"
                        type="text"
                        id="txttitreProfil"
                        name="titreProfil"
                        value={infoPersonnelles.titreProfil}
                        onChange={InfoPersonnellesChange}
                        placeholder="Qui êtes vous (métier) ?"
                    />
                </div>

                <div className='form-group'>
                    <label for="txtemail">E-mail:</label>
                    <input
                        className="form-input"
                        type="email"
                        id="txtemail"
                        name="email"
                        value={infoPersonnelles.email}
                        onChange={InfoPersonnellesChange}
                        placeholder="Votre email"
                    />
                </div>

                <div className='form-group'>
                <label for="numTelephone">Numéro de téléphone:</label>
                    <input
                        className="form-input"
                        type="number"
                        id="numTelephone"
                        name="telephone"
                        value={infoPersonnelles.telephone}
                        onChange={InfoPersonnellesChange}
                        placeholder="Numéro de téléphone"
                    />
                </div>

                <div className='form-group'>
                    <label for="txtlienLInk">Linkedln:</label>
                    <input
                        className="form-input"
                        type="text"
                        id="txtlienLInk"
                        name="lienLinkeln"
                        value={infoPersonnelles.lienLinkedln}
                        onChange={InfoPersonnellesChange}
                        placeholder="Lien de votre Linkedln"
                    />
                </div>

                <div className='form-group'>
                    <label for="txtlienPortfolio">Portfolio:</label>
                    <input
                        className="form-input"
                        type="text"
                        id="txtlienPortfolio"
                        name="lienPortfolio"
                        value={infoPersonnelles.lienPortfolio}
                        onChange={InfoPersonnellesChange}
                        placeholder="Lien de votre Portfolio"
                    />
                </div>
                <button type="button" onClick={onButtonClick}>Soummettre</button>
            </form>

            <br/>

            <form className="form-container" id='obj'>
                <h3><u>OBJECTIF OU ACCROCHE</u></h3>
                <textarea className="styled-textarea" placeholder="Écris ici...Un court résumé de ton profil"
                    name='accroche'
                    value={infoAccroche.accroche}
                    onChange={InfoAccrocheChange}
                ></textarea>
                <button type="button" onClick={onButton2Click}>Soummettre</button>

            </form>

            <br/>

            <form className='form-container' id='exp'>
                <h3><u>EXPERIENCE PROFESSIONNELLE</u></h3>
                <textarea className='styled-textarea' placeholder="Nom de l'entreprise et période d'activité (exemple : 'Google - Janvier 2020 à Décembre 2022')">
                    
                </textarea>
            </form>

            <br/>

            <form className='form-container' id='langue'>
                <h3><u>LANGUES</u></h3>
                <textarea className='styled-textarea' placeholder='Liste des langues parlées (avec niveau : "Anglais - Courant" / "Espagnol - Débutant")  '>

                </textarea>
            </form>
        </>
    );
}