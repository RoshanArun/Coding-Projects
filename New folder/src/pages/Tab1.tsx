import {
  IonPage,
  IonContent,
  IonIcon,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar
} from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';
import useAuth from '../components/hook';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


const Tab1: React.FC = () => {
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
  const [searchText, setSearchText] = useState('');

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
              <h4 className="Contract">My Contracts : </h4>
            </IonCol>
            <IonCol>
              <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} placeholder="Search" animated></IonSearchbar>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Tab1;

