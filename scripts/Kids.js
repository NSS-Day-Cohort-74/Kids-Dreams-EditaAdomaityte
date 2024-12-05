import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" 
                    data-type="child" 
                    data-wish="${child.wish}"
                >${child.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) =>{
        const kidClicked=clickEvent.target
        const wish=kidClicked.dataset.wish
        if ( kidClicked.dataset.type === "child"){
            for (const child of children){
                window.alert(`${kidClicked.innerText} wish is to ${wish}`)
                break
            }
        }
    }

)