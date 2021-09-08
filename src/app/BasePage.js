import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
// import {Revieewlist} from '../_metronic/_partials/widgets/lists/Revieewlist.js'
import { CampaignPage } from "./pages/ReviewCampagin";
import {CreatePage} from './pages/CreateCampagin'
import {EditPage} from './pages/Editpage';
import { VideoPage} from './pages/Videopage'
const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);
const UserProfilepage = lazy(() =>
  import("./modules/UserProfile/UserProfilePage")
);
// const  Revieewlist =lazy(()=>{
//   import( "./pages/Revieewlist")
// )
export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) 
  // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          // /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path='/campaigns' component={CampaignPage}/>
        <Route path='/editreview' component={EditPage} />
        <Route path='/create-campaign' component={CreatePage} />
        <Route path="/videos" component={VideoPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/my-page" component={MyPage} />
        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Route path="/user-profile" component={UserProfilepage} />
        
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
