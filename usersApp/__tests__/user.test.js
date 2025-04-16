const mongoose = require("mongoose");
const request = require("supertest");
const authService = require('../services/auth.service');
const userService = require('../services/user.services');
const app = require('../app');
// require('dotenv').config();



jest.setTimeout(60000);

// Connecting to MongoDB before each test
beforeAll(async ()=> {
  await mongoose.connect(process.env.MONGODB_URI)
  .then(
    () => {console.log("Connection to MongoDB established for Jest")},
    err => { console.log("Failed to connect to MongoDB for Jest", err) }
  );
});

// Close connection to MongoDB
afterAll(async ()=>{
  await mongoose.connection.close();
})

describe("Requests for /api/users", ()=>{

  let token;

  beforeAll(()=>{
    user = {
      username: "admin",
      email: "admin@aueb.gr",
      roles: ["EDITOR", "READER","ADMIN"]
    };
    token = authService.generateAccessToken(user);
  });

  it('GET Returns all users', async ()=>{
    const res = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200)
    expect(res.body.status).toBeTruthy();
    expect(res.body.data.length).toBeGreaterThan(0);
  }, 50000);

  it("POST Creates a user", async () => {
    const res = await request(app)
    .post('/api/users')
    .set('Authorization', `Bearer ${token}`)
    .send({
      'username': 'test1313',
      'password': '12345',
      'name': 'test1313 name',
      'surname': 'test5 surname',
      'email':'test1313@aueb.gr',
      'address': {
        'area': 'area1',
        'road': 'road5'
      }
    })

    expect(res.statusCode).toBe(200)
    expect(res.body.status).toBeTruthy()
  })

  it("POST Creates a user that exists", async() => {
    const res = await request(app)
      .post('/api/users')
      .set('Authorization', `Bearer ${token}`)
      .send({
        username: 'test1313',
        password: '12345',
        name: 'new name',
        surname: 'new surname',
        email: 'new@aueb.gr',
        address: {
          area: "xxx",
          road: 'yyy'
        }
      })

      expect(res.statusCode).toBe(400)
      expect(res.body.status).not.toBeTruthy()
  })
});


describe("Requests for /api/users/:username", () => {
  let token 

  beforeAll(()=>{
    user = {
      username: "lakis",
      email: "lalakis@aueb.gr",
      roles: ["EDITOR", "READER","ADMIN"]
    };
    token = authService.generateAccessToken(user);
  });

  it("Get returns specific user", async()=>{
    
    const result = await userService.findLastInsertedUser();
    
    const res = await request(app)
      .get('/api/users/'+result.username)
      .set('Authorization', `Bearer ${token}`); 
    
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBeTruthy();
    expect(res.body.data.username).toBe(result.username);
    expect(res.body.data.email).toBe(result.email);

    
  })

  
})