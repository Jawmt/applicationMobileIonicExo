import React, { useEffect, useState } from "react";
import { deleteCompetenceService, getCompetenceService } from "../service/competenceService";
import { Skill } from "../model/Competences";
import { IonButton, IonCard, IonCardHeader, IonCardTitle } from "@ionic/react";
import { useHistory } from "react-router";

const CompetenceDetail = (props: any) => {
    const [competence, setCompetence] = useState<Skill>()

    useEffect(() => {
        getCompetence();
    }, [])

    const getCompetence = () => {
        getCompetenceService(props.competence)
            .then((result) => setCompetence(result));
    }
    const history = useHistory();

    const handleGoBack = () => {
        history.goBack();
    }

    const deleteCompetence = (id: string) => {
        deleteCompetenceService(id).then(() => history.push('/competences'));
    }

    return (
        <>
            <IonButton onClick={handleGoBack}>
                Go Back
            </IonButton>
            {competence && (
                <>
                <IonCard>
                    <img src={competence.image} />
                    <IonCardHeader>
                        <IonCardTitle>{competence.name}</IonCardTitle>
                    </IonCardHeader>
                </IonCard>
                <IonButton onClick={() => deleteCompetence(competence.id)} >Supprimer</IonButton>
                </>
            )}
            
        </>
    )
};

export default CompetenceDetail;
