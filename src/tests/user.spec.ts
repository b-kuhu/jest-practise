import { Request,Response } from "express";
import request from "supertest";


import app from '../app';


describe("GET /animals",()=>{  
    
    jest.setTimeout(10000);
     it("returns 200 if animal is created",async()=>{
     
        const res =  await request(app).post('/animals').send({name:"tommy",breed:"dog2"});
      
        expect(res.statusCode).toEqual(200);
       
    })
})


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
//     test('200 - users',()=>{
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

//         getAllUsers(mockRequest as Request,mockResponse as Response);
//         expect(mockResponse.statusCode).toBe(expectedStatusCode);
//         expect(responseObject).toEqual(expectedResponse);
//     });
// });