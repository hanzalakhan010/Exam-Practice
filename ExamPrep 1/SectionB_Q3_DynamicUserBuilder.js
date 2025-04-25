// Section B - Q3: Dynamic User Builder

// Given an array of key-value pairs, construct a dynamic object
// Print the final object structure

const inputs = [
    { key: "username", value: "jdoe" },
    { key: "email", value: "jdoe@example.com" },
    { key: "role", value: "admin" }
];


let dynamicObj = {}
inputs.forEach((input) => {
    // console.log(input['key'])
    // console.log(input)
    // Object.assign({[input.key]:input.value},dynamicObj)
    dynamicObj[[input.key]] = input.value

})
console.log(dynamicObj)