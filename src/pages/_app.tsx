import '../../styles.scss';
import '../assets/css/global.css';
import Layout from '../component/layout';
import {useState} from "react";
import {Provider} from 'react-redux';
import store from '../redux/store';

const MyApp = ({Component, pageProps}) => {
    const [title, setTitle] = useState('Null ');

    return (
        <Provider store={store}>
            <Layout title={title}>
                <Component {...pageProps} updateFormData={setTitle}/>
            </Layout>
        </Provider>
    )
}


MyApp.getInitialProps = async function ({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    //Anything returned here can be accessed by the client
    return {pageProps: pageProps};
}
export default MyApp;
