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
        .then(function (response){
            // console.log(response)
        })
        
    } catch (error) {
        console.log(error)
    }
}


// Função de adicionar tag ao projeto (incompleto)
// export async function addTag(token, projectID, tag_name){
//     try {
//         await api.post(`/project/${projectID}`,
//             {
//                 category_name: tag_name,
//             },
//             {
//                 headers: {Authorization: `Bearer ${token}`}
//             }
//         )
//         .then(function (response){
//             console.log(response)
//         })
        
//     } catch (error) {
//         console.log(error)
//     }
// }