import api from "@/api";


// Funções de pesquisa de projetos

export async function getProjects(){
    api.get('/project/search')
    .then(function (response) {
        projects_list = response.data[0]
    })
    .catch(function (error) {                    
        console.log(error);
    });
}