import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterScreen from './RegisterScreen';
import HomePage from './HomePage';
import Test from "./test";
import Myr from "./myr";
import Analiz from "./analiz";
import Biohim from "./firsa";
import Alergen from "./1_analiz";
import Ayto from "./2_analiz";
import Bacterii from "./3_analiz";
import Gemo from "./4_analiz";
import Gema from "./5_analiz";
import Gene from "./6_analiz";
import Gormon from "./7_analiz";
import Infec from "./8_analiz";
import Lecar from "./9_analiz";
import Mark from "./10_analiz";
import Klin from "./11_analiz";
import Pisha from "./12_analiz";
import LastinA from "./13_analiz";
import Addresses from "./vseadd";
import Tashkent from "./Tashkent";
import Samarcand from "./Samarcand";
import Gulistan from "./4_gor";
import Angren from "./3_gor";
import Zapisi from "./zanisi";
import MyRecord from "./myrecord";
const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group>
              <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false  }} />
          </Stack.Group>
            <Stack.Screen name="Test" component={Test} />
            <Stack.Screen name="MyRecord" component={MyRecord} />
            <Stack.Screen name="Zapisi" component={Zapisi} />
            <Stack.Screen name="Angren" component={Angren} />
            <Stack.Screen name="Samarcand" component={Samarcand} />
            <Stack.Screen name="Gulistan" component={Gulistan} />
            <Stack.Screen name="Myr" component={Myr} />
            <Stack.Screen name="Analiz" component={Analiz} />
            <Stack.Screen name="Biohim" component={Biohim} />
            <Stack.Screen name="Gema" component={Gema} />
            <Stack.Screen name="Gene" component={Gene} />
            <Stack.Screen name="Gormon" component={Gormon} />
            <Stack.Screen name="Infec" component={Infec} />
            <Stack.Screen name="Alergen" component={Alergen} />
            <Stack.Screen name="Ayto" component={Ayto} />
            <Stack.Screen name="Bacterii" component={Bacterii} />
            <Stack.Screen name="Gemo" component={Gemo} />
            <Stack.Screen name="Lecar" component={Lecar} />
            <Stack.Screen name="Mark" component={Mark} />
            <Stack.Screen name="Klin" component={Klin} />
            <Stack.Screen name="Pisha" component={Pisha} />
            <Stack.Screen name="LastinA" component={LastinA} />
            <Stack.Screen name="Addresses" component={Addresses} />
            <Stack.Screen name="Tashkent" component={Tashkent} />
            

        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
