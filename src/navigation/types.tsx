import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}

export type RootStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    TaskDetail: any;
    RepeatItem: undefined;
    EndRepeat: undefined;
    NewCategory: undefined;
    EditCategory: any;
    TaskList: undefined;
    CreateNoteScreen: undefined;
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
    RootStackParamList,
    Screen
>;

export type RootTabParamList = {
    HomeTab: undefined;
    CategoriesTab: undefined;
    TaskTab: undefined;
    SettingTab: undefined;
    DashboardTab: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
>;