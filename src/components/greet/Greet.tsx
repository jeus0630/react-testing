import { GreetProps } from "./Greet.type"

export default function Greet({name}: GreetProps) {
    return (
        <div>Hello {name}</div>
    )        
}
