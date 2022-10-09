import React from 'react';

const Products = ({ state, dispatch }) => {
    const { products, cart } = state;
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: "80%",
        }}>
            {
                products.map((prod) => (
                    <div
                        key={prod.id}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: 10,
                            border: "1px solid grey",
                            marginTop: 10,
                            width: "30%",
                            gap: 10,
                        }}>
                        <img
                            src={prod.thumbnail}
                            
                            alt={prod.title}
                            style={{
                                height: 200, objectFit: "cover",
                            }} />
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <span>{prod.title}</span>
                                <b>$ {prod.price}</b>
                            </div>
                            {
                                cart.some(p => p.id === prod.id)?
                                <button
                                onClick={()=>{
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload:prod,
                                    })
                                }}
                            
                            style={{
                                border:0,
                                borderTopRightRadius:5,
                                borderBottomRightRadius:5,
                                flexDirection:"column",
                                width:"100%",
                                backgroundColor:"#EF506A",
                                color :"white",
                                padding:10,
                            }}>REMOVE FROM CART</button>:
                            <button
                            onClick={()=>{
                                dispatch({
                                    type:"ADD_TO_CART",
                                    payload: {
                                    id: prod.id,
                                    title:prod.title,
                                    thumbnail:prod.thumbnail,
                                    qty:1,
                                    price:prod.price,
                                    }
                                })
                            }}
                            style={{
                                border:0,
                                borderTopLeftRadius:5,
                                borderBottomLeftRadius:5,
                                flexDirection:"column",
                                backgroundColor:"green",
                                color :"white",
                                width:"100%",
                                padding:10,
                            }}>ADD TO CART</button>

                            }
                            <div style={
                                {
                                    display: "flex",
                                    flexDirection: "row",
                                }
                            }>
                            
                            

                            </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Products