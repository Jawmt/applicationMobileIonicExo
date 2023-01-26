import { Skill } from "../model/Competences";

const URI="http://localhost:3004";

export const getAllCompetences = () => {
    return fetch(`${URI}/competences`)
                .then((result)=> result.json())
                .catch((err)=> console.error(err))
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