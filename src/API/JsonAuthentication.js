export const jsonTokenAuthenticaion = (user) => {
    return fetch(`https://assignment-11-server-amber.vercel.app/tokencollection`, {
        method: `POST`,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
};