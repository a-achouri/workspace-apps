import React, { useState } from 'react'
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
function AppsIndex() {

    const GridLayout = WidthProvider(Responsive)
    
    const [addRemvItems, setAddRemvItems] = useState([])

    const addItems = () => {
        const addItem: any = [...addRemvItems, []]
        setAddRemvItems(addItem)
    }

    const removeItems = (i:any) => {
        const removeItem:any =[...addRemvItems]
        removeItem.splice(i,1)
        setAddRemvItems(removeItem)
    }

    // const handleRemove = (id:any) => {
    //     const newList = addRemvItems.filter((item) => item !== id);
    //     setAddRemvItems(newList);
    //   }

    // const itemsChange = (itemChange:any,i:any) => {
    //     const divValue:any = [...addRemvItems]
    //     divValue[i]= itemChange.target.value
    //     setAddRemvItems(divValue)
    // }

    
    const layout = [
        { i: "1", x: 0, y: 0, w: 1, h: 1 },
        { i: "2", x: 1, y: 0, w: 1, h: 1 },
        { i: "3", x: 2, y: 0, w: 1, h: 1 },
        { i: "4", x: 3, y: 0, w: 1, h: 1 },
        { i: "5", x: 4, y: 0, w: 1, h: 1 }
      ]; 
      


    return (
        <>
            <button className='bg-[#a38e81]' onClick={() => addItems()} >add</button>

            <GridLayout
                className="layout  grid-cols-4 "
                layouts={{ lg: layout }}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 4, md: 10, sm: 6, xs: 4, xxs: 2 }}
                rowHeight={300}
                
                
                
                >

                {

                    addRemvItems.map((items, i) => {

                        return (
                            <div key={i}className='bg-[#d9dcdf]'>
                                <header className='bg-[#fafafab0]   h-7 shadow '>
                                    
                                    <div className='absolute text-sm top-1 left-2 text-[#363636]'>
                                        App 	&#10093; App{i + 1}
                                    </div>

                                    <div className='text-ls absolute right-0 
                                        cursor-pointer  w-15 h-7 px-5 py-1
                                        text-[#4b4b4b] hover:bg-[#e24862]
                                        hover:text-[#ffffff]'
                                        onClick={()=>removeItems(i)}
                                    >

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>

                                    </div>
                                </header>
                            </div>

                            
                        )

                    })

                }


            </GridLayout>


        </>
    )
}

export default AppsIndex