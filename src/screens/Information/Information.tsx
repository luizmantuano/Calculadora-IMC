import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RouteProp, useRoute } from '@react-navigation/native';
import { InformativeTextType, INFORMATIVE_TEXTS } from '../../constants/texts';
import { DrawerParamsType, Screens } from '../../routes/types';

type RouteType = RouteProp<DrawerParamsType, Screens.INFORMATION>

const Information = ({ navigation }) => {
  const [content, setContent] = useState<InformativeTextType>();
  const { params } = useRoute<RouteType>();
  console.log(params);

  function setContentbyImc(imc: number) {
    if (imc <= 18.5) {
      const contentObject = INFORMATIVE_TEXTS[0];
      setContent(contentObject);
    }
    if (imc > 18.5 && imc <= 24.9) {
      const contentObject = INFORMATIVE_TEXTS[1];
      setContent(contentObject);
    }
    if (imc > 24.9 && imc <= 29.9) {
      const contentObject = INFORMATIVE_TEXTS[2];
      setContent(contentObject);
    }
    if (imc > 29.9 && imc <= 39.9) {
      const contentObject = INFORMATIVE_TEXTS[3];
      setContent(contentObject);
    }
    if (imc > 40) {
      const contentObject = INFORMATIVE_TEXTS[4];
      setContent(contentObject);
    }
  }

  useEffect(() => {
    if (params && params.imc) {
      setContentbyImc(Number(params.imc));
    }
  }, [params]);

  if (!content) {
    return null;
  }

  return (
    <View style={[styles.container, { backgroundColor: content.bgColor }]}>
      <View style={styles.AreaTitle}>
        <TouchableOpacity style={styles.Btn} onPress={() => navigation.openDrawer()}>
          <Ionicons name='menu' size={25} color='#F1F1F1' />
        </TouchableOpacity>
        <Text style={styles.Title}>{content.title}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.AreaTxt}>
        <Text style={styles.Txt}>{content.text}</Text>
      </ScrollView>
    </View>
  );
};

export default Information;
