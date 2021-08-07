describe('A call on the API for the peeps ', () => {
let client;
let mockDataIn;
let peep;
let mockResponseAPI;
    beforeEach(()=>{
        client = new chitterApiCl();
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