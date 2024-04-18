export async function getOneUsers(login) {
    const response = await fetch(`https://api.github.com/users/${login}`)
    return response.json()
}