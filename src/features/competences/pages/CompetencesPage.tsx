import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Competences from '../components/Competences';


const CompetencesPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Competences</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <Competences />
            </IonContent>
        </IonPage>
    );
};

export default CompetencesPage;