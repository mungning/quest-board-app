import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


interface LeaderboardProps {
  leaderboard: { name: string; score: number };
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ leaderboard }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>คะแนนรวม</Text>
      <Text key={0}>{leaderboard.score}</Text>
      {/* {leaderboard.map((entry, index) => (
        <Text key={index}>{entry.name}: {entry.score}</Text>
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Leaderboard;