import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonImg, IonInput, IonItem, IonLabel, IonList, IonRouterLink } from "@ionic/react"
import { useEffect, useState } from "react"
import { Skill } from "../model/Competences";
import uuid from 'react-uuid';
import { addCompetenceService, deleteCompetenceService, getAllCompetences } from "../service/competenceService";


const Competences = () => {
    const [listeCompetences, setListeCompetences] = useState<Skill[]>([]);
    const [newCompetence, setNewCompetence] = useState<Skill>({
        id: uuid(),
        name: "",
        image: "https://picsum.photos/200"
    });

    useEffect(() => {
        getCompetences();
    }, [])

    const getCompetences = () => {
        getAllCompetences()
            .then((res) => setListeCompetences(res))
    }

    const handleChange = (event: any) => {
        setNewCompetence({ ...newCompetence, name: event.target.value });
    }

    const addCompetence = () => {
        addCompetenceService(newCompetence).then(() => getCompetences());
    }

    const deleteCompetence = (id: string) => {
        deleteCompetenceService(id).then(() => getCompetences());
    }

    return (
        <>
            <IonItem>
                <IonInput placeholder="Ajouter une nouvelle compétence" onIonChange={handleChange} value={newCompetence.name} />
            </IonItem>
            <IonItem>
                <IonButton onClick={addCompetence}>Ajouter une competence</IonButton>
            </IonItem>
            
                 
            <IonList>
                
                {   

                    listeCompetences.map((item, index) => {
                        return (
                            <IonCard key={index} >
                                <IonItem routerLink={`/competence/${item.id}`}>
                                    <img src={item.image} />
                                    <IonCardHeader>
                                        <IonCardTitle>{item.name}</IonCardTitle>
                                    </IonCardHeader>
                                </IonItem>
                                <IonButton onClick={() => deleteCompetence(item.id)} >Supprimer</IonButton>
                            </IonCard>
                            



                        )
                    })
                }
            </IonList>
        </>
    )
}

export default Competences