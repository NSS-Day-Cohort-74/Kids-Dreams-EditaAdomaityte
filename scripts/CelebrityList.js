import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const celebClicked = clickEvent.target
        const celebSport =celebClicked.dataset.sport
        if (celebClicked.dataset.type === "celebrity"){
            for (const celeb of celebrities){
             
               window.alert(`${celebClicked.innerText} is a ${celebSport} star`)
                break;
             }
           
        }
    }
)

