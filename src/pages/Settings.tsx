import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

function Settings(){
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Halaman Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                Ini Halaman Settings
            </IonContent>
        </IonPage>
    )
}

export default Settings