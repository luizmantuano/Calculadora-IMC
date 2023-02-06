import { createDrawerNavigator } from '@react-navigation/drawer';
import AbaixodoPeso from '../screens/Information/Information';
import Home from '../screens/Home/Home';
import CustomDrawer from '../components/CustomDrawer';
import { DrawerParamsType, Screens } from './types';

const Drawer = createDrawerNavigator<DrawerParamsType>();

const Router = () => {
  const tintColor = (isActive: boolean) => (isActive ? '#008B8B' : '#ccc');

  

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerTintColor: '#008B8B',
        drawerActiveBackgroundColor: tintColor(true),
        drawerInactiveBackgroundColor: tintColor(false),

        drawerStyle: {
          paddingTop: 50,
          borderTopRightRadius: 30,
          borderBottomRightRadius: 30,
        },
        drawerLabelStyle: {
          color: '#F1F1F1',
          fontFamily: 'DMSans-Regular',
        },
      }}
    >
      <Drawer.Screen
        name={Screens.HOME}
        component={Home}
        options={{
          headerShown: false,
          drawerActiveBackgroundColor: '#008B8B',
        }}
      />
      <Drawer.Screen
        name={Screens.INFORMATION}
        component={AbaixodoPeso}
        options={{
          headerShown: false,
          drawerActiveBackgroundColor: '#008B8B',
        }}
      />
    </Drawer.Navigator>
  );
};

export default Router;
