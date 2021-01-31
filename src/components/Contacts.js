import {ImGithub, ImMail4, ImTelegram} from "react-icons/im"
import {Box, IconButton} from "@chakra-ui/react"


const Contacts = () => {
    const boxStyle = {
        fontSize: "1.7rem",
        margin: "0 0 .75rem 0",
        color: "#A0AEC0",
        display: "flex",
        justifyContent: "center",
        alignContent: "spaceAround"
    }

    return (
        <>
            <Box style={boxStyle}>
                <a href="https://github.com/yuruyu6">
                    <IconButton aria-label="Github" mr={5} icon={<ImGithub/>}/>
                </a>
                <a href="https://t.me/grooo0">
                    <IconButton aria-label="Telegram" mr={5} icon={<ImTelegram/>}/>
                </a>
                <a href="mailto:yuruyu6@gmail.com">
                    <IconButton aria-label="Mail" mr={5} icon={<ImMail4/>}/>
                </a>
            </Box>
        </>
    )
}

export default Contacts;
