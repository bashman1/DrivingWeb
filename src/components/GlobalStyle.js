import { createGlobalStyle } from "styled-components";

const primaryColor = '0, 100%';
const blackShade = '194, 57%'
const greyish ='0, 0%';

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
}

body{
    background: hsl(${primaryColor}, 100%) !important;
    font-family: 'Baloo 2',cursive;
    overflow-x: hidden;
}
button{
    border: none;
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    background: transparent;
    transition: all 0.5s ease;
    border-radius: 0.70909rem;
    white-space: nowrap;
    
    &:hover{
        background-color: #ffcc0a;
        color: #000;
    }
}
    h2{
        font-weight: lighter;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 1.4rem
       
    }
    a{
        font-size: 1.3rem;
    }
    span{
        font-weight: bold;
        color:#23d997;
    }
    p{
        color: hsl(${primaryColor}, 80%);
        font-size: 1.3rem;
        line-height: 150%;
    }
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        column-gap: 2rem;
        width: 100%;
        margin: 0 auto;

        li{
            list-style: none;
        }
    }
    
    /* ===================================== RE-USABLE STYLES ==================================*/

    /* ------------------------------------- FONTS  ------------------------------*/
    .title{
        color: #fff;
        text-align: center;
        font-family: 'Baloo 2',cursive;
        font-size: 2rem !important;
        font-style: normal;
        font-weight: 600 !important;
        line-height: 123.2%;
    }
    .title_1{
    }
    .title_2{
        font-size: 1.5rem !important;
    }
    .text_color_gradient{
        background: linear-gradient(78deg, hsl(${primaryColor}, 25%) 0%,hsl(${primaryColor}, 25%) 100%);

        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .lm-fmt{
        font-weight: 700 !important;
    }
    .h6-sb{
        font-size: 30px !important;
        line-height: 128% !important;
    }
    .bodybig-sb {
        font-size: 20px !important;
        line-height: 140% !important;
    }
    /* ------------------------------------- PADDING DISPLAY  ------------------------------*/
    .p_1{
        padding:1rem;
    }
    .py_2{
        padding-top:2rem;
        padding-bottom:2rem;
    }
    .px_5{
        padding-right:5rem;
        padding-left:5rem;
    }
     /* ------------------------------------- MARGIN DISPLAY  ------------------------------*/
    .m_auto{
        margin: 0 auto;
    }
    .m_top_1{
        margin-top: 1rem;
    }
   
      /* ------------------------------------- Image DISPLAY  ------------------------------*/
      .img_fit{
        width:100%;
        height: 100%;
        object-fit: cover;
    }

      /* ------------------------------------- BORDER DISPLAY  ------------------------------*/
      .border_radius_sm{
        border-radius:1rem;
    }
    .border__circle{
        border-radius:50%;
    }
    .border__color_1{
        border:1px solid hsl(${primaryColor}, 25%);
    }
    
    .border__color_1_a{
        border:1px solid hsla(${primaryColor}, 25%,.5);
    }
    .border__color_2{
        border:2px solid hsl(${primaryColor}, 35%);
    }
    .border__color_3{
        border:3px solid hsl(${primaryColor}, 25%);
    }
    .border__color_4{
        border:4px solid hsl(${primaryColor}, 35%);
    }
    .border__color_5{
        border:5px solid hsl(${primaryColor}, 98%);
    }

    /* ------------------------------------- COLORS  ------------------------------*/
 
    .text__color{
        color:hsl(${primaryColor}, 25%) !important;
    }
    .text__color_95{
        color:hsla(${primaryColor}, 95%,.7) !important;
    }
    .secondary_txt_color{
        color:hsl(${primaryColor}, 98%) !important;
    }
    .primary_color{
        color:hsl(${primaryColor}, 95%);
    }
    .primary_color_75{
        color:hsl(${primaryColor}, 75%);
    }
    
    .secondary_color{
        color:hsl(${primaryColor}, 4%) !important;       
    }   
    .subheading_color{
        color:hsl(${primaryColor}, 31%) !important; 
    }
    .black_shade {
        color: hsl(${blackShade}, 22%) !important;
    }
    .greyish{
        color: hsl(${greyish}, 46%) !important;
    }
    /* ------------------------------------- BACKGROUND COLORS ------------------------------*/
    .bg_color_secondary{
        background: hsl(${primaryColor}, 4%); 
    }
    .primary_bg{
        background-color:hsl(${primaryColor}, 25%);
    }
    .bg_learnmore_section{
        background-color: hsl(${primaryColor}, 97%);
    }
    .bg_black{
        background: hsl(${primaryColor}, 0%);
    }
    .card__height{
        height: 45vh !important;
    }
    .primary_bg_95{
        background: hsl(${primaryColor}, 95%) !important;
    }
    .text_justify{
        text-align: justify !important;
    }
    .text_center{
        text-align: center !important;
    }
    .text_left{
        text-align: left !important;
    }

    .text_right{
        text-align: right !important;
    }

      /* ------------------------------------- Text Wrap DISPLAY  ------------------------------*/
      .no_wrap{
        white-space: nowrap;
      }

   /* ------------------------------------- POSITION ELEMENTS DISPLAY  ------------------------------*/
   .absolute{
       position: absolute;
      }
   
      /* ------------------------------------- FLEX DISPLAY  ------------------------------*/

    .d_flex_column{
        display: flex;
        justify-content:center;
        align-items: flex-start;
        flex-direction: column;
    }
    .d_flex_column_center{
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
    }
    .d_flex_row{
        display: flex;       
        flex-direction: row;
    }
    .flex_wrap{
        flex-wrap: wrap;
    }
    .justify_content_space_between{
        justify-content:space-between;
    }
    .flex_1{
        flex: 1;
    }

    .justify_content_center{
        justify-content:center;
    }

    .align_items_start{
        align-items: flex-start;
    }
    .align_items_end{
        align-items: flex-end;
    }
    .align_items_center{
        align-items: center;
    }

/* ------------ element width ------ */
    .w_100{
        width: 100%;
    }
    .w_80{
        width: 80%;
    }
    .w_70{
        width: 80%;
    }
    .w_60{
        width: 60%;
    }

    /* ------------ row gap ------ */
    .row_gap_1{
        row-gap: 1rem;
    }
    .row_gap_2{
        row-gap: 2rem;
    }
    .row_gap_3{
        row-gap: 3rem;
    }

     /* ------------ row gap ------ */
     .col_gap_1{
        column-gap: 1rem;
     }


    /* ------------------------------------- PADDING DISPLAY  ------------------------------*/
    .p__0{
        padding: 0 !important;
    }
    

    /* ------------------------------------- BUTTONS DISPLAY  ------------------------------*/

    .secondary_btn{       
        border: 2px solid #ffcc0a;
        color: #fff;
        text-align: center;
        font-family: "Baloo 2",cursive;
        font-size: 1.27273rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin: 0;
        padding: .5rem 4rem;
        width: 100%;
    }
    .content{
        color: #949494;         
        font-size: 1.16364rem;
        font-style: normal;
        font-weight: 400;
        line-height: 123.2%;
        width: 100%;
    }
    .primary-btn{
        justify-content: center;
        width: 40% !important;
        min-width: 80% !important;
        max-width: 80% !important;
        margin-top: 30px;
        padding: 16px;
        display: flex;
    }
    .circle{
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    background: hsl(${primaryColor}, 8%);
  }
`;

export default GlobalStyle;
