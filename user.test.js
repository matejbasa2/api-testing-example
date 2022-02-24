const axios=require('axios');
const {expect}=require('chai');

const url = 'https://api.thecatapi.com/v1/'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': '68cd2d93-dade-4606-9ac5-a862d086750c'
}

describe("Customer API Testing",async()=>{
    it("API is reachable", async()=>{
        const response = await axios.get(url, {headers});
        expect(response.data.message).to.equal('thecatapi-service')
        expect(response.status).equals(200)
    })
    it("GET breeds using wrong url provides empty array", async()=>{
        const response = await axios.get(`${url}breeds/search?energy_level=1`, {headers});
        expect(response.data).to.eql([])
        expect(response.status).equals(200)
    })
    it("GET all breeds returns 200 (OK)",async()=>{
        const response = await axios.get(`${url}breeds`, {headers});
        expect(response.status).equals(200);
    })
    it("GET breed by name (beng) returns 200 (OK)",async()=>{
        const response = await axios.get(`${url}breeds/search?breed_id=beng`, {headers});
        expect(response.status).equals(200);
    })
})