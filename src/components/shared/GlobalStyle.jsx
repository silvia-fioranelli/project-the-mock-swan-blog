import { createGlobalStyle } from "styled-components"
import * as fonts from "../../fonts"

export default createGlobalStyle`
    body {
        margin: 0;
        background-color: lightgray;
    }
    
    @font-face {
        font-family: 'F37Bella';
        src: url(${fonts.f37bella_webfont_woff}) format('woff'),
            url(${fonts.f37bella_webfont_woff2}) format('woff2');
    }
    
    @font-face {
        font-family: 'Nolan Bold';
        src: url(${fonts.nolan_bold_woff}) format('woff'),
            url(${fonts.nolan_bold_woff2}) format('woff2');
    }
    
    @font-face {
        font-family: 'Nolan Medium';
        src: url(${fonts.nolan_medium_woff}) format('woff'),
            url(${fonts.nolan_medium_woff2}) format('woff2');
    }
    
    @font-face {
        font-family: 'PS LightFine';
        src: url(${fonts.parasupreme_lightfine_woff}) format('woff'),
            url(${fonts.parasupreme_lightfine_woff2}) format('woff2');
    }
    
    @font-face {
        font-family: 'PS RegularFine';
        src: url(${fonts.parasupreme_regularfine_woff}) format('woff'),
            url(${fonts.parasupreme_regularfine_woff2}) format('woff2');
    }

    p {
        font-family: 'Nolan Bold';
    }
`
