export const isEmpty = (str) => {
    return str === '' || str === null || str.replace(/\s+/g, '') === '';
}

