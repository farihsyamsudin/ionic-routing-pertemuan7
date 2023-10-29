import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import About from "./pages/Aboout";
import { home as homeIcon, settings as settingsIcon, bag as bagIcon, home } from "ionicons/icons";
import DetailBelanja from "./pages/DetailBelanja";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/belanja/:id">
            <DetailBelanja/>
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="/home" href="/home">
            <IonIcon icon={homeIcon}/>
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="/settings" href="/settings">
            <IonIcon icon={settingsIcon}/>
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
          <IonTabButton tab="/about" href="/about">
            <IonIcon icon={bagIcon}/>
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
