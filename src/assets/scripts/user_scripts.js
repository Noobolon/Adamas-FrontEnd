import api from "@/api";


// Função de pegar usuário por ID
export async function getUserFromID(userID) {
    try {
        const response = await api.get(`/user/${userID}`)
        return response.data

    } catch (error) {
        console.log(error);
    }
}


//Função de editar perfil
export async function editUserProfile(token, userID, newNickname, newDescription){
    try {
        const response = await api.put(`/user`, {
            id: userID,
            nickname: newNickname,
            description: newDescription
        },
        {
            headers: {Authorization: `Bearer ${token}`}
        })
        return response.data
        
    } catch (error) {
        console.log(error);
    }


}



// Função de pegar projetos pelo ID do autor
export async function getProjectsFromUserID(userID) {
    try {
        const response = await api.get(`/project/user/${userID}`)
        return response.data

    } catch (error) {
        console.log(error);
    }
}