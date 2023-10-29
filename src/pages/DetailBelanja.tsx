import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react";
import { useParams } from "react-router";
import strukBelanjaPertama from "../data/belanja";

interface RouteParams {
    id:string;
}

function DetailBelanja(){

    const { id } = useParams<RouteParams>()
    const detailBelanjaan = strukBelanjaPertama.find((e) => e.id.toString() === id)

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Detail Belanja : {detailBelanjaan.barangBelanjaan}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="ion-padding">
                    <IonCard color="primary">
                        <IonCardHeader>
                        <IonCardTitle>{detailBelanjaan.barangBelanjaan}</IonCardTitle>
                        <IonCardSubtitle>Id : {detailBelanjaan.id}</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>Harga : Rp.{detailBelanjaan.harga},-</IonCardContent>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default DetailBelanja