import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    useIonRouter,
    IonButton,
    IonSplitPane,
    IonMenu,
    IonRouterOutlet,
    IonMenuToggle,
    IonItem,
    IonIcon,
} from '@ionic/react'
import { home, logOutOutline, star } from 'ionicons/icons'
import { Redirect, Route } from 'react-router'
import Details from '../pages/Details/Details'
import Page1 from '../pages/Page1/Page1'
import Page2 from '../pages/Page2/Page2'

const Menu: React.FC = () => {

    const paths = [

        { name: 'Page1', url: '/app/page1', icon: home },
        { name: 'Page 2', url: '/app/page2', icon: star },
    ]

    return (
        <IonPage>
            <IonSplitPane contentId="main">
                <IonMenu contentId="main">
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonContent>
                        {paths.map((item, index) => (
                            <IonMenuToggle key={index}>
                                <IonItem routerLink={item.url} routerDirection="none">
                                    <IonIcon icon={item.icon} slot="start"></IonIcon>
                                    {item.name}
                                </IonItem>
                            </IonMenuToggle>
                        ))}
                        <IonButton
                            routerLink="/"
                            routerDirection="back"
                            expand="full"
                        >
                            <IonIcon icon={logOutOutline} slot="start"></IonIcon>
                            Logout
                        </IonButton>
                    </IonContent>
                </IonMenu>

                <IonRouterOutlet id="main">
                    <Route exact path="/app/page1" component={Page1} />
                    <Route exact path="/app/page1/details" component={Details} />
                    <Route exact path="/app/page2" component={Page2} />
                    <Route exact path="/app">
                        <Redirect to="/app/page1" />
                    </Route>
                </IonRouterOutlet>
            </IonSplitPane>
        </IonPage>
    )
}

export default Menu