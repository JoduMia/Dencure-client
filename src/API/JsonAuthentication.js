export const jsonTokenAuthenticaion = (user) => {
    return fetch(`http://localhost:4000/tokencollection`, {
        method: `POST`,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
};