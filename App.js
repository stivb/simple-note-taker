import { Text, SafeAreaView, StyleSheet, FlatList, ScrollView, TextInput, Button, View} from 'react-native';

export default function App() {

  const notes = ["First Item","Second Item","Third Item"]

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
      style={styles.textbox}
      />

      <FlatList
      data={notes}
      renderItem={({item}) => <View style={styles.listItem}><Text>{item}</Text></View>}
      />

      <Text style={styles.heading}>Add and Edit Notes Below</Text>
      <TextInput
        editable
        multiline
        numberOfLines={6}
        maxLength={40}
        style={styles.textbox}
      />
      <Button title="Add Note"  ></Button>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    margin:20
  },
  textbox: {
    marginTop: 24,
    borderWidth: 3,
    marginBottom:24
  },
  heading: {
    fontSize:22,
    textAlign:'center'
  },
  listItem: {
    margin: 2,
    borderWidth: 1,
    backgroundColor: '#ffff00',
    padding: 3
  },
});
