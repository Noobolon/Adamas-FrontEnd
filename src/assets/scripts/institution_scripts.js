import api from "@/api";


// Função de pegar instituição por ID
export async function getInstFromID(instID) {
    try {
        const response = await api.get(`/institution/${instID}`)
        return response.data

    } catch (error) {
        console.log(error);
    }
}