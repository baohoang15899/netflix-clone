export function validateEmail(value: string) {
    // const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (value.length < 2) {
        return false
    }
    return true
}

export function validatePassword(value: string) {
    if (value.length < 4) {
        return false
    }
    else return true
}
