class chitterApiCl {

    async getPeeps (){

        let  response = await fetch ('https://chitter-backend-api-v2.herokuapp.com/peeps')
        let data = await response.json();
        console.log(data);
        return data;
    }


    async postUsers(username,password){

        let postData = this.createSessionUserData(username,password);
        let postRequest=this.createRequest('user', postData)
        let respone = await fetch('https://chitter-backend-api-v2.herokuapp.com/users',postRequest);
        let data = await respone.json();
        return data;
    }

    async postSessions(username,password){

        let postData = this.createSessionUserData(username,password);
        let postRequest=this.createRequest('session', postData)
        let respone = await fetch('https://chitter-backend-api-v2.herokuapp.com/sessions',postRequest);
        let data = await respone.json();
        return data;
    }





    createSessionUserData(username,password){
    return{
        "handle":username,
        "password": password
    }

    }
 
        createRequest (type,data){
        let hashbody={};
        hashbody[type]=data
        return{
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
        },
        body:JSON.stringify(hashbody)

        }

        }
}








