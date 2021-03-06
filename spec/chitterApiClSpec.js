describe("Chitter API ",()=>{

    let client;
    let mockDataIn;
    let peep;
    let mockResponseAPI;
    let username;
    let password;
    let postUrlForUSer;
    let postUserRequest;
    let user;
    let postUrlForSession;
    let postSessionRequest;
    let mockResponse1;
    let session;

    beforeEach(()=>{client = new chitterApiCl()});

        describe('A call on the API for the peeps ', () => {
            
                beforeEach(()=>{
                    mockDataIn = { json:()=>{return mockResponseAPI} };
                    spyOn(window,'fetch').and.returnValue(mockDataIn)
                })


            it('getpeeps brings data with the correct call  ', () => {
                client.getPeeps();
                expect(window.fetch).toHaveBeenCalledWith('https://chitter-backend-api-v2.herokuapp.com/peeps')
            });

            it('brings back data',async () => {
                peep = await client.getPeeps();
                expect(peep).toEqual(mockResponseAPI)
            });



        })


        describe('#PostUser',()=>{

            beforeEach(()=>{
                username="testUser";
                password="testPassword";
                postUrlForUSer="https://chitter-backend-api-v2.herokuapp.com/users";
                postUserRequest = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: `{"user":{"handle":"${username}","password":"${password}"}}`
                };
                let  mockResponse={json:()=>{return mockPostUserResponse}};
                spyOn(window,"fetch").and.returnValue(mockResponse);

            })

        it('posts a user with the correct call', () => {
            client.postUsers(username,password);
            expect(window.fetch).toHaveBeenCalledWith(postUrlForUSer,postUserRequest)
        });

        it('returns the correct API response when a user is posted', async() => {
            user=await client.postUsers(username,password);
            expect(user).toEqual(mockPostUserResponse)
        });


        })

        describe('#PostSession',()=>{
            beforeEach(()=>{
                username="testUser";
                password="testPassword";
                postUrlForSession="https://chitter-backend-api-v2.herokuapp.com/sessions";
                postSessionRequest = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: `{"session":{"handle":"${username}","password":"${password}"}}`
                    };
                mockResponse1={json:()=>{return mockPostSessionResponse}};
                spyOn(window,"fetch").and.returnValue(mockResponse1);

            })

        it('posts a session with the correct call', () => {
            client.postSessions(username,password);
            expect(window.fetch).toHaveBeenCalledWith(postUrlForSession,postSessionRequest)
        });

        it('returns the correct API response when a session is posted', async() => {
            session=await client.postSessions(username,password);
            expect(session).toEqual(mockPostSessionResponse)
        });



        })

})









