import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import strukBelanjaPertama from '../data/belanja';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Struk Belanja</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Struk Belanja</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {strukBelanjaPertama.map((e) => 
            <IonItem button routerLink={`/belanja/${e.id}`} key={e.id}>Barang Belanjaan : {e.barangBelanjaan}</IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
