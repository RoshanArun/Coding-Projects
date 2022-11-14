import {
  IonPage,
  IonHeader,
  IonContent,
  IonIcon,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
} from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {arrowBackOutline } from 'ionicons/icons';


const Login: React.FC = () => {
  const history = useHistory();

  const routeChange = () => {
    localStorage.setItem("authenticated", "true");
    let path = `/Tab1`;
    history.push(path);
  }

  const Intro = () => {
    let path = `/Intro`;
    history.push(path);
  }

  const Signup = () => {
    let path = `/Signup`;
    history.push(path);
  }
  
  const ForgotPassword = () => {
    let path = `/PasswordRecovery`;
    history.push(path);
  }


  return (
    <IonPage>
      <IonHeader>
        <h2 onClick={Intro} style={{ paddingTop: "2vh", paddingLeft: "2vh" }} > <IonIcon slot="start" icon={arrowBackOutline} /></h2>
        <IonToolbar>
          <h2 className="box" style={{ paddingTop: "5vh" }} >CrypNet</h2>
        </IonToolbar>
      </IonHeader >
      <IonContent className="ion-padding">
        <IonGrid className="box" style={{ paddingTop: "8vh" }}>
          <IonRow>
            <IonCol >
              <IonItem lines="none">
                <input type="text" className="outlineBox" placeholder="Email/Username"></input>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <input className="outlineBox" placeholder="Password"></input>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <h2 className="button2" onClick={routeChange} >Login</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h2 className="sign" onClick={Signup} style={{ paddingTop: "15vh" }} >Create an Account? Signup</h2>
              <h2 className="sign" onClick={ForgotPassword}>Recover Password</h2>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent >
    </IonPage >
  );
};
export default Login;
