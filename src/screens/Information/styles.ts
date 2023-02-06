import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0284c7',
    alignItems: 'center',
  },
  AreaTxt: {
    backgroundColor: '#F1F1F1',
    width: '80%',
    height: '70%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  AreaTitle: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Title: {
    flex: 1,
    fontSize: 25,
    color: '#F1F1F1',
    fontFamily: 'DMSans-Bold',
    paddingLeft: 50,
    alignSelf: 'center',
  },
  Txt: {
    fontSize: 13,
    textAlign: 'left',
    padding: 20,
    fontFamily: 'DMSans-Regular',
  },
  Btn: {
    paddingLeft: 24,
  },
});

export default styles;


