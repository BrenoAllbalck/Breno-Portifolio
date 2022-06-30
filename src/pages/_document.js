import Document, { Main, Head, NextScript, Html } from "next/document";

export default class MyDocument extends Document{
    render(){
        return(
            <Html>
             <Head>
             <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
             <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

                <script
                src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                crossorigin></script>

                <script
                src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossorigin></script>

                <script>var Alert = ReactBootstrap.Alert;</script>
             </Head>
             <body>
              <Main/>
              <NextScript/>             
              <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
                <script>
                    AOS.init();
                </script> 


             </body>            
            </Html>
        )
    }
}