import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./store/reducers/rootReducer";
import {Provider, useSelector} from 'react-redux';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore, createFirestoreInstance} from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase, isLoaded} from 'react-redux-firebase';
import fbConfig from "./config/fbConfig";
import firebase from 'firebase/app';


const store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase, fbConfig)
));

const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
};

function AuthIsLoaded({children}) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div><p className='center white-text'>Loading.....</p></div>;
    return <App/>
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <AuthIsLoaded>
                    {AuthIsLoaded}
                    ? </AuthIsLoaded>

            </ReactReduxFirebaseProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
