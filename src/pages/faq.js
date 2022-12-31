import * as React from 'react'

import PageRoot from '../components/PageRoot'

const faqs = [
    {
        question: "Are you open?",
        answer: "Yes! Members are welcome with their 24/7 access any time with their provided keycard. Non-members can buzz the space from the vestibule and if a member is present and willing to host, they will buzz you up. Otherwise, if you are a non-member, please come during our Open House hours on Tuesdays and Thursdays at 7 P.M. - Attendees must provide proof of vaccination."
    },
    {
        question: "Is food allowed?",
        answer: "Yes, food is allowed - but please don't store anything overnight."
    },
    {
        question: "What kinds of projects are people working on here?",
        answer: "People work on projects ranging from sewing cosplay outfits to creating custom video game consoles. Feel free to ask around when you see people in the space!"
    },
    {
        question: "How do I become a member?",
        answer: "Once you've attended 2 Open Houses, you are welcome to submit an application to apply to be a member - once you're here for the third time, ask the member hosting the open house to give you a tour and they will walk you through the application process."
    },
]

const FAQ = () => (
    <PageRoot>
        <h1>Frequently asked questions</h1>
        <div>
            {faqs.map(({question, answer}) => <React.Fragment>
                <h2>{question}</h2>
                <p>{answer}</p>
            </React.Fragment>)}
        </div>
        <h3>
            Don't see your question answered? Email us at info@hackmanhattan.com or join us on Discord (Discord will typically get a faster response).
        </h3>
    </PageRoot>
)

export default FAQ