import api from "@/api"


// Função de criar projeto
export async function createProject(token, titulo, categorias, descricao, conteudo ){
    try {
        await api.post("/project",
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
        
    } catch (error) {
        console.log(error)
    }
}

export async function getProjectFromID(projectID){
    try {
        const response = await api.get(`/project/${projectID}`);
        return response.data
    } catch (error) {
        console.log(error)
    }
}