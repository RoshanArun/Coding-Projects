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
} from '@ionic/react';

import React from 'react';
import { useHistory } from "react-router-dom";
import { lockClosed, lockOpen } from 'ionicons/icons';
import './Crypnet.css';


const Intro: React.FC = () => {
  const history = useHistory();

  const Login = () => {
    let path = `/Login`;
    history.push(path);
  }

  const Signup = () => {
    let path = `/Signup`;
    history.push(path);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <h2 className="box" style={{ paddingTop: "15vh" }} >CrypNet</h2>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid style={{ paddingTop: "35vh" }} >
          <IonRow>
            <IonCol className="ion-text-center">
              <h2 className="button1" onClick={Login} >Login</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton color="light" onClick={Signup}>
                <IonIcon slot="start" icon={lockClosed} />
                SignUp
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Intro;
