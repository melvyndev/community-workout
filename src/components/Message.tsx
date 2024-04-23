import { PropsWithChildren } from "react"
type MessageProps = PropsWithChildren<{
    author: string
}>;


export const Message = ({author}:MessageProps) =>{
    return(
        <div style={{background:"red"}}>
            Mon auteur: {author}
        </div>
    )
}