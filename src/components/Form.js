import {useState} from "react"
import {Input} from "@chakra-ui/react"


const defaultTodos = ["Buy flowers for mom's birthday 🥰", "Organize photo shoot 🤔", "Fix bugs 🥴", "Plan weekend 🧐", "Meet with George 🤗"]

function Form({addTodo}) {
    const [value, setValue] = useState("")

    const getRandomPlaceholder = () => defaultTodos[Math.floor(Math.random() * defaultTodos.length)]

    const handleSubmit = e => {
        e.preventDefault()
        if (!value.trim()) return
        addTodo(value)
        setValue("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input value={value}
                   variant="filled"
                   mb={5}
                   placeholder={getRandomPlaceholder()}
                   onChange={e => setValue(e.target.value)}/>
        </form>
    )
}

export default Form;
