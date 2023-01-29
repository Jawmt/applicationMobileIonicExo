import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import CompetenceDetail from '../components/CompetenceDetail';

interface UserDetailPageProps
    extends RouteComponentProps<{
        id: string;
    }> { }

const CompetenceDetailPage: React.FC<UserDetailPageProps> = ({match}) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Competence Detail {match.params.id}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <CompetenceDetail competence={match.params.id}/>
            </IonContent>
        </IonPage>
    );
};

export default CompetenceDetailPage;