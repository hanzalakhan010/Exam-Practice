// Section B - Q4: Mini REST Client App

// Write a function createStudent(name, age) that sends a POST request
// Use fetch to send JSON data to http://localhost:4000/students

async function createStudent(name, age) {
    try {
        let response = await fetch('http://localhost:4000/students', {
            method: "POST",
            body: JSON.stringify({
                name, age
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let data = await response.json()
        console.log(data.message)
    } catch {
        console.log("Error Requesting to server")
    }
}