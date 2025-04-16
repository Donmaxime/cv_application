export default function RightPanel({infoValidees, accrocheValidee}) {
    return (
        <>
            <div>
                <p style={{display:'flex', justifyContent:'center', fontFamily:'Georgia, serif'}}>{infoValidees?.prenom}</p>
                <div><h2>{infoValidees?.nom}</h2></div>
                <h3>{infoValidees?.titreProfil}</h3>
            </div>

            <div>
                <p>{accrocheValidee?.accroche}</p>
            </div>
        </>
    );
}