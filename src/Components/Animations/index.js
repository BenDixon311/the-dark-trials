import React, { useState } from 'react';
import { Frame } from 'framer'




export default function onLoad() {
  

      const list = {
        hidden: { opacity: 0, x: 0, y: "50%" },
        visible: { opacity: 1, x: "100%", transition: { duration: 2 } },
      }

    return (
        <div>
           <Frame
            variants={list}
            initial="hidden"
            animate="visible"
            >
            {
                // Container frame to position the text in the center
            }
            <Frame width={"100%"} height={"auto"} center>
                {
                    // Mask frame for top line
                }
                <Frame
                    width={"100%"}
                    height={26 * 1.2}
                    y={-26 * 1.2}
                    background={""}
                    overflow={ "hidden" }
                >
                    {
                        // Frame for top line
                    }
                    <Frame
                        size={"100%"}
                        background={""}
                        style={{
                            fontFamily: "Montserrat, Work Sans, sans-serif",
                            fontWeight: "bold",
                            letterSpacing: "-0.04em",
                            fontSize: 26,
                            color: "#FFF",
                        }}
                        initial={{ y: 26 * 1.2 }}
                        animate={{ y: 0}}
                        transition={{ ease: "easeOut", duration: 1 }}

                    >
                       The Dark
                    </Frame>
                </Frame>
                {
                    // Mask frame for bottom line
                }
                <Frame width={"100%"} height={26 * 1.2} y={0} background={""} overflow={ "hidden" }>
                    {
                        // Frame for bottom line
                    }
                    <Frame
                        size={"100%"}
                        background={""}
                        style={{
                            fontFamily: "Montserrat, Work Sans, sans-serif",
                            fontWeight: "bold",
                            letterSpacing: "-0.04em",
                            fontSize: 26,
                            color: "#FFF",
                        }}
                        initial={{ y: -26 * 1.2 }}
                        animate={{ y: 0 }}
                        transition={{
                            ease: "easeOut",
                            duration: 3.2,
                        }}
                    >
                       Trials
                    </Frame>
                </Frame>
            </Frame>
        </Frame>
          
        </div>

    )
}