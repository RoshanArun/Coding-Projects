import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { square, home, add, notifications, person } from 'ionicons/icons';

import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Login from './pages/Login';
import Intro from './pages/Intro';
import Signup from './pages/Signup';
import PasswordRecovery from './pages/PasswordRecovery';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import useAuth from './components/hook';

setupIonicReact();

const App: React.FC = () => {
  const { loggedIn } = useAuth()
  console.log(loggedIn, 'YOPPPPP')


  const tabsIfAuthed = () => {
    return (
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
            </Route>
          <Route path="/tab4">
            <Tab4 />
          </Route>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1" >
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={add} />
            <IonLabel>Create Contract</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={notifications} />
            <IonLabel>Notifications</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    )
  }

  const tabsIfNotAuthed = () => {
    return (
      <IonRouterOutlet>
        <Route exact path="/tab1">
          <Tab1 />
        </Route>
        <Route exact path="/tab2">
          <Tab2 />
        </Route>
        <Route path="/tab3">
          <Tab3 />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/intro">
          <Intro />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/passwordrecovery">
          <PasswordRecovery />
        </Route>
        <Route exact path="/">
          <Redirect to="/intro" />
        </Route>
      </IonRouterOutlet>
    )
  }

   const renderTabs = () => {
     if(loggedIn === undefined || loggedIn === false){
       return tabsIfNotAuthed()
     }

     return tabsIfAuthed()
   }

  return (
    <IonApp>
      <IonReactRouter>
        {renderTabs()}
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
