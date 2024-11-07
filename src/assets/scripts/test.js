import api from "@/api";

export async function getProjectFromUserID(userID){
    api.post(`/project/user/${userID}`, {

    })
    .then(function (response) {
        return response
    })
    .catch(function (error) {                    
        console.log(error);
    });
}