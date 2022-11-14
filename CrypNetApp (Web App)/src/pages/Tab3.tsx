import {
  IonPage,
  IonContent,
  IonIcon,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { logOutOutline, person } from 'ionicons/icons';
import useAuth from '../components/hook';
import { useEffect } from 'react';
import { useHistory } from 'react-router';


const Tab3: React.FC = () => {

  const { setLogin } = useAuth()

  useEffect(() => {
    setLogin(true)
  }, [])

  const history = useHistory();

  const routeChange = () => {
    let path = `/Login`;
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
                <IonIcon slot="start" icon={logOutOutline} />
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h4 className="Contract">Notifications </h4>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
