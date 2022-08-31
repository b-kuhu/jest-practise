import request from "supertest";
import app from '../app';
import typeORM from "typeorm";
import { myDataSource } from "../appDataSource";
import { Server } from "http";
import {describe,it, expect, test} from '@jest/globals';


let connection:typeORM.DataSource,server:Server;
beforeEach(async()=>{
   connection = await myDataSource.initialize();
    await connection.synchronize();
    server = app.listen(3000);
   
});

afterEach(async()=>{
    connection.destroy();
    server.close();
    
})
describe("my component",()=>{
    it("should be no users intitially",async()=>{
   const response = await request(app).get('/animals');
   console.log(response.body);
}),
30000;
})

// describe("GET /animals", () => {
//     const newAnimal = {
//       id:12,
//       name: "Dog2",
//       breed: "breed2",
//     }
//     beforeAll(async () => {
//       // set up the  new animal
//       await request(app).post("/animals").send(newAnimal);
//     })
//     afterAll(async () => {
//       await request(app).delete(`/animals/${newAnimal.id}`)
//     })
//     it("should return 200", async () => {
//       const response = await request(app).get("/animals");
//       expect(response.statusCode).toBe(200);
//     //   expect(response.body.error).toBe(null);
//     });
//     it("should return todos", async () => {
//       const response = await request(app).get("/animals");
//       expect(response.body.data.length >= 1).toBe(true);
//     });
//   });
// describe("endpoints /animals",()=>{  
    
//     jest.setTimeout(2000);
//      test("returns 200 if animal is created",async()=>{
     
//         const res =  await request(app).post('/animals').send({name:"tommy",breed:"dog2"});
      
//         expect(res.statusCode).toEqual(200);
       
//     })
//     it("get Animals",async()=>{
//         const res =  await request(app).get('/animals').send();
//         expect(res.statusCode).toBe(200);
//     })
//     // test("get sum",()=>{
//     //     expect(2+3).toBe(5);
//     // })
// })



// describe('Get All users request',()=>{
//     let mockRequest :Partial<Request>;
//     let mockResponse:Partial<Response>;
//     let responseObject={};

//     beforeEach(()=>{
//         mockRequest={};
//         mockResponse={
//             statusCode:0,
//             send:jest.fn().mockImplementation(result=>{
//                 responseObject=result;
//             })
//         }
//     });
//     test('200 - users',async()=>{
//         const expectedStatusCode= 200;
//         const expectedResponse={
//             users:[
//                 {
//                     name:'John',
//                     age:30
//                 },
//                 {
//                     name:'Peter',
//                     age:40
//                 }
//             ]
//         };

//       users.getAllUsers(mockRequest as Request, mockResponse as Response);
//         expect(mockResponse.statusCode).toBe(expectedStatusCode);
        
//     });
// });