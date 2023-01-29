import { Skill } from "../model/Competences";

const URI="http://localhost:3004";

export const getAllCompetences = () => {
    return fetch(`${URI}/competences`)
                .then((result)=> result.json())
                .catch((err)=> console.error(err))
}

export const getCompetenceService = (id:string) => {
    return fetch(`${URI}/competences/${id}`)
        .then(result => result.json())
        .catch(err => console.error(err))
}

export const addCompetenceService = (competences:Skill) => {
    return fetch(`${URI}/competences`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify(competences)
    })
        .then((result)=> result.json())
        .catch((err)=> console.error(err))
}

export const deleteCompetenceService = (id:string) => {
    return fetch(`${URI}/competences/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(error => console.error(error))
}