import { IonButton, IonCheckbox, IonImg, IonInput, IonItem, IonLabel, IonList } from "@ionic/react"
import { useEffect, useState } from "react"
import { Skill } from "../model/Competences";
import uuid from 'react-uuid';
import { addCompetenceService, getAllCompetences } from "../service/competenceService";

const Competences = () => {
  const [listeCompetences, setListeCompetences] = useState<Skill[]>([]);
  const [newCompetence, setNewCompetence] = useState<Skill>({
    id:uuid(),
    name:"",
    image :"https://picsum.photos/200" 
  });

  useEffect(() => {
    getCompetences();
  },[])

  const getCompetences = () => {
    getAllCompetences()
    .then((res)=>setListeCompetences(res))
  }

  const handleChange= (event:any) => {
    setNewCompetence({...newCompetence, name:event.target.value});
  }

  const addCompetence= () =>{
    addCompetenceService(newCompetence).then(()=> getCompetences());
  }

  const handleDelete= (id:string) => {
    setListeCompetences(listeCompetences.filter((item) => item.id != id))
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
            listeCompetences.map((item,index) => {
              return (
                <IonItem key={index}>
                  <IonLabel>{item.name}</IonLabel>
                  <IonImg src={item.image}></IonImg>
                  
                </IonItem>

              )
            })
          }
        </IonList>
    </>
  )
}

export default Competences