import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../screens/Profile";
import Logout from "../screens/Logout";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Tela Inicial" component={HomeScreen} />
            <Drawer.Screen name="Perfil" component={Profile} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;