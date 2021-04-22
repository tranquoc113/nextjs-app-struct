import Head from "next/head";
import '../../styles.scss'
import Layout from '../component/layout';


export default function MyApp({ Component, pageProps }) {
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
            // <div>
            //     <Head>
            //         <title>New project</title>
            //         <link rel="icon" href="/favicon.ico" />
            //         <link rel="stylesheet" href="/css/global.css"/>
            //     </Head>
            //     <Component {...pageProps} />
            // </div>
    )
}
