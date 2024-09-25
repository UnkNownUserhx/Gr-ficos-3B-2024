const GETCSS = (variavel) => {
    const BodyStyles = getComputedStyle(document.body)
    return BodyStyles.getPropertyValue(variavel)
}