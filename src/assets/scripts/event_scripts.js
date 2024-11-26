import api from "@/api"
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';



// Função de formatar a data final
export function formatEndDate(start_date, end_date){

    let start_month = format(start_date, "LLL")
    let end_month = format(end_date, "LLL")

    if (start_month == end_month){ // se for no mesmo mês

        let start_day = format(start_date, "d")
        let end_day = format(end_date, "d")

        if (end_day == start_day ) { // se for no mesmo mês e dia, mostrar apenas o horário
            return format(end_date, "'às' HH:mm", {locale: ptBR})

        } else { // se for só no mesmo mês  
            return format(end_date, "'dia' d 'às' HH:mm", {locale: ptBR})
        }

    } else { // se não for no mesmo mês, mostrar data completa
        return format(end_date, "d LLL 'às' HH:mm", {locale: ptBR})
    }

}

/*
    MÉTODOS POST
*/

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

// Função de se inscrever em evento
export async function subscribeToEvent(token, eventID){
    try {
        const response = await api.post(`/event/${eventID}/subscribe`,{},{
            headers: {Authorization: `Bearer ${token}`}
        });
        return response.data
    } catch (error) {
        console.log(error)
    }
}

// Função de adicionar sala a um evento
export async function addRoom(token, event_id, room_name, room_capacity) {

    try {
        const response = await api.post(`/event/${event_id}/room`,
            {
                name: room_name,
                quantity_projects: room_capacity
            },
            {
                headers: {Authorization: `Bearer ${token}`}
            }
        )
        return response.data
    } catch (error) {
        console.log(error)
    }
}



/* 
    MÉTODOS DELETE
*/

// Função de se desinscrever de um evento
export async function unsubscribeFromEvent(token, eventID){
    try {
        const response = await api.delete(`/event/${eventID}/subscribe`,{
            data: {},
            headers: {Authorization: `Bearer ${token}`}
        });
        return response.data
    } catch (error) {
        console.log(error)
    }
}



/* 
    MÉTODOS GET 
*/

// Função de pegar evento por ID
export async function getEventFromID(eventID){
    try {
        const response = await api.get(`/event/${eventID}`);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

// Função de pegar salas por ID do evento
export async function getRoomsFromEventID(token, eventID){
    try {
        const response = await api.get(`/event/${eventID}/room`,
            {
                data: {},
                headers: {Authorization: `Bearer ${token}`}
            }
        );
        return response.data
    } catch (error) {
        console.log(error)
    }
}

// Fumção de pegar projetos participantes de um evento
export async function getApprovedProjects(eventID){
    try {
        const response = await api.get(`/event/${eventID}/approved_projects`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

// Função de pegar projetos pendentes
export async function getPendingProjects(token, eventID){
    try {
        const response = await api.get(`/event/${eventID}/pending_projects`,
            {
                data: {},
                headers: {Authorization: `Bearer ${token}`}
            }
        )
        return response.data
        
    } catch (error) {
        console.log(error)
    }
}


/*
    MÉTODOS PUT
*/

// Função de editar evento
export async function editEvent(token, e_id, nome, endereco, descricao, data_comeco, data_encerramento){
    try {
        const new_event = await api.put(`/event/${e_id}`,
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

