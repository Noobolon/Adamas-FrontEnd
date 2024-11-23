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

// Função de pegar projetos pelo ID do autor
export async function getProjectsFromUserID(userID) {
    try {
        const response = await api.get(`/project/user/${userID}`)
        return response.data

    } catch (error) {
        console.log(error);
    }
}