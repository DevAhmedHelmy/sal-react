import { ComponentStyleConfig } from "@chakra-ui/react"

const tabs: ComponentStyleConfig={
    baseStyle:{},
    sizes:{},
    variants:{ 
    "solid-rounded-two-tabs":(props)=>{
        
        return{
             ...props.theme.components.Tabs.variants?.["solid-rounded"](props),    

        tab:{
             ...props.theme.components.Tabs.variants?.["solid-rounded"](props).tab,    
            px:4,
            boxShadow:'md',
            fontWeight:"normal",
            bg:"white",
            color:"primary.500",
            ":first-of-type":{
              me:"-40px",
              pe:"45px"
            },
            ":nth-of-type(2)":{
                ps:"45px"
            },
            "_selected":{
                bg:"primary.500",
                color:"white",
                zIndex:2,
                ":first-of-type":{
                    pe:"4"
                },
                ":nth-of-type(2)":{
                    ps:"4"
                }
            }
        }
    }
}
},
    defaultProps:{},
}

export default tabs