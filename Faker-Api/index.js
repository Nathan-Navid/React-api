const express  = require('express')
const {faker} = require('@faker-js/faker')
const app = express()
const port = 8000



const creatUser = () => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    password: faker.internet.password(),
    email: faker.internet.email(),
})

console.log(creatUser())

const createCopmay=() =>({
    id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    },
})
console.log(createCopmay())

app.get("/api/users/new" , (req, res)=> {
    // const newUser = creatUser()
    // res.json(newUser);
    res.json(creatUser())
})

app.get("/api/companies/new" , (req, res)=> {
    // const newCompany = createCopmay()
    // res.json(newCompany);
    res.json(createCopmay())
})

app.get("/api/user/company", (req, res) =>{
    // const newUser = creatUser();
    // const newCompany = createCopmay();
    // const response = {
    //     user: newUser,
    //     company: newCompany,
    // };
    // res.json(response);
    res.json({
        user: creatUser(),
        company: createCopmay(),
    })
})

app.listen(port, () => console.log(`express server running on port ${port}`));

