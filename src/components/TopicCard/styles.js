import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'white',
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  content: {
    flex: 1,
    marginLeft: 10,
    marginRight: 20
  },
  title: {
    fontSize: 16,
    letterSpacing: 1.5,
    fontWeight: 'bold'
  }
});

export default styles
