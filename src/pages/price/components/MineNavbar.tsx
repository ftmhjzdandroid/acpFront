import React from 'react'
import { ArrowDown, ArrowRotateLeft, ArrowUp, Sort } from "iconsax-react";
import { Typography } from "../../../components/atoms";
import { ArrowBtn } from "../../../components/molecules/arrow-botton";
import { PopoverDialog } from "../../../components/molecules";
import Filter from './Filter';
const MineNavbar = () => {
    const saya = (e:string)=>{
            console.log('====================================');
            console.log(e);
            console.log('====================================');
          }
          return (
            <div className="h-12 my-3 gap-2 w-full flex text-[#54575B] items-center justify-end">
              <div className="flex gap-3">
                <ArrowBtn
                  borderColo="border-brand-800"
                  children={<ArrowUp className="text-brand-800" />}
                  className="p-1"
                />
                <ArrowBtn
                  children={<ArrowDown className="text-neutral-400" />}
                  className="p-1 border-neutral-200"
                />
              </div>
              <div className="flex gap-2 text-[#3949AB] items-center justify-center ">
                <ArrowRotateLeft
                  size="30"
                  className="cursor-pointer text-neutral-800"
                />
        
                <PopoverDialog
                  renders={() => <Filter saya={saya}/>}
                  keysLabel="label"
                  list={[{ id: 1, label: "jjjj" }]}
                  position="bottom"
                  size='w-80'
                  children={
                    <div className="flex items-center rounded-md border text-neutral-800 p-1">
                      <Sort className="text-neutral-800" />
                      <Typography type="p" className="m-2">
                        فیلترها
                      </Typography>
                    </div>
                  }
                />
              </div>
            </div>
          );
        }
        


export default MineNavbar