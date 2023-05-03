const express  = require('express')
const faker = require('faker')
const app = express()
const port = 8000


const creatUser = () => ({
    _id: faker.datatype.uuid(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
})

console.log(creatUser())

const createCopmay=() =>({
    _id: faker.datatype.uuid(),
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
    const newUser = creatUser()
    res.json(newUser);
})

app.get("/api/companies/new" , (req, res)=> {
    const newCompany = createCopmay()
    res.json(newCompany);
})

app.get("/api/user/company", (req, res) =>{
    const newUser = creatUser();
    const newCompany = createCopmay();
    const response = {
        user: newUser,
        company: newCompany,
    };
    res.json(response);
})

app.listen(port, () => console.log(`express server running on port ${port}`));