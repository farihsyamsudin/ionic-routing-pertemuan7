import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react";

function About(){
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Halaman About</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="ion-padding">
                    Ini Halaman About Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi cum excepturi nemo esse ad dolores deserunt iure nam, nesciunt cupiditate, beatae vero minima magni reprehenderit in commodi dignissimos ipsum impedit optio quod aut. Voluptas ut asperiores aut id blanditiis officia cum nihil esse excepturi ea, velit, accusamus enim sint magnam.
                    
                </div>
            </IonContent>
        </IonPage>
    )
}

export default About