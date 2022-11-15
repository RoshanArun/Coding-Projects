import {
  IonPage,
  IonContent,
  IonIcon,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
} from '@ionic/react';
import { arrowBackOutline, lockClosed, logOutOutline, person } from 'ionicons/icons';
import useAuth from '../components/hook';
import { useEffect } from 'react';
import { useHistory } from 'react-router';


const Tab2: React.FC = () => {

  const { setLogin } = useAuth()

  useEffect(() => {
    setLogin(true)
  }, [])

  const history = useHistory();

  const routeChange = () => {
    let path = `/Tab1`;
    history.push(path);
    setLogin(false)
  }

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-left">
              <h1>CrypNet</h1>
            </IonCol >
            <IonCol>
              <IonButton style={{ paddingTop: "3vh", paddingLeft: "15vh" }} color="light" onClick={routeChange}>
                <IonIcon slot="start" icon={arrowBackOutline} />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h4 className="Contract">Create Contract : </h4>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <input type="text" className="outlineBox" placeholder="Name of Contract"></input>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <h2 className="button3" onClick={routeChange} >Add User</h2>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
