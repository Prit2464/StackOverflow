import React from 'react'
import Question from './Question'
function Questionlist({ questionList }) {
    console.log(questionList)
    return (
        <>
            {questionList.map((question) => (
                <Question question={question} key={question._id} />
            ))}
        </>
    )
}

export default Questionlist