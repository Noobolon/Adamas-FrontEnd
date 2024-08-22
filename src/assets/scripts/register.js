import api from "@/api";

export async function registerUser(){
    api.post('/create', {
        name: this.name,
        nickname: this.nickname,
        email: this.email,
        password: this.password
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {                    
        console.log(error);
    });
}

export async function registerInstitution(){
    api.post('/create/institution', {
        name: this.name,
        email: this.email,
        cnpj: this.cnpj,
        password: this.password
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {                    
        console.log(error);
    });
}

