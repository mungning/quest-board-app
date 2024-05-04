import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { shuffleArray } from './utils/utils';
import { Question, QuestionProps} from './component/Question'
import { Leaderboard } from './component/LeaderBoard'
import { Button } from 'react-native-web';

const QUESTIONS_PER_GAME = 20;
const ANSWERS_PER_QUESTION = 4;
let result = 0;

const questionsData = [
  // Your questions data here...
  {
    questionId: 1,
    question: "1 + 1",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "2"
  },
  {
    questionId: 2,
    question: "2 + 2",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "4"
  },
  {
    questionId: 3,
    question: "3 + 3",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "6"
  },
  {
    questionId: 4,
    question: "3 + 3",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "6"
  },
  {
    questionId: 5,
    question: "4 + 4",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "8"
  },
  {
    questionId: 6,
    question: "5 + 3",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "8"
  },
  {
    questionId: 7,
    question: "4 + 2",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "6"
  },
  {
    questionId: 8,
    question: "1 + 3",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "4"
  },
  {
    questionId: 9,
    question: "6 + 2",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "8"
  },
  {
    questionId: 10,
    question: "1 + 3",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "4"
  },
  {
    questionId: 11,
    question: "5 - 3",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "2"
  },
  {
    questionId: 12,
    question: "12 - 6",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "6"
  },
  {
    questionId: 13,
    question: "3 - 1",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "2"
  },
  {
    questionId: 14,
    question: "10 - 2",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "8"
  },
  {
    questionId: 15,
    question: "5 + 1",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "6"
  },
  {
    questionId: 16,
    question: "2 + 3",
    answers: ["2", "4", "5", "8"],
    correctAnswer: "5"
  },
  {
    questionId: 17,
    question: "5 + 2",
    answers: ["2", "4", "6", "7"],
    correctAnswer: "7"
  },
  {
    questionId: 18,
    question: "5 + 4",
    answers: ["2", "4", "6", "9"],
    correctAnswer: "9"
  },
  {
    questionId: 19,
    question: "5 + 1",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "6"
  },
  {
    questionId: 20,
    question: "9 + 1",
    answers: ["2", "4", "10", "8"],
    correctAnswer: "10"
  },
  {
    questionId: 21,
    question: "12 - 2",
    answers: ["2", "10", "6", "8"],
    correctAnswer: "10"
  },
  {
    questionId: 22,
    question: "4 + 1",
    answers: ["2", "5", "6", "8"],
    correctAnswer: "5"
  },
  {
    questionId: 23,
    question: "5 + 1",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "6"
  },
  {
    questionId: 24,
    question: "5 + 5",
    answers: ["2", "4", "6", "10"],
    correctAnswer: "10"
  },
  {
    questionId: 25,
    question: "20 - 12",
    answers: ["2", "4", "6", "8"],
    correctAnswer: "8"
  },
  
];

const App: React.FC = () => {

  const [questions, setQuestions] = useState<{questionId:number; question: string; answers:string[];correctAnswer:string}[]>([]);
  const [leaderboard, setLeaderboard] = useState<{ name: string; score: number }>({ name:'', score:0 });
  const [lstReply, setReplyQuest] = useState<number[]>([]);
  const [didLoad, setDidLoad] = useState<boolean>(false);

  useEffect(() => {
    if (!didLoad) {
    const shuffledQuestions = shuffleArray(questionsData).slice(0, QUESTIONS_PER_GAME);
    // Shuffle the answers within each question
    const processedQuestions = shuffledQuestions.map(question => ({
      ...question,
      answers: shuffleArray(question.answers),
    }));
    setQuestions(processedQuestions);
    setDidLoad(true);
  }
  }, [didLoad]);


  
  const handleSelectAnswer = (answer: string, correctanswer: string, questionId:number) => {
    // Logic to handle user's answer selection
    if(answer.toString() == correctanswer.toString()){
      if(lstReply.findIndex(f => f == questionId) == -1){
        setReplyQuest(lstReply => [...lstReply, questionId]); 
      }     
    }else{   
      setReplyQuest(lstReply => lstReply.filter(number => number !== questionId));  
    }
  };

  const onPressButton = () => {
    result = lstReply.length
    let data = {name: 't1', score:result}     
    setLeaderboard(data)
  };


  return (
    <View style={styles.container}>
      <ScrollView>
        {questions.map((question, index) => (
          <Question questionId={question.questionId} question={question.question} answers={question.answers} correctAnswer={question.correctAnswer} onSelectAnswer={handleSelectAnswer} />
        ))}
      </ScrollView>
      <Button
        title="Summary"
        onPress={onPressButton}
      />
      <Leaderboard leaderboard={leaderboard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default App;