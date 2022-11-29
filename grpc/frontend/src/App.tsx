import React, { useState } from 'react'
import './App.css'

import * as grpcWeb from 'grpc-web'
import { ElizaServiceClient } from './gen/ElizaServiceClientPb.js'
import { SayRequest, IntroduceRequest } from './gen/eliza_pb'

interface Response {
    text: string
    sender: 'eliza' | 'user'
}

const client = new ElizaServiceClient('http://localhost:8072')

function App() {
    const [statement, setStatement] = useState<string>('')
    const [introFinished, setIntroFinished] = useState<boolean>(false)
    const [responses, setResponses] = useState<Response[]>([
        {
            text: 'What is your name?',
            sender: 'eliza',
        },
    ])

    const send = async (sentence: string) => {
        setResponses((resp) => [...resp, { text: sentence, sender: 'user' }])
        setStatement('')

        if (introFinished) {
            const req = new SayRequest()
            req.setSentence('Hi!')
            const response = await client.say(req, {})

            setResponses((resp) => [
                ...resp,
                { text: response.getSentence(), sender: 'eliza' },
            ])
        } else {
            const request = new IntroduceRequest()
            request.setName(sentence)

            client
                .introduce(request, {})
                .on('data', (response) => {
                    setResponses((resp) => [
                        ...resp,
                        { text: response.getSentence(), sender: 'eliza' },
                    ])
                })
                .on('end', () => {
                    setIntroFinished(true)
                })
        }
    }

    const handleStatementChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setStatement(event.target.value)
    }

    const handleSend = () => {
        send(statement)
    }

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            handleSend()
        }
    }

    return (
        <div>
            <header className="app-header">
                <h1>Eliza</h1>
            </header>
            <div className="container">
                {responses.map((resp, i) => {
                    return (
                        <div
                            key={`resp${i}`}
                            className={
                                resp.sender === 'eliza'
                                    ? 'eliza-resp-container'
                                    : 'user-resp-container'
                            }
                        >
                            <p className="resp-text">{resp.text}</p>
                        </div>
                    )
                })}
                <div>
                    <input
                        type="text"
                        className="text-input"
                        value={statement}
                        onChange={handleStatementChange}
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={handleSend}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default App
