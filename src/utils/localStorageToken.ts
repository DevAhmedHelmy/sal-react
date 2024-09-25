const TOKEN_KEY = "SAL_TOKEN";

// fun to get token from local storage
const getLocalStorageToken = () => {
    return localStorage.getItem(TOKEN_KEY)
}

// fun to set token in local storage
const setLocalStorageToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token)
}

// fun to remove token from local storage
const removeLocalStorageToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}



export { getLocalStorageToken, setLocalStorageToken, removeLocalStorageToken }