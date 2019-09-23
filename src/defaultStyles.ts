import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  otpContainer: {
    height: 40,
  },
  otpInput: {
    fontSize: 16,
    paddingTop: 10,
    textAlign: 'center',
    width: 40,
  },
  inputsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  errorMessageContainer: {
    marginHorizontal: 25,
  },
})
