@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
:root{
    --tenne-tawny: #f95700;
    --tenne-tawny-dark:#f95700;
}
body{
    font-weight: 300;
    font-size: 1.05rem;
    line-height: 1.6;
    font-family: 'Poppins', sans-serif;    
}
.my-button {  
    display: inline-block;
    outline: 0;
    border: 0;
    position: absolute;
    top: 50%;
    right: 45%;   
    cursor: pointer;
    background: #0000;
    border: orange;
    border-width: 1px;
    color: #FFFFFF;
    border-radius: 8px;
    padding: 14px 24px 16px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    transition: transform 200ms,background 200ms;
    :hover{
        transform: translateY(-2px);
    }
}

.my-button:hover{
background-color: #000000;
color: orange;
transform: translateY(-2px); }

.aboutbtn:hover {
    background-color: #000000;
    color: orange;
    transform: translateY(-2px);
  }
.aboutbtn{
    top:0;
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    background: #000000;
    color: #FFFFFF;
    border-radius: 8px;
    padding: 14px 24px 16px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    transition: background 0.5s ease-out;
 
}
.btn{
    background-color: aqua;
    font-family: inherit;
    cursor: pointer;
    font-size
    outline: 0;
    font-size: 16px;
}

.box {
    background-image: url('frying-pan-empty-with-various-spices-black-table_1220-561.avif');
    background-size: cover;
    width: 200px;
    height: 200px;
  }
  
  .box:hover {
    background-image: url('frying-pan-empty-with-various-spices-black-table_1220-561.avif');
  }
.text{
    opacity: 0.8;
}
.title{
    font-size: 2rem;
    margin-bottom: 1rem;
}

.container{
    min-height: 100vh;
}
.meal-wrapper{
    color: #f0f0f0;
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
   
    text-align: center;
}
.meal-search{
    margin: 2rem 0;
}
.meal-search cite{
    font-size: 1rem;
}
.meal-search-box{
    margin: 1.2rem 0;
    display: flex;
    align-items: stretch;
}
.search-control,
.search-btn{
    width: 100%;
}
.search-control{
    padding: 0 1rem;
    font-size: 1.1rem;
    font-family: inherit;
    outline: 0;
    border: 1px solid var(--tenne-tawny);
    color: var(--tenne-tawny);
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
}
.search-control::placeholder{
    color: var(--tenne-tawny);
}
.search-btn{
    width: 55px;
    height: 55px;
    font-size: 1.8rem;
    background: var(--tenne-tawny);
    color: #fff;
    border: none;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    transition: all 0.4s linear;
    -webkit-transition: all 0.4s linear;
    -moz-transition: all 0.4s linear;
    -ms-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
}
.search-btn:hover{
    background: var(--tenne-tawny-dark);
}
.meal-result{
    margin-top: 4rem;
}
#meal{
    margin: 2.4rem 0;
}
.meal-item{
    border-radius: 1rem;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem;
    -ms-border-radius: 1rem;
    -o-border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);
    margin: 2rem 0;
}
.meal-img img{
    width: 100%;
    display: block;
}
.meal-name{
    padding: 1.5rem 0.5rem;
}
.meal-name h3{
    font-size: 1.4rem;
}
.recipe-btn{
    text-decoration: none;
    color: #fff;
    background: var(--tenne-tawny);
    font-weight: 500;
    font-size: 1.1rem;
    padding: 0.75rem 0;
    display: block;
    width: 175px;
    margin: 1rem auto;
    border-radius: 2rem;
    -webkit-border-radius: 2rem;
    -moz-border-radius: 2rem;
    -ms-border-radius: 2rem;
    -o-border-radius: 2rem;
    transition: all 0.4s linear;
    -webkit-transition: all 0.4s linear;
    -moz-transition: all 0.4s linear;
    -ms-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
}
.recipe-btn:hover{
    background: var(--tenne-tawny-dark);
}

/* meal details */
.meal-details{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    color: #fff;
    background: var(--tenne-tawny);
    border-radius: 1rem;
    -webkit-border-radius: 1rem;
    -moz-border-radius: 1rem;
    -ms-border-radius: 1rem;
    -o-border-radius: 1rem;
    width: 90%;
    height: 90%;
    overflow-y: scroll;
    display: none;
    padding: 2rem 0;
}
.meal-details::-webkit-scrollbar{
    width: 10px;
}
.meal-details::-webkit-scrollbar-thumb{
    background: #f0f0f0;
    border-radius: 2rem;
    -webkit-border-radius: 2rem;
    -moz-border-radius: 2rem;
    -ms-border-radius: 2rem;
    -o-border-radius: 2rem;
}


.showRecipe{
    display: block;
}

.meal-details-content{
    margin: 2rem;
}
.meal-details-content p:not(.recipe-category){
    padding: 1rem 0;
}
.recipe-close-btn{
    position: absolute;
    right: 2rem;
    top: 2rem;
    font-size: 1.8rem;
    background: #fff;
    border: none;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
}
.recipe-title{
    letter-spacing: 1px;
    padding-bottom: 1rem;
}
.recipe-category{
    background: #fff;
    font-weight: 600;
    color: var(--tenne-tawny);
    display: inline-block;
    padding: 0.2rem 0.5rem;
    border-radius: 0.3rem;
    -webkit-border-radius: 0.3rem;
    -moz-border-radius: 0.3rem;
    -ms-border-radius: 0.3rem;
    -o-border-radius: 0.3rem;
}
.recipe-category{
    background: #fff;
    font-weight: 600;
    color: var(--tenne-tawny);
    display: inline-block;
    padding: 0.2rem 0.5rem;
    border-radius: 0.3rem;
    -webkit-border-radius: 0.3rem;
    -moz-border-radius: 0.3rem;
    -ms-border-radius: 0.3rem;
    -o-border-radius: 0.3rem;
}
.recipe-instruct{
    padding: 1rem 0;
}
.recipe-meal-img img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    margin: 0 auto;
    display: block;
}
.recipe-link{
    margin: 1.4rem 0;
}
.recipe-link a{
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    transition: all 0.4s linear;
    -webkit-transition: all 0.4s linear;
    -moz-transition: all 0.4s linear;
    -ms-transition: all 0.4s linear;
    -o-transition: all 0.4s linear;
}
.recipe-link a:hover{
    opacity: 0.8;
}


/*  */
.notFound{
    grid-template-columns: 1fr!important;
    color: var(--tenne-tawny);
    font-size: 1.8rem;
    font-weight: 600;
    width: 100%;
}

@media screen and (min-width: 600px){
    .meal-search-box{
        width: 540px;
        margin-left: auto;
        margin-right: auto;
    }
}

@media screen and (min-width: 768px){
    #meal{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
    .meal-item{
        margin: 0;
    }
    .meal-details{
        width: 700px;
    }
}

@media screen and (min-width: 992px){
    #meal{
        grid-template-columns: repeat(3, 1fr);
    }
}
