import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Keyboard,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import styles from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import ResultImc from "../../components/ResultImc";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { DrawerParamsType, Screens } from "../../routes/types";
import { TextInputMask } from "react-native-masked-text";

type NavigationType = DrawerNavigationProp<DrawerParamsType, Screens.HOME>;

const Home = (props) => {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [messageImc, setMessageImc] = useState("preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("calcular");
  const [errorMessage, setErrorMessage] = useState(null);
  const [infoVerification, setInfoVerification] = useState("");
  const { navigate } = useNavigation<NavigationType>();

  //--> CÁLCULO IMC <--//

  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    return setImc((weight / (heightFormat * heightFormat)).toFixed(2));
  }
  //------------------------------------------------------------//

  //---> VERIFICAÇÃO DE ERROS DE CAMPOS INVÁLIDOS <---//

  function verificationImc() {
    if (imc === null) {
      Vibration.vibrate();
      setErrorMessage("campo obrigatório *");
    }
  }

  function goInformativeScreen() {
    navigate(Screens.INFORMATION, { imc });
  }

  //---> VALIDAÇÃO DO FORMULÁRIO <---//

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu imc é igual: ");
      setTextButton("Calcular Novamente");
      setErrorMessage(null);
      setInfoVerification("O que Significa?");
    } else {
      setInfoVerification("");
      verificationImc();
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("preencha o peso e altura");
    }
  }
  //------------------------------------------------------------//

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.container}>
      <Animatable.View animation="bounceInDown" style={styles.AreaTitle}>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => props.navigation.openDrawer()}
        >
          <Ionicons name="menu" size={25} color="#F1F1F1" />
        </TouchableOpacity>
        <Text style={styles.Title}>Calcule seu IMC</Text>
      </Animatable.View>
      <View style={styles.AreaTxt}>
        <Text style={styles.txt}>
          O IMC é um cálculo simples que permite {"\n"} avaliar se a pessoa está
          dentro do peso que {"\n"}é considerado ideal para a sua altura.
        </Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        delay={600}
        style={styles.AreaInput}
      >
        <Text style={styles.TxtInput}>Altura</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInputMask
          type="custom"
          options={{
            mask: "9.99",
          }}
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="Ex 1.65"
          keyboardType="numeric"
        />
        <Text style={styles.TxtInput}>Peso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex 70.65"
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={styles.AreaBtn}
          onPress={() => validationImc()}
        >
          <Text style={styles.BtnTxt}>{textButton}</Text>
        </TouchableOpacity>
        <ResultImc messageResultImc={messageImc} resultImc={imc} />
        <View style={styles.AreaLine}>
          <View style={styles.LineViewLeft} />
          <TouchableOpacity
            style={styles.AreaInfo}
            onPress={goInformativeScreen}
          >
            <Text style={styles.InfoTxt}>{infoVerification}</Text>
          </TouchableOpacity>
          <View style={styles.LineViewRight} />
        </View>
      </Animatable.View>
    </Pressable>
  );
};

export default Home;
