import {Box, IconButton, Checkbox, Editable, EditableInput, EditablePreview, Flex} from "@chakra-ui/react"
import {CloseIcon} from "@chakra-ui/icons";


function Todo({todo, onEdit, onUpdate, onDelete}) {
    const handleSubmit = editText => editText === '' ? onDelete(todo.id) : onEdit(todo.id, editText.trim())

    return (
            <Flex justifyContent="center" alignItems="center">
                <Checkbox flex="0 0 10%" size="lg" colorScheme="green"
                          isChecked={todo.completed} onChange={onUpdate}/>
                <Box flex="0 0 80%"  overflowWrap="break-word">
                    <Editable defaultValue={todo.name}
                              onSubmit={handleSubmit}>
                        <EditablePreview/>
                        <EditableInput />
                    </Editable>
                </Box>
                <IconButton icon={<CloseIcon w={2} h={2}/>} flex="0 0 5%" size="xs"
                        onClick={onDelete}>
                </IconButton>
            </Flex>

    )
}


export default Todo;
