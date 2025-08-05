import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { backgroundColorScreens } from '../../styles';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import OrientaScreen from '../../screens/OrientaScreen/OrientaScreen';
import ServiciosScreen from '../../screens/ServiciosScreen/ServiciosScreen';
import VactsScreen from '../../screens/ServiciosScreen/VactsScreen/VactsScreen';
import GopuScreen from '../../screens/ServiciosScreen/GopuScreen/GopuScreen';
import UnidadIgScreen from '../../screens/ServiciosScreen/UnidadIgScreen/UnidadIgScreen';
import CentroMedicoScreen from '../../screens/ServiciosScreen/CentroMedicoScreen/CentroMedicoScreen';
import DiversaScreen from '../../screens/DiversaScreen/DiversaScreen';
import VocabularioScreen from '../../screens/VocabularioScreen/VocabularioScreen';
import RiuNetScreen from '../../screens/RiuNetScreen/RiuNetScreen';
import PublicacionScreen from '../../screens/RiuNetScreen/PublicacionScreen/PublicacionScreen';
import QuizScreen from '../../screens/QuizScreen/QuizScreen';
import ResultScreen from '../../screens/QuizScreen/ResultScreen';
import Q1Screen from '../../screens/QuizScreen/Questions/Q1Screen';
import Q2Screen from '../../screens/QuizScreen/Questions/Q2Screen';
import Q3Screen from '../../screens/QuizScreen/Questions/Q3Screen';
import Q4Screen from '../../screens/QuizScreen/Questions/Q4Screen';
import Q5Screen from '../../screens/QuizScreen/Questions/Q5Screen';
import Q6Screen from '../../screens/QuizScreen/Questions/Q6Screen';
import Q7Screen from '../../screens/QuizScreen/Questions/Q7Screen';
import Q8Screen from '../../screens/QuizScreen/Questions/Q8Screen';
import Q9Screen from '../../screens/QuizScreen/Questions/Q9Screen';
import Q10Screen from '../../screens/QuizScreen/Questions/Q10Screen';


const Stack = createNativeStackNavigator();

const NavigationStack = () => {
    return (
      <SafeAreaProvider style={{backgroundColor: backgroundColorScreens}}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Orienta" component={OrientaScreen} />
            <Stack.Screen name="Servicios" component={ServiciosScreen} />
            <Stack.Screen name="VACTS" component={VactsScreen} />
            <Stack.Screen name="GOPU" component={GopuScreen} />
            <Stack.Screen name="UnidadIg" component={UnidadIgScreen} />
            <Stack.Screen name="CentroMedico" component={CentroMedicoScreen} />
            <Stack.Screen name="Diversa" component={DiversaScreen} />
            <Stack.Screen name="Vocabulario" component={VocabularioScreen} />
            <Stack.Screen name="RiuNet" component={RiuNetScreen} />
            <Stack.Screen name="Publicacion" component={PublicacionScreen} />
            <Stack.Screen name="Quiz" component={QuizScreen} />
            <Stack.Screen name="Result" component={ResultScreen} />
            <Stack.Screen name="Q1" component={Q1Screen} />
            <Stack.Screen name="Q2" component={Q2Screen} />
            <Stack.Screen name="Q3" component={Q3Screen} />
            <Stack.Screen name="Q4" component={Q4Screen} />
            <Stack.Screen name="Q5" component={Q5Screen} />
            <Stack.Screen name="Q6" component={Q6Screen} />
            <Stack.Screen name="Q7" component={Q7Screen} />
            <Stack.Screen name="Q8" component={Q8Screen} />
            <Stack.Screen name="Q9" component={Q9Screen} />
            <Stack.Screen name="Q10" component={Q10Screen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
}

export default NavigationStack;