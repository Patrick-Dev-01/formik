export const removeMask = (value) => {
    return value.replaceAll('()', '')
    .replaceAll('-', '')
    .replaceAll('.', '')
}