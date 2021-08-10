class chitterApiCl {

    async getPeeps (){

        let  response = await fetch ('https://chitter-backend-api-v2.herokuapp.com/peeps')
        let data = await response.json();
        console.log(data);
        return data;
    }


    async postUsers(username,password){

        let postData = this.createSessionUserData(username,password);
        let postRequest=this.createPostRequest('user', postData)
        let respone = await fetch('https://chitter-backend-api-v2.herokuapp.com/users',postRequest);
        let data = await respone.json();
        return data;
    }

    async postSessions(username,password){

        let postData = this.createSessionUserData(username,password);
        let postRequest=this.createPostRequest('session', postData)
        let respone = await fetch('https://chitter-backend-api-v2.herokuapp.com/sessions',postRequest);
        let data = await respone.json();
        return data;
    }


    async postPeeps(peep,userId,sessionKey){

        let postData={"userId": userId,"body": peep}
        let postRequest=this.createPostRequest("peep",postData,sessionKey)
        let response = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps',postRequest)
        let data = await response.json();
        return data;
    }





    createSessionUserData(username,password){
    return{"handle":username,"password": password}}
 




            createPostRequest(type,data,sessionKey){
                let headers=this.createHeaders(sessionKey);
                        
                let hashbody={};
                hashbody[type]=data
                return{
                method: "POST",
                headers:headers, 
                body:JSON.stringify(hashbody)

                    }

            }

            createHeaders = (sessionKey)=>{
                let headers = {'Content-Type': 'application/json'}
                if (sessionKey!==undefined) {
                    headers['Athorisation']=`Token token=${sessionKey}`
                    
                }
                return headers;
            }





            
        }








