import React from 'react'
import { Menu } from "@headlessui/react";
import { Popover } from "@headlessui/react";

const Test = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Menu as="div" className="relative">
        <Menu.Button>More</Menu.Button>
        <Menu.Items as='div' className="flex flex-col absolute z-10 -translate-x-[40%] border-2 border-purple-400 w-[226px] items-center">
          <Menu.Item>
            <a href="">account</a>
          </Menu.Item>
          <Menu.Item>
            <a href="">Documentation</a>
          </Menu.Item>
          
        </Menu.Items>
      </Menu>
    </div>
  );
}

export default Test





{/* <Popover className="relative">
        <Popover.Button className="focus:bg-white">Solutions</Popover.Button>

        <div className="">
          <Popover.Panel className="absolute z-10 -translate-x-[40%] max-w-[246px] w-full  rounded-md border-2 border-purple-400">
            <div className="flex flex-col gap-2 items-center">
              <a href="/analytics">Analytics</a>
              <a href="/engagement">Engagement</a>
              <a href="/security">Security</a>
              <a href="/integrations">Integrations</a>
            </div>

            <img src="/solutions.jpg" alt="" />
          </Popover.Panel>
        </div>
      </Popover> */}