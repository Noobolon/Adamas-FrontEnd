import api from "@/api"



// Função de criar evento
export async function createEvent(token, nome, endereco, descricao, data_comeco, data_encerramento){
    try {
        const new_event = await api.post("/event",
            {
                name: nome,
                address: endereco,
                description: descricao,
                start_date: data_comeco,
                end_date: data_encerramento
            },
            {
                headers: {Authorization: `Bearer ${token}`}
            }
        )
        return new_event.data
        
    } catch (error) {
        console.log(error)
    }
}


// Função de pegar evento por ID
export async function getEventFromID(eventID){
    try {
        const response = await api.get(`/event/${eventID}`);
        return response.data
    } catch (error) {
        console.log(error)
    }
}