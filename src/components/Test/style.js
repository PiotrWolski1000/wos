import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 500px;
    /* background-color: lightgoldenrodyellow; */

    .box { 

        width: 100%;
        height: 500px;
        max-height: 500px;
        /* width: 880px; */
        /* height: 330px; */
        /* border-radius: .5em; */
    }

    .sunrise {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        width: 100%;
        position: absolute;  /* remove from flow so sunset is placed on top */
        background: url(${props => props.img1}) no-repeat center ;
        background-size: cover;
        box-shadow: 0 0 10px rgba(0, 0, 0, .7);
        h2 {
            color: white;
            font-size: 3rem;
            margin-right: 2rem;
            margin-bottom: 2rem;
        }
        
        &:hover:after{
            content: 'Reinigungsdienst';
            text-align: center;
            padding-top: 50px;
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 4rem;

            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: rgba(0,0,0,.5);
            transition: background-color 0.5s ease;
            /* z-index: 1; */
           background: rgba(0,0,0,0.8);
           transition: background 0.5s ease-in-out; 
        }
    }
    
    .slider {
        /* set initial width */
        width: 55%;
        overflow: hidden;
        display: inline-block;    
        /* skew container so that it has angled edge, and set up transition */
        transform: skewX(-20deg);
        transition: width 0.5s ease-in-out;
        margin-left: -130px;
           /* hide pointer events for unseen content */
        pointer-events: none;
        border-right: 10px solid #E52321;
    }

    .sunset {
        /* skew back by negative of parent’s skew so contents is upright */
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        transform: skewX(20deg);
        margin-left: 130px;/* give margin to push content away from left slanted edge*/
        background: url(${props => props.img2}) no-repeat center;
        background-size: cover;
        pointer-events: auto;    /* allow pointer events for the box */
        h2 {
            color: white;
            font-size: 3rem;
            margin-left: 2rem;
            margin-top: 2rem;
        }
        &:hover:after{
            
            text-align: center;
            padding-top: 50px;
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 4rem;
            

            content: 'Hausmeisterservice    ';
            color: white;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: rgba(0,0,0,.5);
            /* transition: background-color 0.5s ease; */
           /* background: rgba(0,0,0,0.8);
           transition: background 0.5s ease-in-out;  */
        }


    }

    .slider:hover, .slider:focus {
        width: 83%;
        
    }
    
    .sunrise:hover + .slider, .sunrise:focus + .slider { 
        
        width: 33%;
    }

`