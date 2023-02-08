import { Canvas } from "@shopstory/core/react";
import { shopstoryConfig } from "../shopstory/config";
import { DemoShopstoryProvider } from "../shopstory/provider";

const ShopstoryCanvasPage = () => {
  return <DemoShopstoryProvider>
    <Canvas config={shopstoryConfig} />
  </DemoShopstoryProvider>
}

export default ShopstoryCanvasPage