import {
    IonPage,
    IonHeader,
    IonContent,
    IonIcon,
    IonButton,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
} from '@ionic/react';
import React from 'react';
import { useHistory } from "react-router-dom";
import { lockClosed, arrowBackOutline } from 'ionicons/icons';


const Signup: React.FC = () => {
    const history = useHistory();

    const routeChange = () => {
        let path = `/Login`;
        history.push(path);
    }

    const Intro = () => {
        let path = `/Intro`;
        history.push(path);
    }

    return (
        <IonPage>
            <IonHeader>
                <h2 onClick={Intro} style={{ paddingTop: "2vh", paddingLeft: "2vh" }} > <IonIcon slot="start" icon={arrowBackOutline} /></h2>
                <IonToolbar>
                    <h2 className="box" style={{ paddingTop: "5vh" }} >CrypNet</h2>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem lines="none">
                                <input type="text" className="outlineBox" placeholder="Name"></input>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem lines="none">
                                <input type="text" className="outlineBox" placeholder="Email"></input>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem lines="none">
                                <input type="text" className="outlineBox" placeholder="Username"></input>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem lines="none">
                                <input type="text" className="outlineBox" placeholder="Password"></input>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <IonButton onClick={routeChange}>
                                <IonIcon slot="start" icon={lockClosed} />
                                Sign Up
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-center">
                            <h2 onClick={routeChange} className="sign" style={{ paddingTop: "15vh" }} >Already have a Account? Login</h2>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};
export default Signup;
