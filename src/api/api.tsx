export const apiUrl = 'localhost:8080';

export function getContacts() {
    fetch(apiUrl + '/contacts')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(e => console.log(e))
}