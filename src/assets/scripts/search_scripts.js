import api from "@/api";

export async function searchProject(search) {
    try {
        const response = await api.get(`/project/search${search}`);
        return response.data
    } catch (error) {
        console.log(error)
    }
}