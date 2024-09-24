const TOKEN_KEY = "SAL_TOKEN";

// fun to get token from local storage
const getToken = () => {
    return localStorage.getItem(TOKEN_KEY)
}

// fun to set token in local storage
const setToken = (token: string) => {
    localStorage.setItem(TOKEN_KEY, token)
}

// fun to remove token from local storage
const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY)
}

// check if token is present in local storage
const hasToken = () => {
    return !!getToken()
}


export { getToken, setToken, removeToken, hasToken }