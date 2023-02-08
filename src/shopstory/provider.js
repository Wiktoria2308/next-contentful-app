import {
    ShopstoryProvider,
  } from "@shopstory/core/react";
import { Card } from '../components/Card'
import { CustomComponent } from "../components/CustomComponent";
  
  export const DemoShopstoryProvider = ({ children }) => {
    return (
      <ShopstoryProvider components={{Card, CustomComponent}}>
        {children}
      </ShopstoryProvider>
    );
  };