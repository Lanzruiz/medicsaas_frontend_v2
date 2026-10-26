import { lazy, Suspense } from 'react';

/// Components
import Index from "./admin/jsx";
import { connect } from 'react-redux';
import {  Outlet, Route, Routes, useLocation , useNavigate , useParams } from 'react-router-dom';
// action
import { 
  //checkAutoLogin, 
  isLogin } from './admin/services/AuthService';
import { isAuthenticated } from './admin/store/selectors/AuthSelectors';
/// Style
// import "./admin/vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./frontend/vendor/swiper/swiper-bundle.min.css";
// import "./public/css/frontend/vendor/swiper/swiper-bundle.min.css";
import "./admin/css/style.css";
import "./frontend/css/style.css";
// import "./public/css/frontend/css/frontend-style.css";
// import './frontend-style.css'


//frontend
import Layout from './frontend/components/Layout';

import Pos from './frontend/pages/Pos';
import FrontTransaction from './frontend/pages/FrontTransaction';
import FrontBooking from './frontend/pages/FrontBooking';
import FrontOrderStatus from './frontend/pages/FrontOrderStatus';
import FrontPeople from './frontend/pages/FrontPeople';
import FrontWallet from './frontend/pages/FrontWallet';
import FrontFoodItems from './frontend/pages/FrontFoodItems';
import FrontReviews from './frontend/pages/FrontReviews';
import FrontAuthentication from './frontend/pages/FrontAuthentication';
import FrontSupport from './frontend/pages/FrontSupport';
import FrontTermsConditions from './frontend/pages/FrontTermsConditions';
import FrontSettings from './frontend/pages/FrontSettings';
import FrontDashbaord from './frontend/pages/FrontDashbaord';
import FrontLogin from './frontend/pages/FrontLogin';
//frontend end

const SignUp = lazy(() => import('./admin/jsx/pages/Registration'));
const ForgotPassword = lazy(() => import('./admin/jsx/pages/ForgotPassword'));
const Login = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./admin/jsx/pages/Login')), 500);
  });
});



function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
	
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

function App (props) {
    // const dispatch = useDispatch();
	  // const navigate = useNavigate();
    // useEffect(() => {
    //    checkAutoLogin(dispatch, navigate);
    // }, []);
    
    const location = useLocation();
      let currentPath = location.pathname;
      currentPath = currentPath.replace('/', '');
      currentPath = currentPath.replace('/\\/g', '');
   
  
      let pagesList = ['','front-dashboard',
        'front-transactions','front-booking','front-orders_status','front-people',
        'front-wallet','front-food-items','front-reviews','front-authentication',
        'front-support','front-terms_conditions','front-setting'
    ];
  
      let cssId = document.getElementById('MainStyleSheet');
      let currentCSSPath = cssId.getAttribute('href');
  
      let frontendCSSPath = '/react/demo/css/frontend/css/frontend-style.css';
      let adminCSSPath = '/react/demo/css/admin/css/admin-style.css';
      
      
      if(pagesList.indexOf(currentPath) > -1){
        if(currentCSSPath != frontendCSSPath){
          cssId.setAttribute('href',frontendCSSPath);
        }
      }else if(currentCSSPath != adminCSSPath){
        cssId.setAttribute('href',adminCSSPath);
      }

    let routeblog = (         
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/page-register' element={<SignUp />} />
        <Route path='/page-forgot-password' element={<ForgotPassword />} />
        <Route  element={<FrontLayout />} >   
          <Route path='/' element={<Pos />} />
          <Route path='/front-dashboard' element={<FrontDashbaord />} />
          <Route path='/front-transactions' element={<FrontTransaction />} />
          <Route path='/front-booking' element={<FrontBooking />} />
          <Route path='/front-orders_status' element={<FrontOrderStatus />} />
          <Route path='/front-people' element={<FrontPeople />} />
          <Route path='/front-wallet' element={<FrontWallet />} />
          <Route path='/front-food-items' element={<FrontFoodItems />} />
          <Route path='/front-reviews' element={<FrontReviews />} />
          <Route path='/front-authentication' element={<FrontAuthentication />} />
          <Route path='/front-support' element={<FrontSupport />} />
          <Route path='/front-terms_conditions' element={<FrontTermsConditions />} />
          <Route path='/front-setting' element={<FrontSettings />} />
        </Route>  
        <Route path='/front-login' element={<FrontLogin />} />
        <Route path='/*' replace element={<Login />} />  
      </Routes> 
    );
    if (isLogin()) {
    // if (props.isAuthenticated) {
		return (
			<>
          <Suspense fallback={
              <div id="preloader">
                  <div className="sk-three-bounce">
                      <div className="sk-child sk-bounce1"></div>
                      <div className="sk-child sk-bounce2"></div>
                      <div className="sk-child sk-bounce3"></div>
                  </div>
              </div>  
              }
          >
            <Index exact/> 
          </Suspense>
      </>
  );
	
	}else{
		return (
			<div className="vh-100">
            <Suspense fallback={
                <div id="preloader">
                    <div className="sk-three-bounce">
                        <div className="sk-child sk-bounce1"></div>
                        <div className="sk-child sk-bounce2"></div>
                        <div className="sk-child sk-bounce3"></div>
                    </div>
                </div>
              }
            >
              {routeblog}
            </Suspense>
			</div>
		);
	}
};

function FrontLayout() {
  return(
    <>
      <div className="overflow-unset">
          <Layout />
          <Outlet />
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state),
    };
};

export default withRouter(connect(mapStateToProps)(App)); 