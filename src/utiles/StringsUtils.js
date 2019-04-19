export const isEmpty = (str) => {
    return str === undefined || str === '' || str === null || str.replace(/\s+/g, '') === '';
}

