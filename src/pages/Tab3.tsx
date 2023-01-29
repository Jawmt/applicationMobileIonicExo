import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Competences from '../features/competences/components/Competences';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Competences />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
