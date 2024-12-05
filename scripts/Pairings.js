import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()


const findCelebrityMatch = (kid) => {
    const celebrities = getCelebrities()
    let Celebrity = null

    for (const celebrity of celebrities) {
        if (celebrity.id === kid.celebrityId){
            Celebrity = celebrity
        }
    }

    return Celebrity
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid)
        html += `
            <li>
                ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star. They will ${kid.wish}.
            </li>
        `
    }

    html += "</ul>"

    return html
}

