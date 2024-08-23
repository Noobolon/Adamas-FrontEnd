import api from "@/api";


// Funções de registrar usuários e instituições

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


// Funções de fazer login com usuários e instituições

export async function loginUser(){
    api.post('/login', {
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

export async function loginInstitution(){
    api.post('/login', {
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
