const getCSS = (variavel) => {
    const BodyStyles = getComputedStyle(document.body)
    return BodyStyles.getPropertyValue(variavel)
}

const tickconfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
}

export {getCSS, tickconfig}