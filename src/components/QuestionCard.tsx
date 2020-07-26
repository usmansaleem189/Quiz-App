import React from 'react';
import { AnswerObject } from '../App';
// import {Wrapper, ButtonWrapper} from './QuestionCard.styles';
import styles from './QuestionCard.module.css';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}


const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions
}) => (
        <div className={styles.CardContainer}>
            <p>
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map((answer) => {
                    const class_name = userAnswer ?
                        (userAnswer.answer === answer && userAnswer.answer === userAnswer.correctAnswer ?
                            styles.green :
                            userAnswer.answer === answer && userAnswer.answer !== userAnswer.correctAnswer ?
                                styles.red :
                                "") :
                        "";
                    return (
                        <div className={styles.ButtonContainer}
                            key={answer}
                        // correct={userAnswer?.correctAnswer === answer}
                        // userClicked={userAnswer?.answer === answer}
                        >
                            {/* <button className={userAnswer ? (userAnswer.answer === answer && userAnswer.answer === userAnswer.correctAnswer? styles.green : userAnswer.answer === answer && userAnswer.answer !== userAnswer.correctAnswer ? styles.red : "") : ""} disabled={userAnswer ? true : false} value={answer} onClick={callback} > */}
                            <button className={class_name} disabled={userAnswer ? true : false} value={answer} onClick={callback} >

                                <span dangerouslySetInnerHTML={{ __html: answer }} />
                            </button>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )

export default QuestionCard;