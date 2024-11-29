import api from "@/api"


// Função de criar projeto
export async function createProject(token, titulo, categorias, descricao, conteudo ){
    try {
        const new_project = await api.post("/project",
            {
                title: titulo,
                categories_add: categorias,
                description: descricao,
                content: conteudo
            },
            {
                headers: {Authorization: `Bearer ${token}`}
            }
        )
        return new_project.data
        
    } catch (error) {
        console.log(error)
    }
}


// Função de pegar projeto pelo ID do projeto
export async function getProjectFromID(projectID){
    try {
        const response = await api.get(`/project/${projectID}`);
        return response.data
    } catch (error) {
        console.log(error)
    }
}


// Função de comentar no projeto
export async function commentOnProject(token, projectID, comment){
    try {
        const response = await api.post(`/project/${projectID}/comment`,
            {
                comment: comment
            },
            {
                headers: {Authorization: `Bearer ${token}`}
            }
        ).then(new_comment =>{console.log(new_comment)})
        return response
        
    } catch (error) {
        console.log(error)
    }
}


// Função de dar curtir o projeto
export async function likeProject(token, projectID) {
    try {
        const response = await api.post("/project/like",
            {
                project_id: projectID
            },
            {
                headers: {Authorization: `Bearer ${token}`}
            }
        )
        location.reload()
        return response
        
    } catch (error) {
        console.log(error)
    }
}


// Função de remover like do projeto
export async function unlikeProject(token, projectID) {
    try {
        const response = await api.delete("/project/like",
            {
                data: {
                    project_id: projectID
                }, 
                headers: { 
                    Authorization: `Bearer ${token}`
                }
            },
        )
        location.reload()
        return response
        
    } catch (error) {
        console.log(error)
    }
}