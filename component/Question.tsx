import React, { useState } from 'react';
import { View, Text,StyleSheet  } from 'react-native';
import { RadioButton } from 'react-native-paper';

export interface QuestionProps {
  questionId: number;
  question: string;
  answers: string[];
  correctAnswer:string;
  onSelectAnswer: (answer: string, correctanswer: string, questionId:number) => void;
}

export const Question: React.FC<QuestionProps> = ({ questionId, question, answers, correctAnswer,onSelectAnswer }) => {
  const [selectedValue, setSelectedValue] = useState(''); // State to keep track of selected value

  const handleSelect = (value) => {
    // Update selectedValue state when a radio button is pressed
    setSelectedValue(value);
    onSelectAnswer(value,correctAnswer,questionId)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {answers.map((answer, index) => (
        // <Button 
        //   title={answer} 
        //   onPress={() => onSelectAnswer(answer,correctAnswer,questionId)}
        //   buttonStyle={{ backgroundColor: 'green' }}
        //   textStyle={{ color: 'white' }} />
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton      
            value={answer} // Use item.id or any unique identifier as value
            status={selectedValue === answer ? 'checked' : 'unchecked'}
            onPress={() => handleSelect(answer)}
          />
          <Text>{answer}</Text>
           </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonPressed: {
    backgroundColor: 'red',
  },
});

export default Question;