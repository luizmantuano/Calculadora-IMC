import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#008B8B',
  },
  Title: {
    flex: 1,
    fontSize: 25,
    color: '#F1F1F1',
    fontFamily: 'DMSans-Bold',
    paddingLeft: 50,
  },
  TxtInput: {
    fontFamily: 'DMSans-Regular',
  },
  txt: {
    color: '#F1F1F1',
    textAlign: 'center',
    fontFamily: 'DMSans-Regular',
  },
  AreaTitle: {
    flex: 0.26,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  AreaTxt: {
    marginBottom: 80,
  },
  AreaInput: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#F1F1F1',
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  input: {
    width: '40%',
    borderRadius: 50,
    padding: 8,
    margin: 5,
    fontSize: 13,
    fontFamily: 'DMSans-Regular',
    paddingLeft: 20,
    backgroundColor: '#DCDCDC',
  },
  AreaBtn: {
    width: '65%',
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
    backgroundColor: '#006400',
    borderColor: '#F1F1F1',
    marginTop: 50,
  },
  BtnTxt: {
    textAlign: 'center',
    fontSize: 15,
    color: '#F1F1F1',
    fontFamily: 'DMSans-Bold',
  },
  Btn: {
    paddingLeft: 24,
  },
  errorMessage: {
    fontSize: 12,
    color: '#FF0000',
    fontWeight: 'bold',
  },
  AreaInfo: {},
  InfoTxt: {
    fontFamily: 'DMSans-Bold',
    fontSize: 15,
  },
  AreaLine: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  LineViewLeft: {
    borderWidth: 1,
    borderColor: '#DCDCDC',
    flexDirection: 'row',
    width: '25%',
    right: 20,
  },
  LineViewRight: {
    borderWidth: 1,
    borderColor: '#DCDCDC',
    flexDirection: 'row',
    width: '25%',
    left: 20,
  },
});

export default styles;
