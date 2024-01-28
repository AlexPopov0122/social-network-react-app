import {FC, useEffect, useState} from "react";
import {Button} from "antd";

const Chat: FC = () => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

    useEffect(() => {
        let ws: WebSocket

        const closeHandler = () => {
            console.log("close ws")
            setTimeout(createChannel, 3000)
        }
        function createChannel() {
            ws?.removeEventListener("close", closeHandler)
            ws?.close()
            ws = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")
            ws.addEventListener("close", closeHandler)
            setWsChannel(ws)
        }
        createChannel()

        return () => {
            ws.removeEventListener("close", closeHandler)
            ws.close()
        }
    }, [])

    return <div>
        <Messages wsChannel={wsChannel}/>
        <AddMessagesForm wsChannel={wsChannel} />
    </div>
}

type ChatType =  {
    message: string
    photo: string
    userId: number
    userName: string
}


const Messages: FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {
    const [messages, setMessages] = useState<ChatType[]>([])

    const messageHandler = (e: MessageEvent) => {
        const newMessage = JSON.parse(e.data)
        setMessages((prevMassages) => {
            return [...prevMassages, ...newMessage]
        })
    }
    useEffect(() => {
        if(wsChannel !== null) {
            wsChannel?.addEventListener("message", messageHandler)
        }

        return () => {
            wsChannel?.removeEventListener("message", messageHandler)
        }
    }, [wsChannel])

    return <div style={{height: "600px", overflowY: "auto"}}>
        {messages.map((m, i) => <Message message={m} key={i}/>)}
    </div>
}

const Message: FC<{message: ChatType}> = ({message}) => {
    return <div>
        <img style={{width: "50px"}} src={message.photo} alt="avatar"/>
        <b>{message.userName}</b>
        <div>{message.message}</div>
        <hr/>
    </div>
}

const AddMessagesForm: FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {
    const [message, setMessage] = useState("")
    const [readyStatus, setReadyStatus] = useState<"ready" | "pending">("pending")

    useEffect(() => {
        let openHandler = () => {
            setReadyStatus("ready")
        }

        const closeHandler = () => {
            setReadyStatus("pending")
        }
            wsChannel?.addEventListener("open", openHandler)
            wsChannel?.addEventListener("close", closeHandler)

        return () => {
            wsChannel?.removeEventListener("open", openHandler)
            wsChannel?.removeEventListener("close", closeHandler)
        }
    }, [wsChannel])

    const sendMessage = () => {
        if(!message) {
            return
        }
        wsChannel?.send(message)
        setMessage("")
    }

    return <div>
        <div>
            <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
        </div>
        <div>
            <Button type={"primary"} onClick={sendMessage} disabled={wsChannel === null || readyStatus !== "ready"}>Send</Button>
        </div>
    </div>
}

export default Chat