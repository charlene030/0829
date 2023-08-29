import React,{useState,useRef} from "react";
import "./shop.scss";
import Text from "./text.js";
import TextButtom from "./textButtom.js";
//<div dangerouslySetInnerHTML={{ __html: listHTML }} ></div>
let newImg = document.createElement("img");
newImg.src=".//resin_pics/ive.jpg";
//import ReactHtmlParser from 'react-html-parser'; 
//import "./product"
function Shop(){
    /*const page1 = document.getElementById('row1');
    const p1 = ReactDOM.createRoot(page1);
    p1.render(<div> 
        { ReactHtmlParser ('<h1>single</h1>') } 
        </div>);*/
    let [bu,useBu]=useState('LLLLL');
    let listHTML='';
    let listHTML2='';
    var productList=[
        {
            title: "IVE concept color keychain",fileName:"/ive.jpg",price:149,id:"001"
        },
        {
            title: "Pink shining keychain",fileName:"./ive.jpg",price:149,id:"002"
        },
        {
            title: "aespa Winter keychain",fileName:"./winter.jpg",price:159,id:"003"
        },
        {
            title: "SEVENTEEN fml keychain",fileName:"./fml.jpg",price:189,id:"004"
        },
        {
            title: "Sparkling phone keychain",fileName:"./phone.jpg",price:189,id:"005"
        },
        {
            title: "IN THE OCEAN keychain",fileName:"./sea.jpg",price:199,id:"006"
        },
        {
            title: "NewJeans phone keychain",fileName:"./nwjns.jpg",price:179,id:"007"
        },
        {
            title: "Milk tea color griptok",fileName:"./grip.jpg",price:189,id:"008"
        }
    ];
    var productList2=[
        {
            title: "Blue ribbon card holder",fileName:"bae.jpg",price:79,id:"009"
        },
        {
            title: "Blue wings card holder",fileName:"bluewings.jpg",price:79,id:"010"
        },
        {
            title: "NMIXX expérgo keychain",fileName:"nmixx.jpg",price:199,id:"011"
        },
        {
            title: "Caramel pudding keychain",fileName:"pudding.jpg",price:169,id:"012"
        },
        {
            title: "Melon soda keychain",fileName:"melon.jpg",price:189,id:"013"
        },
        {
            title: "Black ribbon card holder",fileName:"black.jpg",price:79,id:"014"
        }
    ];
    productList.forEach(renderHTML);
    //productList2.forEach(renderHTML2);
    function renderHTML(item, index) {
        return (
            <div className="col-6 col-md-4" key={item.id}>
                <div className="wrap">
                    <div className="card">
                        <img src={`.//resin_pics${item.fileName}`} alt={item.title} />
                        <div className="txt">
                            <div className="name">
                                {item.title}
                            </div>
                            <div className="price">
                                ${item.price}
                            </div>                                    
                        </div>                                    
                    </div>
                    <div className="add-cart">
                        <button className="js-add-cart" data-product-id={item.id}>ADD TO CART</button>
                    </div> 
                </div>    
            </div>
        );
    }
    return <div>
        <Text></Text>      
        <div className="container">
            <div className="product" id="product">
                Products
            </div>
            <div className="row" id="row1">
                {productList.map(renderHTML)}
            </div>
        </div>

        <div className="container" id="nextPage" style={{display:"none"}}>
            <div className="row" id="row2"></div>
        </div>
        <TextButtom></TextButtom>
        <div >{bu}</div>
        
        
        


    </div>;
}
export default Shop;