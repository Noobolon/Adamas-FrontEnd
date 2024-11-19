import api from "@/api"


// Função de criar projeto
export async function createProject(token){
    try {
        await api.post("/project",
            {
                title: this.title,
                description: this.description,
                content: this.content
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