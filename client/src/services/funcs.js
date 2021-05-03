export const timeSince = (t) => {
    const date = new Date(t)
    const now = new Date()
    const delta = parseInt((now.getTime() - date.getTime()) / 1000)

    if (delta >= 31536000) {
        const e = parseInt(delta / 31536000)
        return `${e} year${(e > 1) ? 's' : ''} ago`
    } else if (delta >= 2419200) {
        const e = parseInt(delta / 2419200)
        return `${e} month${(e > 1) ? 's' : ''} ago`
    } else if (delta >= 604800) {
        const e = parseInt(delta / 604800)
        return `${e} week${(e > 1) ? 's' : ''} ago`
    } else if (delta >= 86400) {
        const e = parseInt(delta / 86400)
        return `${e} day${(e > 1) ? 's' : ''} ago`
    } else if (delta >= 3600) {
        const e = parseInt(delta / 3600)
        return `${e} hour${(e > 1) ? 's' : ''} ago`
    } else if (delta >= 60) {
        const e = parseInt(delta / 60)
        return `${e} minute${(e > 1) ? 's' : ''} ago`
    } else {
        return 'just now'
    }
}