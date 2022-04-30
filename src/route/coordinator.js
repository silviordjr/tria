export const goToHome = (history) => {
    history.push('/')
    history.go(0)
} 

export const goToAbout = (history) => {
    history.push('/sobre')
    history.go(0)
}

export const goToContact = (history) => {
    history.push('/contato')
    history.go(0)
}

export const goToCopy = (history) => {
    history.push('/copywriting')
    history.go(0)
}


export const goToError = (history) => {
    history.push('/error')
    history.go(0)
}

export const goToSite = (history) => {
    history.push('/site')
    history.go(0)
}

export const goToSocial = (history) => {
    history.push('/redes_sociais')
    history.go(0)
}